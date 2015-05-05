
var app = angular.module('isa.addressbook.services');

/**
 * Basic service responsible for CRUD operations on users.
 *
 * @note As users might be quite commonly accessed throughout the application, it
 * 		 might be worth having a base user service in the `app/` dir and inheriting
 * 		 from it here.
 * @note Can we encapsulate the boilerplate of checking whether we're online or not
 * 		 in an abstract factory of sorts?
 * @author Steve Fortune
 */
app.factory('UserService', ['$rootScope', '$injector', function($rootScope, $injector) {
	return $rootScope.online ?
		$injector.get('_UserServiceRemote') :
		$injector.get('_UserServiceLocal');
}]);

app.factory('_UserServiceRemote', ['User', function(User) {

}]);

app.factory('_UserServiceLocal', [function() {

}]);
