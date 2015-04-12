
var app = angular.module('resilify');

/**
 * @author Steve Fortune
 */
app.controller('RoleModalController', [
	'entity', '$controller', '$scope', '$modal', '$modalInstance',
	function(entity, $controller, $scope, $modal, $modalInstance){

	$controller('AbstractModelController', {
		$scope: $scope,
		$modal: $modal,
		$modalInstance: $modalInstance,
		entity: entity
	});

}]);
