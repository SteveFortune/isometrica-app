
var app = angular.module('isa.addressbook.services');


/**
 * Basic service responsible for CRUD operations on users.
 *
 * @note Could we use a provider here somehow? It seems a lot cleaner.
 * @note As users might be quite commonly accessed throughout the application, it
 * 		 might be worth having a base user service in the `app/` dir and inheriting
 * 		 from it here.
 * @author Steve Fortune
 */
app.factory('UserFactory', ['$rootScope', '$injector', 'PersistentFactoryNameResolver',
	function($rootScope, $injector, PersistentFactoryNameResolver) {
		return PersistentFactoryNameResolver.resolve('UserFactory');
	}]);

app.factory('_UserFactoryRemote', ['User', function(User) {
	return {
		all: function() {
			User.
		},
		findBy: function(predicate) {

		},
		insert: function(newUser) {

		},
		delete: function(user) {

		},
		save: function(user) {

		}
	}
}]);

app.factory('_UserFactoryLocal', [function() {
	return {
		all: function() {

		},
		findBy: function(predicate) {

		},
		insert: function(newUser) {

		},
		delete: function(user) {

		},
		save: function(user) {

		}
	}
}]);
