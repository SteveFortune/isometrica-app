
var app = angular.module('resilify');

/**
 * Modal controller for the role form.
 *
 * @author Steve Fortune
 */
app.controller('RoleController', [
	'role', '$controller',
	function(role, $controller){

	$controller('AbstractModelController', {
		$scope: $scope,
		entity: role,
	});

}]);
