'use strict';

var app = angular.module('isa.addressbook');

/**
 * @author Steve Fortune
 */
app.directive('loadingAttr', ['$timeout', function($timeout) {
	return {
		restrict: 'A',
		require: '^?ngModel',
		compile: function() {
			return function(scope, elm, attrs, ctrl) {

				elm.addClass('label');
				elm.addClass('label-danger');

				scope.$watch('value', function(newValue, oldValue) {
					var elmVal = elm.html().trim();
					if (elmVal) {
						// TODO: Look pretty
						//elm.removeClass('label');
						//elm.removeClass('label-danger');
					} else if (ctrl && !ctrl.$modelValue) {
						elm.html('Loading...');
					} else {
						elm.html('None');
					}
				});
			};
		},
		scope: true
	};
}]);
