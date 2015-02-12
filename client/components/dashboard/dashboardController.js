
var app = angular.module('resilify');

app.controller( 'DashboardController', 
	['$scope', '$modal', '$state', '$timeout', 'Plan', 'growl',
	function($scope, $modal, $state, $timeout, Plan, growl) {

	var loadPlans = function() {	
		//retrieve all plans and activate the tooltips
		Plan.query( { 'filter[order]' : 'title ASC'} )
		.$promise.then( function(plans) {

			$scope.plans = plans;

			$timeout( function() {
				angular.element('[data-toggle="tooltip"]').tooltip();
			}, 400);

		});
	};

	$scope.openPlan = function(plan) {

		$state.transitionTo('canvas', {planId : plan.id});

	};

	$scope.addPlan = function() {

		var modalInstance = $modal.open({
			templateUrl: '/components/planSettings/planSettingsModal.html',
			controller: 'PlanSettingsController',
			resolve: {
				plan : function () {
				  return {};
				},
				isNew : function() {
					return true;
				}
			}
		});

		modalInstance.result.then( function(plan) {
			loadPlans();
			growl.success('Your plan has been created');
		});

	};

	$scope.editPlan = function(plan) {

		var modalInstance = $modal.open({
			templateUrl: '/components/planSettings/planSettingsModal.html',
			controller: 'PlanSettingsController',
			resolve: {
				plan : function () {
				  return plan;
				},
				isNew : function() {
					return false;
				}
			}
		});

		modalInstance.result.then( function(updatedPlan) {
			loadPlans();
			if (typeof updatedPlan === 'undefined') {
				growl.success('Plan has been deleted');
			} else {
				growl.success('Plan settings have been updated');
			}
		});

	};

	//initial loading of plans
	loadPlans();

}]);
