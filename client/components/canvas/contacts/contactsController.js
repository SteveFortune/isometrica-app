
var app = angular.module('resilify');
 
app.directive('resEmergencyContacts', ['$modal', 'CanvasItem', function($modal, CanvasItem) {

	return {
		restrict : 'AE',
	    templateUrl: '/components/canvas/contacts/contactsBadge.html',
	    scope : {
			planId : '@'
		},
	    controller : function($scope) {

	    	$scope.itemType = 'contacts';

	    	$scope.loadContacts = function() {
				CanvasItem.find( { filter : 
				{ where : { 'and' : [{ 'planId' : $scope.planId }, { 'type' : $scope.itemType }] } } }, 
				function(res) {
					$scope.contacts = res;
				});
			};	

	      	//load data for this section
			$scope.contacts = [];
			$scope.loadContacts();

	    	$scope.viewContacts = function(ev) {

	    		//show dialog with all contacts
	    		var modalInstance = $modal.open({
					templateUrl: '/components/canvas/contacts/contactsWorksheetModal.html',
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
		itemType : 'contacts',
		planId : planId
	});

	$scope.addContact = function() {

		$modalInstance.dismiss('cancel');

		//create dialog to add a new contact
		var modalInstance = $modal.open({
			templateUrl: '/components/canvas/contacts/contactDetailsModal.html',
			controller: 'ContactDetailsController',
			resolve : {
				planId : function() {
					return $scope.planId;
				},
				loadData : function() {
					return $scope.loadData;
				},
				item : function() {
					return {};
				},
			}
		});

	};
	
} ]);

app.controller( 'ContactDetailsController', [
	'$scope', '$controller', '$modalInstance', 'item', 'CanvasItem',
	function($scope, $controller, $modalInstance, item, CanvasItem) {

	// instantiate base controller
	$controller('WorksheetDetailsController', { 
		$scope: $scope, 
		$modalInstance : $modalInstance,
		CanvasItem : CanvasItem,
		itemType : 'contacts',
		planId : null
	});

	$scope.item = item;

}] );