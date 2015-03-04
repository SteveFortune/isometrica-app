
var app = angular.module('resilify');

app.config( function($stateProvider) {

	//setup the routes
	$stateProvider

	  	.state('dashboard', { 	
		    url: '/dashboard',
		    templateUrl: '/components/dashboard/dashboardView.html',
		    controller : 'DashboardController'
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


