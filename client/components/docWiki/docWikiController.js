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

		.state('docwiki.newsection', { 	
		    url: '/section/new',
		    templateUrl: '/components/docWiki/section/sectionEdit.html',
		    controller : 'SectionCreateController'
		})

		.state('docwiki.section', { 	
		    url: '/section/:sectionId',
		    templateUrl: '/components/docWiki/section/sectionRead.html',
		    controller : 'SectionController'
		})

		.state('docwiki.sectionedit', { 	
		    url: '/section/:sectionId/edit',
		    templateUrl: '/components/docWiki/section/sectionEdit.html',
		    controller : 'SectionController'
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

	//default open the first menu item ('Sections')
	$scope.section = { open : true };

	//load sections/pages for this document, order by section ascending
	$scope.sections = Page.find(
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
	$scope.getIndentation = function(section) {

		var s = section.section;

		if (s.length === 0 || s.indexOf('.')===-1) { return null;}

		if ( s.substring(s.length-1) === '.' ) {		//remove trailing dot
			s = s.substring(0, s.length -1);
		}

		var indent = (s.split('.').length - 1 );
		if (indent === 0 ) { return null; }

		return {'padding-left': (15 + indent * 10) + 'px'};
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
