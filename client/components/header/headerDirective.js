
var app = angular.module('isa');

app.directive('isaHeader',
	['$state', 'IsometricaUser', 'CurrentUser',
	function($state, IsometricaUser, CurrentUser) {

	return {

		scope : {
			multiLine : '@'
		},
		replace : true,
		restrict : 'E',
		templateUrl: function(elem,attrs) {
			return '/components/header/' + (attrs.multiLine === 'true' ? 'headerViewMulti.html' : 'headerView.html');
		},
		transclude : true,

		controller : function($scope, $state, IsometricaUser) {

			$scope.currentUser = CurrentUser;
			
			$scope.logout = function() {
				IsometricaUser.logout( function() {
					CurrentUser.clearCurrentUser();
			 		$state.go('welcome');
				 });
			};

			//switch to a different account
			$scope.setCurrentAccount = function(account) {
				CurrentUser.setCurrentAccount(account);
				$state.go('account.overview');
			};
   
		}

	};

}]);

