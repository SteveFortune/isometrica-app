
var app = angular.module('resilify');

/**
 * Modal controller for the role form.
 *
 * @author Steve Fortune
 */
app.controller('RoleModalController', [
	'entity', '$controller', '$scope',
	function(entity, $controller, $scope){

	$controller('AbstractModelController', {
		$scope: $scope,
		entity: entity
	});

}]);
