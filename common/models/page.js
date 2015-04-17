module.exports = function(Page) {

	Page.observe('before save', function updateTimestamp(ctx, next) {

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
