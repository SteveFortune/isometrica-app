'use strict';

var app = angular.module('isa.addressbook');

/**
 * @extends AddressBookEditController
 * @author 	Steve Fortune
 */
app.controller('AddressBookEditContactController',
	['ContactService', '$scope', '$rootScope', '$modalInstance', 'EventNameAssembler', 'PhoneNumberViewModel', '$controller', 'entity', 'callTree',
	function(ContactService, $scope, $rootScope, $modalInstance, EventNameAssembler, PhoneNumberViewModel, $controller, entity, callTree) {

	PhoneNumberViewModel($scope);

	$controller('AddressBookEditController', {
		$scope: $scope,
		$rootScope: $rootScope,
		$modalInstance: $modalInstance,
		factory: ContactService,
		EventNameAssembler: EventNameAssembler,
		entity: entity,
		type: 'contact'
	});

	/**
	 * If we're creating a new contact associated with a calltree, append the user
	 * id to the entity.
	 */
	if ($scope.isNew && callTree) {
		$scope.entity.userId = callTree.id;
	}

}]);
