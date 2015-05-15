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

			/**
			 * Has the original mobel value been set?
			 *
			 * @private
			 */
			ctrl.isOriginalValueSet = false;

			/**
			 * Watch the model to cache the original model value.
			 *
			 * @private
			 */
			scope.$watch(function() {
				if (!ctrl.isOriginalValueSet) {
					ctrl.originalValue = ctrl.$modelValue;
					ctrl.isOriginalValueSet = true;
				}
			});

			ctrl.$asyncValidators.existsEmail = function(modelValue, viewValue) {
				if (ctrl.$isEmpty(modelValue) || modelValue === ctrl.originalValue) {
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


/**
 * This directive has the potential to be create. It will build you a custom
 * input field complete with validation messages.
 *
 * @author Steve Fortune
 */
app.directive('isaFormInput', ['$compile', function($compile) {
	return {
		restrict: 'AE',
		terminal: true,
	    priority: 1000,
		templateUrl: '/components/addressBook/user/formInput.html',
		link: function(scope, elm, attrs, ctrl) {
			var inputElm = elm.find('input');
			angular.forEach(scope.validationModel, function(attr, name) {
				var denormalizedName = name.replace(/([A-Z])/g, '-$1').toLowerCase();
				inputElm.attr(denormalizedName, true);
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
			validationModel: '=',
			pendingModel: '='
		}
	};
}]);


/**
 * Non-modal controller for rendering a readonly-view on a user.
 *
 * @author Steve Fortune
 */
app.controller('AddressBookUserController',
	['UserFactory', '$stateParams', '$scope', '$rootScope',
	function(UserFactory, $stateParams, $scope, $rootScope) {

	/**
	 * @var String
	 */
	var userId = $stateParams.userId;

	UserFactory.findOneBy({
		id: userId
	}).then(function(user) {
		$scope.user = user;
	}, function(error) {
		// TODO: Error handling
	});

	/**
	 * Listen to user udpate events and refresh our user edity to avoid rendering
	 * old data.
	 *
	 * @private
	 */
	$rootScope.$on('user.' + userId + '.update', function(event, newUser) {
		$scope.user = newUser;
	});

}]);


/**
 * Modal user controller. Performs create and edit operations on users.
 *
 * @note Because the users that we're mutating might be in use usewhere
 * 		 in the application, we emit `user.new`, `user.update` and
 *		 `user.{id}.update`
 *		 events.
 * @author Steve Fortune
 */
app.controller('ModalAddressBookUserController',
	['UserFactory', '$scope', '$rootScope', '$modalInstance', 'user',
	function(UserFactory, $scope, $rootScope, $modalInstance, user) {

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
	$scope.user = $scope.isNew ? {} : angular.copy(user);

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
			$rootScope.$emit('user.new', user);
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
			$rootScope.$emit('user.update', user);
			$rootScope.$emit('user.' + user.id + '.update', user);
		}, function(error) {
			$modalInstance.close(error);
		});
	};

}]);
