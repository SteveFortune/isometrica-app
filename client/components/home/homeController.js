
var app = angular.module('isa');

app.controller( 'HomeController', ['CurrentUser', '$scope', function(CurrentUser, $scope) {

	$scope.currentUser = CurrentUser;

} ] );
