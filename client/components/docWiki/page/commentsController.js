var app = angular.module('isa.docwiki');

/*
 * Controller for the comments function on a page in the doc wiki
 *
 * @author Mark Leusink
 */
 
app.controller('CommentsController', ['$scope', 'CurrentUser', 
	function($scope, CurrentUser) {

	$scope.add = false;
	$scope.comment = {};
	
	$scope.addComment = function() {
		$scope.add = true;
	};

	$scope.saveComment = function() {

		var comments = $scope.page.comments || [];

		$scope.comment.created = new Date();
		$scope.comment.createdBy = CurrentUser.getCurrentUser().name;

		comments.push( $scope.comment );

		$scope.page.comments = comments; 
		$scope.add = false;

		$scope.comment = {};

	};

}]);