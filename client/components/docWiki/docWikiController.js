var app = angular.module('isa.docwiki', [

	'isa.docwiki.factories',

	'ui.router',

	'textAngular',
	'ngAnimate',
	'ngTouch',
	'angularFileUpload'

]);

/*
 * Isometrica Document Wiki module
 *
 * @author Mark Leusink
 */
app.controller( 'DocWikiController', 
	['$rootScope', '$scope', '$stateParams', '$state', 'Plan', 'PageFactory', 'growl',
	function($rootScope, $scope, $stateParams, $state, Plan, PageFactory, growl) {

	$scope.moduleId = $stateParams.planId;
	$scope.docWiki = Plan.findById( { 'id' : $stateParams.planId } );	

	//default open the first menu item ('Pages')
	$scope.page = { open : true };

	//load pages for this document, order by section ascending
	$scope.pages = PageFactory.all($stateParams.planId);

	/*
	 * Get the amount of pixels that a section needs to indent,
	 * based on the number of dots in the section number
	 *
	 * @author Mark Leusink
	 */
	$scope.getIndentation = function(page) {

		var s = page.section;

		if ( !s || s.length === 0 || s.indexOf('.')===-1) { return null;}

		if ( s.substring(s.length-1) === '.' ) {		//remove trailing dot
			s = s.substring(0, s.length -1);
		}

		var indent = (s.split('.').length - 1 );
		if (indent === 0 ) { return null; }

		return { 'font-size' : '14px', 'padding-left': (15 + indent * 10) + 'px'};
	};

	$scope.saveAsTemplate = function() {
		Plan.prototype$updateAttributes({ id: $scope.moduleId }, {isTemplate : true})
		.$promise.then(function(res) {
			$scope.docWiki.isTemplate = true;
			growl.success('This document has been marked as a template');
		});
	};

	$scope.saveInArchive = function() {
		Plan.prototype$updateAttributes({ id: $scope.moduleId }, {isArchived : true})
		.$promise.then(function(res) {
			$scope.docWiki.isArchived = true;
			growl.success('This document has been archived');
		});
	};

	$scope.unArchive = function() {
		Plan.prototype$updateAttributes({ id: $scope.moduleId }, {isArchived : false})
		.$promise.then(function(res) {
			$scope.docWiki.isArchived = false;
			growl.success('This document has been unarchived');
		});
	};
	$scope.duplicateDoc = function() {

		Plan.copy( {planId : $scope.moduleId }).$promise
		.then(function(res) {
			growl.success('This document has been duplicated as \'' + res.title + '\'');
		});

	};

}]);

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
