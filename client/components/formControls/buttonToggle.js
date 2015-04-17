var app = angular.module('isa');

app.directive('resButtonToggle', function() {
	
	return {

		scope: {
	      ngModel: '='
	    },
		restrict: 'AE',
		require: '^ngModel',
		replace: 'true',
		templateUrl: '/components/formControls/buttonToggle.html',

		controller : function($scope) {

		}
	};

});
