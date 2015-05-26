'use strict';

var app = angular.module('isa.addressbook.base');


/**
 * Async form validation directive that checks whether a user exists
 * for the given email address
 *
 * @author Steve Fortune
 */
app.directive('existsEmail', ['$q', 'UserFactory', function($q, UserFactory) {
	return {
		require: 'ngModel',
		restrict: 'A',
		link: function(scope, elm, attrs, ctrl) {

			/**
			 * Has the original mobel value been set?
			 *
			 * @private
			 */
			ctrl.isOriginalValueSet = false;

			/**
			 * Makes sure that the original value is set.
			 *
			 * @private
			 */
			var setOriginalValue = function() {
				if (!ctrl.isOriginalValueSet) {
					ctrl.originalValue = ctrl.$modelValue;
					ctrl.isOriginalValueSet = true;
				}
			};

			scope.$watch(setOriginalValue);

			ctrl.$asyncValidators.existsEmail = function(modelValue, viewValue) {
				if (
					ctrl.$isEmpty(modelValue) ||
					!ctrl.isOriginalValueSet ||
					modelValue === ctrl.originalValue
				) {
					return $q.when();
				}
				return UserFactory.findOneBy({
					email: modelValue
				}).then(function() {
					return $q.reject();
				}, function(error) {
					if (error === 404) {
						return $q.resolve();
					}
				});
			};
		}
	};
}]);


/**
 * Validates that password contains at least 1 number
 *
 * @author Steve Fortune
 */
app.directive('containsNumber', function() {
	return {
		require: 'ngModel',
		restrict: 'A',
		link: function(scope, elm, attrs, ctrl) {
			ctrl.$validators.containsNumber = function(modelValue, viewValue) {
				return ctrl.$isEmpty(modelValue) || /\d/.test(viewValue);
			};
		}
	};
});


/**
 * Validates that password contains at least 1 character
 *
 * @author Steve Fortune
 */
app.directive('containsLetter', function() {
	return {
		require: 'ngModel',
		restrict: 'A',
		link: function(scope, elm, attrs, ctrl) {
			ctrl.$validators.containsLetter = function(modelValue, viewValue) {
				return ctrl.$isEmpty(modelValue) || /[a-zA-Z]/.test(viewValue);
			};
		}
	};
});


/**
 * Validates that the value is a phone number. At present this verfifies that
 * the input consists of only numbers and '+'s.
 *
 * @author Steve Fortune
 */
app.directive('phoneNumber', function() {
	return {
		require: 'ngModel',
		restrict: 'A',
		link: function(scope, elm, attrs, ctrl) {
			ctrl.$validators.phoneNumber = function(modelValue, viewValue) {
				return ctrl.$isEmpty(modelValue) ||  /^\+?\d+$/.test(viewValue);
			};
		}
	};
});
