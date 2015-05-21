'use strict';

var app = angular.module('isa.form', []);


/**
 * @var Array
 */
var registeredFieldTypes = [
	'basic',
	'custom'
];


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
		templateUrl: function(elm, attrs) {
			var type = attrs.fieldType;
			if (!isa.utils.contains(registeredFieldTypes, attrs.fieldType)) {
				type = 'basic';
			}
			return '/components/form/field/' + type + '.html';
		},
		require: '^form',
		controller: ['$scope', function($scope) {

			/**
			 * @public
			 * @return Object
			 */
			this.validationModel = function() {
				return $scope.validationModel;
			};

			/**
			 * @public
			 * @return Object
			 */
			this.pendingModel = function() {
				return $scope.pendingModel;
			};

		}],
		scope: {
			validationModel: '=',
			pendingModel: '=',
			ngModel: '=',
			title: '@',
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
 * @author Steve Fortune
 */
app.directive('isaInput', ['$compile', function($compile) {
	return {
		restrict: 'E',
	    priority: 1000,
        transclude: true,
		replace: true,
		require: '^isaFormField',
		templateUrl: '/components/form/input.html',
		link: function(scope, inputElm, attrs, isaFormField) {
			angular.forEach(isaFormField.validationModel(), function(attr, name) {
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
		replace: true,
		compile: function() {
			return function(scope, elm, attrs, ctrl, transcludeFn) {

				/**
				 * @var isaFormFieldCtrl
				 */
				var isaFormField = ctrl[0];

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
						tScope.$validatorName = name;
						tScope.$message = typeof val === 'object' ? val.message : val;

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

				setupBlock(validationBlock, isaFormField.validationModel(), true);
				setupBlock(pendingBlock, isaFormField.pendingModel(), false);

			};
		},
		scope: {
			inputName: '@',
			showPendingMessages: '@',
			showValidationMessages: '@'
		}
	};
});
