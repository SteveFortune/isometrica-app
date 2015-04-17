
var app = angular.module('isa');

app.controller( 'CanvasController', [
	'$scope', '$stateParams', 'Plan', '$timeout',
	function($scope, $stateParams, Plan, $timeout) {

	$scope.planId = $stateParams.planId;
	$scope.plan = Plan.findById( { 'id' : $stateParams.planId } );	

	//enable the ios drag drop shim
	$timeout( function() {
		dragDropShim(document, {enableEnterLeave: true});
	});

} ]);