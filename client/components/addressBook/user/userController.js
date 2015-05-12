'use strict';

var app = angular.module('isa.addressbook.user', [
	'isa.addressbook.factories',
	'ui.bootstrap'
]);


/**
 * Non-modal controller for rendering a readonly-view on a user.
 *
 * @author Steve Fortune
 */
app.controller('AddressBookUserController',
	['UserFactory', '$stateParams', '$scope',
	function(UserFactory, $stateParams, $scope) {

	UserFactory.findOneBy({
		id: $stateParams.userId
	}).then(function(user) {
		$scope.user = user;
	}, function(error) {
		// TODO: Error handling
	});

}]);


/**
 * Modal user controller. Performs create and edit operations on users.
 *
 * @author Steve Fortune
 */
app.controller('ModalAddressBookUserController',
	['UserFactory', '$scope', '$modalInstance', 'user',
	function(UserFactory, $scope, $modalInstance, user) {

	/**
	 * Are we creating a new user or editing an already-existing one?
  	 *
	 * @var Boolean
	 */
	$scope.isNew = !user;

	/**
	 * Our user object
	 *
	 * @var Object
	 */
	$scope.user = user;

	/**
	 * Dismisses the modal instance.
	 */
	$scope.cancel = function() {
		$modalInstance.dismiss();
	};

	/**
	 * Persists new user.
	 *
	 * @throws 		Error	If !isNew
	 * @protected
	 */
	$scope.createUser = function() {
		if (!$scope.isNew) {
			throw new Error("Not creating user.");
		}
		UserFactory.insert($scope.user).then(function(user) {
			$modalInstance.close(user);
		}, function(error) {
			$modalInstance.close(error);
		});
	};

	/**
	 * Persists updated user attributes.
	 *
	 * @throws 		Error	If isNew
	 * @protected
	 */
	$scope.updateUser = function() {
		if ($scope.isNew) {
			throw new Error("Can only update existing users");
		}
		UserFactory.updateById(user.id, $scope.user).then(function(user) {
			$modalInstance.close(user);
		}, function(error) {
			$modalInstance.close(error);
		});
	};

}]);
