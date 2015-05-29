'use strict';

var app = angular.module('isa.addressbook');

/**
 * @extends AddressBookEditController
 * @author 	Steve Fortune
 */
app.controller('AddressBookEditUserController',
	['UserService', 'ContactService', '$scope', '$rootScope', '$modalInstance', 'EventNameAssembler', '$controller', 'entity',
	function(UserService, ContactService, $scope, $rootScope, $modalInstance, EventNameAssembler, $controller, entity) {

	$controller('AddressBookEditController', {
		$scope: $scope,
		$rootScope: $rootScope,
		$modalInstance: $modalInstance,
		factory: UserService,
		EventNameAssembler: EventNameAssembler,
		entity: entity,
		type: 'user'
	});

	/**
	 * Load contacts for the user asynchronously
	 */
	ContactService.allForUser(entity).then(function(contacts) {
		$scope.callTreeContacts = contacts;
	}, function() {
		// TODO: Handle error
	});

	/**
	 * Strips sensative fields from the user entity before sending to the rest of the
	 * application. Namely the `password` value.
	 *
	 * @override
	 * @protected
	 */
	$scope.sanatizeEntity = function(user) {
		delete user.password;
	};

	/**
	 * Deletes a contact from the user at a given index.
	 *
	 * @protected
	 */
	$scope.deleteContact = function(at) {
		$scope.entity._callTreeContacts.splice(at, 1);
	};

	/**
	 * Deletes a phone number from the user at a given index.
	 *
	 * @protected
	 */
	$scope.deletePhoneNumber = function(at) {
		$scope.entity._phoneNumbers.splice(at, 1);
	};

	/**
	 * Creates a new empty phone number associated with the user.
	 *
	 * @protected
	 */
	$scope.addPhoneNumber = function() {
		$scope.entity._phoneNumbers.push({});
	};

	/**
	 * Creates a new empty contact associated with the user's call tree.
	 *
	 * @protected
	 */
	$scope.addCallTreeContact = function() {
		$scope.entity._callTreeContacts.push({
			isCallTree: true
		});
	};

}]);
