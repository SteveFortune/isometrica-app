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

};
