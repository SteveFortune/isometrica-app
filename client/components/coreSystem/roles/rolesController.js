
var app = angular.module('resilify');

/**
 * @author Steve Fortune
 */
app.controller('RolesModalController', [
	'$controller', '$scope', '$modal', '$modalInstance', 'collection',
	function($controller, $scope, $modal, $modalInstance, collection){

	$controller('AbstractModelController', {
		$scope: $scope,
		$modal: $modal,
		$modalInstance: $modalInstance,
		title: 'Roles',
		collection: collection,
		limit: 20
	});

}]);
