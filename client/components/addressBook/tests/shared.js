'use strict';

var itShouldWrapOperationInPromise = function(obj, method, args) {

	var executeMethod = function() {
		return obj[method].apply(args);
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
			spyOn(IsometricaUser, 'find').and.callFake(function(obj, resolve, reject) {
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
			spyOn(IsometricaUser, 'find').and.callFake(function(obj, resolve, reject) {
				reject('Error');
			});
			executeMethod().then(function() {}, failure);
			$rootScope.$digest();
			expect(failure).toHaveBeenCalledWith('Error');
		});
	});

};
