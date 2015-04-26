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

	/*
	 * uploads a file to GridFS, relates the file to a specific document
	 * 
	 * @param parentId		id of the document to relate this file to
	 *
	 * @author Mark Leusink
	 */
  	app.post('/upload/:parentId', function(req, res) {

  		console.log('upload a file to ' + req.params.parentId);

  		var db = app.datasources.mongodb.connector.db;
		var gfs = Grid(db, mongo);
	  	var form = new multiparty.Form({maxFieldSize:8192, maxFields:10, autoFiles:false});

        form.on("part", function(part) {
            if (!part.filename) {
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

		res.send("Success");	
		
	});

	/*
	 * returns a stream to a file with a specific id

	 * @param fileId		id of the file to read
	 * @param fileName  	name of the file to use for this link (can be any)
	 *
	 * @author Mark Leusink
	 */
	app.get('/file/:fileId/:fileName', function(req, res) {
	
		var db = app.datasources.mongodb.connector.db;
		var gfs = Grid(db, mongo);

	   // var mime = 'application/octet-stream';
	    //res.set('Content-Type', mime);
	    var read_stream = gfs.createReadStream( { _id : mongo.ObjectID( req.params.fileId ) }  );
	    read_stream.pipe(res);

	});

	/*
	 * returns a list of files (in JSON format) for a parent document (id)
	 *
	 * @param parentId		id of a document for which the releated files are searched
	 *
	 * @author Mark Leusink
	 */
	app.get('/files/:parentId', function(req, res) {
		
		var db = app.datasources.mongodb.connector.db;
		var gfs = Grid(db, mongo);
	 	
	 	gfs.files.find({ 'metadata.parentId' : req.params.parentId }).toArray(function (err, files) {
	    if (err) {
	    	res.json(err);
	    }
	    if (files.length > 0) {
	    	res.send(files);
	    } else {
	        res.json('File Not Found');
	    }
	  });
	});

	/*
	 * deletes a file from GridFS
	 *
	 * @param fileId	id (in Mongo) of the file to remove 
	 *
	 * @author Mark Leusink
	 */
	app.delete('/file/:fileId', function(req, res) {
		var db = app.datasources.mongodb.connector.db;
		var gfs = Grid(db, mongo);

		gfs.remove({ _id : mongo.ObjectID( req.params.fileId ) }, function (err) {
		  if (err) {
		  	res.send('error');
		  }
		  console.log('file with id ' + req.params.fileId + ' has been removed');
		});

	});

};