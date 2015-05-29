'use strict';

/**
 * @author Steve Fortune
 */
(function(angular, isa) {

	var app = angular.module('isa.addressbook');
	var _ContactServiceRemote = function(Contact, $q) {
		isa.AbstractRemoteService.call(this, Contact, $q);
	};
	_ContactServiceRemote.$inject = [ 'Contact', '$q' ];
	_ContactServiceRemote.prototype = Object.create(isa.AbstractRemoteService.prototype);

	app.service('_ContactServiceRemote', _ContactServiceRemote);
	app.service('_ContactServiceLocal', ['$q', function($q) {}]);
	isa.persistentService(app, 'ContactService');

})(angular, isa);
