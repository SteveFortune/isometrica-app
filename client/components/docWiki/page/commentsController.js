var app = angular.module('isa.docwiki');

/*
 * Controller for the comments function on a page in the doc wiki
 *
 * @author Mark Leusink
 */

app.controller('CommentsController', ['$scope', '$resource', 'CurrentUser', 
	function($scope, $resource, CurrentUser) {

	//we set the pageId as a parameter, since it might not be here yet (for new pages)
	var Comment = $resource(
		'/api/Pages/:pageId/comments/:commentId', 
		{ pageId : '@pageId', commentsId : '@commentsId' } );

	$scope.add = false;
	$scope.comment = new Comment();
	
	$scope.addComment = function() {
		$scope.add = true;
	};
	$scope.cancelComment = function() {
		$scope.comment = new Comment();
		$scope.add = false;
	};

	$scope.saveComment = function() {

		$scope.comment.created = new Date();
		$scope.comment.createdBy = CurrentUser.getCurrentUser().name;

		/*
		 * Embedded relations from Loopback don't seem to get added to the Angular services file,
		 * so we save it using $resource here. Note that embedded relations do not seem to trigger the
		 * remote operations to set default metadata fields
		 */

		$scope.comment.$save( { pageId : $scope.page.id})
		.then( function(res) {
			$scope.page._comments.push( res);
			$scope.add = false;
			$scope.comment = new Comment();
		});

	};

	$scope.deleteComment = function(comment) {

		if (!confirm('Are you sure?')) {
			return;
		}

		Comment.remove( { pageId : $scope.page.id, commentId : comment.id}, function(res) {

			//comment has been removed remotely, remove it from the UI
			$scope.page._comments.forEach(function(comm, index, array){
	          if(comm.id === comment.id){
	              $scope.page._comments.splice(index, 1);
	          }
	        });

		});

	};

}]);
