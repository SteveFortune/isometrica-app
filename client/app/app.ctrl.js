var app = angular.module('isa');

app.controller('AppController', [
  '$rootScope', '$scope', '$compile', '$document', '$state', '$location', 'ResilifyUser',
	function ($rootScope, $scope, $compile, $document, $state, $location, ResilifyUser) {

  $scope.currentUser = null;
  $scope.isAuthenticated = ResilifyUser.isAuthenticated();

  $scope.showOverlays = true;
  $rootScope.showOverlays = $scope.showOverlays;

  var isIOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
  var isAndroid = navigator.userAgent.match(/Android/i);

  var head = angular.element(document.querySelector('head'));
  var body = angular.element(document.querySelector('body'));

  //check whether we need to login the user, redirect him to the login page if we do
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
   
    var allowAnonymous = toState.data.anonymous;
   
    if (!allowAnonymous && $scope.currentUser == null) {

      if ($scope.isAuthenticated) {
        //user is authenticated already: restore
    
        ResilifyUser.getCurrent( function(res) {
          $scope.setCurrentUser(res);
        });

      } else {

        event.preventDefault();
        $location.nextAfterLogin = $location.path();
        $state.go('login');

      }
    }

  });

  //the overview page uses a double navbar, the rest of the pages don't
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){ 
    if (toState.name == 'overview' || toState.name == 'welcome') {
      body.addClass('has-bootcards-navbar-double');
    } else {
      body.removeClass('has-bootcards-navbar-double');
    }
  });

  //load one of the bootcards styles
  if(head.scope().injectedStylesheets === undefined)
  {
      head.scope().injectedStylesheets = [];
      head.append(
        $compile(
          "<link data-ng-repeat='stylesheet in injectedStylesheets' data-ng-href='{{stylesheet.href}}' rel='stylesheet' />")
        ($scope)); 
  }

  if (isIOS) {
    head.scope().injectedStylesheets.push({href: '/assets/libs/bootcards/dist/css/bootcards-ios.css'});
    body.addClass('ios');
  } else if (isAndroid) {
    head.scope().injectedStylesheets.push({href: '/assets/libs/bootcards/dist/css/bootcards-android.css'});
    body.addClass('android');
  } else {
    head.scope().injectedStylesheets.push({href: '/assets/libs/bootcards/dist/css/bootcards-desktop.css'});
    body.addClass('desktop');

  }

  //load isometrica css
  head.scope().injectedStylesheets.push({href: "/assets/css/resilify.css"});

  $scope.setCurrentUser = function (user) {
    $scope.currentUser = user;
    $scope.isAuthenticated = (user != null ? true : false);
  };

  $scope.toggleOverlays = function() {
    $scope.showOverlays = !$scope.showOverlays;
    $rootScope.showOverlays = $scope.showOverlays;
  };

} ]);