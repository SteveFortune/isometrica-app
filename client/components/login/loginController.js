
var app = angular.module('isa');

app.controller( 'LoginController', [
	'$scope', '$rootScope', '$location', '$state', 'AUTH_EVENTS', 'IsometricaUser', 'CurrentUser',
	function($scope, $rootScope, $location, $state, AUTH_EVENTS, IsometricaUser, CurrentUser) {

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

	    $scope.loginResult = IsometricaUser.login({ rememberMe: $scope.rememberMe }, 
	    	$scope.credentials,
	      function(res) {

	        // success: retrieve accounts data for this user
	        IsometricaUser.find( {
					filter : {
						where : { id : IsometricaUser.getCurrentId() } , 
						include : 'accounts'
					}
				},
				function(res) {
					//success
					$rootScope.$broadcast(AUTH_EVENTS.loginSuccess, res[0] );
					$state.go('account.overview');
				},
				function(err) {
					$scope.hasError = true;
					$scope.errorMsg = "User could not be found";
					$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
				});
	      }, function(res) {
	        // error
	        $scope.hasError = true;
	        $scope.errorMsg = res.data.error.message;
	        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
	      });

	};

} ] );
