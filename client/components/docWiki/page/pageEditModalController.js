var app = angular.module('isa.docwiki');

/*
 * Controls adding or editing a page in a modal
 */
app.controller('PageEditModalController',
	[ '$scope', '$modalInstance', '$http', 'Plan', 'Page', 'currentPage', 'isNew', 'uploader', 'pageFiles',
	function($scope, $modalInstance, $http, Plan, Page, currentPage, isNew, uploader, pageFiles) {

	$scope.uploader = uploader;
	$scope.isNew = isNew;
	$scope.page = currentPage;
	$scope.pageFiles = pageFiles;

	$scope.utils = isa.utils;

	/*
	 * used for tags: converts an array of tag strings:
	 * [ 'tag 1', 'tag 2' ]
	 * to an array of objects: 
	 * [ { text : 'tag 1'}, { text : 'tag 2'} ]
	 */
	var tagStringToObjectsArray = function(tagsArray) {

		var tagsObjectArray = [];

		if (typeof tagsArray != 'undefined') {
			tagsArray.forEach( function(tag) {
				tagsObjectArray.push( { "text" : tag.text} );
			});
		}

		return tagsArray;
	};

	$scope.page.tags = tagStringToObjectsArray($scope.page.tags);

	//load tags list for autocomplete
	Plan.tags( { 'documentId' : currentPage.documentId}  ).$promise.then( function(res) {
		$scope.tags = res.tags;
	});

	//creates a list of autocomplete options for tags
	$scope.loadTags = function(q) {
		var res = [];
		angular.forEach( $scope.tags, function(tag) {
			if (tag.toLowerCase().indexOf(q)>-1) {
				res.push(tag);
			}
		});
		return res;
	};

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