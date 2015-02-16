var app = angular.module('resilify');

app.directive('draggable', function() {

	return {
		restrict : 'AE',

		link : function(scope, element, attr) {
			var el = element[0];
        	el.draggable = true;

        	el.addEventListener(
	            'dragstart',
	            function(ev) {
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

app.directive('droppable', function(CanvasItem) {

	return {
		restrict : 'AE',
		
		link : function(scope, element, attr) {
			var el = element[0];
        	el.droppable = true;

        	el.addEventListener(
	            'drop',
	            function(ev) {
	           		ev.preventDefault();
				    var itemId = ev.dataTransfer.getData("text");
				    
				    CanvasItem.prototype$updateAttributes({ id: itemId }, {showOnCanvas : false})
  					.$promise.then(function(res) {
  						scope.loadData();
  					});
					            	
	            });


        	el.addEventListener(
	            'dragover',
	            function(ev) {
	           		ev.preventDefault();            	
	            });

		}
	};

});

app.directive('droppableMove', function(CanvasItem) {

	return {
		restrict : 'AE',
		
		link : function(scope, element, attr) {
			var el = element[0];
        	el.droppable = true;

        	el.addEventListener(
	            'drop',
	            function(ev) {
	            	console.log('drop');
	           		ev.preventDefault();
				    var itemId = ev.dataTransfer.getData("text");

				    console.log(itemId);
				    return;
				    
				    CanvasItem.prototype$updateAttributes({ id: itemId }, {showOnCanvas : false})
  					.$promise.then(function(res) {
  						scope.loadData();
  					});
					            	
	            });

/*
        	el.addEventListener(
	            'dragover',
	            function(ev) {
	           		ev.preventDefault();            	
	            });
*/

		}
	};

});
 
app.directive('resCanvasSection', function($modal, CanvasItem, $timeout) {

	var getRelativeClickPos = function(ev, type) {

		var col = $( ev.target || ev.srcElement).parent('.canvas-row').first();
		var colHeight = col[0].offsetHeight;

		var numColumns = (type == 'background' ? 1 : 5);
		var colWidth = col[0].offsetWidth / numColumns;

		var offsetTop = Math.round( (ev.offsetY / colHeight) * 100 ) - 6;
		var offsetLeft = Math.round( (ev.offsetX / colWidth) * 100 ) - 12;

		return {
			offsetTop : offsetTop ,
			offsetLeft : offsetLeft 
		};

	};

	var showEditModal = function(ev, editItem, $scope, isNew, $timeout) {

		var modalInstance = $modal.open({
			templateUrl: '/components/canvas/canvasItemModal.html',
			controller: 'CanvasItemController',
			windowClass : 'sticky-note-modal' + (editItem.type === 'background' ? ' note' : ''),
			resolve: {
				canvasItem : function () {
				  return editItem;
				},
				isNew : function() {
					return isNew;
				}
			}
		});

		modalInstance.result.then( function(item) {
			$scope.loadData();	
		});

		modalInstance.opened.then( function() {
			//set focus on text field in modal
			$timeout( function() {
				$("form[name='canvasItemForm'] textarea").focus();
			}, 200);
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

		controller : function($scope) {

			$scope.loadData = function() {
				CanvasItem.find( { filter : { where : { 'and' : [{ 'planId' : $scope.planId }, { 'type' : $scope.itemType }] } } },
					function(canvasItems) {
						$scope.items = [];
						angular.forEach( canvasItems, function(i) {
							$scope.items.push(i);
						});
					}
				);
			};

	      	//load data for this section
			$scope.items = [];
			$scope.loadData();

	      	$scope.editCanvasItem = function(ev, canvasItem) {
	      		showEditModal(ev, canvasItem, $scope, false, $timeout);
			};

			$scope.addCanvasItem = function(ev, type) {

				var newItem = getRelativeClickPos(ev, type);
				newItem.type = type;
				newItem.planId = $scope.planId;

				showEditModal(ev, newItem, $scope, true, $timeout);

			};

			

		}
	};

});