'use strict';

var app = angular.module('isa.addressbook', [
	'isa.addressbook.factories',
	'isa.addressbook.user',
	'ui.router',
	'ui.bootstrap',
	'infinite-scroll'
]);


/**
 * Main controller for address book UI.
 *
 * @route /addressbook
 * @author Steve Fortune
 */
app.controller('AddressBookController',
	['UserFactory', '$scope', '$state', '$modal',
	function(UserFactory, $scope, $state, $modal){

	/**
	 * @const Array
	 */
	$scope.loadingStates = [
		'loading',
		'loaded',
		'failed'
	];

	/**
	 * @const Array
	 */
	$scope.selectStates = [
		'Users',
		'Contacts',
		'Organisations'
	];

	/**
	 * The select filter state.
	 *
	 * @var String
	 */
	$scope.selectState = 'Users';

	/**
	 * The state of the asynchronous UI.
  	 *
	 * @var String
	 */
	$scope.loadingState = 'loading';

	/**
	 * The collection of users, contacts and organisations to render.
	 *
	 * @var Array
	 */
	$scope.addressBookCollection = [];

	/**
	 * Constructs a guery and loads more from our service
	 *
	 * @protected
	 */
	$scope.loadMore = function() {
		UserFactory.all().then(function(items) {
			$scope.addressBookCollection = $scope.addressBookCollection.concat(items);
			if ($scope.addressBookCollection.length > 0) {
				$state.transitionTo('addressbook.user', {
					userId: $scope.addressBookCollection[0].id
				});
			}
			$scope.loadingState = 'loaded';
		}, function() {
			$scope.loadingState = 'failed';
		});
	};

	/**
	 * Opens a new dialog to register a user.
	 *
	 * @protected
	 */
	$scope.registerUser = function() {
		$modal.open({
			templateUrl: '/components/addressBook/user/newUser.html',
			controller : 'ModalAddressBookUserController',
			resolve: {
				user: function() {
					return null;
				}
			}
		}).result.then(function(user) {
			$scope.addressBookCollection.push(user);
		}, function(error) {
			// TODO Error handling
		});
	};

	/**
	 * Opens a new dialog to edit an existing user.
	 *
	 * @param		user	Object		The user object to edit.
	 * @protected
	 */
	$scope.editUser = function(user) {
		$modal.open({
			templateUrl: '/components/addressBook/user/editUser.html',
			controller : 'ModalAddressBookUserController',
			resolve: {
				user: function() {
					return user;
				}
			}
		});
	};

}]);

/**
 * @author Steve Fortune
 */
app.directive('isaAddressBookHeader', function() {
	return {
		templateUrl: '/components/addressBook/header.html',
		restrict: 'AE',
		scope: {
			selectState: '=',
			organisation: '='
		}
	};
});
