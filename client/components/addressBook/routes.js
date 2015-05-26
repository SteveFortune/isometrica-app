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
			url: '/user/:id',
			templateUrl: '/components/addressBook/user/viewUser.html',
			controller: 'AddressBookReadUserController'
		});
}]);
