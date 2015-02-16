
var app = angular.module('resilify');

app.controller( 'AssetWorksheetController', [
	'$scope', '$modalInstance', 'planId', 'loadData', 'CanvasItem',
	function($scope, $modalInstance, planId, loadData, CanvasItem) {

	$scope.items = CanvasItem.find( { filter : 
		{ where : { 'and' : [{ 'planId' : planId }, { 'type' : 'asset' }] } } } );	

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

} ]);