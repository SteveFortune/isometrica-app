'use strict';

var app = angular.module('isa.addressbook.factories', []);


/**
 * Basic service responsible for CRUD operations on users.
 *
 * @note Could we use a provider here somehow? It seems a lot cleaner.
 * @note As users might be quite commonly accessed throughout the application, it
 * 		 might be worth having a base user service in the `app/` dir and inheriting
 * 		 from it here.
 * @author Steve Fortune
 */
app.factory('UserFactory', ['$injector', 'PersistentFactoryNameResolver',
	function($injector, PersistentFactoryNameResolver) {
		return $injector.get(PersistentFactoryNameResolver.resolveFactory('UserFactory'));
	}]);

app.factory('_UserFactoryRemote', ['IsometricaUser', '$q', function(IsometricaUser, $q) {

	/**
	 * The size of the result pages
	 *
	 * @todo Move this to and `app.value();` or application config or a
	 * 		 base service.
	 * @const Number
	 */
	var PAGE_SIZE = 10;

	/**
	 * Computes the collection offset for a given page index.
	 *
	 * @private
	 * @return 	Number
	 */
	var offsetForPage = function(page) {
		return page*PAGE_SIZE;
	};

	return {

		/**
		 * Find all users.
		 *
		 * @public
		 * @param	page		Number	The result page offset of the results to query for
		 * @return 	Promise
		 */
		all: function(page) {
			return $q(function(resolve, reject) {
				IsometricaUser.find({
					filter: {
						offset: offsetForPage(page),
						limit: PAGE_SIZE
					}
				}, resolve, reject);
			});
		},

		/**
		 * Finds an individual user by a given predicate (e.g. a hash of attributes to
		 * match against).
		 *
		 * @public
		 * @param	predicate	Object	Hash of attribute-value pairs to match against
		 * @return 	Promise
		 */
		findOneBy: function(predicate) {
			return $q(function(resolve, reject) {
				IsometricaUser.findOne({
					filter: {
						where: predicate
					}
				}, resolve, reject);
			});
		},

		/**
		 * Creates a user. Does _not_ perform any validation.
		 *
		 * @public
		 * @param	newUser		Object	The user's attribute/values
		 * @return 	Promise
		 */
		insert: function(newUser) {
			return $q(function(resolve, reject) {
				IsometricaUser.create(null, newUser, resolve, reject);
			});
		},

		/**
		 * Deletes a user by a given id.
		 *
		 * @public
		 * @param	userId		Number | String		The id of the user to delete
		 * @return 	Promise
		 */
		deleteById: function(userId) {
			return $q(function(resolve, reject) {
				IsometricaUser.deleteById({
					id: userId
				}, resolve, reject);
			});
		},

		/**
		 * Updates a user by a given id.
		 *
		 * @public
		 * @param	userId		Number | String		The id of the user to update
		 * @param	user		Object				Attributes / values for the user
		 * @return 	Promise
		 */
		updateById: function(userId, user) {
			return $q(function(resolve, reject) {
				IsometricaUser.update({
					where: {
						id: userId
					}
				}, user, resolve, reject);
			});
		}

	}
}]);

app.factory('_UserFactoryLocal', [function() {
	return {
		all: function() {
			return [];
		},
		findBy: function(predicate) {
			return [];
		},
		insert: function(newUser) {
		},
		delete: function(user) {

		},
		save: function(user) {

		}
	}
}]);
