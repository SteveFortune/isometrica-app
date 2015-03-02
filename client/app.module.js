
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
	function ($scope, $compile) {
  $scope.currentUser = null;
  //$scope.userRoles = USER_ROLES;
  //$scope.isAuthorized = AuthService.isAuthorized;

  var isIOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
  var isAndroid = navigator.userAgent.match(/Android/i);

  var head = angular.element(document.querySelector('head'));
  var body = angular.element(document.querySelector('body'));

  if(head.scope().injectedStylesheets === undefined)
  {
      head.scope().injectedStylesheets = [];
      head.append(
        $compile(
          "<link data-ng-repeat='stylesheet in injectedStylesheets' data-ng-href='{{stylesheet.href}}' rel='stylesheet' />")
        ($scope)); 
  }

  if (isIOS) {
    head.scope().injectedStylesheets.push({href: '/assets/libs/bootcards/dist/css/bootcards-ios.css'});
    body.addClass('ios');
  } else if (isAndroid) {
    head.scope().injectedStylesheets.push({href: '/assets/libs/bootcards/dist/css/bootcards-android.css'});
    body.addClass('android');
  } else {
    head.scope().injectedStylesheets.push({href: '/assets/libs/bootcards/dist/css/bootcards-desktop.css'});
    body.addClass('desktop');

  }

  //load resilify css
  head.scope().injectedStylesheets.push({href: "/assets/css/resilify.css"});

  $scope.setCurrentUser = function (user) {
  	console.log('token is', user.token);
  	//$sessionStorage.token = user.token;
  	//$sessionStorage.userId = user.id;
    $scope.currentUser = user;
  };
});
