'use strict';

var app = angular.module('isa.addressbook');

/**
 * Simple function that extends a given scope to add methods to it
 * for mutating an `entity`'s `_phoneNumber`s.
 *
 * @author 	Steve Fortune
 */
app.service('PhoneNumberViewModel', function() {
	return function($scope) {

		/**
		 * Deletes a phone number from the user at a given index.
		 *
		 * @param	at		Number
		 */
		$scope.deletePhoneNumber = function(at) {
			$scope.entity._phoneNumbers.splice(at, 1);
		};

		/**
		 * Creates a new empty phone number associated with the user.
		 */
		$scope.addPhoneNumber = function() {
			$scope.entity._phoneNumbers.push({});
		};

	};
});
