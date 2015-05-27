'use strict';

var app = angular.module('isa.addressbook');

/**
 * Non-modal controller for rendering a readonly-view on an entity.
 *
 * @param	factory			Object		A persistent factory.
 * @param	type			String		String identifying the type of the entity.
 * @param	$stateParams	Object		Requires an `id` key.
 * @author 	Steve Fortune
 */
app.controller('AddressBookViewController',
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
