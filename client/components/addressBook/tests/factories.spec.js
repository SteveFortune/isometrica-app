'use strict';

/**
 * A shared example / behaviour which asserts that a method on the user service
 * returns a promise which resolves / rejects based on the success / failure of
 * the operation.
 *
 * @param	context			Object		Context object that holds a reference to our
 *										sut. This is initialised in beforeEach.
 * @param 	isoUserMethod	String		The method of this IsometricaUser service
 *										that we're spying on
 * @param	method			String		The name of the service method under test
 * @param	args			Array		An array of arguments to pass to the method
 *										under test
 * @author 	Steve Fortune
 */
var itShouldWrapOperationInPromise = function(context, isoUserMethod, method, args) {

	/**
	 * @var Object
	 */
	var service;

	/**
	 * @return 	muliple		The return value of the method invocation on the service.
	 * @private
	 */
	var executeMethod = function() {
		return service[method].apply(args);
	};

	beforeEach(function() {
		service = context._UserFactoryRemote;
	});

	it("should return a promise for the operation", function() {
		inject(function($q) {
			var pr = executeMethod();
			expect(pr).toHaveSameCtorAs($q.defer());
		});
	});

	it("should resolve promise on success", function() {
		inject(function(IsometricaUser, $rootScope) {
			var foundUsers = [ {}, {}, {} ];
			var success = jasmine.createSpy();
			spyOn(IsometricaUser, isoUserMethod).and.callFake(function(obj, resolve, reject) {
				resolve(foundUsers);
			});
			executeMethod().then(success);
			// See here: http://stackoverflow.com/questions/16323323/promise-callback-not-called-in-angular-js
			// Angular.js has its own event loop. Promise resolutions are propogated asynchronously
			// in the event loop. The event loop is processed every digest cycle, so we need to trigger
			// one with $scope.$apply
			$rootScope.$digest();
			expect(success).toHaveBeenCalledWith(foundUsers);
		});
	});

	it("should reject promise on failure", function() {
		inject(function(IsometricaUser, $rootScope) {
			var failure = jasmine.createSpy();
			spyOn(IsometricaUser, isoUserMethod).and.callFake(function(obj, resolve, reject) {
				reject('Error');
			});
			executeMethod().then(function() {}, failure);
			$rootScope.$digest();
			expect(failure).toHaveBeenCalledWith('Error');
		});
	});

};

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

	/**
	 * Our context holds a reference to the sut. This is so that our shared examples
	 * can get at it in the beforeEach block, when `_UserFactoryRemote` has been
	 * retrieved.
	 *
	 * @var Object
	 */
	var context = {
		_UserFactoryRemote: null
	};

	beforeEach(module('isa'));
	beforeEach(module("isa.addressbook.factories"));
	beforeEach(inject(function(__UserFactoryRemote_) {
		context._UserFactoryRemote = __UserFactoryRemote_;
	}));
	beforeEach(function() {
		jasmine.addMatchers(toHaveSameCtorAs);
	});

	describe("all", function() {

		it("should find all users", function() {
			inject(function(IsometricaUser) {
				spyOn(IsometricaUser, 'find');
				context._UserFactoryRemote.all(3);
				expect(IsometricaUser.find).toHaveBeenCalledWith({
					filter: {
						offset: 30,
						limit: 10
					}
				}, jasmine.any(Function), jasmine.any(Function));
			});
		});

		itShouldWrapOperationInPromise(context, 'find', 'all', [0]);

	});

	describe("find", function() {

		it("should find a single user by the given predicate", function() {


		});

		itShouldWrapOperationInPromise(context, 'find', 'findOneBy', ['id']);

	});

});
