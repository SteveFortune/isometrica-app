var app = angular.module('resilify');
 
app.directive('resCanvasSection', function($modal, $rootScope, CanvasItem, $timeout) {

	var showEditModal = function(ev, canvasItem, $scope, isNew, $timeout) {

		var modalInstance = $modal.open({
			templateUrl: '/components/canvas/canvasItemModal.html',
			controller: 'CanvasItemController',
			windowClass : 'edit-item-title' + (canvasItem.type === 'background' ? ' note' : ''),
			resolve: {
				canvasItem : function () {
				  return canvasItem;
				},
				isNew : function() {
					return isNew;
				},
				loadData : function() {
					return $scope.loadData;
				}
			}
		});

		modalInstance.result.then( function(item) {
			$scope.loadData();	
		});

		//stop propagation to not call the 'add' function on the container
		ev.stopPropagation();

	};

	return {

		scope : {
			sectionTitle : '@',
			itemType : '@',
			planId : '@',
		},
		restrict: 'AE',
		replace: 'true',
		templateUrl: '/components/canvas/canvasSectionView.html',

		controller : function($scope, $element) {

			$scope.loadData = function() {
				CanvasItem.find( { filter : 
				{ where : { 'and' : [{ 'planId' : $scope.planId }, { 'type' : $scope.itemType }] } } }, 
				function(res) {
					$scope.items = res;
				});
			};	

	      	//load data for this section
			$scope.items = [];
			$scope.loadData();

	      	$scope.editCanvasItem = function(ev, canvasItem) {
	      		showEditModal(ev, canvasItem, $scope, false, $timeout);
			};

			$scope.addCanvasItem = function(ev, type) {
				var newItem = $scope.getRelativeEventPosition(ev, type);
				newItem.type = type;
				newItem.planId = $scope.planId;

				showEditModal(ev, newItem, $scope, true, $timeout);
			};

			$scope.viewSectionWorksheet = function(ev) {

				var templateUrl = '/components/canvas/' + $scope.itemType + '/' + $scope.itemType + 'WorksheetModal.html'; 
				var ctrl = $scope.itemType.substring(0,1).toUpperCase() + $scope.itemType.substring(1) + 'WorksheetController';

				var modalInstance = $modal.open({
					templateUrl: templateUrl,
					controller : ctrl,
					windowClass : 'table-view-modal',
					size : 'lg',
					resolve : {
						planId : function() {
							return $scope.planId;
						},
						loadData : function() {
							return $scope.loadData;
						}
					}
				});
/*
				modalInstance.result.then( function(item) {
					$scope.loadData();	
				});*/

				//stop propagation to not call the 'add' function on the container
				ev.stopPropagation();

			};

			

			$scope.getRelativeEventPosition = function(ev, type) {

				var rect = $element[0].getBoundingClientRect();
				
				var x = ev.offsetX;
				var y = ev.offsetY;

				//compensate for overlays
				if ($rootScope.showOverlays) {
					y -= 58;
				}

				//componsate for canvas item (80x80px)
				var offsetTop = Math.round( (y / rect.height ) * 100 ) -6;
				var offsetLeft = Math.round( (x / rect.width ) * 100 ) -12;

				offsetTop = Math.min(offsetTop, 99);
				offsetLeft = Math.min(offsetLeft, 99);

				return {
					offsetTop : offsetTop ,
					offsetLeft : offsetLeft 
				};

			};
			

		}
	};

});

app.directive('resDraggableCanvasItem', function() {

	return {
		restrict : 'AE',

		link : function(scope, element, attr) {
			var el = element[0];
        	el.draggable = true;

        	el.addEventListener(
	            'dragstart',
	            function(ev) {
	            	ev.dataTransfer.effectAllowed = 'move';
	            	ev.target.style.opacity = '0.4';
    				ev.dataTransfer.setData("text", ev.target.id);

	            });

        	el.addEventListener(
	            'dragend',
	            function(ev) {
	            	ev.target.style.opacity = '1';
	            });

		}
	};

});

app.directive('resTitleRollup', function(CanvasItem) {

	return {
		restrict : 'AE',
		
		link : function(scope, element, attr) {
			var el = element[0];
        	el.droppable = true;

        	el.addEventListener(
	            'drop',
	            function(ev) {
	            	ev.stopPropagation();
	           		ev.preventDefault();
				    var itemId = ev.dataTransfer.getData('text');
				    
				    CanvasItem.prototype$updateAttributes({ id: itemId }, {showOnCanvas : false})
  					.$promise.then(function(res) {
  						scope.loadData();
  					});
					            	
	            });

        	el.addEventListener(
	            'dragover',
	            function(ev) {
	            	element.addClass('active');

	            	ev.dataTransfer.dropEffect = 'move';
	           		ev.preventDefault();            	
	            });

        	el.addEventListener(
	            'dragleave',
	            function(ev) {
	            	element.removeClass('active');          	
	            });

		}
	};

});

app.directive('resDroppableMove', function(CanvasItem) {

	return {
		restrict : 'AE',
		
		link : function(scope, element, attr) {
			var el = element[0];
        	el.droppable = true;

        	el.addEventListener(
			    'dragover',
			    function(ev) {
			        ev.dataTransfer.dropEffect = 'move';
			        // allows us to drop
	
			        if (ev.preventDefault) ev.preventDefault();
			        this.classList.add('over');
			        return false;
			    },
			    false
			);

        	el.addEventListener(
	            'drop',
	            function(ev) {
	            	ev.stopPropagation();
	            	ev.preventDefault();
				    var itemId = ev.dataTransfer.getData("text");

				    var dropLocation = scope.getRelativeEventPosition(ev, 'asset');

				    CanvasItem.prototype$updateAttributes({ id: itemId }, dropLocation)
  					.$promise.then(function(res) {
  						scope.loadData();
  					});          	
	            });

		}
	};

});