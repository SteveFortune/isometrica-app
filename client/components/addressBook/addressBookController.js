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
	 * A map of select states to config objects. These objects contain the
	 * following properties:
	 *
	 * - `route`		String		The nested state
	 * - `factory`		Object		The data access object
	 * - `collection` 	Array		Array of loaded objects.
	 *
	 * @const Dictionary
	 */
	var selectStates = {
		'Users': {
			route: 'addressbook.user',
			factory: UserFactory,
			collection: []
		},
		'Contacts': {
			route: 'addressbook.contact',
			factory: null,//ContactFactory,
			collection: []
		},
		'Organisation': {
			route: 'addressbook.organsation',
			factory: null,//OrganisationFactory,
			collection: []
		},
		'In call tree': {
			route: 'addressbook.contact',
			factory: null,//ContactFactory,
			collection: []
		},
		'Not in call tree': {
			route: 'addressbook.contact',
			factory: null,//ContactFactory,
			collection: []
		},
	};

	/**
	 * Convenience method. Returns the current collection based on the select state.
	 *
	 * @return 	Array
	 */
	$scope.addressBookCollection = function() {
		return currentSelectState().collection;
	};

	/**
	 * Returns the config object for the current select state.
	 *
	 * @private
	 * @return Object
	 */
	var currentSelectState = function() {
		return selectStates[$scope.selectState];
	};

	/**
	 * Constructs a guery and loads more from our service
	 *
	 * @protected
	 */
	$scope.loadMore = function() {
		var currentState = currentSelectState();
		var collection = currentState.collection;
		currentState.factory.all(collection.length).then(function(items) {
			if (collection.length === 0 && items.length > 0) {
				$state.transitionTo('addressbook.user', {
					id: items[0].id
				});
			}
			currentState.collection = collection.concat(items);
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
		/*$modal.open({
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
		});*/
	};

	/**
	 * Opens a new dialog to edit an existing user.
	 *
	 * @param		user	Object		The user object to edit.
	 * @protected
	 */
	$scope.editUser = function(user) {
		/*$modal.open({
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
		});*/
	};

	/**
	 * Watches the state of the select box to trigger the first load.
	 *
	 * @protected
	 */
	$scope.$watch('selectState', function(newState, oldState) {
		$scope.loadMore();
	});

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
