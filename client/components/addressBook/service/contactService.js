'use strict';

/**
 * @author Steve Fortune
 */
(function(angular, isa) {

	var app = angular.module('isa.addressbook');
	var _ContactServiceRemote = function(Contact, $q, IsometricaUser) {
		isa.AbstractRemoteService.call(this, Contact, $q);
	};

	/**
	 * Finds all the contacts associated with a given user.
	 *
	 * @note 	To remain consistent with the persistent-agnostic architecture
	 *			we _cannot_ make a call to user.orders() at the controller layer.
	 *			This would break encapsulation and make the controllers dependent
	 *			on loopback.
	 * @param	user	Object
	 * @return 	Promise
	 */
	_ContactServiceRemote.prototype.allForUser = function(user) {
		return this.$q(function(resolve, reject) {
			user.callTreeContacts({}, function(err, contacts) {
				if (err) {
					reject(err);
				} else {
					resolve(contacts);
				}
			});
		});
	};

	/**
	 * Creates a contact associated with a given user.
	 *
	 * @param	user	Object
	 * @param	contact	Object
	 * @return 	Promise
	 */
	_ContactServiceRemote.prototype.createForUser = function(user, contact) {
		return this.$q(function(resolve, reject) {
			user.callTreeContacts.create(contact, function(err, contact) {
				if (err) {
					reject(err);
				} else {
					results(contact);
				}
			})
		});
	};

	_ContactServiceRemote.$inject = [ 'Contact', '$q', 'IsometricaUser' ];
	_ContactServiceRemote.prototype = Object.create(isa.AbstractRemoteService.prototype);

	app.service('_ContactServiceRemote', _ContactServiceRemote);
	app.service('_ContactServiceLocal', ['$q', function($q) {}]);
	isa.persistentService(app, 'ContactService');

})(angular, isa);
