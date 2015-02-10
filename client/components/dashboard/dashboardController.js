
var app = angular.module('resilify');

app.controller( 'DashboardController', function($scope, $state, Plan) {

	// $scope.plans = [
	// 	{ id : '1', name : 'Plan 1', orgName : 'Organisation', description : 'Optional plan description lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
	// 	{ id : '2', name : 'plan 2', orgName : 'Organisation', description : 'Optional plan description lorem ipsum dolor sit amet, consectetur adipiscing elit.'}

	// ];

	$scope.openPlan = function(plan) {

		$state.transitionTo('canvas', {planId : plan.id});

	};

	$scope.plans = Plan.query();

});

app.factory( 'Plan', function($resource) {

	return $resource('/api/Plans/:id');

});