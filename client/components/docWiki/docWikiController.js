var app = angular.module('isa.docwiki', [

	'isa.docwiki.factories',
	'isa.docwiki.sign',
	'isa.docwiki.versions',

	'ui.router',

	'textAngular',
	'ngAnimate',
	'ngTouch',
	'angularFileUpload',
	'ngTagsInput'

]);

/*
 * Isometrica Document Wiki module
 *
 * @author Mark Leusink
 */
app.controller( 'DocWikiController',
	['$rootScope', '$scope', '$stateParams', '$state', '$controller', '$modal', 'PlanFactory', 'PageFactory', 'growl',
	function($rootScope, $scope, $stateParams, $state, $controller, $modal, PlanFactory, PageFactory, growl) {

	//instantiate base controller (used to edit pages in a modal)
	$controller('PageEditBaseController', {
		$scope : $scope,
		$modal : $modal
	} );

	$scope.moduleId = $stateParams.planId;
	$scope.docWiki = PlanFactory.findById( $stateParams.planId, $scope );

	//default open the first menu item ('Pages')
	$scope.page = { open : true };

    $scope.pages = [];
    $scope.$watchCollection('pages', function(newVal, oldVal) {
      console.log('new pages: ' + JSON.stringify(newVal));
      _updatePages(newVal);
    });

    var _updatePages = function(pages) {

      //get all signers and tags
      var signersList = [];
      var tagsList = [];

      angular.forEach( pages, function(page) {
        angular.forEach(page._signatures, function(sig) {
          signersList.push(sig.createdBy);
        });
        angular.forEach(page.tags, function(tag) {
          tagsList.push( tag );
        });
      } );

      $scope.signersList = signersList.makeArrayUnique();
      $scope.tagsList = tagsList.makeArrayUnique();

      $scope.pages = pages;

    };

	var _readPages = function() {
		//load pages for this document, order by section ascending
		$scope.pages = PageFactory.all($scope.moduleId, $scope);
	};

	_readPages();

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

	//saves a document as a template
	$scope.saveAsTemplate = function() {
		Plan.prototype$updateAttributes({ id: $scope.moduleId }, {isTemplate : true})
		.$promise.then(function(res) {
			$scope.docWiki.isTemplate = true;
			growl.success('This document has been marked as a template');
		});
	};

	//marks a document as 'archived': it will shown only in the 'archived' documents section
	$scope.saveInArchive = function() {
		Plan.prototype$updateAttributes({ id: $scope.moduleId }, {isArchived : true})
		.$promise.then(function(res) {
			$scope.docWiki.isArchived = true;
			growl.success('This document has been archived');
			$state.go('overview');
		});
	};

	//un-marks a document as being archived
	$scope.unArchive = function() {
		Plan.prototype$updateAttributes({ id: $scope.moduleId }, {isArchived : false})
		.$promise.then(function(res) {
			$scope.docWiki.isArchived = false;
			growl.success('This document has been unarchived');
		});
	};

	//duplicates a document
	$scope.duplicateDoc = function() {

		Plan.copy( {planId : $scope.moduleId }).$promise
		.then(function(res) {
			growl.success('This document has been duplicated as \'' + res.title + '\'');
		});

	};

	//move/ restore a document to the trash
	$scope.removeDoc = function() {
		Plan.prototype$updateAttributes({ id: $scope.moduleId }, {inTrash : true})
		.$promise.then(function(res) {
			$scope.docWiki.inTrash = true;
			growl.success('This document has been moved to the trash');
			$state.go('overview');
		});
	};
	$scope.restoreDoc = function() {
		Plan.prototype$updateAttributes({ id: $scope.moduleId }, {inTrash : false})
		.$promise.then(function(res) {
			$scope.docWiki.inTrash = false;
			growl.success('This document has been restored from the trash');
		});
	};

}]);

/**
 * Angular filter to show a date/time in a 'time ago' like syntax (e.g. 5 seconds ago, an hour ago)
 * Uses Moment.js for formatting
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
    	return (list ? list.join(", ") : "");
    };
});
