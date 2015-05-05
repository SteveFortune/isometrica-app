
'use strict';

var app = angular.module('isa.addressbook');


/**
 * @author Steve Fortune
 */
app.config(['$stateProvider', function($stateProvider) {
	stateProvider
		.state('addressbook', {
			url: '/addressbook',
			controllerId: 'AddressBookController',
			templateUrl: '/components/addressBook/'
		});
}]);
