
var app = angular.module('resilify');

app.controller( 'DashboardController', 
	['$scope', '$modal', '$state', '$timeout', 'Plan', 'growl',
	function($scope, $modal, $state, $timeout, Plan, growl) {

	var loadPlans = function() {	
		//retrieve all plans and activate the tooltips
		Plan.query( { 'filter[order]' : 'title ASC'} )
		.$promise.then( function(plans) {

			$scope.plans = plans;

			//Attach some sample users / @TODO: make dynamic
			var planUsers = [
				{'name' : 'Mark Leusink', profileUrl : '/assets/img/avatar-mark.gif', id : 'mark', email : 'mark@teamstudio.com'},
				{'name' : 'Matt White', profileUrl : '/assets/img/avatar-matt.gif', id : 'matt', email : 'matt@teamstudio.com'},
				{'name' : 'Steve Ives', profileUrl : '/assets/img/avatar-steve.gif', id : 'steve', email : 'steve@teamstudio.com'},
				{'name' : 'Jack Herbert', profileUrl : '/assets/img/avatar-jack.gif', id : 'jack', email : 'jack@teamstudio.com'}
			];

			angular.forEach( $scope.plans, function(plan) {
				plan.users = planUsers;
			});

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
