
var app = angular.module('resilify');

/**
 * @note This collection is rendered almost identically to the roles collection.
 *    	 Maybe we could have a generic 'BasicCollectionModalController'... ?
 * @author Steve Fortune
 */
app.controller('ProductsServicesModalController', [
	'$controller', '$scope', '$modal', '$modalInstance', 'collection',
	function($controller, $scope, $modal, $modalInstance, collection){

	$controller('AbstractModelController', {
		$scope: $scope,
		$modal: $modal,
		$modalInstance: $modalInstance,
		collection: collection,
		limit: 20
	});

}]);
