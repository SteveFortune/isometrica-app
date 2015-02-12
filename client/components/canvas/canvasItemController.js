
var app = angular.module('resilify');

app.controller( 'CanvasItemController', [
	'$scope', '$modalInstance', 'canvasItem', 'isNew', 'Asset',
	function($scope, $modalInstance, canvasItem, isNew, Asset) {

	$scope.item = canvasItem;
	$scope.isNew = isNew;

	$scope.saveItem = function(form) {

		if (!form.$valid) { 
			form['name'].$dirty = true;
			alert("Enter a title");
			return;
		}

		if (isNew) {

			switch( $scope.item.itemType) {
				case 'asset':
				Asset.create($scope.item).$promise
				.then( function(p) {
					$modalInstance.close(p);
				});

			}

		} else {

			var item = new Asset($scope.item);

			item.$save( function(plan) {
				$modalInstance.close(item);
			});

		}

	};

	$scope.deleteItem = function(item) {

		Asset.delete( { id : item.id } ).$promise
		.then( function(deletedItem) {
			$modalInstance.close();
		});

	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};


} ] );