
var app = angular.module('resilify', [

	'ui.router',
	'ui.bootstrap',
	'ngResource',
	'ngAnimate',
	'ngTouch',

	'lbServices', 
	
	'angular-growl'

] );

app.run( function($state) {

	//show default state: dashboard
	$state.go('dashboard');

});

app.config(['growlProvider', function (growlProvider) {
  growlProvider.globalTimeToLive(3000);
  growlProvider.globalDisableCountDown(true);
}]);

app.config(['$httpProvider', function($httpProvider) {  
  
  //intercept authentication errors and redirect to login form
  $httpProvider.interceptors.push(function($q, $location) {
    return {
      responseError: function(rejection) {
        if (rejection.status == 401) {
          $location.nextAfterLogin = $location.path();
          $location.path('/login');
        }
        return $q.reject(rejection);
      }
    };
  });
  
}]);



app.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
});

app.controller('AppController', 
	function ($scope, $sessionStorage) {
  $scope.currentUser = null;
  //$scope.userRoles = USER_ROLES;
  //$scope.isAuthorized = AuthService.isAuthorized;
 
  $scope.setCurrentUser = function (user) {
  	console.log('token is', user.token);
  	//$sessionStorage.token = user.token;
  	//$sessionStorage.userId = user.id;
    $scope.currentUser = user;
  };
});
