
var app = angular.module('resilify');

/**
 * Simple base controller for modal controllers.
 *
 * @author Steve Fortune
 */
app.controller('AbstractModelController', [
	'entity', '$scope',
	function(entity, $scope) {

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
	 * @var object | null
	 */
	$scope.entity = entity;

	/**
	 * Is the entity being manipulated new?
	 *
	 * @var boolean
	 */
	$scope.isNew = !entity;

	/**
	 * Emits a save event for parent controllers.
	 *
	 * @protected
	 */
	$scope.emitSave = function() {
		$scope.$emit('entity.save', {
			entity: entity,
			isNew: $scope.isNew,
		});
	};

}]);
