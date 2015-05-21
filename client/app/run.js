'use strict';

var app = angular.module('isa');


/**
 * Procedure that provides top-level, frontend authorization and that lazily loads
 * the user using the CurrentUser service.
 *
 * @author Steve Fortune
 */
app.run(['$rootScope', 'CurrentUser', '$state', '$location', function($rootScope, CurrentUser, $state, $location) {

	$rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
		if (CurrentUser.hasCurrentUser()) {
			return;
		} else if (CurrentUser.isAuthenticated()) {
			CurrentUser.retrieveCurrentUser();
	    } else if (!toState.data.anonymous) {
	        event.preventDefault();
	        $location.nextAfterLogin = $location.path();
	    	$state.go('login');
		}
	});

}]);
