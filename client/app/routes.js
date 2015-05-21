
var app = angular.module('isa');

app.config( function($provide, $stateProvider, $urlRouterProvider) {

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

		.state('account', {
			abstract : true,
			url : '/account/:accountId/',
			templateUrl: '/components/overview/overviewView.html',
		    controller : 'OverviewController',
			data : {
				anonymous : false
			}

		})

		.state('account.overview', {
			url : 'overview',
			templateUrl: '/components/overview/overviewView.html',
		    controller : 'OverviewController',
			data : {
				anonymous : false
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

	//use a decorator here to always insert the accountId for certain routes
    $provide.decorator('$state', function($delegate, CurrentUser) {

        //use local state and store original 'go' function
        var state = $delegate;
        state._go = state.go;

        //add account id to all requests
        var go = function(to, params, options) {
        	params = params || {};

        	var account = CurrentUser.getCurrentAccount();
        	if (account != null) {
				params.accountId = account.id;
			}

            //call original function
            this._go(to, params, options);
        };

        //assign new 'go' function
        state.go = go;

        return $delegate;
    });

} );
