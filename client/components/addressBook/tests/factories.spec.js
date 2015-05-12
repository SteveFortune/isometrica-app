'use strict';

describe("UserService (remote)", function() {

	var UserService;

	beforeEach(module('isa', function($provide) {
		$provide.constant('CLIENT_ONLINE', true);
	}));
	beforeEach(inject(function(_UserService_) {
		UserService = _UserService_;
	}));
	beforeEach(function() {
		jasmine.addMatchers(toHaveSameCtorAs);
	});

	// @note Opted to favour DAMP tests instead of DRY here. I tried refactoring the promise
	// wrapping into a shared example but tests became more obscure and complex. Each method
	// might also want to futher customise how the promises are handled so it makes more sense
	// to write the tests out for each separate method.

	describe("all", function() {

		it("should find all users", function() {
			inject(function(IsometricaUser) {
				spyOn(IsometricaUser, 'find');
				UserService.all(3);
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
				var pr = UserService.all();
				expect(pr).toHaveSameCtorAs($q.defer());
			});
		});

		it("should resolve promise on success", function() {
			inject(function(IsometricaUser, $rootScope) {
				var foundUsers = [ {}, {}, {} ];
				var success = jasmine.createSpy();
				spyOn(IsometricaUser, 'find').and.callFake(function(obj, resolve, reject) {
					resolve(foundUsers);
				});
				UserService.all().then(success);
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
				spyOn(IsometricaUser, 'find').and.callFake(function(obj, resolve, reject) {
					reject('Error');
				});
				UserService.all().then(function() {}, failure);
				$rootScope.$digest();
				expect(failure).toHaveBeenCalledWith('Error');
			});
		});

	});

	describe("findOneBy", function() {

		it("should find a single user by the given predicate", function() {
			inject(function(IsometricaUser) {
				spyOn(IsometricaUser, 'findOne');
				UserService.findOneBy({
					first_name: "Steve",
					last_name: "Fortune"
				});
				expect(IsometricaUser.findOne).toHaveBeenCalledWith({
					filter: {
						where: {
							first_name: "Steve",
							last_name: "Fortune"
						}
					}
				}, jasmine.any(Function), jasmine.any(Function));
			});
		});

		it("should return a promise for the operation", function() {
			inject(function($q) {
				var pr = UserService.findOneBy({});
				expect(pr).toHaveSameCtorAs($q.defer());
			});
		});

		it("should resolve promise on success", function() {
			inject(function(IsometricaUser, $rootScope) {
				var foundUser = {};
				var success = jasmine.createSpy();
				spyOn(IsometricaUser, 'findOne').and.callFake(function(obj, resolve, reject) {
					resolve(foundUser);
				});
				UserService.findOneBy().then(success);
				$rootScope.$digest();
				expect(success).toHaveBeenCalledWith(foundUser);
			});
		});

		it("should reject promise on failure", function() {
			inject(function(IsometricaUser, $rootScope) {
				var failure = jasmine.createSpy();
				spyOn(IsometricaUser, 'findOne').and.callFake(function(obj, resolve, reject) {
					reject('Error');
				});
				UserService.findOneBy().then(function() {}, failure);
				$rootScope.$digest();
				expect(failure).toHaveBeenCalledWith('Error');
			});
		});

	});

	describe("insert", function() {

		it("should insert a user", function() {
			inject(function(IsometricaUser) {
				var user = {
					first_name: "Steve",
					last_name: "Fortune"
				};
				spyOn(IsometricaUser, 'create');
				UserService.insert(user);
				expect(IsometricaUser.create).toHaveBeenCalledWith(null, user, jasmine.any(Function), jasmine.any(Function));
			});
		});

		it("should return a promise for the operation", function() {
			inject(function($q) {
				var pr = UserService.insert({});
				expect(pr).toHaveSameCtorAs($q.defer());
			});
		});

		it("should resolve promise on success", function() {
			inject(function(IsometricaUser, $rootScope) {
				var success = jasmine.createSpy();
				var user = {
					first_name: "Steve",
					last_name: "Fortune"
				};
				spyOn(IsometricaUser, 'create').and.callFake(function(params, obj, resolve, reject) {
					resolve(obj);
				});
				UserService.insert(user).then(success);
				$rootScope.$digest();
				expect(success).toHaveBeenCalledWith(user);
			});
		});

		it("should reject promise on failure", function() {
			inject(function(IsometricaUser, $rootScope) {
				var failure = jasmine.createSpy();
				spyOn(IsometricaUser, 'create').and.callFake(function(params, obj, resolve, reject) {
					reject('Error');
				});
				UserService.insert({}).then(function() {}, failure);
				$rootScope.$digest();
				expect(failure).toHaveBeenCalledWith('Error');
			});
		});

	});

	describe("deleteById", function() {

		it("should delete a user by id", function() {
			inject(function(IsometricaUser) {
				spyOn(IsometricaUser, 'deleteById');
				UserService.deleteById(123);
				expect(IsometricaUser.deleteById).toHaveBeenCalledWith({
					id: 123
				}, jasmine.any(Function), jasmine.any(Function));
			});
		});

		it("should return a promise for the operation", function() {
			inject(function($q) {
				var pr = UserService.deleteById(123);
				expect(pr).toHaveSameCtorAs($q.defer());
			});
		});

		it("should resolve promise on success", function() {
			inject(function(IsometricaUser, $rootScope) {
				var success = jasmine.createSpy();
				spyOn(IsometricaUser, 'deleteById').and.callFake(function(params, resolve, reject) {
					resolve();
				});
				UserService.deleteById(123).then(success);
				$rootScope.$digest();
				expect(success).toHaveBeenCalled();
			});
		});

		it("should reject promise on failure", function() {
			inject(function(IsometricaUser, $rootScope) {
				var failure = jasmine.createSpy();
				spyOn(IsometricaUser, 'deleteById').and.callFake(function(params, resolve, reject) {
					reject('Error');
				});
				UserService.deleteById(123).then(function() {}, failure);
				$rootScope.$digest();
				expect(failure).toHaveBeenCalledWith('Error');
			});
		});

	});

	describe("updateById", function() {

		it("should update a user by id", function() {
			inject(function(IsometricaUser) {
				spyOn(IsometricaUser, 'update');
				var user = {
					first_name: "Steve",
					last_name: "Fortune"
				};
				UserService.updateById(123, user);
				expect(IsometricaUser.update).toHaveBeenCalledWith({
					where: {
						id: 123
					}
				}, user, jasmine.any(Function), jasmine.any(Function));
			});
		});

		it("should return a promise for the operation", function() {
			inject(function($q) {
				var pr = UserService.updateById();
				expect(pr).toHaveSameCtorAs($q.defer());
			});
		});

		it("should resolve promise on success", function() {
			inject(function(IsometricaUser, $rootScope) {
				var success = jasmine.createSpy();
				var user = {};
				spyOn(IsometricaUser, 'update').and.callFake(function(params, obj, resolve, reject) {
					resolve(obj);
				});
				UserService.updateById(123, user).then(success);
				$rootScope.$digest();
				expect(success).toHaveBeenCalledWith(user);
			});
		});

		it("should reject promise on failure", function() {
			inject(function(IsometricaUser, $rootScope) {
				var failure = jasmine.createSpy();
				spyOn(IsometricaUser, 'update').and.callFake(function(params, obj, resolve, reject) {
					reject('Error');
				});
				UserService.updateById(123, {}).then(function() {}, failure);
				$rootScope.$digest();
				expect(failure).toHaveBeenCalledWith('Error');
			});
		});

	});

});
