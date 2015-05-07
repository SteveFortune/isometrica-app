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
	 * @note Don't set directly. Use designated setter.
	 * @var String
	 */
	$scope.selectState = 'Users';

	/**
	 * The state of the asynchronous UI.
  	 *
	 * @note Don't set directly. Use designated setter.
	 * @var String
	 */
	$scope.loadingState = 'loading';

	/**
	 * @param	loadingState	String	Must be one of the predefined strs
	 * @throws	Error			If loadingState is invalid
	 */
	$scope.setLoadingState = function(newLoadingState) {
		if ($scope.loadingStates.indexOf(newLoadingState) === -1) {
			throw new Error("Loading state must be: " + $scope.loadingStates.toString());
		}
		$scope.loadingState = newLoadingState;
	};

	/**
	 * @param	newSelectState	String	Must be one of the predefined strs
	 * @throws	Error			If selectState is invalid
	 */
	$scope.setSelectState = function(newSelectState) {
		if ($scope.selectStates.indexOf(newSelectState)) {
			throw new Error("Select state must be: " + $scope.selectStates.toString());
		}
		$scope.selectState = newSelectState;
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
		scope: {
			collection: '=',
			'sectionId': '@',
			'tileIcon': '@',
			'new': '=',
			'onEditItem': '&',
			'onNewItem': '&'
		}
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
