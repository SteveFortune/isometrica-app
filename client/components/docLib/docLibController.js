var app = angular.module('isa.doclib', [

	'ui.router',
	'ngSanitize',

	'textAngular',
	'isa.doclib.factories'

]);

/*
 * Define states for the Document Library module
 *
 * @author Mark Leusink
 */
app.config(['$stateProvider', function($stateProvider){
   
	$stateProvider

    	.state('doclib', { 	
		    url: '/doclib/:planId',
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

	$scope.docLibId = $stateParams.planId;
	$scope.docLib = Plan.findById( { 'id' : $stateParams.planId } );	

	$scope.sections = DocLibFactory.all();

}]);

/**
 * @author Mark Leusink
 */
app.directive('isaDoclibHeader', function() {

	return {
		scope : {
			'title' : '@'
		},
		templateUrl: '/components/docLib/header.html',
		restrict: 'AE',
		transclude: true,
	};

});
