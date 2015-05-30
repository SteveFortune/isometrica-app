'use strict';

var app = angular.module('isa.addressbook');

/**
 * Main controller for address book UI.
 *
 * @route /addressbook
 * @author Steve Fortune
 */
app.controller('AddressBookController',
	['UserService', 'ContactService', '$scope', '$rootScope', '$state', '$modal',
	function(UserService, ContactService, $scope, $rootScope, $state, $modal){

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
	 * - `route`				String					The nested state
	 * - `service`				AbstractRemoteService	An object responsible for make data access calls.
	 *													to execute a query. Returns the resulting promise.
	 * - `collection` 			Array					Array of loaded objects.
	 * - `modalControllerConf`	Object					Config used to initialise a modal controller to
	 *													create a new instance of the entity.
	 *
	 * @const Dictionary
	 */
	var selectStates = {
		'Users': {
			route: 'addressbook.user',
			service: UserService,
			collection: [],
			modalControllerConf: {
				templateUrl: '/components/addressBook/view/newUser.html',
				controller : 'AddressBookEditUserController'
			}
		},
		'Contacts': {
			route: 'addressbook.contact',
			service: ContactService,
			collection: [],
			modalControllerConf: {
				callTree: function() {
					return null;
				},
				templateUrl: '/components/addressBook/view/newContact.html',
				controller : 'AddressBookEditUserController'
			}
		}
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
	 * Convenience method. Returns the current route based on the select state.
	 *
	 * @return 	Array
	 */
	$scope.addressBookRoute = function() {
		return currentSelectState().route;
	};

	/**
	 * Retrieves the keys from our selectState object.
	 *
	 * @return Array
	 */
	$scope.selectOptions = function() {
		return Object.keys(selectStates);
	};

	/**
	 * Are we selecting contact entities?
	 *
	 * @return Boolean
	 */
	$scope.isSelectContacts = function() {
		return $scope.selectState === 'Contacts' ||
			$scope.selectState === 'In call tree' ||
			$scope.selectState === 'Not in call tree';
	};

	/**
	 * Are we selecting user entities?
	 *
	 * @return Boolean
	 */
	$scope.isSelectUsers = function() {
		return $scope.selectState === 'Users';
	};

	/**
	 * Are we selecting organisation entities?
	 *
	 * @return Boolean
	 */
	$scope.isSelectOrgansiations = function() {
		return $scope.selectState === 'Organsiations';
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
		currentState.service.all(collection.length).then(function(items) {
			currentState.collection = collection.concat(items);
			if (collection.length === 0 && items.length > 0) {
				$state.transitionTo(currentState.route, {
					id: items[0].id
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
	$scope.add = function() {
		var currentState = currentSelectState();
		var controllerConf = angular.extend(currentState.modalControllerConf, {
			resolve: {
				entity: angular.noop
			}
		});
		$modal.open(controllerConf).result.then(function(user) {
			currentState.collection.unshift(user);
		}, function(error) {
			if (error) {
				// TODO Handle
			}
		});
	};

	/**
	 * Watches the state of the select box to trigger the first load.
	 *
	 * @protected
	 */
	$scope.$watch('selectState', function(newState, oldState) {
		$scope.loadingState = 'loading';
		$scope.loadMore();
	});

	/**
	 * Listens for model changes and updates the controller's local collections
	 *
	 * @protected
	 */
	$rootScope.$on('user.update', function(ev, updatedUser) {
		updateCollection('Users', updatedUser);
	});

	/**
	 * Updates a select state collection based on a given key.
	 *
	 * @param	selectState		String
	 * @param	entity			Object
	 * @private
	 */
	var updateCollection = function(selectState, entity) {
		isa.utils.replaceEntity(selectStates[selectState].collection, entity);
	};

}]);
