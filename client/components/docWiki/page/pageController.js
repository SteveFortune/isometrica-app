var app = angular.module('isa.docwiki');

/*
 * Controller to add/edit a page in a document
 */
app.controller('PageController', [ '$scope', '$state', '$stateParams', '$modal', '$http', 'Page', 'isNew', 'FileUploader',
	function($scope, $state, $stateParams, $modal, $http, Page, isNew, FileUploader) {

	//init
	$scope.isNew = isNew;
	$scope.page = { tags : []};

	//setup file uploader object
	var uploader = $scope.uploader = new FileUploader({
		url : '/uploads'
	});

	//read existing page
	if (!isNew) {
		$scope.page = Page.findById( { id: $stateParams.pageId });
		$http.get('/files/' + $stateParams.pageId).then( function(res) {
			$scope.pageFiles = res.data;
		});
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

		if (isNew) {

			//set current documentId on page
			$scope.page.documentId = $stateParams.planId;
			$scope.page.createdBy = $scope.currentUser.name;

			Page.create($scope.page).$promise
			.then( function(p) {
				//page saved: upload all files

				//upload all files
				if (uploader.queue.length>0 ) {
					console.log('got files to upload');

					uploader.onBeforeUploadItem = function(item) {
					    item.url = '/upload/' + p.id;
					};
					uploader.onCompleteAll = function() {
			            console.info('onCompleteAll');
			            $state.go('docwiki.page', {pageId: p.id}, {reload: true});
			        };
					uploader.uploadAll();	
				} else {
					$state.go('docwiki.page', {pageId: p.id}, {reload: true});
				}
				
				
			});

		} else {

			var page = new Page($scope.page);

			page.$save( function(_saved) {

				//upload all files
				if (uploader.queue.length>0 ) {
					console.log('got files to upload');

					uploader.onBeforeUploadItem = function(item) {
					    item.url = '/upload/' + $scope.page.id;
					};

			

					uploader.onCompleteAll = function() {
			            console.info('onCompleteAll');
			            $state.go('docwiki.page', {pageId: $scope.page.id});
			        };
					uploader.uploadAll();	
				} else {
					$state.go('docwiki.page', {pageId: $scope.page.id});
				}

				
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
