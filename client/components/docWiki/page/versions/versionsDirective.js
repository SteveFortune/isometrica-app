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
	['$state', 'Page', 'CurrentUser', '$modal', 'growl', 
	function($state, Page, CurrentUser, $modal, growl){

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

					var modalInstance = $modal.open({
						templateUrl: '/components/docWiki/page/versions/listVersions.html',
						controller: 'VersionsListController',
						windowClass : 'docwiki',
						resolve: {
							currentPageId : function () {
								return $scope.page.pageId;
							},
						}
					});

					modalInstance.result.then(function (data) {
						/*if (data.reason == 'save') {
							savePage(data.page, data.pageFiles);
						} else if (data.reason == 'delete') {
							console.log('delete')
							//$scope.deleteItem(data.item);
						}*/
				    }, function () {
				    	console.log('closed');
				      
				    });

				};

			},

		};

}]);
	