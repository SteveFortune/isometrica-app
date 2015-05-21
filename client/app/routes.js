
var app = angular.module('isa');

app.config( function($stateProvider, $urlRouterProvider) {

	//setup the routes
	$stateProvider

		.state('welcome', {
			url: '/welcome',
			templateUrl : 'components/home/home.html',
			controller : 'HomeController',
			data : {
				anonymous : true
			}
		})

	  	.state('overview', {
		    url: '/overview',
		    templateUrl: 'components/overview/overviewView.html',
		    controller : 'OverviewController',
		    data : {
				anonymous : false
			}
		})

		.state('planUsers', {
			url : '/plan/:planId/users',
			templateUrl : 'components/planUsers/planUsersView.html',
			controller : 'PlanUsersController',
			data : {
				anonymous : false
			}
		})

		.state('canvas', {
		    url: '/canvas/:planId',
		    templateUrl: 'components/canvas/canvasView.html',
		    controller : 'CanvasController',
		    data : {
				anonymous : false
			}
		})

		.state('core-system', {
			url: '/core-system/:planId',
			templateUrl: 'components/coreSystem/coreSystemView.html',
			controller: 'CoreSystemController',
			data : {
				anonymous : false
			}
		})

		.state('userActivity', {
		    url: '/user/:userId/activity',
		    templateUrl: 'components/userActivity/userActivityView.html',
		    controller : 'UserActivityController',
		    data : {
				anonymous : false
			}
		})

		.state('login', {
		    url: '/login',
		    templateUrl: 'components/login/loginView.html',
		    controller : 'LoginController',
		    data : {
				anonymous : true
			}
		});

	$urlRouterProvider.otherwise('/overview');

} );
