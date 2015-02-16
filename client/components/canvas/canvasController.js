
var app = angular.module('resilify');

app.controller( 'CanvasController', [
	'$scope', '$stateParams', 'Plan',
	function($scope, $stateParams, Plan) {

	$scope.planId = $stateParams.planId;
	$scope.plan = Plan.findById( { 'id' : $stateParams.planId } );	

} ]);