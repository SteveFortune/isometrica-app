var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

//var uploadComplete = false;

/*
//configuration to handle file uploads to gridfs
var multer = require('multer');

app.use(multer({ dest: '././data/files/',
	rename: function (fieldname, filename) {
		return filename+Date.now();
	},
	onFileUploadStart: function (file) {
	  console.log(file.originalname + ' is starting ...');
	},
	onFileUploadComplete: function (file) {
	  console.log(file.fieldname + ' uploaded to  ' + file.path);
	  uploadComplete=true;
	}
}));
*/

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname);

//require('./upload-handler.js')(app, uploadComplete);
/*
app.post('/uploads',function(req,res){
	if (!uploadsComplete) {
		return;
	}

	console.
});
*/
app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}
