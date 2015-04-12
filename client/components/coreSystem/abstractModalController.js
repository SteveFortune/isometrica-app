
var app = angular.module('resilify');

/**
 * Simple base controller for modal controllers.
 *
 * @author Steve Fortune
 */
app.controller('AbstractModelController', [
	'$scope', '$modal', '$modalInstance', 'collection', 'limit',
	function($scope, $modal, $modalInstance, collection, limit) {

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
	 * Can we delete the collection at the moment? Currently just returns true.
	 *
	 * @todo What are the requirements here?
	 * @return boolean
	 * @protected
	 */
	$scope.canDelete = function() {
		return true;
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
	$scope.delete = function() {};

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

}]);
