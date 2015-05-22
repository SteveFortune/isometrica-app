
var app = angular.module('isa.form.group', []);

/**
 * @author Steve Fortune
 */
app.directive('isaFormGroup', function() {
	return {
		restrict: 'E',
		templateUrl: '/components/form/group/group.html',
		transclude: true,
		link: function(scope) {

			/**
			 * @var	Boolean
			 */
			scope.isOpen = false;
		},
		scope: {
			'title': '@'
		}
	};
});

/**
 * @author Steve Fortune
 */
app.directive('isaGroupRow', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: '/components/form/group/row.html',
		scope: {
			'title': '@',
			'delete': '&'
		}
	};
});
