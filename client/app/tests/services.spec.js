'use strict';

describe('PersistentFactoryNameResolver', function() {

	var PersistentFactoryNameResolver;

	beforeEach(module('isa', function($provide) {
		$provide.value('$rootScope', {});
	}));
	beforeEach(inject(function(_PersistentFactoryNameResolver_) {
		PersistentFactoryNameResolver = _PersistentFactoryNameResolver_;
	}));

	it("should return name with local suffix", function() {
		inject(function($rootScope) {
			$rootScope.online = false;
			expect(PersistentFactoryNameResolver.resolve('Test')).toBe('_TestLocal');
		});
	});

	it("should return name with remote suffix", function() {
		inject(function($rootScope) {
			$rootScope.online = true;
			expect(PersistentFactoryNameResolver.resolve('Test')).toBe('_TestRemote');
		});
	});

});
