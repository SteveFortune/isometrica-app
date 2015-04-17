var app = angular.module('isa.docwiki', [

	'ui.router',
	'textAngular',
	'isa.docwiki.factories'

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
		    controller : 'DocWikiController'
		})

		.state('docwiki.newsection', { 	
		    url: '/section/new',
		    templateUrl: '/components/docWiki/section/sectionView.html',
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

app.controller( 'DocWikiController', 
	['$scope', '$stateParams', 'Plan', 'Page',
	function($scope, $stateParams, Plan, Page) {

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
