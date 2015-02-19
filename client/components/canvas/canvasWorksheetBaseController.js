
var app = angular.module('resilify');

//set up a base controller for worksheets and modals

app.controller( "WorksheetBaseController", [
	'$scope', '$modalInstance', 'CanvasItem', 'loadData', 'itemType', 'planId',
	function($scope, $modalInstance, CanvasItem, loadData, itemType, planId) {

	$scope.showMitigation = true;

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};

	$scope.toggleShowOnCanvas = function(item) {

		var to = !item.showOnCanvas;

	    CanvasItem.prototype$updateAttributes({ id: item.id }, {showOnCanvas : to})
			.$promise.then(function(res) {
				item.showOnCanvas = to;
				loadData();
			});

	};

	$scope.toggleMitigation = function() {
		$scope.showMitigation = !$scope.showMitigation;
	};

	$scope.items = CanvasItem.find( { filter : 
		{ where : { 'and' : [{ 'planId' : planId }, { 'type' : itemType }] } } } );	


}]);
