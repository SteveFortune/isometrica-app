
var app = angular.module('isa');

/**
 * @author Steve Fortune
 */
app.controller('DepartmentsModalController', [
	'$controller', '$scope', '$modal', '$modalInstance', 'collection',
	function($controller, $scope, $modal, $modalInstance, collection){

	$controller('AbstractModelController', {
		$scope: $scope,
		$modal: $modal,
		$modalInstance: $modalInstance,
		collection: collection,
		limit: 15
	});

}]);
