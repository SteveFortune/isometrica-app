
var app = angular.module('isa');

app.controller( 'PlanSettingsController',
	['$scope', '$modalInstance', 'Plan', 'plan', 'isNew', 'docTemplates',
	function($scope, $modalInstance, Plan, plan, isNew, docTemplates) {

	$scope.plan = angular.copy(plan);
	$scope.isNew = isNew;
	$scope.docTemplates = docTemplates;

	$scope.savePlan = function(form) {

		if (!form.$valid) {
			form.title.$dirty = true;
			return;
		}

		if (isNew) {

			Plan.create($scope.plan).$promise
			.then( function(p) {
				$modalInstance.close(plan);

			});

		} else {

			var plan = new Plan($scope.plan);

			plan.$save( function(plan) {
				$modalInstance.close(plan);
			});

		}

	};

	$scope.deletePlan = function(plan) {
		Plan.delete( { id : plan.id } ).$promise
		.then( function(deletedPlan) {
			$modalInstance.close();
		});
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};

}]);
