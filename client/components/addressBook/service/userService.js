'use strict';

var app = angular.module('isa.addressbook');

/**
 * Basic service responsible for CRUD operations on users.
 *
 * @note Could we use a provider here somehow? It seems a lot cleaner.
 * @note As users might be quite commonly accessed throughout the application, it
 * 		 might be worth having a base user service in the `app/` dir and inheriting
 * 		 from it here.
 * @author Steve Fortune
 */
isa.persistentService(app, 'UserService');

app.factory('_UserServiceRemote', ['IsometricaUser', '$q', function(IsometricaUser, $q) {

	/**
	 * The size of the result pages
	 *
	 * @todo Move this to and `app.value();` or application config or a
	 * 		 base service.
	 * @const Number
	 */
	var PAGE_SIZE = 10;

	return {


	}
}]);

app.factory('_UserServiceLocal', ['$q', function($q) {
	return {
		all: function() {
			return $q(function(resolve, reject) {
				resolve([]);
			});
		},
		findBy: function(predicate) {
			return $q(function(resolve, reject) {
				resolve(predicate);
			});
		},
		insert: function(newUser) {
		},
		delete: function(user) {

		},
		save: function(user) {

		}
	}
}]);
