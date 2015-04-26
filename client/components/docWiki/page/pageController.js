var app = angular.module('isa.docwiki');

/*
 * Controller to add/edit a page in a document
 */
app.controller('PageController', [ '$scope', '$state', '$stateParams', '$modal', '$http', 'Page', 'isNew', 'FileUploader',
	function($scope, $state, $stateParams, $modal, $http, Page, isNew, FileUploader) {

	//init
	$scope.isNew = isNew;
	$scope.page = { tags : []};
	$scope.utils = isa.utils;
	$scope.toDelete = [];

	//setup file uploader object
	var uploader = $scope.uploader = new FileUploader({
		url : '/uploads'
	});

	var readRelatedFiles = function(parentId) {
		$http.get('/files/' + parentId).then( function(res) {
			var files = res.data;
			angular.forEach(files, function(file) {
				file.markedForDeletion = false;
				var ext = file.filename.substring( file.filename.lastIndexOf('.') + 1).toLowerCase();
				file.isImage = (ext == 'jpg' || ext=='jpeg' || ext == 'gif' || ext == 'png');
			});
			$scope.pageFiles = files;
		});
	}

	//read existing page
	if (!isNew) {
		$scope.page = Page.findById( { id: $stateParams.pageId });
		readRelatedFiles($stateParams.pageId);
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
					
					uploader.onBeforeUploadItem = function(item) {
					    item.url = '/upload/' + p.id;
					};
					uploader.onCompleteAll = function() {
			            console.info('onCompleteAll');
			            $state.go('docwiki.page', {pageId: p.id}, {reload: true});
			        };
					uploader.uploadAll();	
				} else {
					readRelatedFiles(p.id);
					$state.go('docwiki.page', {pageId: p.id}, {reload: true});
				}
				
				
			});

		} else {

			var page = new Page($scope.page);

			page.$save( function(_saved) {

				//upload all files
				if (uploader.queue.length>0 ) {
					
					uploader.onBeforeUploadItem = function(item) {
					    item.url = '/upload/' + $scope.page.id;
					};

					uploader.onCompleteAll = function() {
			            console.info('onCompleteAll');
			            $state.go('docwiki.page', {pageId: $scope.page.id});
			        };
					uploader.uploadAll();	
				} else {

					//delete selected files
					angular.forEach( $scope.pageFiles, function(file) {
						if (file.markedForDeletion) {
							console.info('delete ', file);
							$http.delete('/file/' + file._id);
						}
					});

					readRelatedFiles($scope.page.id);
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

	/*
	 * permanently deletes a file
	 */
	$scope.deleteFile = function(file) {

		file.markedForDeletion = true;

	};

	/*
	 * shows a modal to display an image
	 */
	$scope.lightbox = function(file) {

		$modal.open({
	      templateUrl: '/components/lightbox/lightboxModal.html',
			controller : 'LightboxModalController',
			size : 'lg',
			resolve: {
				id: function() {
					return file._id;
				},
				name: function() {
					return file.filename;
				}
			},
	    });

	};

}]);
