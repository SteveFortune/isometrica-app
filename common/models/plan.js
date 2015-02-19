module.exports = function(Plan) {
/*
	
	Plan.observe('before delete', function(ctx, next) {
	console.log(ctx.where)
		console.log('c' + ctx.where['id']);

		app.models.CanvasItem.find( { where : {planId : ctx.where.id } }, function(err, items) {
			console.log('b');
			console.log('found ' + items.length + ' related');

		} )

		//console.log(CanvasItem);

	  	//console.log('Going to delete %s matching %j',
	   // ctx.Model.pluralModelName,
	   // ctx.where);

	  next();
	});*/

	Plan.observe('before save', function updateTimestamp(ctx, next) {

		// console.log('Going to update %s matching %j',
	 //    ctx.Model.pluralModelName,
	 //    ctx.where);

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
