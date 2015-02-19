
var app = angular.module('resilify');

app.controller( 'LoginController', [ 
	'$scope', '$rootScope', '$location', 'AUTH_EVENTS', 'ResilifyUser',
	function($scope, $rootScope, $location, AUTH_EVENTS, ResilifyUser) {

	$scope.credentials = {
		email : 'mark@resilify.com',
		password : 'resilify'

	};
	$scope.hasError = false;
	$scope.errorMsg = "";

	$scope.login = function(credentials) {
		$scope.hasError = false;
		console.log('call login with', $scope.credentials);

	    $scope.loginResult = ResilifyUser.login({ rememberMe: $scope.rememberMe }, $scope.credentials,
	      function(res) {
	        // success
	        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      		//$scope.setCurrentUser(user);
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
