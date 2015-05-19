module.exports = function(Plan) {

	Plan.observe('before delete', function (ctx, next) {

		//delete all canvas item in this module
		var CanvasItem = ctx.Model.app.models.CanvasItem;

		CanvasItem.find({
			where: {
				planId: ctx.where.id
			}
		}, function (err, items) {
			items.forEach(function (item) {
				CanvasItem.destroyById(item.id, function () {

				});
			});
		});

		//TODO: for document wiki, delete all pages in this module (=document)

		next();
	});

	//when creating a new docWiki module, and a template is specified: copy
	//the pages from the template
	Plan.observe('after save', function(ctx, next) {

		var loopback = require('loopback');
		var Page = loopback.findModel('Page');
		var db = Plan.dataSource.connector.db;

		try {

			if (ctx.isNewInstance) {

				if (ctx.instance.type == 'docwiki' && ctx.instance.templateId && ctx.instance.templateId.length>0) {
					console.log('copy from template ' + ctx.instance.templateId);
					
					copyPages(Page, ctx.instance.templateId, ctx.instance.id, 
						ctx.instance.title, db, null);

				}

			}
		} catch (err) {
			console.log(err);
		}
		  
		next();

	});

	/*
	 * Remote method to copy a plan: copyies the plan document, as well as any
	 * related pages.
	 *
	 * @author Mark Leusink
	 */
	Plan.copy = function(planId, cb) {

		var loopback = require('loopback');
		var Page = loopback.findModel('Page');
		var db = Plan.dataSource.connector.db;

		//console.log('copying the plan with id ' + planId + '...');

		Plan.findById( planId, function(err, plan) {

			if (err) {
				console.error(err);
			}

			copyDocument(Plan, plan, Page, db, cb);

		});

	};

	//register the remote method
	Plan.remoteMethod(
		'copy',
		{
			'accepts': [
   				{arg: 'planId', type: 'string', required: true}
   			],
   			'returns': {arg: 'title', type: 'string'},
			'description' : 'Create a copy of a plan'
		}
	);

};

function copyDocument(model, plan, Page, db, cb) {

	plan = plan.toObject();

	var sourceDocId = plan.id.toString();		//id is an object, need to have a string to use it in a 'where' clause

	//update properties for a new plan
	delete plan['id'];

	if (plan.title.indexOf('Another copy of') === 0)  {
		//leave the title
	} else if (plan.title.indexOf('Copy of') === 0) {
		plan.title = plan.title.replace('Copy of', 'Another copy of');
	} else {
		plan.title = 'Copy of ' + plan.title;
	}

	plan.created = new Date();
	plan.updated = new Date();

	model.create(plan, function(err, planCopy) {
		if (err) {
			console.err(err);
		}

		var targetDocId = planCopy.id.toString();
		var newTitle = planCopy.title;

		copyPages(Page, sourceDocId, targetDocId, newTitle, db, cb);

	});


}

/*
 * Finds all pages belonging to the document with the specified sourceDocId,
 * copy them and attach to the specified document.
 *
 * @param cb optional callback function that will be executed after copying
 *
 * @author Mark Leusink
 *
 * @param Page 	Page model from loopback
 * @param sourceDocId	ID of the document from which to copy all pages
 * @param targetDocId	ID of the document to give all copied pages
 * @param db 			mongo db object
 * @param cb (optional) callback function to execute
 * 

 */
function copyPages(Page, sourceDocId, targetDocId, newTitle, db, cb) {

	var loopback = require('loopback');
	var mongo = require('mongodb');
	var Grid = require('gridfs-stream');

	var gfs = Grid(db, mongo);

	Page.find({
		where: {
			documentId : sourceDocId
		}
	}, function (err, items) {

		if (err) {
			console.error(err);
		}

		//loop through all pages found
		items.forEach(function (item) {

			//we need to have it as an object
			item = item.toObject();

			var sourcePageId = item.id;

			//remove the id: we let the system create a new one
			delete item['id'];
			item.created = new Date();
			item.updated = new Date();

			//set the parent (document) id to the newly created document
			item.documentId = targetDocId;

			//clear comments & signatures
			item.comments = [];
			item.signatures = [];

			Page.create(item, function(err, pageCopy) {

				updateAttachedFiles(gfs, mongo, sourcePageId, pageCopy.id );

			});

		});

		if (cb != null) {
			cb(null, newTitle);
		}

	});


}

/*
 * Search for attached files to a specific document,
 * for every file found, add the targetPageId to the list
 * of parent documents
 * 
 * @author Mark Leusink
 */
function updateAttachedFiles(gfs, mongo, sourcePageId, targetPageId) {
	
	gfs.files.find({ 'metadata.parentIds' : mongo.ObjectID(sourcePageId) }).toArray(function (err, files) {

	    if (err) {
	    	throw(err);
	    }

	    if (files.length > 0) {

	    	for (var i=0; i<files.length; i++) {
	    		
	    		//add a parent id to the files' metadata (as Mongo Object ID)
	    		gfs.files.update(
	    			{ _id : files[i]._id },
	    			{ $push : { 'metadata.parentIds' : targetPageId } }
	    		);
	    	}
	    }

	});

}
