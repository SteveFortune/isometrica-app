
var app = angular.module('isa');

app.controller( 'LoginController', [
	'$scope', '$rootScope', '$location', 'AUTH_EVENTS', 'IsometricaUser',
	function($scope, $rootScope, $location, AUTH_EVENTS, IsometricaUser) {

	$scope.credentials = {
		email : 'mark@isometrica.com',
		password : 'isometrica'
	};

	$scope.hasError = false;
	$scope.errorMsg = "";

	$scope.login = function(credentials) {

		$scope.hasError = false;

	    $scope.loginResult = IsometricaUser.login({ rememberMe: $scope.rememberMe }, $scope.credentials,
	      function(res) {
	        // success
	        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, res);
      		var next = $location.nextAfterLogin || '/';
			$location.nextAfterLogin = null;
			$location.path(next);
	      }, function(res) {
	        // error
	        $scope.hasError = true;
	        $scope.errorMsg = res.statusText;
	        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
	      });
	 };

} ] );
