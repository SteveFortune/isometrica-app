'use strict';


/**
 * Basic form field. For convenience to reduce boilerplate.
 *
 * @author Steve Fortune
 */
app.directive('isaBasicField', function() {
	return {
		restrict: 'E',
		templateUrl: '/components/formInput/basicField.html',
		scope: {
			title: '@',
			validationModel: '=',
			pendingModel: '=',
			inputType: '@',
			inputName: '@',
			inputPlaceholder: '@'
		}
	};
});


/**
 * Directive that encapsulates a form input. Allows the user to pass in a map of
 * validation and pending messages that will be dynamically associated with the
 * input field.
 *
 * @author
 */
app.directive('isaInput', ['$compile', function($compile) {
	return {
		restrict: 'E',
	    priority: 1000,
		transclude: true,
		replace: true,
		require: [ '^form', 'ngModel' ]
		templateUrl: '/components/formInput/input.html',
		link: function(scope, inputElm, attrs, controllers) {

			/**
			 * Is the given attribute paired with the name an object ?
			 *
			 * @return Boolean
			 */
			scope.isAttributeObject = function(attr) {
				return typeof attr === 'object';
			};

			angular.forEach(scope.validationModel, function(attr, name) {
				var value = scope.isAttributeObject(attr) ? attr.value : true;
				var denormalizedName = name.replace(/([A-Z])/g, '-$1').toLowerCase();
				inputElm.attr(denormalizedName, value);
			});
			$compile(inputElm)(scope);

		},
		scope: {
			validationModel: '=',
			pendingModel: '='
		}
	};
}]);


/**
 * Renders a collection of validation messages based on the state of its parent input
 * by transcluding the given template.
 *
 * @author Steve Fortune
 */
app.directive('isaValidationMessages', function() {
	return {
		restrict: 'AE',
		transclude: true,
		replace: true,
		require: [ '^form', '^isaInput' ],
		templateUrl: '/components/formInput/validationMessages.html',
		scope: {
			showPendingMessages: '@',
			showValidationMessages: '@'
		}
	};
});
