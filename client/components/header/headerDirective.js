
var app = angular.module('isa');

//single line header
app.directive('isaHeader',
	['$state', 'IsometricaUser', 'CurrentUser',
	function($state, IsometricaUser, CurrentUser) {

	return {

		replace : true,
		restrict : 'E',
		templateUrl : '/components/header/headerView.html',
		transclude : true,

		controller : function($scope, $state, IsometricaUser) {

			$scope.currentUser = CurrentUser;
			$scope.logout = function() {
				IsometricaUser.logout( function() {
					CurrentUser.clearCurrentUser();
			 		$state.go('welcome');
				 });
			};
   
		}

	};

}]);

//double line header
app.directive('isaHeaderDouble', 
	['$state', 'IsometricaUser', 'CurrentUser',
	function($state, IsometricaUser, CurrentUser) {

	return {

		replace : true,
		restrict : 'E',
		templateUrl : '/components/header/headerViewMulti.html',
		transclude : true,

		controller : function($scope, $state, IsometricaUser) {

			$scope.currentUser = CurrentUser;
			$scope.logout = function() {
				IsometricaUser.logout( function() {
					CurrentUser.clearCurrentUser();
			 		$state.go('welcome');
				 });
			};

		}

	};

}]);
