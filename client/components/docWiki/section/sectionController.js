var app = angular.module('isa.docwiki');

app.controller('SectionController', [ '$scope', '$stateParams', 'SectionsFactory',
	function($scope, $stateParams, SectionsFactory) {

		$scope.section = SectionsFactory.get($stateParams.sectionId);
		$scope.edit = false;

		$scope.setEditmode = function() {
			$scope.edit = true;
		};

		$scope.save = function(section) {
			$scope.edit = false;
		};

}]);
