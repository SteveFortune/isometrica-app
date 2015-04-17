
var app = angular.module('isa');

/**
 * Service for the encapsulating my CRUD operations and hide away all the
 * ugly mocking I'm doing for the purpose of the assessment.
 *
 * @author Steve Fortune
 */
app.service('PlanService', ['Plan', function(Plan) {

	/**
	 * A private method / function that attaches some fake data to a plan.
	 * This is used as demonstrational data for an assessment.
	 *
	 * @private
	 * @param	plan	object	A plan to attach mock associated objects to.
	 */
	var mockAssociatedData = function(plan) {

		var mapEnum = function(name) {
			return {
				name: name,
			};
		};

		return angular.extend({
			purposes: [ 'Purpose 1', 'Purpose 2', 'Purpose 3' ].map(mapEnum),
			roles: [ 'Role 1', 'Role 2' ].map(mapEnum),
			productsServices: [ 'A Product', 'Another Product', 'A Service' ].map(mapEnum),
			interestedParties: [ 'Party', 'Party' ].map(mapEnum),
			activitiesProcesses: [ 'Activity', 'Process' ].map(mapEnum),
			departments: [ 'Dept 1', 'Dept 2' ].map(mapEnum),
			assetsResources: [ 'Gold', 'Silver', 'Real Estate' ].map(mapEnum),
			suppliersOutsourcePartners: [ 'IBM', 'Steve Inc' ].map(mapEnum),
		});
	};

	return {

		/**
		 * Finds a plan by a given id.
		 *
		 * @public
		 * @param 	id		string|int
		 * @return 	Plan	A plan or null if one cannot be found
		 */
		findPlan: function(id) {
			var plan = Plan.findById({id : id});
			return mockAssociatedData(plan);
		},

	};

}]);
