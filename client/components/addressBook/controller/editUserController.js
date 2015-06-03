'use strict';

var app = angular.module('isa.addressbook');

/**
 * @extends AddressBookEditController
 * @author 	Steve Fortune
 */
app.controller('AddressBookEditUserController',
	['UserService', 'ContactService', '$scope', '$rootScope', '$modalInstance', '$modal', 'EventNameAssembler', 'PhoneNumberViewModel', '$controller', 'entity',
	function(UserService, ContactService, $scope, $rootScope, $modalInstance, $modal, EventNameAssembler, PhoneNumberViewModel, $controller, entity) {

	PhoneNumberViewModel($scope);

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
	 * An array of call tree contacts loaded asynchronously if we're editing the user.
	 *
	 * @var Array | null
	 */
	$scope.callTreeContacts = [];

	/**
	 * Load contacts for the user asynchronously
	 */
	if (!$scope.isNew) {
		ContactService.allForUser(entity).then(function(contacts) {
			$scope.callTreeContacts = contacts;
		}, function(err) {
			// TODO: Handle error
		});
	}

	/**
	 * Deletes a contact from the user at a given index.
	 *
	 * @protected
	 */
	$scope.deleteContact = function(at) {
		ContactService.deleteById($scope.callTreeContacts[at].id).then(function() {
			$scope.callTreeContacts.splice(at, 1);
		}, function() {
			// TODO: Handle error
		});
	};

	/**
	 * Opens a modal dialog for adding a new contact
	 *
	 * @protected
	 */
	$scope.addContact = function() {
		$modal.open({
			templateUrl: '/components/addressBook/view/newContact.html',
			controller : 'AddressBookEditContactController',
			resolve: {
				callTree: function() {
					return $scope.entity
				},
				entity: angular.noop
			}
		}).result.then(function(newContact) {
			$scope.callTreeContacts.push(newContact);
		}, function() {
			// TODO: Error handling
		});
	};

	/**
	 * Opens a modal dialog for editting a contact
	 *
	 * @protected
	 */
	$scope.editContact = function(contact) {
		$modal.open({
			templateUrl: '/components/addressBook/view/editContact.html',
			controller : 'AddressBookEditContactController',
			resolve: {
				callTree: function() {
					return $scope.entity
				},
				entity: function() {
					return contact;
				}
			}
		}).result.then(function(updatedContact) {
			isa.utils.replaceEntity($scope.callTreeContacts, updatedContact);
		}, function() {
			// TODO: Error handling
		});
	};

}]);
