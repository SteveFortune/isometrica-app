var app = angular.module('isa.docwiki', [

	'ui.router',
	'ngSanitize',

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

		.state('docwiki.section', { 	
		    url: '/section/:sectionId',
		    templateUrl: '/components/docWiki/section/sectionView.html',
		    controller : 'SectionController'
		});

}]);


app.controller( 'DocWikiController', 
	['$scope', '$stateParams', 'Plan', 'DocWikiFactory',
	function($scope, $stateParams, Plan, DocWikiFactory) {

	$scope.docWikiId = $stateParams.planId;
	$scope.docWiki = Plan.findById( { 'id' : $stateParams.planId } );	

	$scope.sections = DocWikiFactory.all();

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
