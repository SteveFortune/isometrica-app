
var app = angular.module('resilify');

/**
 * Service for the performing CRUD operations on Plans. The reason I've implemented
 * a service here is to abstract away data access operations from the controller layer.
 * In the future for example, if we move away from loopback we'd be able to refactor
 * the data access operations more easily because they would all be encapsulated in
 * services.
 *
 * It also encapsulates all of the nasty mocking I've done for demonstration.
 *
 * @author Steve Fortune
 */
app.service('PlanService', ['Plan', function(Plan) {

	/**
	 * A private method / function that attaches some fake data to a plan.
	 * This is used as demonstrational data for an assessment.
	 *
	 * @private
	 * @param	plan	A plan to attach mock associated objects to.
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
