
var app = angular.module('resilify');

app.controller( 'BackgroundWorksheetController', [
	'$scope', '$controller', '$modalInstance', 'planId', 'loadData', 'CanvasItem',
	function($scope, $controller, $modalInstance, planId, loadData, CanvasItem) {

	// instantiate base controller
	$controller('WorksheetBaseController', { 
		$scope: $scope, 
		$modalInstance : $modalInstance,
		CanvasItem : CanvasItem,
		loadData : loadData,
		itemType : 'background',
		planId : planId
	});
	
} ]);


app.controller( 'BackgroundDetailsController', [
	'$scope', '$modalInstance', 'item', 'CanvasItem',
	function($scope, $modalInstance, item, CanvasItem) {

	$scope.item = item;

	$scope.done = function() {
		$modalInstance.dismiss('done');
	};	

}] );