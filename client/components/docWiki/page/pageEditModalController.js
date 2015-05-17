var app = angular.module('isa.docwiki');

/*
 * Controls adding or editing a page in a modal
 */
app.controller('PageEditModalController',
	[ '$scope', '$modalInstance', '$http', 'Page', 'currentPage', 'isNew', 'uploader', 'pageFiles',
	function($scope, $modalInstance, $http, Page, currentPage, isNew, uploader, pageFiles) {

	$scope.uploader = uploader;
	$scope.isNew = isNew;
	$scope.page = currentPage;
	$scope.pageFiles = pageFiles;

	$scope.utils = isa.utils;

	$scope.delete = function() {
		$modalInstance.close({reason:'delete', item: $scope.selectedItem} );
	};

	$scope.cancelEdit = function () {
		$modalInstance.dismiss('cancel');
	};

	$scope.save = function(form) {

		//validate the input
		if (!form.$valid) { 

	  		var msgs = [];

	  		msgs.push("Please correct the following errors:\n");

	  		if (form.$error.required) {
	  			msgs.push("- fill in all required fields\n");
	  		}
	  		
	  		if (form.$error.email) {
				msgs.push("- enter a valid email address\n");
	  		}

	  		//TODO: create a proper dialog for this
	  		alert(msgs.join(''));
	  		return;

	  	}

		$modalInstance.close({reason: 'save', page : $scope.page, pageFiles : $scope.pageFiles });

	};

	//mark an attached file to be deleted when this page is saved
	$scope.deleteFile = function(file) {
		file.markedForDeletion = true;
	};


}]);