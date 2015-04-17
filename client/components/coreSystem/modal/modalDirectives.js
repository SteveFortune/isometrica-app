
var app = angular.module('isa');

/**
 * @author Steve Fortune
 */
app.directive('isaModalHeader', function(){
	return {
		templateUrl: '/components/coreSystem/modal/modalHeader.html',
		restrict: 'AE',
		scope: {
			'title': '@',
			'canSave': '=',
			'canDelete': '=',
			'onSave': '&',
			'onDelete': '&'
		}
	};
});

/**
 * @author Steve Fortune
 */
app.directive('isaModalFooter', function(){
	return {
		templateUrl: '/components/coreSystem/modal/modalFooter.html',
		restrict: 'AE',
		scope: {
			'title': '@',
			'canAdd': '=',
			'onAdd': '&'
		}
	};
});
