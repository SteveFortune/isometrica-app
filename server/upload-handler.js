/*
 * store an uploaded file in GridFS
 */

module.exports = function(app, uploadsComplete) { 

	app.get('/uploads', function(req, res) {

		console.log('uploading.');
		res.send('klaar');

	});


	app.post('/uploads',function(req,res){
		if (!uploadsComplete) {
			return;
		}
		
	    console.log(req.files);

		var file = req.files.file;
		var fileName = file.originalname;

		console.log(file);

		var parentId = "123";

		res.send('!ok');

		var mongodb = require('mongodb');
		var ObjectID = mongodb.ObjectID;
		var db = app.datasources.mongodb.connector.db;
		var GridStore = require('mongodb').GridStore;

		var gridStore = new GridStore(db, new ObjectID(), fileName, "w", {
			metadata : {
				parentId : parentId
			}
		});

		var fs = require('fs');
		
		console.log('check', file.path);

		gridStore.open(function(err, gridStore) {

	    	gridStore.writeFile(file.path, function(err, doc) {

	    		gridStore.close( function( err, result) {

	    			console.log(result);

	    			console.log('deleting ' + file.path);
	    			fs.unlink(file.path, function(res) {
	    				console.log('deleted');
	    			});
	    		});
	    	});
	    });

		res.end('uploaded !');
	});

	
};
