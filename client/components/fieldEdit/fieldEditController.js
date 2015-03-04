
var app = angular.module('resilify');

app.directive("clickToEdit", function($modal, $timeout, CanvasItem) {
  
    return {
        restrict: "A",
        replace: false,
        template: '<div class="click-to-edit" ng-click="edit()">{{item[fieldName] | blankString }}</div>',
        scope: {
            fieldName: "@clickToEdit",
            item : '='
        },
        controller: function($scope, $timeout) {

        	$scope.edit = function() {
					
				var modalInstance = $modal.open({
					templateUrl: '/components/fieldEdit/fieldEditModal.html',
					controller : 'ClickToEditController',
					size : 'sm',
					resolve : {
						val : function() {
							return $scope.item[$scope.fieldName];
						}
						
					}
				});

				modalInstance.result.then( function(res) {
					
					if (res != $scope.item[$scope.fieldName]) {
						
						$scope.item[$scope.fieldName] = res;
						
						var setField = {};
						setField[$scope.fieldName] = res;
				
						//store the updated value
						CanvasItem.prototype$updateAttributes({ id: $scope.item.id }, setField)
	  					.$promise.then(function(res) {
	  						//done saving...
	  					});

					}

				
				});

			};

        },
        link : function( scope, elem, attrs ) {

        }
    };
});

app.controller( 'ClickToEditController', [
	'$scope', '$modalInstance', 'val',
	function($scope, $modalInstance, val) {

	$scope.val = val;
	
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};

	$scope.save = function() {
		$modalInstance.close($scope.val);
	};

}]);
