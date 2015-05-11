
var app = angular.module('isa');

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

/*
			$scope.showBackButton = false;

			$scope.menuAlignRight = xcUtils.getConfig('menuAlignRight') || false;
			$scope.menuOptions = [];
			$scope.menuOptionsSecondary = [];
			$scope.hasSecondaryOptions = false;

			//split primary/ secondary option
			angular.forEach( xcUtils.getConfig('menuOptions'), function(option) {
				option.collapsed = true;
				if (option.hasOwnProperty('isSecondary') && option.isSecondary) {
					$scope.menuOptionsSecondary.push( option);
					$scope.hasSecondaryOptions = true;
				} else {
					$scope.menuOptions.push( option);
				}
			});

			if ($scope.hasSecondaryOptions) {
				angular.element($document[0].body).addClass('has-bootcards-navbar-double');
			}



			//add handlers to show the collapsed/ expanded icon on lists with sub-options
			$timeout(function(){

		        $('.offcanvas li')
		        .on('shown.bs.dropdown', function() {
					var a = $(event.srcElement);
					var i = a.children("i");
					i.addClass("fa-chevron-circle-down").removeClass("fa-chevron-circle-right");
				})
				  .on('hidden.bs.dropdown', function() {
					var a = $(event.srcElement);
					var i = a.children("i");
					i.addClass("fa-chevron-circle-right").removeClass("fa-chevron-circle-down");
				});
		    });

			$scope.goBack = function() {
				$scope.$emit('selectItemEvent', null);
				$rootScope.hideList = false;
			};*/

		}

	};

}]);
