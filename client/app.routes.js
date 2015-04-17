
var app = angular.module('isa');

app.config( function($stateProvider) {

	//setup the routes
	$stateProvider

	  	.state('overview', {
		    url: '/overview',
		    templateUrl: '/components/overview/overviewView.html',
		    controller : 'OverviewController'
		})

		.state('planUsers', {
			url : '/plan/:planId/users',
			templateUrl : '/components/planUsers/planUsersView.html',
			controller : 'PlanUsersController'
		})

		.state('canvas', {
		    url: '/canvas/:planId',
		    templateUrl: '/components/canvas/canvasView.html',
		    controller : 'CanvasController'
		})

		.state('core-system', {
			url: '/core-system/:planId',
			templateUrl: '/components/coreSystem/coreSystemView.html',
			controller: 'CoreSystemController'
		})

		.state('userActivity', {
		    url: '/user/:userId/activity',
		    templateUrl: '/components/userActivity/userActivityView.html',
		    controller : 'UserActivityController'
		})

		.state('login', {
		    url: '/login',
		    templateUrl: '/components/login/loginView.html',
		    controller : 'LoginController'
		});

} );
