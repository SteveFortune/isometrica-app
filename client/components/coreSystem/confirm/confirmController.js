
var app = angular.module('resilify');

/**
 * @author Steve Fortune
 */
app.controller('ConfirmModalController', [
	'$scope', '$modal', '$modalInstance',
	function($scope, $modal, $modalInstance) {

	/**
	 * @private
	 */
	$scope.confirm = function() {
		$modalInstance.close(true);
	};


	/**
	 * @private
	 */
	$scope.dismiss = function() {
		$modalInstance.close(false);
	};

}]);
