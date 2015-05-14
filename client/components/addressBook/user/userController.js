'use strict';

var app = angular.module('isa.addressbook.user', [
	'isa.addressbook.factories',
	'ui.bootstrap'
]);


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
			ctrl.$asyncValidators.existsEmail = function(modelValue, viewValue) {
				return ctrl.$isEmpty(modelValue) ? $q.when() : UserFactory.findOneBy({
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
 * @author Steve Fortune
 */
app.directive('isaAddressBookModalHeader', function() {
	return {
		templateUrl: '/components/addressBook/user/modalHeader.html',
		restrict: 'AE',
		scope: {
			onSave: '&',
			onCancel: '&',
			canSave: '=',
			title: '@'
		}
	};
});


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


app.directive('isaFormInput', ['$compile', function($compile) {
	return {
		restrict: 'AE',
		terminal: true,
	    priority: 1000,
		templateUrl: '/components/addressBook/user/formInput.html',
		controller: ['$scope', function($scope) {}],
		link: function(scope, elm, attrs, ctrl) {
			var inputElm = elm.find('input');
			angular.forEach(scope.validationModel, function(attr, name) {
				inputElm.attr(name, true);
			});
			$compile(inputElm)(scope);
		},
		scope: {
			title: '@',
			inputPlaceholder: '@',
			inputType: '@',
			inputName: '@',
			model: '=',
			form: '=',
			validationModel: '='
		}
	};
}]);


/**
 * Non-modal controller for rendering a readonly-view on a user.
 *
 * @author Steve Fortune
 */
app.controller('AddressBookUserController',
	['UserFactory', '$stateParams', '$scope',
	function(UserFactory, $stateParams, $scope) {

	UserFactory.findOneBy({
		id: $stateParams.userId
	}).then(function(user) {
		$scope.user = user;
	}, function(error) {
		// TODO: Error handling
	});

}]);


/**
 * Modal user controller. Performs create and edit operations on users.
 *
 * @author Steve Fortune
 */
app.controller('ModalAddressBookUserController',
	['UserFactory', '$scope', '$modalInstance', 'user',
	function(UserFactory, $scope, $modalInstance, user) {

	/**
	 * Are we creating a new user or editing an already-existing one?
  	 *
	 * @var Boolean
	 */
	$scope.isNew = !user;

	/**
	 * Our user object
	 *
	 * @var Object
	 */
	$scope.user = user;

	/**
	 * Dismisses the modal instance.
	 */
	$scope.cancel = function() {
		$modalInstance.dismiss();
	};

	/**
	 * Persists new user.
	 *
	 * @throws 		Error	If !isNew
	 * @protected
	 */
	$scope.createUser = function() {
		if (!$scope.isNew) {
			throw new Error("Not creating user.");
		}
		UserFactory.insert($scope.user).then(function(user) {
			$modalInstance.close(user);
		}, function(error) {
			$modalInstance.close(error);
		});
	};

	/**
	 * Persists updated user attributes.
	 *
	 * @throws 		Error	If isNew
	 * @protected
	 */
	$scope.updateUser = function() {
		if ($scope.isNew) {
			throw new Error("Can only update existing users");
		}
		UserFactory.updateById(user.id, $scope.user).then(function(user) {
			$modalInstance.close(user);
		}, function(error) {
			$modalInstance.close(error);
		});
	};

}]);
