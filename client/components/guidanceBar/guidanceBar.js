var app = angular.module('isa');

app.directive('isaGuidanceBar', [ function() {

	return {

		replace : true,
		restrict : 'E',
		templateUrl : '/components/guidanceBar/guidanceBar.html',

		controller : function($scope) {

			$scope.hideBar = false;

			$scope.hideThis = function() {
				console.log('hide it');
				$scope.hideBar = true;
			};

		}

	};

}]);