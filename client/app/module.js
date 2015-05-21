
var app = angular.module('isa', [

    'isa.docwiki',
    'isa.addressbook',
    'isa.profileimg',

	'ui.router',
	'ui.bootstrap',
	'ngResource',
	'ngAnimate',
	'ngTouch',

	'lbServices',

	'angular-growl',

  'lowladb'

] );


app.config(['growlProvider', function (growlProvider) {
  growlProvider.globalTimeToLive(3000);
  growlProvider.globalDisableCountDown(true);
}]);

app.config(['$logProvider', '$httpProvider', function($logProvider, $httpProvider) {

  //intercept authentication errors and redirect to login form
  $httpProvider.interceptors.push(function($q, $location, LoopBackAuth) {
    return {
      responseError: function(rejection) {
        if (rejection.status == 401) {

          LoopBackAuth.clearUser();
          LoopBackAuth.clearStorage();

          $location.nextAfterLogin = $location.path();
          $location.path('/login');
        }
        return $q.reject(rejection);
      }
    };
  });

  $logProvider.debugEnabled(true);

}]);

app.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
});

app.run(function($window, $rootScope) {

  //detect if the user if online or offline

  $rootScope.online = navigator.onLine;

  $window.addEventListener("offline", function () {
    $rootScope.$apply(function() {
      $rootScope.online = false;
    });
  }, false);

  $window.addEventListener("online", function () {
    $rootScope.$apply(function() {
      $rootScope.online = true;
    });
  }, false);

});

//global directive to be able to set the focus on elements created inline
app.directive('autofocus', function ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, element) {
      $timeout( function() {
        element[0].focus();
      });
    }
  };
});

//filter to show a text if a value is blank
app.filter('blankString', function() {
    return function(input) {
      var empty = !input;
        return empty ? '(empty)' : input;
    };
});
