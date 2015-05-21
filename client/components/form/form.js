'use strict';

var app = angular.module('isa.form', []);


/**
 * A dictionary defining the isolated scope for form field directives.
 * This is so that registering new reuseable form fields can be done without
 * having to duplicate the same config.
 *
 * @var Object
 */
var FormFieldScope = {
	title: '@',
	validationModel: '=',
	pendingModel: '=',
	inputType: '@',
	inputName: '@',
	inputPlaceholder: '@'
};


/**
 * Basic form field. For convenience to reduce boilerplate.
 *
 * @author Steve Fortune
 */
app.directive('isaBasicField', function() {
	return {
		restrict: 'E',
		templateUrl: '/components/form/basicField.html',
		scope: FormFieldScope
	};
});


/**
 * Parent of isaInput and isaValidationMessages elements. Holds the validation
 * and pending models and requries a parent form controller.
 *
 * @author Steve Fortune
 */
app.directive('isaFormField', function() {
	return {
		restrict: 'AE',
		transclude: true,
		template: '<ng-transclude></ng-transclude>',
		require: '^form',
		controller: function() {},
		scope: {
			validationModel: '=',
			pendingModel: '='
		}
	};
});


/**
 * Directive that encapsulates a form input. Allows the user to pass in a map of
 * validation and pending messages that will be dynamically associated with the
 * input field.
 *
 * @author Steve Fortune
 */
app.directive('isaInput', ['$compile', function($compile) {
	return {
		restrict: 'E',
	    priority: 1000,
        transclude: true,
		replace: true,
		require: [ '^isaFormField', '^ngModel' ],
		templateUrl: '/components/form/input.html',
		link: function(scope, inputElm, attrs, controllers) {
			angular.forEach(scope.validationModel, function(attr, name) {
				var value = typeof attr === 'object' ? attr.value : true;
				var denormalizedName = name.replace(/([A-Z])/g, '-$1').toLowerCase();
				inputElm.attr(denormalizedName, value);
			});
			$compile(inputElm)(scope);
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
		require: [ '^isaFormField', '^form' ],
		templateUrl: '/components/form/validationMessages.html',
		transclude: true,
		compile: function() {
			return function(scope, elm, attrs, ctrl, transcludeFn) {

				/**
				 * @var ngFormController
				 */
				scope.form = ctrl[1];

				/**
				 * This function takes a block and validation model and transcludes the validation
				 * messages into it as well as setting up its bindings using $watch
				 *
				 * @param	block			Object
				 * @param	valModel		Object
				 * @param	isValidation	Boolean
				 * @private
				 */
				var setupBlock = function(block, valModel, isValidation) {

					angular.forEach(valModel, function(val, name) {

						var tScope = scope.$new();
						tScope.name = name;
						tScope.message = typeof val === 'object' ? val.message : val;

						var watchErr = function(valName, tClone) {
							var formModelMessages = (isValidation ? '$error' : '$pending');
							scope.$watch('form[inputName].' + formModelMessages + '.' + valName, function(newValue, oldValue) {
								tClone[ !newValue ? 'addClass' : 'removeClass' ]('ng-hide');
							});
						};

						transcludeFn(tScope, function(clone) {
							var tClone = angular.element(clone);
							block.append(tClone);
							watchErr(name, tClone);
						});
					});
				};

				var valQuery = elm[0].querySelector('div.isa-validation-messages');
				var penQuery = elm[0].querySelector('div.isa-pending-messages');
				var validationBlock = angular.element(valQuery);
				var pendingBlock = angular.element(penQuery);

				setupBlock(validationBlock, scope.$parent.validationModel, true);
				setupBlock(pendingBlock, scope.$parent.pendingModel, false);

			};
		},
		scope: {
			inputName: '@',
			showPendingMessages: '@',
			showValidationMessages: '@'
		}
	};
});
