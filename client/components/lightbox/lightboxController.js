
var app = angular.module('isa');

/**
 * @author Mark Leusink
 */
app.controller('LightboxModalController', [
	'$scope', '$modal', '$modalInstance', 'id', 'name',
	function($scope, $modal, $modalInstance, id, name) {

	$scope.id = id;
	$scope.name = name.substring( 0, name.lastIndexOf('.'));		//name without the extension
	$scope.imgSrc = '/file/' + id + '/' + name;

	$scope.dismiss = function() {
		$modalInstance.close(false);
	};

}]);
