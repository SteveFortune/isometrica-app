var app = angular.module('isa');

app.controller('AppController',
    ['$rootScope', '$scope', '$compile', '$document',
	function($rootScope, $scope, $compile, $document) {

  $scope.showOverlays = true;
  $rootScope.showOverlays = $scope.showOverlays;

  var isIOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
  var isAndroid = navigator.userAgent.match(/Android/i);

  var head = angular.element(document.querySelector('head'));
  var body = angular.element(document.querySelector('body'));

  //the overview page uses a double navbar, the rest of the pages don't
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if (toState.name == 'account.overview' || toState.name == 'overview' || toState.name == 'welcome') {
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

  $scope.toggleOverlays = function() {
    $scope.showOverlays = !$scope.showOverlays;
    $rootScope.showOverlays = $scope.showOverlays;
  };

} ]);
