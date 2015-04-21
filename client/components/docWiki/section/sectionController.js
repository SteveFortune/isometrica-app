var app = angular.module('isa.docwiki');

/*
 * Controller to edit an existing section/page in a document
 */
app.controller('SectionController', [ '$scope', '$state', '$stateParams', '$modal', 'Page',
	function($scope, $state, $stateParams, $modal, Page) {

		$scope.section = { tags : []};

		$scope.section = Page.findById( { id: $stateParams.sectionId });

		$scope.save = function(sectionForm) {
			$scope.submitted = true;

			if (!sectionForm.$valid) {
				return;
			}

			if (typeof $scope.section.tags === 'string') {
				$scope.section.tags = [$scope.section.tags];
			}

			var page = new Page($scope.section);

			page.$save( function(section) {
				$state.go('docwiki.section', {sectionId: $scope.section.id});
			});
		};

		$scope.delete = function(section) {

			$modal.open({
				templateUrl: '/components/coreSystem/confirm/confirmModal.html',
				controller : 'ConfirmModalController',
				resolve: {
					title: function() {
						return 'Are you sure you want to remove this section?';
					},
				},
			}).result.then(function(confirmed) {
				if (confirmed) {
					Page.delete( { id : section.id } ).$promise
					.then( function(deletedPlan) {
						$state.go('docwiki', {}, {reload: true});
					});
				}
			});


		};

}]);

/*
 * Controller to create a new section/page in a document
 */
app.controller('SectionCreateController', [ '$scope', '$state', '$stateParams', 'Page',
	function($scope, $state, $stateParams, Page) {

		$scope.section = {
			tags : []
		};
		
		$scope.isNew = true;
	
		$scope.save = function(sectionForm) {
			$scope.submitted = true;

			console.log('save a new section :)', sectionForm);

			if (!sectionForm.$valid) {
				return;
			}

			//set current documentId on section
			$scope.section.documentId = $stateParams.planId;

			if (typeof $scope.section.tags === 'string') {
				$scope.section.tags = [$scope.section.tags];
			}

			Page.create($scope.section).$promise
			.then( function(p) {
				//section saved	
				$state.go('docwiki.section', {sectionId: p.id}, {reload: true});
			});

		};

}]);
