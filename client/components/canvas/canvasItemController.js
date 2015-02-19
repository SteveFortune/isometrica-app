
var app = angular.module('resilify');

app.controller( 'CanvasItemController', [
	'$scope', '$modalInstance', '$modal', 'canvasItem', 'isNew', 'CanvasItem',
	function($scope, $modalInstance, $modal, canvasItem, isNew, CanvasItem) {

	$scope.item = canvasItem;
	$scope.isNew = isNew;

	$scope.saveItem = function(form) {

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
				//console.log('updated', item);

				$modalInstance.close(item);
			});

		}

	};

	$scope.editDetails = function(item) {

		$modalInstance.close();

		//@TODO: make dynamic
		//var templateUrl = '/components/canvas/' + item.type + '/' + item.type + 'DetailsModal.html';
		var templateUrl = '/components/canvas/asset/AssetDetailsModal.html';
		var ctrl = item.type.substring(0,1).toUpperCase() + item.type.substring(1) + 'DetailsController';

		$modal.open({
			templateUrl: templateUrl,
			controller : ctrl,
			resolve : {
				item : function() {
					return item;
				}
			}
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