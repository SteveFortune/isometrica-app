'use strict';

var app = angular.module('isa.addressbook', [
	'isa.addressbook.factories',
	'ui.router',
	'infinite-scroll'
]);


/**
 * Main controller for address book UI.
 *
 * @route /addressbook
 * @author Steve Fortune
 */
app.controller('AddressBookController',
	['UserFactory', '$scope',
	function(UserFactory, $scope){

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
	 * @private
	 */
	$scope.loadMore = function() {
		UserFactory.all().then(function(items) {
			$scope.addressBookCollection = $scope.addressBookCollection.concat(items);
			$scope.loadingState = 'loaded';
		}, function() {
			$scope.loadingState = 'failed';
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
