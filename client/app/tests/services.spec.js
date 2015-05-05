'use strict';

describe('PersistentFactoryNameResolver', function() {

	var PersistentFactoryNameResolver

	beforeEach(module('isa'));
	beforeEach(inject(function(_PersistentFactoryNameResolver_) {
		PersistentFactoryNameResolver = _PersistentFactoryNameResolver_;
	}));

	it("should fail", function() {
		expect(PersistentFactoryNameResolver).toBe(false);
	});
});
