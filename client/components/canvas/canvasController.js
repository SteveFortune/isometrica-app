
var app = angular.module('resilify');

app.controller( 'CanvasController', [
	'$scope', '$stateParams', '$modal', 'Plan', 'growl',
	function($scope, $stateParams, $modal, Plan, growl) {

	$scope.plan = Plan.findById( { 'id' : $stateParams.planId } );	

	//get all the different item types to render on the canvas
	$scope.assetItems = [
		{ name : 'asset 1', offsetLeft : '20%', offsetTop : '20%' },
		{ name : 'asset 2', offsetLeft : '40%', offsetTop : '40%' },
		{ name : 'asset 3', offsetLeft : '30%', offsetTop : '70%' }
	];

	$scope.impactItems = [
		{ name : 'impact 1', offsetLeft : '22%', offsetTop : '24%' },
		{ name : 'longer title goes here', offsetLeft : '40%', offsetTop : '60%' }
	];

	$scope.riskItems = [
		{ name : 'risk 1', offsetLeft : '15%', offsetTop : '15%' },
		{ name : 'risk 2', offsetLeft : '40%', offsetTop : '60%' }
	];

	$scope.strategyItems = [
		{ name : 'strategy 1', offsetLeft : '22%', offsetTop : '30%' },
		{ name : 'strategy 2', offsetLeft : '40%', offsetTop : '70%' }
	];

	$scope.procedureItems = [
		{ name : 'procedure 1', offsetLeft : '20%', offsetTop : '20%' },
		{ name : 'procedure 2', offsetLeft : '40%', offsetTop : '40%' }
	];

	$scope.backgroundItems = [
		{ name : 'background 1', offsetLeft : '20%', offsetTop : '20%' },
		{ name : 'background 2', offsetLeft : '40%', offsetTop : '20%' }
	];

	$scope.addCanvasItem = function(type) {

		var modalInstance = $modal.open({
			templateUrl: '/components/canvas/canvasItemModal.html',
			controller: 'CanvasItemController',
			windowClass : 'sticky-note-modal' + (type == 'background' ? ' note' : ''),
			resolve: {
				canvasItem : function () {
				  return {};
				},
				isNew : function() {
					return true;
				}
			}
		});

		modalInstance.result.then( function(plan) {
			growl.success('Canvas item added');
		});

	};

	$scope.editCanvasItem = function(canvasItem) {

		var modalInstance = $modal.open({
			templateUrl: '/components/canvas/canvasItemModal.html',
			controller: 'CanvasItemController',
			windowClass : 'sticky-note-modal' + (canvasItem.type == 'background' ? ' note' : ''),
			resolve: {
				canvasItem : function () {
				  return canvasItem;
				},
				isNew : function() {
					return false;
				}
			}
		});

		modalInstance.result.then( function(canvasItem) {
			if (typeof canvasItem === 'undefined') {
				growl.success('Item has been deleted');
			} else {
				growl.success('Item has been updated');
			}
		});

	};

	

}]);
