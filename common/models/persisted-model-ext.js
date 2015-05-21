module.exports = function(PersistedModelExt) {
  var lowla = require('../../server/lowla.js');
  lowla.hookModel(PersistedModelExt);

	PersistedModelExt.observe('before save', function updateTimestamp(ctx, next) {

		//set the created/ updated timestamps

		if (ctx.instance) {
		  	//create
		  	ctx.instance.created = new Date();
		  	ctx.instance.updated = new Date();
		} else {
		  	//update
		  	ctx.data.updated = new Date();
		}

	  	next();

	});

};
