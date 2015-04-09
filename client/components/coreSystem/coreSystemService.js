
var app = angular.module('resilify');

/**
 * Service for the core system. Exposes business logic for the core system.
 *
 * @author Steve Fortune
 */
app.factory('CoreSystemService', ['Plan', function(Plan) {

	return {

		/**
		 * Finds a plan by a given id.
		 *
		 * @param 	id		string|int
		 * @return 	Plan	A plan or null if one cannot be found
		 */
		findPlan: function(id) {
			return Plan.findById({id : id});
		},

	};

}]);
