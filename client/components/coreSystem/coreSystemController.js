
var app = angular.module('resilify');

/**
 * @route `/core-system/:planId`
 * @author Steve Fortune
 */
app.controller('CoreSystemController',
	['$scope', '$modal', '$state', '$stateParams', 'PlanService',
	function($scope, $modal, $state, $stateParams, PlanService) {

		var planId = $stateParams.planId;
		var plan = PlanService.findPlan(planId);

		if (!plan) {
			// @todo Redirect to 404, or throw an error that's caught by the routing
			// layer and subsequently redirects the user to 404.
		} else {
			$scope.plan = plan;
		}

		/**
		 * @private
		 * @param 	str 	string
		 * @return 	string
		 */
		var firstLetterToUpper = function(str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		};

		/**
		 * @param 	ev				object
		 * @param 	type			string	The type specifier (used to contruct urls/routes)
		 * @param 	entity			object	The entity being edited || falsy
		 * @return	object	The new modal dialog
		 * @private
		 */
		$scope.showModalDialog = function(collectionKey) {

			if (!$scope.plan[collectionKey]) {
				throw collectionKey + " is an invalid colleciton key";
			}

			$modal.open({
				templateUrl: '/components/coreSystem/' + collectionKey + '/' + collectionKey + 'Modal.html',
				controller : firstLetterToUpper(collectionKey) + 'ModalController',
				resolve : {
					collection : function() {
					  return $scope.plan[collectionKey];
					}
				}
			}).result.then(function(args) {
				$scope.plan[collectionKey] = args.collection;
			});

		};
	}
]);

/**
 * @author Steve Fortune
 */
app.directive('resilifyCoreSystemHeader', function() {
	return {
		templateUrl: '/components/coreSystem/coreSystemHeader.html',
		restrict: 'AE',
		transclude: true,
	};
});

/**
 * @author Steve Fortune
 */
app.directive('resilifyCoreSystemFooter', function() {
	return {
		templateUrl: '/components/coreSystem/coreSystemFooter.html',
		restrict: 'AE',
		transclude: true,
	};
});

/**
 * Directive that renders a collection of given items in a table. The icon displayed
 * in each tile of the grid is configurable, as is the icon of the '+' tile.
 *
 * Items in the collection must have a `name` attribute.
 *
 * Provide `onItemClick` and `onNewItem` attribute callbacks to handle manipulating the
 * collection.
 *
 * @author Steve Fortune
 */
app.directive('resilifyCoreSystemSection', function(){
	return {
		templateUrl: '/components/coreSystem/coreSystemSection.html',
		restrict: 'AE',
		transclude: true,
		scope: {
			'collection': '=',
			'sectionId': '@',
			'tileIcon': '@',
			'new': '=',
			'onEditItem': '&',
			'onNewItem': '&'
		}
	};
});
