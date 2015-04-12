
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
		 * @note Handles -y endings as well.
		 * @param	str		string
		 * @return 	string	Plurified string
		 */
		var plurify = function(str) {
			if (str.slice(-1) === 'y') {
				str = str.substring(0, str.length - 1) + 'ies';
			} else {
				str = str + 's';
			}
			return str;
		};

		/**
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
		var showModalDialog = function(type, entity) {
			return $modal.open({
				templateUrl: '/components/coreSystem/' + plurify(type) + '/' + type + 'Modal.html',
				controller : firstLetterToUpper(type) + 'ModalController',
				resolve : {
					entity : function () {
					  return entity;
					}
				}
			});
		};

		/**
		 * @private
		 */
		$scope.$on('collection.entity.edit', function(ev, type, collection, index) {
			var entity = collection[index];
			showModalDialog(type, entity).result.then(function(args) {
				collection[index] = args.entity;
			});
		});

		/**
		 * Pushes the new entity to the collection.
		 *
		 * @private
		 */
		$scope.$on('collection.entity.new', function(ev, type, collection) {
			showModalDialog(type).result.then(function(args) {
				collection.push(args.entity);
			});
		});

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
 * The entity-type attribute is particularly important, as it allows parent scopes to
 * differentiate between the source of events. If the entity-type attribute is omitted
 * from the directive, events are not emitted.
 *
 * @see The directive's isolated scope for attributes.
 * @author Steve Fortune
 */
app.directive('resilifyCoreSystemSection', function(){
	return {
		templateUrl: '/components/coreSystem/coreSystemSection.html',
		restrict: 'AE',
		transclude: true,
		scope: {
			'collection': '=',
			'entityType': '@',
			'sectionId': '@',
			'tileIcon': '@',
			'isPanelLast': '@',
			'collapsed': '@'
		},
		controller: ['$scope', function($scope) {

			/**
			 * @return boolean
			 */
			$scope.isCollapsed = function() {
				return typeof $scope.collapsed === 'undefined' || $scope.collapsed === true;
			};

			/**
			 * This directive will only emit events if it has been configured with an
			 * entityType.
			 *
			 * @return boolean
			 */
			$scope.canEmit = function() {
				return typeof $scope.entityType !== 'undefined';
			};

			/**
			 * @param	index	number
			 * @protected
			 */
			$scope.emitEdit = function(index) {
				if (!$scope.canEmit()) {
					return;
				}
				$scope.$emit(
					'collection.entity.edit',
					$scope.entityType,
					$scope.collection,
					index
				);
			};

			/**
			 * @protected
			 */
			$scope.emitNew = function() {
				if (!$scope.canEmit()) {
					return;
				}
				$scope.$emit(
					'collection.entity.new',
					$scope.entityType,
					$scope.collection
				);
			};

		}],
	};
});
