
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
