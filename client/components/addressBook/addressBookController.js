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
			selectState: '&',
			organisation: '='
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
