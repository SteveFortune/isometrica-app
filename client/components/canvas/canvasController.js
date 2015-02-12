
var app = angular.module('resilify');

app.controller( 'CanvasController', [
	'$scope', '$stateParams', '$modal', 'Plan', 'Asset', 'growl',
	function($scope, $stateParams, $modal, Plan, Asset, growl) {

	$scope.planId = $stateParams.planId;
	$scope.plan = Plan.findById( { 'id' : $stateParams.planId } );	

	//get all the different item types to render on the canvas


	$scope.impactItems = [
		{ itemType : 'impact', name : 'impact 1', offsetLeft : 22, offsetTop : 24 },
		{ itemType : 'impact', name : 'longer title goes here', offsetLeft : 40, offsetTop : 60 }
	];

	$scope.riskItems = [
		{ itemType : 'risk', name : 'risk 1', offsetLeft : 15, offsetTop : 15 },
		{ itemType : 'risk', name : 'risk 2', offsetLeft : 40, offsetTop : 60 }
	];

	$scope.strategyItems = [
		{ itemType : 'strategy', name : 'strategy 1', offsetLeft : 22, offsetTop : 30 },
		{ itemType : 'strategy', name : 'strategy 2', offsetLeft : 40, offsetTop : 70 }
	];

	$scope.procedureItems = [
		{ itemType : 'procedure', name : 'procedure 1', offsetLeft : 20, offsetTop : 20 },
		{ itemType : 'procedure', name : 'procedure 2', offsetLeft : 40, offsetTop : 40 }
	];

	$scope.backgroundItems = [
		{ itemType : 'background', name : 'background 1', offsetLeft : 20, offsetTop : 20 },
		{ itemType : 'background', name : 'background 2', offsetLeft : 40, offsetTop : 20 }
	];

	$scope.addCanvasItem = function(ev, type) {

		console.log('add');

		var newItem = getRelativeClickPos(ev);
		newItem.itemType = type;
		newItem.planId = $scope.plan.id;

		var modalInstance = $modal.open({
			templateUrl: '/components/canvas/canvasItemModal.html',
			controller: 'CanvasItemController',
			windowClass : 'sticky-note-modal' + (type === 'background' ? ' note' : ''),
			resolve: {
				canvasItem : function () {
					return newItem;
				},
				isNew : function() {
					return true;
				}
			}
		});

		modalInstance.result.then( function(item) {
			console.log('added', item.itemType);

			switch( item.itemType) {
				case 'asset':
					reloadAssets();
			}

			growl.success('Canvas item added');
		});

	};

	var getRelativeClickPos = function(ev) {

		var col = $( ev.target || ev.srcElement).parent('.canvas-row').first();
		var colHeight = col[0].offsetHeight;

		var numColumns = 5;
		var colWidth = col[0].offsetWidth / numColumns;

		var offsetTop = Math.round( (ev.offsetY / colHeight) * 100 ) - 6;
		var offsetLeft = Math.round( (ev.offsetX / colWidth) * 100 ) - 12;

		return {
			offsetTop : offsetTop ,
			offsetLeft : offsetLeft 
		};

	};

	$scope.editCanvasItem = function(ev, canvasItem) {

		console.log('edit');

		var modalInstance = $modal.open({
			templateUrl: '/components/canvas/canvasItemModal.html',
			controller: 'CanvasItemController',
			windowClass : 'sticky-note-modal' + (canvasItem.type == 'background' ? ' note' : ''),
			resolve: {
				canvasItem : function () {
				  return canvasItem;
				},
				isNew : function() {
					return false;
				}
			}
		});

		modalInstance.result.then( function(item) {
			
			if (typeof item === 'undefined') {
				growl.success('Item has been deleted');

				reloadAssets();

			} else {
				console.log('updated')
				growl.success('Item has been updated');

				switch( item.itemType) {
				case 'asset':
					reloadAssets();
				}
			}
		});

		//stop propagation to not call the 'add' function on the container
		ev.stopPropagation();

	};

	var reloadAssets = function() {	
		//retrieve all plans and activate the tooltips

		console.log($scope.plan.id)

		$scope.assetItems = Asset.find( { filter : { where : { 'planId' : $scope.planId }} });

// 		$scope.pen = Product.findOne({ 
//   filter: { where: { name: 'Pen' } }
// });
// 		Asset.query( { 'filter[order]' : 'name ASC'} )
// 		.$promise.then( function(res) {
// 			$scope.assetItems = res;

// 		});
	};


	reloadAssets();
	

}]);
