
var app = angular.module('resilify');

/**
 * Simple base controller for modal controllers.
 *
 * @author Steve Fortune
 */
app.controller('AbstractModelController', [
	'entity', '$scope', '$modal', '$modalInstance',
	function(entity, $scope, $modal, $modalInstance) {

	/**
	 * Returns the entity's name, or an appropriate alternative string.
	 *
	 * @return string
	 */
 	$scope.entityName = function() {
		var name;
		if ($scope.isNew) {
			name = 'New'
		} else if ($scope.entity.name) {
			name = $scope.entity.name;
		} else {
			name = 'Entity';
		}
		return name;
	};

	/**
	 * The entity that we're manipulating in our modal form.
	 *
	 * @var object
	 */
	$scope.entity = entity ? angular.copy(entity) : {};

	/**
	 * Is the entity being manipulated new?
	 *
	 * @var boolean
	 */
	$scope.isNew = !entity;

	/**
	 * Closes the controller with, passing an hash representing its state.
	 *
	 * @protected
	 */
	$scope.saveAndClose = function() {
		if ($scope.entityForm && !$scope.entityForm.$valid) {
			return;
		}
		$modalInstance.close({
			entity: $scope.entity,
			isNew: $scope.isNew
		});
	};

}]);
