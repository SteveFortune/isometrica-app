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

	/**
	 * System under test. I.e. our context. Declared as a property so that our
	 * shared examples can access it during test time.
	 *
	 * @note This is initialised in the beforeEach block.
	 * @var  Object
	 */
	this._UserFactoryRemote = null;

	/**
	 * A shared example / behaviour which asserts that a method on the user service
	 * returns a promise which resolves / rejects based on the success / failure of
	 * the operation.
	 *
	 * @param 	isoUserMethod	String		The method of this IsometricaUser service
	 *										that we're spying on
	 * @param	service			Object		The service object under test
	 * @param	method			String		The name of the service method under test
	 * @param	args			Array		An array of arguments to pass to the method
	 *										under test
	 * @author 	Steve Fortune
	 */
	this.itShouldWrapOperationInPromise = function(isoUserMethod, method, args) {

		this.executeMethod = function() {
			return this._UserFactoryRemote[method].apply(args);
		};

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
				this.executeMethod().then(success);
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
				this.executeMethod().then(function() {}, failure);
				$rootScope.$digest();
				expect(failure).toHaveBeenCalledWith('Error');
			});
		});
	};

	beforeEach(module('isa'));
	beforeEach(module("isa.addressbook.factories"));
	beforeEach(inject(function(__UserFactoryRemote_) {
		this._UserFactoryRemote = __UserFactoryRemote_;
	}));
	beforeEach(function() {
		jasmine.addMatchers(toHaveSameCtorAs);
	});

	describe("all", function() {

		it("should find all users", function() {
			inject(function(IsometricaUser) {
				spyOn(IsometricaUser, 'find');
				this._UserFactoryRemote.all(3);
				expect(IsometricaUser.find).toHaveBeenCalledWith({
					filter: {
						offset: 30,
						limit: 10
					}
				}, jasmine.any(Function), jasmine.any(Function));
			});
		});

		this.itShouldWrapOperationInPromise('find', 'all', [0]);
	});

	describe("find", function() {

		it("should find a single user by the given predicate", function() {


		});

		this.itShouldWrapOperationInPromise('find', 'findOneBy', ['id']);

	});

});
