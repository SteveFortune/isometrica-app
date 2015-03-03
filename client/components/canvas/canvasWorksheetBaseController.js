
var app = angular.module('resilify');

//set up base controllers for worksheets and detail modals

app.controller( "WorksheetBaseController", [
	'$scope', '$modal', '$modalInstance', 'CanvasItem', 'loadData', 'itemType', 'planId',
	function($scope, $modal, $modalInstance, CanvasItem, loadData, itemType, planId) {

	$scope.showMitigation = true;
	$scope.itemType = itemType;
	$scope.planId = planId;
	$scope.loadData = loadData;

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

	$scope.editDetails = function(item) {

		//open the details page for the selected item (back side of the post-it)

		//close the worksheet
		$modalInstance.close();

		var templateUrl = '/components/canvas/' + item.type + '/' + item.type + 'DetailsModal.html';

		console.log('lo', $scope.loadData);

		var modalInstance = $modal.open({
			templateUrl: templateUrl,
			controller : 'CanvasItemController',
			windowClass : 'edit-item-details' + (item.type === 'background' ? ' note' : ''),
			resolve : {
				canvasItem : function () {
				  return item;
				},
				isNew : function() {
					return false;
				},
				loadData : function() {
					return $scope.loadData;
				}
			}
		});

		modalInstance.result.then( function(item) {
			//if the modal is closed: reload the data
			$scope.loadData();	
		});

	};

	$scope.addNew = function() {

		$modalInstance.dismiss('cancel');

		//create dialog to add a new item
		var modalInstance = $modal.open({
			templateUrl: '/components/canvas/contact/contactDetailsModal.html',
			controller: 'CanvasItemController',
			resolve : {
				canvasItem : function() {
					return {
						type : $scope.itemType,
						planId : $scope.planId
					};
				},
				isNew : function() {
					return true;
				},
				loadData : function() {
					return $scope.loadData;
				}
				
			}
		});

	};

	$scope.items = CanvasItem.find( { filter : 
		{ where : { 'and' : [{ 'planId' : planId }, { 'type' : itemType }] } } } );	


}]);
