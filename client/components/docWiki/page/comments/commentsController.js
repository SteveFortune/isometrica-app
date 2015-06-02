var app = angular.module('isa.docwiki');

/*
 * Controller for the comments function on a page in the doc wiki
 *
 * @author Mark Leusink
 */

app.controller('CommentsController', ['$scope', 'CurrentUser', 'Page',
	function($scope, CurrentUser, Page) {

	$scope.add = false;
	$scope.comment = {};
	
	$scope.addComment = function() {
		$scope.add = true;
	};
	$scope.cancelComment = function() {
		$scope.comment = {};
		$scope.add = false;
	};

	$scope.saveComment = function() {

		$scope.comment.created = new Date();
		$scope.comment.createdBy = CurrentUser.getCurrentUser().name;

		Page.prototype$__create__commentsRel({id: $scope.page.id}, $scope.comment).$promise.then( function(res) {
			$scope.page.comments.push( res);
			$scope.add = false;
			$scope.comment = {};
		});

	};

	$scope.deleteComment = function(comment) {

		if (!confirm('Are you sure?')) {
			return;
		}

		Page.prototype$__destroyById__commentsRel({id: $scope.page.id, fk: comment.id}).$promise.then( function(res) {
			//comment has been removed remotely, remove it from the UI
			$scope.page.comments.forEach(function(comm, index, array){
	          if(comm.id === comment.id){
	              $scope.page.comments.splice(index, 1);
	          }
	        });

		});

	};

}]);
