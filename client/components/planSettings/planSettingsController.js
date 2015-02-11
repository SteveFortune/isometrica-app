
var app = angular.module('resilify');

app.controller( 'PlanSettingsController', 
	['$scope', '$modalInstance', 'PlanFactory', 'plan', 'isNew',
	function($scope, $modalInstance, PlanFactory, plan, isNew) {

	$scope.plan = angular.copy(plan);
	$scope.isNew = isNew;

	$scope.savePlan = function(form) {

		if (!form.$valid) { 
			form.title.$dirty = true;
			return;
		}

		var plan = new PlanFactory($scope.plan);

		if (isNew) {

			plan.$save( function(plan) {
				$modalInstance.close(plan);
			});

		} else {

			plan.$update( function(plan) {
				$modalInstance.close(plan);
			});

		}

	};

	$scope.deletePlan = function(plan) {
		PlanFactory.delete( { id : plan.id } )
		.$promise.then( function(deletedPlan) {
			$modalInstance.close();
		});
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};

}]);