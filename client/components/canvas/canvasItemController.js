
var app = angular.module('resilify');

app.controller( 'CanvasItemController', [
	'$scope', '$modalInstance', 'canvasItem', 'isNew', 'CanvasItem',
	function($scope, $modalInstance, canvasItem, isNew, CanvasItem) {

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
				console.log('saved', item);
				$modalInstance.close(item);
			});

		} else {

			var item = new CanvasItem($scope.item);

			item.$save( function(item) {
				console.log('updated', item);

				$modalInstance.close(item);
			});

		}

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