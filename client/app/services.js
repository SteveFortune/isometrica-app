'use strict';

var app = angular.module('isa');


/**
 * Utility service that encapsulates transforming a factory name
 *
 * @author Steve Fortune
 */
app.service('PersistentFactoryNameResolver', ['$rootScope', function($rootScope) {
	return {
		resolveFactory : function(name) {
			var suffix = $rootScope.online ? 'Remote' : 'Local';
			return '_' + name + suffix;
		}
	};
}]);


/**
 * Service that holds the current 'context' of the application.
 *
 * @author Steve Fortune
 */
app.service('CurrentUser',
	['IsometricaUser', 'AUTH_EVENTS', '$rootScope',
	function(IsometricaUser, AUTH_EVENTS, $rootScope) {

	/**
	 * Current logged in user/ account or null if not logged in
	 *
	 * @var Object | null
	 */
	var currentUser = null;
	var currentAccount = null;

	/**
	 * Is the current user authenticated?
	 *
	 * @var Boolean
	 */
	var isAuthenticated = IsometricaUser.isAuthenticated();

	/**
	 * @param		user		Object
	 * @private
	 */
	var setCurrentUser = function(user) {

		//set default active account (=first in list)
		if (user && user.accounts) {
			currentAccount = user.accounts[0];
		} else {
			currentAccount = null;
		}

		currentUser = user;
		isAuthenticated = !!currentUser;

	};

	/**
	 * Handles successful login events by resetting the current user.
	 *
	 * @private
	 */
	$rootScope.$on(AUTH_EVENTS.loginSuccess, function(e, user) {
		setCurrentUser(user);
	});

	/**
	 * Bind the service to the root scope so that it can be accessed easily in
	 * templates via `$root.getCurrentUser()`.
	 *
	 * @return 	Object	The current user
	 * @public
	 */
	$rootScope.getCurrentUser = function() {
		return currentUser;
	};

	return {

		/**
		 * @return Boolean
		 */
		isAuthenticated: function() {
			return isAuthenticated;
		},

		/**
		 * Attempts to retrieve the current user using the IsometricaUser service.
		 * Includes the acounts that the user is a member of.
		 *
		 * @note How will this work on local devices?
		 */
		retrieveCurrentUser: function() {
			IsometricaUser.find( {
					filter : {
						where : { id : IsometricaUser.getCurrentId() } , 
						include : 'accounts'
					}
				},
				function(res) {
					setCurrentUser( res[0] );
				},
				function(err) {
					console.error(err);
				});
		},

		/**
		 * @return	Object | null
		 */
		getCurrentUser: function() {
			return currentUser;
		},

		/**
		 * Is there a current user object? Alias for !!CurrentUser.getCurrentUser()
		 *
		 * @return Boolean
		 */
		hasCurrentUser: function() {
			return !!currentUser;
		},

		/**
		 * Sets the current user to null
		 */
		clearCurrentUser: function() {
			setCurrentUser(null);
		},

		/**
		 * Gets the current/ active account
		 *
		 * @return  Object | null
		 */
		getCurrentAccount : function() {
			return currentAccount;
		},

		/**
		 * Sets the current/ active account
		 */
		setCurrentAccount: function(account) {
			currentAccount = account;
		}

	};

}]);
