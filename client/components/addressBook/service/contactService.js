'use strict';

/**
 * @author Steve Fortune
 */
(function(angular, isa) {

	var app = angular.module('isa.addressbook');
	var _ContactServiceRemote = function(Contact, IsometricaUser, $q) {
		isa.AbstractRemoteService.call(this, Contact, $q);
		this.IsometricaUser = IsometricaUser;
	};

	_ContactServiceRemote.$inject = [ 'Contact', 'IsometricaUser', '$q' ];
	_ContactServiceRemote.prototype = Object.create(isa.AbstractRemoteService.prototype);

	/**
	 * Finds all the contacts associated with a given user.
	 *
	 * @param	user	Object
	 * @return 	Promise
	 */
	_ContactServiceRemote.prototype.allForUser = function(user) {
		var self = this;
		return self.$q(function(resolve, reject) {
			self.IsometricaUser.callTreeContacts({
				id: user.id
			}, function(contacts) {
				resolve(contacts);
			}, function(err) {
				reject(err);
			});
		});
	};

	app.service('_ContactServiceRemote', _ContactServiceRemote);
	app.service('_ContactServiceLocal', ['$q', function($q) {}]);
	isa.persistentService(app, 'ContactService');

})(angular, isa);
