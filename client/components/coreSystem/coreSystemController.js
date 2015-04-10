
var app = angular.module('resilify');

/**
 * The controller for the core system view.
 *
 * @route `/core-system/:planId`
 * @author Steve Fortune
 */
app.controller('CoreSystemController',
	['$scope', '$modal', '$state', '$stateParams', '$timeout', 'growl', 'PlanService',
	function($scope, $modal, $state, $stateParams, $timeout, growl, PlanService) {

		var planId = $stateParams.planId;
		var plan = PlanService.findPlan(planId);

		if (!plan) {
			// @todo Redirect to 404, or throw an error that's caught by the routing
			// layer and subsequently redirects the user to 404.
		} else {
			$scope.plan = plan;
		}

	}
]);

/**
 * Simple directive for the core system navigation header.
 *
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
 * Simple directive for the core system navigation footer.
 *
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
 * Directive that renders a collection of given items in a grid. The icon displayed
 * in each tile of the grid is configurable, as is the icon of the '+' tile.
 *
 * Items in the collection must conform to the following inferred protocol:
 * - title, string property
 * - @todo What else?
 *
 * See the directive's isolated scope for attributes.
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
			'isPanelLast': '@',
			'collapsed': '@'
		},
		controller: ['$scope', function($scope) {

			/**
			 * Is the directive initialised as collapsed? Work around to the fact that
			 * you can't use the `typeof` operator in templation expressions.
			 *
			 * @return boolean
			 */
			$scope.isCollapsed = function() {
				return typeof $scope.collapsed === 'undefined' || $scope.collapsed === true;
			};
		}],
	};
});
