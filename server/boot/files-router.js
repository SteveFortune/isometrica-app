/*
 * Routes to work with files in Isometrica. Files are stored in GridFS in a Mongo DB.
 *
 * @author Mark Leusink

 * POST /uploads 	store a file
 * GET /file/:fileId/:fileName   retrieve a file by id (in GridFS)
 * GET /files/:parentId   retrieve all files (in JSON format) related to a document

 */
module.exports = function(app) {

	var mongo = require('mongodb');
	var Grid = require('gridfs-stream');
	var multiparty = require("multiparty");

  app.post('/upload/:parentId', function(req, res) {

  		console.log('upload a file to ' + req.params.parentId);

  		var db = app.datasources.mongodb.connector.db;
		var gfs = Grid(db, mongo);

	  	var form = new multiparty.Form({maxFieldSize:8192, maxFields:10, autoFiles:false});
        form.on("part", function(part) {
            if (!part.filename)
            {
                return;
            }

            console.log('storing ' + part.filename);

            //write the file to gfs
            var writeStream = gfs.createWriteStream({
                mode: "w",
                filename: part.filename,
                content_type: part.headers["content-type"],
                metadata : {
			    	parentId : req.params.parentId
			    }	
            });
            
            part.pipe(writeStream);
        });
        form.on("field", function(name, value) {
        	console.log('found ' + name + ' with ' + value);
        });
        form.on("close", function() {
           
        });
        form.parse(req);

		 res.send("Success!");	
		
	});

	app.get('/file/:fileId/:fileName', function(req, res) {
		console.log('get file from ' + req.params.fileId);

		var db = app.datasources.mongodb.connector.db;
		var gfs = Grid(db, mongo);
	    var mime = 'image/jpeg';
	    res.set('Content-Type', mime);
	    var read_stream = gfs.createReadStream( { _id : mongo.ObjectID( req.params.fileId ) }  );
	    read_stream.pipe(res);

	});

	app.get('/files/:parentId', function(req, res) {
		
		var db = app.datasources.mongodb.connector.db;
		var gfs = Grid(db, mongo);
	 	
	 	gfs.files.find({ 'metadata.parentId' : req.params.parentId }).toArray(function (err, files) {
	    if (err) {
	    	res.json(err);
	    }
	    if (files.length > 0) {

	    	res.send(files);

	    	/*

	        var mime = 'image/jpeg';
	        res.set('Content-Type', mime);
	        var read_stream = gfs.createReadStream({filename: pic_id});
	        read_stream.pipe(res);*/
	    } else {
	        res.json('File Not Found');
	    }
	  });
	});
}