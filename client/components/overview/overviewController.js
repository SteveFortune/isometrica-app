
var app = angular.module('isa');

app.controller( 'OverviewController',
	['$scope', '$modal', '$state', '$timeout', 'Plan', 'growl',
	function($scope, $modal, $state, $timeout, Plan, growl) {

	$scope.plans = [];
	$scope.templates = [];
	$scope.archived = [];
	$scope.modulesTrash = [];

	var loadPlans = function() {
		//retrieve all plans and activate the tooltips

		Plan.find({
			filter : {
				where : {
					isTemplate: false,
			  		isArchived : false,
			  		inTrash : false
				  }
			}
		  },
		  function(plans) { 
		  	$scope.plans = _attachMockUsers(plans);
		  },
		  function(errorResponse) { /* error */ }
		);

		Plan.find({
			filter : {
				where : {
					isTemplate: true,
			  		isArchived : false,
			  		inTrash : false
				  }
			} 
		  },
		  function(plans) { 
		  	 console.log('found' + plans.length + 't');
		  	$scope.templates = _attachMockUsers(plans);
		  },
		  function(errorResponse) { /* error */ }
		);

		Plan.find(
		  {
		  filter : {
				where : {
			  		inTrash : true
				  }
			} 
		  },
		  function(plans) {
		  console.log('found' + plans.length + ' in trash'); 
		  	$scope.modulesTrash = _attachMockUsers(plans);
		  },
		  function(errorResponse) { /* error */ }
		);

	};

	var _attachMockUsers = function(plans) {
		//Attach some sample users / @TODO: make dynamic
		var planUsers = [
			{'name' : 'Mark Leusink', profileUrl : '/assets/img/avatar-mark.gif', id : 'mark', email : 'mark@teamstudio.com'},
			{'name' : 'Matt White', profileUrl : '/assets/img/avatar-matt.gif', id : 'matt', email : 'matt@teamstudio.com'},
			{'name' : 'Steve Ives', profileUrl : '/assets/img/avatar-steve.gif', id : 'steve', email : 'steve@teamstudio.com'},
			{'name' : 'Jack Herbert', profileUrl : '/assets/img/avatar-jack.gif', id : 'jack', email : 'jack@teamstudio.com'}
		];

		angular.forEach( plans, function(plan) {
			plan.users = planUsers;
		});

		return plans;
	}

	/**
	 *	Crudely maps a given plan entity to a route state.
	 *
	 * 	@param 		plan	Plan
	 *  @returns	string	A state for a route
	 *	@author 	Steve Fortune
	 */
	var stateForPlan = function(plan) {
		var state;
		switch (plan.type) {
			case 'dashboard' :
				state = 'core-system';
				break;
			case 'docwiki':
				state = 'docwiki';
				break;
			default :
				state = 'canvas';
				break;
		}
		return state;
	};

	$scope.openPlan = function(plan) {

		$state.transitionTo(stateForPlan(plan), {planId : plan.id});

	};

	$scope.addPlan = function() {

		var modalInstance = $modal.open({
			templateUrl: '/components/planSettings/planSettingsModal.html',
			controller: 'PlanSettingsController',
			resolve: {
				plan : function () {
				  return {};
				},
				isNew : function() {
					return true;
				},
				docTemplates : function() {
					return $scope.templates;
				}
			}
		});

		modalInstance.result.then( function(plan) {
			loadPlans();
			growl.success('Your plan has been created');
		});

	};

	$scope.editPlan = function(plan) {

		var modalInstance = $modal.open({
			templateUrl: '/components/planSettings/planSettingsModal.html',
			controller: 'PlanSettingsController',
			resolve: {
				plan : function () {
				  return plan;
				},
				isNew : function() {
					return false;
				}
			}
		});

		modalInstance.result.then( function(updatedPlan) {
			loadPlans();
			if (typeof updatedPlan === 'undefined') {
				growl.success('Plan has been deleted');
			} else {
				growl.success('Plan settings have been updated');
			}
		});

	};

	//initial loading of plans
	loadPlans();

}]);
