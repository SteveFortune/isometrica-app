var app = angular.module('isa.docwiki.sign', [

	'lbServices',
	'angular-growl'

]);

/*
 * Sign a page in the docwiki and show a list of page signers
 *
 * @author Mark Leusink
 */

app.directive('isaDocwikiPageSigning', ['$state', 'Page', 'CurrentUser', 'growl', function($state, Page, CurrentUser, growl){
	return {
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope, $element, $attrs, $transclude) {
	 
			 $scope.signDocument = function() {
			 
			 	Page.sign( {pageId : $scope.page.id , userName: CurrentUser.getCurrentUser().name}).$promise
				.then(function(res) {
					growl.success('You have succesfully signed this page');
					$state.reload();
				});

			 };

		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'AE', 
		templateUrl: '/components/docWiki/page/sign/sign.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
}]);