'use strict';

var app = angular.module('isa.addressbook.base', [
	'isa.addressbook.factories',
	'ui.bootstrap'
]);


/**
 * Utility services that assembles the name of an event.
 *
 * @param	entityType		String
 * @param	id				String | Number
 * @param	operationType	String
 * @author 	Steve Fortune
 */
app.service('EventNameAssembler', function() {
	return function(entityType, operationType, id) {
		var eventName = entityType + '.';
		if (typeof id !== 'undefined') {
			eventName += id + '.';
		}
		eventName += operationType;
		return eventName;
	};
});


/**
 * Non-modal controller for rendering a readonly-view on an entity.
 *
 * @author Steve Fortune
 */
app.controller('AddressBookReadController',
	['$stateParams', '$scope', '$rootScope', 'EventNameAssembler', 'factory', 'type',
	function($stateParams, $scope, $rootScope, EventNameAssembler, factory, type) {

	/**
	 * @var String
	 */
	var id = $stateParams.id;

	factory.findOneBy({
		id: id
	}).then(function(entity) {
		$scope.entity = entity;
	}, function(error) {
		// TODO: Error handling
	});

	/**
	 * Listen to udpate events and refresh our entity to avoid rendering
	 * old data.
	 *
	 * @private
	 */
	$rootScope.$on(EventNameAssembler(type, 'update', id), function(event, newEntity) {
		$scope.entity = newEntity;
	});

}]);


/**
 * Abstract modal controller that deals with entity persistence and communicating back
 * to the owner of the modal dialog.
 *
 * @param	factory			Object		A persistent factory that has the following methods:
 *										all, findBy, insert, deleteById, updateById.
 * @note 	Because the entities that we're mutating might be in use else where
 * 		 	in the application, we emit `{type}.new`, `{type}.update` and
 *		 	`{type}.{id}.update` events.
 * @param	entity			Object		The object to make a copy of and manipulate.
 * @param	type			String		String identifying the type of the entity.
 * @author 	Steve Fortune
 */
app.controller('AddressBookEditController',
	['$scope', '$rootScope', '$modalInstance', 'EventNameAssembler', 'factory', 'entity', 'type',
	function($scope, $rootScope, $modalInstance, EventNameAssembler, factory, entity, type) {

	/**
	 * Are we creating a new entity or editing an already-existing one?
  	 *
	 * @var Boolean
	 */
	$scope.isNew = !entity;

	/**
	 * Our object
	 *
	 * @var Object
	 */
	$scope.entity = $scope.isNew ? {} : angular.copy(entity);

	/**
	 * @var String
	 */
	var type = type || 'entity';

	/**
	 * Abstract method that should be implemented to strip an entity of
	 * sensative fields before its broadcasted back to its parent controller
	 *
	 * @param		entity		Object
	 * @protected
	 */
	$scope.sanatizeEntity = function(entity) {};

	/**
	 * Dismisses the modal instance.
	 */
	$scope.cancel = function() {
		$modalInstance.dismiss();
	};

	/**
	 * @throws 		Error	If !isNew
	 * @protected
	 */
	$scope.createEntity = function() {
		if (!$scope.isNew) {
			throw new Error("Not creating entity.");
		}
		factory.insert($scope.entity).then(function(entity) {
			$scope.sanatizeEntity(entity);
			$modalInstance.close(entity);
			$rootScope.$emit(EventNameAssembler(type ,'new'), entity);
		}, function(error) {
			$modalInstance.close(error);
		});
	};

	/**
	 * @throws 		Error	If isNew
	 * @protected
	 */
	$scope.updateEntity = function() {
		if ($scope.isNew) {
			throw new Error("Can only update existing entities.");
		}
		factory.updateById(entity.id, $scope.entity).then(function(updatedEntity) {
			$scope.sanatizeEntity(updatedEntity);
			$modalInstance.close(updatedEntity);
			$rootScope.$emit(EventNameAssembler(type, 'update'), updatedEntity);
			$rootScope.$emit(EventNameAssembler(type, 'update', entity.id), updatedEntity);
		}, function(error) {
			$modalInstance.close(error);
		});
	};

}]);
