
var app = angular.module('resilify');

app.controller('AbstractModelController', [
	'entity', '$scope'
	function(entity, $scope) {

	/**
	 * Is the entity being manipulated new?
	 *
	 * @var boolean
	 */
	$scope.isNew = !!entity;

	/**
	 * Emits a save event for parent controllers.
	 *
	 * @protected
	 */
	$scope.emitSave = function() {
		$scope.$emit('entity.save', {
			entity: entity,
			isNew:
		});
	};

}]);
