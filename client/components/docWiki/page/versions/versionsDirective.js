var app = angular.module('isa.docwiki.versions', [

	'lbServices',
	'angular-growl'

]);

/*
 * Version management for DocumentWiki pages
 *
 * @author Mark Leusink
 */

app.directive('isaDocwikiPageVersions', 
	['$state', 'Page', 'CurrentUser', 'growl', 
	function($state, Page, CurrentUser, growl){

		return {

			restrict: 'AE', 
			templateUrl: '/components/docWiki/page/versions/versions.html',
			replace: true,

			controller: function($scope, $element, $attrs, $transclude) {

				$scope.createNewVersion = function() {
					//creates a copy of a page, increases the version number and opens the new page

					Page.createNewVersion( { pageId : $scope.page.id }).$promise
						.then(function(res) {
							growl.success('You have created a new version of this page');
							$state.go('docwiki.page', { pageId : res.pageCopyId}, {reload: true} );
						}, function(err) {
							alert('An error occurred.\n\n' + err.data.error.message);
						});

				};

				$scope.listPreviousVersions = function() {
					alert('TODO: show modal with all versions');
				};

			},

		};

}]);
	