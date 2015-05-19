module.exports = function(Page) {

	/*
	 * Remote method to sign a page: adds the current user & timestamp to a list of signers on the page
	 * related pages.
	 *
	 * @author Mark Leusink
	 */
	Page.sign = function(pageId, userName, cb) {

		var loopback = require('loopback');
		//var Signature = loopback.findModel('Signature');

		Page.findById( pageId, function(err, page) {

			if (err) {
				console.error(err);
			}

			//TODO: get current user here...
			page.signaturesRel.create({ created : new Date(), createdBy : userName}, function(err, signature) {
			});

			cb(null);

		});

	};

	//register the remote method
	Page.remoteMethod(
		'sign',
		{
			'accepts': [
   				{arg: 'pageId', type: 'string', required: true},
   				{arg: 'userName', type: 'string', required: true}
   			],
   			'returns': {arg: 'message', type: 'string'},
			'description' : 'Add a signature to a page'
		}
	);

	/*
	 * Create a new version of a page in the DocumentWiki
	 *
	 * @author Mark Leusink
	 */
	Page.createNewVersion = function(pageId, cb) {

		var loopback = require('loopback');

		var mongo = require('mongodb');
		var Grid = require('gridfs-stream');
		var db = Page.dataSource.connector.db;

		var gfs = Grid(db, mongo);

		//find the page
		Page.findById( pageId, function(err, page) {

			try {

				if (err) {
					console.error(err);
				}

				var pageCopy = page.toObject();		//need to do this to be able to manipulate it correctly
													//(cannot remove 'id' if we don't)
				
				//remove the id: we let the system create a new one
				delete pageCopy['id'];
				pageCopy.created = new Date();
				pageCopy.updated = new Date();
				pageCopy.version = page.version + 1;

				//clear all signatures & comments
				pageCopy.comments = [];
				pageCopy.signatures = [];

				//copy the page
				Page.create(pageCopy, function(err, pageCopied) {

					if (err) {
						console.error(err);
					}

					updateAttachedFiles(gfs, mongo, pageId, pageCopied.id );

					//unmark the current page as current, send back the id of the copied page
					page.updateAttribute( 'currentVersion', false, function(err, instance) {

						if (err) {
							console.error(err);
						}

						cb(null, pageCopied.id);
					});
					
				});

			} catch (e) {
				console.error(e);
			}

		});

	};

	Page.remoteMethod(
		'createNewVersion',
		{
			'accepts': [
   				{arg: 'pageId', type: 'string', required: true}
   			],
   			'returns': {arg: 'pageCopyId', type: 'string'},
			'description' : 'Create a new version of a page in the DocumentWiki'
		}
	);

};

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
