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

	/*
	 * Remote method to copy a plan: copyies the plan document, as well as any
	 * related pages.
	 *
	 * @author Mark Leusink
	 */
	Plan.copy = function(planId, cb) {

		var loopback = require('loopback');
		var Page = loopback.findModel('Page');

		//console.log('copying the plan with id ' + planId + '...');

		Plan.findById( planId, function(err, plan) {

			if (err) {
				console.error(err);
			}

			copyDocument(Plan, plan, Page, cb);

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

function copyDocument(model, plan, Page, cb) {

	plan = plan.toObject();

	var documentId = plan.id.toString();		//id is an object, need to have a string to use it in a 'where' clause

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

		var planCopyId = planCopy.id.toString();

		// find all pages in this document, copy them and relate to correct (new) document
		Page.find({
				where: {
					documentId : documentId
				}
			}, function (err, items) {

				if (err) {
					console.error(err);
				}

				//loop through all pages found
				items.forEach(function (item) {

					//we need to have it as an object
					item = item.toObject();

					//remove the id: we let the system create a new one
					delete item['id'];
					item.created = new Date();
					item.updated = new Date();

					//set the parent (document) id to the newly created document
					item.documentId = planCopyId;

					Page.create(item, function(err, pageCopy) {
						//console.log('copied page', pageCopy);
					});

				});

				cb(null, planCopy.title);

			});

	});


}
