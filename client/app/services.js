'use strict';

var app = angular.module('isa');


/**
 * Utility service that encapsulates transforming a given factory name
 */
app.service('PersistentFactoryNameResolver', ['$rootScope', function($rootScope) {
	return {
		resolve: function(name) {
			var suffix = $rootScope.online ? 'Remote' : 'Local';
			return '_' + name + suffix;
		}
	};
});
