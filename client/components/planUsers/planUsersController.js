
var app = angular.module('resilify');

app.controller( 'PlanUsersController', ['$scope', '$stateParams', 'Plan', function($scope, $stateParams, Plan) {

	$scope.planId = $stateParams.planId;
	Plan.findById( { 'id' : $stateParams.planId }, function(plan) {

		//Attach some sample users / @TODO: make dynamic
		plan.users = [
				{'name' : 'Mark Leusink', profileUrl : '/assets/img/avatar-mark.gif', id : 'mark', email : 'mark@teamstudio.com'},
				{'name' : 'Matt White', profileUrl : '/assets/img/avatar-matt.gif', id : 'matt', email : 'matt@teamstudio.com'},
				{'name' : 'Steve Ives', profileUrl : '/assets/img/avatar-steve.gif', id : 'steve', email : 'steve@teamstudio.com'},
				{'name' : 'Jack Herbert', profileUrl : '/assets/img/avatar-jack.gif', id : 'jack', email : 'jack@teamstudio.com'}
			];
		
		$scope.plan = plan;

	} );	

	
}]);
