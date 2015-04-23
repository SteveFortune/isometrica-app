var app = angular.module('isa.docwiki', [

	'ui.router',
	'textAngular',
	'ngAnimate',
	'ngTouch'

]);

/*
 * Define states for the Document Wiki module
 *
 * @author Mark Leusink
 */
app.config(['$stateProvider', function($stateProvider){
   
	$stateProvider

    	.state('docwiki', { 	
		    url: '/docwiki/:planId',
		    templateUrl: '/components/docWiki/docWikiView.html',
		    controller : 'DocWikiController',
		    data : {
		    	anonymous: false
		    }
		})

		.state('docwiki.newpage', { 	
		    url: '/page/new',
		    templateUrl: '/components/docWiki/page/pageEdit.html',
		    controller : 'PageController',
		    resolve : {
		    	isNew : function() { return true; }
		    }
		})

		.state('docwiki.page', { 	
		    url: '/page/:pageId',
		    templateUrl: '/components/docWiki/page/pageRead.html',
		    controller : 'PageController',
		    resolve : {
		    	isNew : function() { return false; }
		    }
		})

		.state('docwiki.pageedit', { 	
		    url: '/page/:pageId/edit',
		    templateUrl: '/components/docWiki/page/pageEdit.html',
		    controller : 'PageController',
		    resolve : {
		    	isNew : function() { return false; }
		    }
		});

}]);

/*
 * Isometrica Document Wiki module
 *
 * @author Mark Leusink
 */
app.controller( 'DocWikiController', 
	['$scope', '$stateParams', '$state', 'Plan', 'Page',
	function($scope, $stateParams, $state, Plan, Page) {

	$scope.docWiki = Plan.findById( { 'id' : $stateParams.planId } );	

	//default open the first menu item ('Pages')
	$scope.page = { open : true };

	//load pages for this document, order by section ascending
	$scope.pages = Page.find(
	  { filter: { where: { documentId : $stateParams.planId }, order : 'section ASC' } },
	  function(list) { },
	  function(errorResponse) {
	  	console.error(errorResponse);
	  }
	);

	/*
	 * Get the amount of pixels that a section needs to indent,
	 * based on the number of dots in the section number
	 *
	 * @author Mark Leusink
	 */
	$scope.getIndentation = function(page) {

		var s = page.section;

		if (s.length === 0 || s.indexOf('.')===-1) { return null;}

		if ( s.substring(s.length-1) === '.' ) {		//remove trailing dot
			s = s.substring(0, s.length -1);
		}

		var indent = (s.split('.').length - 1 );
		if (indent === 0 ) { return null; }

		return { 'font-size' : '14px', 'padding-left': (15 + indent * 10) + 'px'};
	};

}]);

/**
 * @author Mark Leusink
 */
app.directive('isaDocWikiHeader', function() {

	return {
		scope : {
			'title' : '@'
		},
		templateUrl: '/components/docWiki/header.html',
		restrict: 'AE',
		transclude: true,
	};

});

/**
 * Show a date/time in a 'time ago' like syntax (e.g. 5 seconds ago, an hour ago)
 *
 * @author Mark Leusink
 */
app.filter('timeAgo', function() {
    return function(dateString) {
        return moment(dateString).fromNow();
    };
});

app.filter('list', function() {
    return function(list) {
    	return (list ? list.join("") : "");
    };
});
