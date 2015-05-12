'use strict';

var app = angular.module('isa.addressbook');

/**
 * @author Steve Fortune
 */
app.config(['$stateProvider', function($stateProvider) {
	$stateProvider
		.state('addressbook', {
			url: '/addressbook',
			templateUrl: '/components/addressBook/addressBookView.html',
			controller: 'AddressBookController'
		})
	$stateProvider
		.state('addressbook.user', {
			url: '/user/:userId',
			templateUrl: '/components/addressBook/user/viewUser.html',
			controller: 'AddressBookUserController'
		});
	$stateProvider
		.state('addressbook.newuser', {
			url: '/user/new',
			templateUrl: '/components/addressBook/user/newUser.html',
			controller: 'AddressBookUserController'
		});
}]);
