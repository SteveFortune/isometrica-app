var app = angular.module('isa.docwiki');

app.controller('SectionController', [ '$scope', '$stateParams', 'SectionsFactory',
	function($scope, $stateParams, SectionsFactory) {

		$scope.section = SectionsFactory.get($stateParams.sectionId);
		$scope.edit = false;

		$scope.setEditmode = function() {
			$scope.edit = true;
		};

		$scope.save = function(sectionForm) {
			$scope.edit = false;
		};

}]);

app.controller('SectionCreateController', [ '$scope', '$stateParams', 'SectionsFactory',
	function($scope, $stateParams, SectionsFactory) {

		$scope.section = {};
		$scope.edit = true;
	
		$scope.save = function(sectionForm) {
			$scope.submitted = true;

			console.log('save a new section :)', sectionForm);

			//$scope.edit = false;
		};

}]);
