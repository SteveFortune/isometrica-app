'use strict';

var app = angular.module('isa.form', []);


/**
 * Basic form field. For convenience to reduce boilerplate.
 *
 * @author Steve Fortune
 */
app.directive('isaBasicField', function() {
	return {
		restrict: 'E',
		templateUrl: '/components/form/basicField.html',
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
		require: [ '^form', '^ngModel' ],
		templateUrl: '/components/form/input.html',

		/**
		 * Uses the keys from the validation map to determine what validator
		 * directives to include on the input.
		 *
		 * It dynamically adds these attributes to the element and then recompiles
		 * it.
		 *
		 */
		link: function(scope, elm, attrs, controllers) {

			var formController = controllers[0];
			var ngModelController = controllers[1];

			var inputElm = elm.find('input');
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
		templateUrl: '/components/form/validationMessages.html',
		link: function(scope, elm, attrs, controllers) {

			/**
			 * Is the given attribute paired with the name an object ?
			 *
			 * @return Boolean
			 */
			scope.isAttributeObject = function(attr) {
				return typeof attr === 'object';
			};

		},
		scope: {
			showPendingMessages: '@',
			showValidationMessages: '@'
		}
	};
});
