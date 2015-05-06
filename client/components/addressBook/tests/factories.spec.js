'use strict';

describe("UserFactory", function() {

	beforeEach(module('isa'));
	beforeEach(module('isa.addressbook.factories'));

	it("should get a factory using the injector", function() {

		inject(function($injector, PersistentFactoryNameResolver) {

			var factory = {};
			var factoryName = "_UserFactoryLocal";

			spyOn($injector, 'get').and.callThrough();
			spyOn(PersistentFactoryNameResolver, 'resolveFactory').and.returnValue(factoryName);

			$injector.get('UserFactory');

			expect($injector.get).toHaveBeenCalled();
			expect($injector.get).toHaveBeenCalledWith(factoryName);

		});

	});

});

describe("_UserFactoryRemote", function() {

	var _UserFactoryRemote;

	beforeEach(module('isa'));
	beforeEach(module("isa.addressbook.factories"));
	beforeEach(inject(function(__UserFactoryRemote_) {
		_UserFactoryRemote = __UserFactoryRemote_;
	}));
	beforeEach(function() {
		jasmine.addMatchers(toHaveSameCtorAs);
	});

	describe("all", function() {

		it("should find all users", function() {
			inject(function(IsometricaUser) {
				spyOn(IsometricaUser, 'find');
				_UserFactoryRemote.all(3);
				expect(IsometricaUser.find).toHaveBeenCalledWith({
					filter: {
						offset: 30,
						limit: 10
					}
				}, jasmine.any(Function), jasmine.any(Function));
			});
		});

		it("should return a promise for the operation", function() {
			inject(function($q) {
				var pr = _UserFactoryRemote.all();
				expect(pr).toHaveSameCtorAs($q.defer());
			});
		});

		it("should resolve promise on success", function() {
			inject(function() {
				//var $qSpy = createSpy().and.callFake(function(promiseHandler) {

				//});
				//$provide.value('$q', $qSpy);
			});
		});

		it("should reject promise on failure", function() {

		});


	});

	describe("find", function() {

		it("should find a single user by the given predicate", function() {



		});

		//itShouldWrapOperationInPromise();

	});

});
