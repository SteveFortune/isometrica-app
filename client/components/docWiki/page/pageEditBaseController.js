var app = angular.module('isa.docwiki');

/*
 * Controller to add/edit a page in a document
 */
app.controller('PageEditBaseController', [ '$scope', '$modal', '$http', '$state', 'Page', 'FileUploader', 'CurrentUser',
	function($scope, $modal, $http, $state, Page, FileUploader, CurrentUser) {

	var isNew = false;

	//setup file uploader object
	var uploader = $scope.uploader = new FileUploader({
		url : '/uploads'
	});

	//edit a page in a modal or open the modal to add a new one
	$scope.editPage = function(page) {

		if (typeof page == 'undefined') {
			page = {};
			isNew = true;
		} else {
			page = angular.copy(page);
		}

		var modalInstance = $scope.modalInstance = $modal.open({
			templateUrl: '/components/docWiki/page/pageEdit.html',
			controller: 'PageEditModalController',
			windowClass : 'docwiki',
			size : 'lg',
			backdrop : true,
			resolve: {
				currentPage : function () {
					return page;
				},
				pageFiles : function() {
					return $scope.pageFiles;
				},
				isNew : function() {
					return isNew;
				},
				uploader : function() {
					return uploader;
				}
			}
		});

		modalInstance.result.then(function (data) {
			if (data.reason == 'save') {
				savePage(data.page, data.pageFiles);
			} else if (data.reason == 'delete') {
				console.log('delete')
				//$scope.deleteItem(data.item);
			}
	    }, function () {
	      
	    });
	};

	var savePage = function(pageObject, pageFiles) {
	
		$scope.submitted = true;

		//convert tags to array (if it's a string)
		if (typeof pageObject.tags === 'string') {
			pageObject.tags = (pageObject.tags.length>0 ? [pageObject.tags] : []);
		}

		pageObject.updatedBy = CurrentUser.getCurrentUser().name;

		if (isNew) {

			//set current documentId on page
			pageObject.documentId = $scope.moduleId;
			pageObject.createdBy = CurrentUser.getCurrentUser().name;

			Page.create(pageObject).$promise
			.then( function(p) {

				_postSave(p.id, pageFiles);

			});

		} else {

			var page = new Page(pageObject);

			page.$save( function(_saved) {

				_postSave(pageObject.id, pageFiles);

			});

		}

	};

	var _postSave = function(pageId, pageFiles) {

		//delete selected files
		angular.forEach( pageFiles, function(file) {
			if (file.markedForDeletion) {
				console.info('delete ', file);
				$http.delete('/file/' + file._id);
			}
		});

		//upload all files
		if (uploader.queue.length>0 ) {

			uploader.onBeforeUploadItem = function(item) {
			    item.url = '/upload/' + pageId;
			};
			uploader.onCompleteAll = function() {
	            $state.go('docwiki.page', {pageId: pageId }, {reload: true});
	        };
			uploader.uploadAll();

		} else {
			_readRelatedFiles(pageId);
			$state.go('docwiki.page', {pageId: pageId }, {reload: true});
		}

	};

	var _readRelatedFiles = function(parentId) {
		$http.get('/files/' + parentId).then( function(res) {
			var files = res.data;
			angular.forEach(files, function(file) {
				file.markedForDeletion = false;
				var ext = file.filename.substring( file.filename.lastIndexOf('.') + 1).toLowerCase();
				file.isImage = (ext == 'jpg' || ext=='jpeg' || ext == 'gif' || ext == 'png');
			});
			$scope.pageFiles = files;
		});
	};


}]);