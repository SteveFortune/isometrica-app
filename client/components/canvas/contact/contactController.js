
var app = angular.module('resilify');
 
app.directive('resEmergencyContacts', ['$modal', 'CanvasItem', function($modal, CanvasItem) {

	return {
		restrict : 'AE',
	    templateUrl: '/components/canvas/contact/contactBadge.html',
	    scope : {
			planId : '@'
		},
	    controller : function($scope) {

	    	$scope.itemType = 'contact';

	    	$scope.loadData = function() {
				CanvasItem.find( { filter : 
				{ where : { 'and' : [{ 'planId' : $scope.planId }, { 'type' : $scope.itemType }] } } }, 
				function(res) {
					$scope.items = res;
				});
			};	

	      	//load data for this section
			$scope.items = [];
			$scope.loadData();

	    	$scope.viewContacts = function(ev) {

	    		//show dialog with all contacts
	    		var modalInstance = $modal.open({
					templateUrl: '/components/canvas/contact/contactWorksheetModal.html',
					controller: 'ContactsWorksheetController',
					windowClass : 'table-view-modal',
					size : 'lg',
					resolve : {
						planId : function() {
							return $scope.planId;
						},
						loadData : function() {
							return $scope.loadData;
						}
					}
				});

	    		ev.stopPropagation();

	    	};


	    }
	};


}]);

app.controller( 'ContactsWorksheetController', [
	'$scope', '$controller', '$modal', '$modalInstance', 'planId', 'loadData', 'CanvasItem',
	function($scope, $controller, $modal, $modalInstance, planId, loadData, CanvasItem) {

	// instantiate base controller
	$controller('WorksheetBaseController', { 
		$scope: $scope, 
		$modalInstance : $modalInstance,
		CanvasItem : CanvasItem,
		loadData : loadData,
		itemType : 'contact',
		planId : planId
	});
	
} ]);
