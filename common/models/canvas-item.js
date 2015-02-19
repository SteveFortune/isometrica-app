module.exports = function(CanvasItem) {

	CanvasItem.observe('before save', function updateTimestamp(ctx, next) {

	  if (ctx.instance) {
	  	
	  	//create
	  	ctx.instance.created = new Date();
	    ctx.instance.updated = new Date();
	    ctx.instance.showOnCanvas = true;

	  } else {
	  	//update
	  	ctx.data.updated = new Date();
	  }

	  next();
	});

};
