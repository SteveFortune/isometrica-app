'use strict';

var app = angular.module('isa.addressbook');

/**
 * @author Steve Fortune
 */
app.config(['$stateProvider', function($stateProvider) {
	console.log("Evaluating states");
	$stateProvider
		.state('addressbook', {
			url: '/addressbook',
			templateUrl: '/components/addressBook/addressBookView.html',
			controllerId: 'AddressBookController'
		});
}]);
