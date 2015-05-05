'use strict';

var app = angular.module('isa');


/**
 * Utility service that encapsulates transforming a factory name
 */
app.service('PersistentFactoryNameResolver', ['$rootScope', function($rootScope) {
	return {
		resolveFactory : function(name) {
			var suffix = $rootScope.online ? 'Remote' : 'Local';
			return '_' + name + suffix;
		}
	};
}]);
