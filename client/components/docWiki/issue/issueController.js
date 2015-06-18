var app = angular.module('isa.docwiki.reissue', [
  'isa.docwiki.reissue.factories'
]);

/*
 * Re-issue a page: create a new document in the docwiki using the re-issue form
 */
app.directive('isaDocwikiReissue',
	['$state', 'Page', 'CurrentUser', 'IssueFactory', '$modal', 'growl',
	function($state, Page, CurrentUser, IssueFactory, $modal, growl){

		return {

      scope : {
        'moduleId' : '@moduleId'
      },

			restrict: 'A',
      		link : function($scope, elem) {

       		elem.bind('click', function () {

            var modalInstance = $modal.open({
	            templateUrl: 'components/docWiki/issue/issueForm.html',
	            controller: 'IssueModalController',
	            windowClass : 'docwiki',
	            resolve: {
                isNew : function() {
                  return true;
                }
              }
	          });

	          modalInstance.result.then(function (data) {
	            if (data.reason == 'save') {
                data.issue.documentId = $scope.moduleId;
                console.log('saving', data.issue);
                IssueFactory.create(data.issue);
                } else if (data.reason == 'delete') {
                console.log('delete');
                //$scope.deleteItem(data.item);
              }
	          }, function () {

	          });

	        });
	      }

		};


}]);

/*
 * Controller for the Re-issue form
 *
 * @author  Mark Leusink
 */
app.controller('IssueModalController', [
  '$scope', '$stateParams', 'IssueFactory', 'CurrentUser', 'isNew', '$modalInstance',
  function($scope, $stateParams, IssueFactory, CurrentUser, isNew, $modalInstance) {

    $scope.isNew = isNew;

    if (isNew) {

      //new issue: set the default authorised by name to the current user
      $scope.issue = {
        authorisedBy : CurrentUser.getCurrentUser().name,
        issueDate : new Date()
      };

    } else {

      $scope.issue = IssueFactory.findById( $stateParams.issueId);

    }

    $scope.cancelEdit = function() {
      $modalInstance.dismiss('cancel');
    };

    $scope.save = function(form) {
      $modalInstance.close({reason: 'save', issue : $scope.issue });
    };


}]);

/*
 * Controller for viewing an issue
 *
 * @author Mark Leusink
 */
app.controller('IssueController', [ '$scope', '$stateParams', 'IssueFactory',
  function($scope, $stateParams, IssueFactory) {

    $scope.issue = IssueFactory.findById( $stateParams.issueId);

  }
]);

app.controller('IssuesController', [ '$scope', '$state', '$stateParams', 'IssueFactory',
  function($scope, $state, $stateParams, IssueFactory) {

  $scope.issues = IssueFactory.all($stateParams.moduleId);

  $scope.issueDetails = function(id) {
    $state.go('docwiki.issue', { issueId : id});
  };

}]);

