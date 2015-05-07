'use strict';

var app = angular.module('isa.addressbook', [
	'isa.addressbook.factories',
	'ui.router'
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
	 * Array of potential loading states
	 *
	 * @var Array
	 */
	var loadingStates = [
		'loading',
		'loaded',
		'failed'
	];

	/**
	 * The state of the asynchronous UI:
	 * - 'loading'
	 * - 'loaded'
	 * - 'failed'
	 *
	 * @var String
	 */
	var loadingState = 'loading';

	/**
	 * @return 	String
	 */
	$scope.getLoadingState = function() {
		return loadingState;
	};

	/**
	 * Sets the loading state property
	 *
	 * @param	loadingState	String	Must be one of the predefined strs
	 * @throws	Error			If loadingState is not one of the predefined
	 * 							strs
	 */
	$scope.setLoadingState = function(newLoadingState) {
		if (loadingStates.indexOf(newLoadingState) === -1) {
			throw new Error("Loading state must be: " + loadingStates.toString());
		}
		loadingState = newLoadingState;
	};

	/**
	 * The collection of users, contacts and organisations to render.
	 *
	 * @var Array
	 */
	$scope.addressBookCollection = [];

}]);

/**
 * @author Steve Fortune
 */
app.directive('isaAddressBookHeader', function() {
	return {
		templateUrl: '/components/addressBook/header.html',
		restrict: 'AE',
		transclude: true,
	};
});

/**
 * @author Steve Fortune
 */
app.directive('isaAddressBookFooter', function() {
	return {
		templateUrl: '/components/addressBook/footer.html',
		restrict: 'AE',
		transclude: true,
	};
});
