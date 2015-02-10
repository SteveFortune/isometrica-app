
var app = angular.module('resilify', [

	'ui.router',
	'ngResource'

] );

app.run( function($state) {

	//show default state: dashboard
	$state.go('dashboard');

});
