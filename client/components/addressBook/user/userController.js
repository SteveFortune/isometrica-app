'use strict';

var app = angular.module('isa.addressbook.user', [
	'isa.addressbook.factories'
]);


/**
 * @author Steve Fortune
 */
app.controller('AddressBookUserController',
	['UserFactory', '$stateParams', '$scope',
	function(UserFactory, $stateParams, $scope) {

	/**
	 * Are we creating a new user or editing an already-existing one?
  	 *
	 * @var Boolean
	 */
	$scope.isNew = !!$stateParams.userId;

	/**
	 * Our user object
	 *
	 * @var Object
	 */
	$scope.user = {};

	/**
	 * Persists the user.
	 *
	 * @protected
	 */
	$scope.createUser = function() {
		UserFactory.insert($scope.user);
	};

	if (!$scope.isNew) {
		UserFactory.findOneBy({
			id: $stateParams.userId
		}).then(function(user) {
			$scope.user = user;
		}, function() {
			$scope.error = 'Error loading user';
		});
	}

}]);
