var app = angular.module('isa.docwiki', [

	'isa.docwiki.factories',

	'ui.router',

	'textAngular',
	'ngAnimate',
	'ngTouch',
	'angularFileUpload'

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
	['$rootScope', '$scope', '$stateParams', '$state', 'Plan', 'PageFactory',
	function($rootScope, $scope, $stateParams, $state, Plan, PageFactory) {

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
		});
	};

	$scope.saveInArchive = function() {
		Plan.prototype$updateAttributes({ id: $scope.moduleId }, {isArchived : true})
		.$promise.then(function(res) {
			$scope.docWiki.isArchived = true;
		});
	};

	$scope.unArchive = function() {
		Plan.prototype$updateAttributes({ id: $scope.moduleId }, {isArchived : false})
		.$promise.then(function(res) {
			$scope.docWiki.isArchived = false;
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
