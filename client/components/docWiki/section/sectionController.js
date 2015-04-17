var app = angular.module('isa.docwiki');

/*
 * Controller to edit an existing section/page in a document
 */
app.controller('SectionController', [ '$scope', '$state', '$stateParams', 'Page',
	function($scope, $state, $stateParams, Page) {

		$scope.section = Page.findById( { id: $stateParams.sectionId });

		//save an existing plan
		$scope.save = function(sectionForm) {

			var page = new Page($scope.section);

			page.$save( function(section) {
				$state.go('docwiki.section', {sectionId: $scope.section.id});
			});
		};

}]);

/*
 * Controller to create a new section/page in a document
 */
app.controller('SectionCreateController', [ '$scope', '$stateParams', 'Page',
	function($scope, $stateParams, Page) {

		$scope.section = {};
		$scope.edit = true;
	
		$scope.save = function(sectionForm) {
			$scope.submitted = true;

			console.log('save a new section :)', sectionForm);

			if (!sectionForm.$valid) {
				console.error('invalid form');
				return;
			}

			//set current documentId
			$scope.section.documentId = $stateParams.planId;


			Page.create($scope.section).$promise
			.then( function(p) {
				console.log('klaar?');	
			});

			//$scope.edit = false;
		};

}]);
