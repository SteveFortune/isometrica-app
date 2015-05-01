
var app = angular.module('isa');

app.controller( 'LoginController', [ 
	'$scope', '$rootScope', '$location', 'AUTH_EVENTS', 'IsometricaUser',
	function($scope, $rootScope, $location, AUTH_EVENTS, IsometricaUser) {

	//for debug purposes: set default credentials
	$scope.credentials = {
		email : 'mark@isometrica.com',
		password : 'isometrica'
	};

	$scope.hasError = false;
	$scope.errorMsg = "";
	$scope.rememberMe = false;

	$scope.isLogin = true;

	//login the user
	$scope.login = function(credentials) {

		$scope.hasError = false;
	
	    $scope.loginResult = IsometricaUser.login({ rememberMe: $scope.rememberMe }, $scope.credentials,
	      function(res) {
	        // success
	        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      		$scope.setCurrentUser(res.user);
      		var next = $location.nextAfterLogin || '/overview';
			$location.nextAfterLogin = null;
			$location.path(next);
	      }, function(res) {
	        // error
	        $scope.hasError = true;
	        $scope.errorMsg = res.data.error.message;
	        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
	      });
	 };

} ] );
