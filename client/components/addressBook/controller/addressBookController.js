'use strict';

var app = angular.module('isa.addressbook');

/**
 * Main controller for address book UI.
 *
 * @route /addressbook
 * @author Steve Fortune
 */
app.controller('AddressBookController',
	['UserService', 'ContactService', 'Collection', '$scope', '$rootScope', '$state', '$modal',
	function(UserService, ContactService, Collection, $scope, $rootScope, $state, $modal){

	/**
	 * Was the user redirected to this controller with the id of a specific
	 * entity in the URL? If so, we need to prevent the initial transition
	 * to the first user on loadMore.
	 *
	 * @var Boolean
	 */
	var redirectToFirst = !!$state.params.id;

	/**
	 * The select filter state.
	 *
	 * @var String
	 */
	$scope.selectState = 'Users';

	/**
	 * A map of select states to config objects. These objects contain the
	 * following properties:
	 *
	 * - `route`				String					The nested state
	 * - `collection` 			Collection				A collection used to page load items from our
	 * 													service.
	 * - `modalControllerConf`	Object					Config used to initialise a modal controller to
	 *													create a new instance of the entity.
	 *
	 * @const Dictionary
	 */
	var selectStates = {
		'Users': {
			route: 'addressbook.user',
			collection: new Collection(function(length) {
				return UserService.all(length);
			}),
			modalControllerConf: {
				templateUrl: '/components/addressBook/view/newUser.html',
				controller : 'AddressBookEditUserController'
			}
		},
		'Contacts': {
			route: 'addressbook.contact',
			collection: new Collection(function(length) {
				return ContactService.all(length);
			}),
			modalControllerConf: {
				templateUrl: '/components/addressBook/view/newContact.html',
				controller : 'AddressBookEditContactController',
				resolve: {
					callTree: angular.noop
				}
			}
		}
	};

	/**
	 * Convenience method. Returns the arr contained the collection of the current
	 * state.
	 *
	 * @return 	Array
	 */
	$scope.listItems = function() {
		return $scope.collection().arr;
	};

	/**
	 * Convenience method. Returns the collection of the current state.
	 *
	 * @return 	Collection
	 */
	$scope.collection =function() {
		return currentSelectState().collection;
	};

	/**
	 * Convenience method. Returns the current route based on the select state.
	 *
	 * @return 	Array
	 */
	$scope.route = function() {
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
		collection.more().then(function(args) {
			if (args.firstSuccessfulQuery && !redirectToFirst) {
				$state.transitionTo(currentState.route, {
					id: args.items[0].id
				});
			}
		});
	};

	/**
	 * Opens a new dialog to register a user.
	 *
	 * @protected
	 */
	$scope.add = function() {

		// TODO: Tidy this up, build a deep merge function

		var currentState = currentSelectState();
		var dstConf = currentState.modalControllerConf;
		var srcResolveConf = {
			entity: angular.noop
		};
		var mergedConf = angular.extend(dstConf, {
			resolve: dstConf.resolve ?
				angular.extend(dstConf.resolve, srcResolveConf) :
				srcResolveConf
		});

		$modal.open(mergedConf).result.then(function(user) {
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
		if (newState !== oldState) {
			redirectToFirst = false;
		}
		$scope.collection().refresh();
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
	$rootScope.$on('contact.update', function(ev, updateContact) {
		updateCollection('Contacts', updateContact);
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
