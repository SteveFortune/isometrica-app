var app = angular.module('isa.docwiki');

/*
 * Controller to add/edit a page in a document
 */
app.controller('PageController', [ '$scope', '$state', '$stateParams', '$modal', 'Page', 'isNew',
	function($scope, $state, $stateParams, $modal, Page, isNew) {

	//init
	$scope.isNew = isNew;
	$scope.page = { tags : []};
	/*$scope.uploader = new FileUploader({
		url : '/uploads'
	});*/

	//read existing page
	if (!isNew) {
		$scope.page = Page.findById( { id: $stateParams.pageId });
	}

	$scope.save = function(pageForm) {
		$scope.submitted = true;

		if (!pageForm.$valid) {
			return;
		}

		if (typeof $scope.page.tags === 'string') {
			$scope.page.tags = [$scope.page.tags];
		}

		$scope.page.updatedBy = $scope.currentUser.name;

		//upload all files
		//$scope.uploader.uploadAll();

		if (isNew) {

			//set current documentId on page
			$scope.page.documentId = $stateParams.planId;
			$scope.page.createdBy = $scope.currentUser.name;

			Page.create($scope.page).$promise
			.then( function(p) {
				//page saved	
				$state.go('docwiki.page', {pageId: p.id}, {reload: true});
			});

		} else {

			var page = new Page($scope.page);

			page.$save( function(_saved) {
				$state.go('docwiki.page', {pageId: $scope.page.id});
			});

		}

	};

	$scope.delete = function(page) {

		$modal.open({
			templateUrl: '/components/coreSystem/confirm/confirmModal.html',
			controller : 'ConfirmModalController',
			resolve: {
				title: function() {
					return 'Are you sure you want to remove this page?';
				},
			},
		}).result.then(function(confirmed) {
			if (confirmed) {
				Page.delete( { id : page.id } ).$promise
				.then( function(deletedPlan) {
					$state.go('docwiki', {}, {reload: true});
				});
			}
		});

	};

}]);
