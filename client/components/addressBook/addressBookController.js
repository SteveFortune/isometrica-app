'use strict';

var app = angular.module('isa.addressbook', [
	'isa.addressbook.factories',
	'isa.addressbook.base',
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
		UserFactory.all($scope.addressBookCollection.length).then(function(items) {
			if (
				$scope.addressBookCollection.length === 0 &&
				items.length > 0
			) {
				$state.transitionTo('addressbook.user', {
					id: items[0].id
				});
			}
			$scope.addressBookCollection = $scope.addressBookCollection.concat(items);
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
			controller : 'AddressBookEditUserController',
			resolve: {
				user: function() {
					return null;
				}
			}
		}).result.then(function(user) {
			$scope.addressBookCollection.unshift(user);
		}, function(error) {
			if (error) {
				// TODO Handle
			}
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
			controller : 'AddressBookEditUserController',
			resolve: {
				user: function() {
					return user;
				}
			}
		}).result.then(function(updatedUser) {
			isa.utils.replace($scope.addressBookCollection, null, updatedUser, function(prop) {
				return prop.id === user.id;
			});
		}, function(error) {
			if (error) {
				// TODO Handle
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


/**
 * @author Steve Fortune
 */
app.directive('isaAddressBookModalHeader', function() {
	return {
		templateUrl: '/components/addressBook/modalHeader.html',
		restrict: 'AE',
		scope: {
			onSave: '&',
			onCancel: '&',
			canSave: '=',
			title: '@'
		}
	};
});
