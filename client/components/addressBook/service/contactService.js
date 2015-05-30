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
		var self = this;
		return self.$q(function(resolve, reject) {
			self.lbModel.find({
				userId: user.id
			}, function(err, contacts) {
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
	_ContactServiceRemote.prototype.insertForUser = function(user, contact) {
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

	app.service('_ContactServiceRemote', _ContactServiceRemote);
	app.service('_ContactServiceLocal', ['$q', function($q) {}]);
	isa.persistentService(app, 'ContactService');

})(angular, isa);
