module.exports = function(Plan) {

	Plan.beforeCreate = function(next, modelInstance) {
		modelInstance.created = new Date();
	
		next();
	};

	Plan.beforeUpdate = function(next, modelInstance) {
		modelInstance.created = new Date();
		
		next();
	};


};
