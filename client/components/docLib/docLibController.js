var app = angular.module('isometrica.doclib', [

	'ui.router',
	'ngSanitize',

	'textAngular',
	'isometrica.doclib.factories'

]);

/*
 * Define states for the Document Library module
 *
 * @author Mark Leusink
 */
app.config(['$stateProvider', function($stateProvider){
   
	$stateProvider

    	.state('doclib', { 	
		    url: '/doclib/:docLibId',
		    templateUrl: '/components/docLib/docLibView.html',
		    controller : 'DocLibController'
		})

		.state('doclib.section', { 	
		    url: '/section/:sectionId',
		    templateUrl: '/components/docLib/section/sectionView.html',
		    controller : 'SectionController'
		});

}]);


app.controller( 'DocLibController', 
	['$scope', '$stateParams', 'Plan', 'DocLibFactory',
	function($scope, $stateParams, Plan, DocLibFactory) {

	$scope.docLibId = $stateParams.docLibId;
	$scope.docLib = Plan.findById( { 'id' : $stateParams.docLibId } );	

	$scope.sections = DocLibFactory.all();

}]);
