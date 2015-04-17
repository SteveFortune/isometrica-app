
var app = angular.module('isa');

app.controller( 'CanvasItemController', [
	'$scope', '$modalInstance', '$modal', 'canvasItem', 'isNew', 'loadData', 'CanvasItem',
	function($scope, $modalInstance, $modal, canvasItem, isNew, loadData, CanvasItem) {

	if (canvasItem.type === 'background' && !canvasItem.hasOwnProperty('subType')) {
		canvasItem.subType = 'text';
	}

	$scope.item = canvasItem;
	$scope.isNew = isNew;
	$scope.loadData = loadData;

	$scope.setSubType = function(to) {
		$scope.item.subType = to;
	};

	//client validations, saves the item in the data store, closes the model
	$scope.saveItem = function(form) {
		console.log('save', form);

		if (!form.$valid) { 
			form['name'].$dirty = true;
			alert("Enter a title");
			return;
		}

		if (isNew) {

			CanvasItem.create($scope.item).$promise
			.then( function(item) {
				//console.log('saved', item);
				$modalInstance.close(item);
			});

		} else {

			var item = new CanvasItem($scope.item);

			item.$save( function(item) {
				$modalInstance.close(item);
			});

		}

	};

	//close the current modal, show the 'edit details' form
	$scope.editDetails = function(item) {

		$modalInstance.close();

		var templateUrl = '/components/canvas/' + item.type + '/' + item.type + 'DetailsModal.html';

		var modalInstance = $modal.open({
			templateUrl: templateUrl,
			controller : 'CanvasItemController',
			windowClass : 'edit-item-details' + (item.type === 'background' ? ' note' : ''),
			resolve : {
				canvasItem : function () {
				  return item;
				},
				isNew : function() {
					return $scope.isNew;
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

	$scope.deleteItem = function(item) {

		CanvasItem.delete( { id : item.id } ).$promise
		.then( function(deletedItem) {
			$modalInstance.close();
		});

	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};


} ] );