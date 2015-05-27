'use strict';

var app = angular.module('isa.addressbook.user', [
	'isa.addressbook.base',
	'isa.addressbook.factories',
	'ui.bootstrap'
]);


/**
 * @extends AddressBookReadController
 * @author 	Steve Fortune
 */
app.controller('AddressBookReadUserController',
	['$stateParams', '$scope', '$rootScope', 'EventNameAssembler', '$controller', 'UserFactory', '$modal',
	function($stateParams, $scope, $rootScope, EventNameAssembler, $controller, UserFactory, $modal) {

	$controller('AddressBookReadController', {
		$stateParams: $stateParams,
		$scope: $scope,
		$rootScope, $rootScope,
		EventNameAssembler: EventNameAssembler,
		factory: UserFactory,
		type: 'user'
	});

	/**
	 *
	 */
	$scope.editUser = function() {
		$modal.open({
			templateUrl: '/components/addressBook/user/editUser.html',
			controller : 'AddressBookEditUserController',
			resolve: {
				entity: function() {
					return $scope.entity;
				}
			}
		});
	};

}]);


/**
 * @extends AddressBookEditController
 * @author 	Steve Fortune
 */
app.controller('AddressBookEditUserController',
	['UserFactory', '$scope', '$rootScope', '$modalInstance', 'EventNameAssembler', '$controller', 'entity',
	function(UserFactory, $scope, $rootScope, $modalInstance, EventNameAssembler, $controller, entity) {

	$controller('AddressBookEditController', {
		$scope: $scope,
		$rootScope: $rootScope,
		$modalInstance: $modalInstance,
		factory: UserFactory,
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
