
var app = angular.module('resilify');

/**
 * @author Steve Fortune
 */
app.directive('resilifyModalHeader', function(){
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
app.directive('resilifyModalFooter', function(){
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
