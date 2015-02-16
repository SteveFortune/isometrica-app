module.exports = function(CanvasItem) {

	CanvasItem.beforeCreate = function(next, modelInstance) {
		modelInstance.created = new Date();
		modelInstance.showOnCanvas = true;
		next();
	};

	CanvasItem.beforeUpdate = function(next, modelInstance) {
		modelInstance.updated = new Date();
		next();
	};

};
