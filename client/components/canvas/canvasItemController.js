
var app = angular.module('resilify');

app.controller( 'CanvasItemController', [
	'$scope', '$modalInstance', 'canvasItem', 'isNew',
	function($scope, $modalInstance, canvasItem, isNew) {

	$scope.item = canvasItem || {};
	$scope.isNew = isNew;

	$scope.saveItem = function(form) {

		if (!form.$valid) { 
			form.title.$dirty = true;
			return;
		}

		if (isNew) {

			/*Plan.create($scope.plan).$promise
			.then( function(p) {
				$modalInstance.close(plan);

			});*/

		} else {

			/*var plan = new Plan($scope.plan);

			plan.$save( function(plan) {
				$modalInstance.close(plan);
			});*/

		}

	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};


} ] );