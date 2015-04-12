
var app = angular.module('resilify');

/**
 * Simple base controller for modal controllers.
 *
 * @author Steve Fortune
 */
app.controller('AbstractModelController', [
	'$scope', '$modal', '$modalInstance', 'collection', 'limit', '$rootScope',
	function($scope, $modal, $modalInstance, collection, limit, $rootScope) {

	/**
	 * The collection of entities that we're manipulating in our modal form.
	 *
	 * @note A working copy of this collection is manipulated. Parent controllers
	 * 		 should replace their collection with this copy via the result promise.
	 * @var object
	 */
	$scope.collection = collection ? angular.copy(collection) : [];

	/**
	 * Can we save the collection? Determined based on whether a collection form
	 * exists with the scope and its valid.
	 *
	 * @return boolean
	 * @protected
	 */
	$scope.canSave = function() {
		return !$scope.collectionForm || $scope.collectionForm.$valid;
	};

	/**
	 * Can we delete the collection at the moment?
	 *
	 * @return boolean
	 * @protected
	 */
	$scope.canDelete = function() {
		return $scope.collection.length > 0;
	};

	/**
	 * Has the collection reached its limit?
	 *
	 * @return boolean
	 * @protected
	 */
	$scope.canAdd = function() {
		return $scope.collection.length < limit;
	};

	/**
	 * Closes the modal instance and passes a hash containing the working collection
	 * copy to persist.
	 *
	 * @protected
	 */
	$scope.save = function() {
		if (!$scope.canSave()) {
			return;
		}
		$modalInstance.close({
			collection: $scope.collection,
		});
	};

	/**
	 * Does nothing yet.
	 *
	 * @todo How do we manage delete?
	 * @protected
	 */
	$scope.delete = function() {
		$modal.open({
			templateUrl: '/components/coreSystem/confirm/confirmModal.html',
			controller : 'ConfirmModalController',
			resolve: {
				title: function() {
					return 'Are you sure you want to clear this list?';
				},
			},
		}).result.then(function(confirmed) {
			if (confirmed) {
				$scope.collection = [];
			}
		});
	};

	/**
	 * Appends an empty object onto the collection.
	 *
	 * @protected
	 */
	$scope.addToCollection = function() {
		if (!$scope.canAdd()) {
			return;
		}
		$scope.collection.push({});
	};

	/**
	 * Listens to close events on the modal stack to prevent closing immediately if
	 * the form is dirty
  	 *
	 * @warning This *does not work*. At all.
	 * @protected
	 */
	$scope.$on('modal.closing', function() {
		if ($scope.collectionForm.$dirty) {
			$modal.open({
				templateUrl: '/components/coreSystem/confirm/confirmModal.html',
				controller : 'ConfirmModalController',
				resolve: {
					title: function() {
						return 'Are you sure you want to exit without saving ' +
							'your changes?';
					},
				},
			}).result.then(function(confirmed) {
				$scope.collectionForm.$dirty = !confirmed;
			});
		}
		return {
			defaultPrevented: $scope.collectionForm.$dirty
		};
	});

}]);
