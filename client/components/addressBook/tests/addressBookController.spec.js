'use strict';

describe("AddressBookController", function() {

	var AddressBookController;
	var $scope;

	beforeEach(module('isa'));
	beforeEach(module('isa.addressbook'));
	beforeEach(inject(function($controller) {
		$scope = {};
		AddressBookController = $controller('AddressBookController', {
			$scope: $scope
		});
	}));
	beforeEach(function() {
		jasmine.addMatchers(toBeInstanceOf);
	});

	describe("ctor", function() {
		it("should initialise the loadingState to 'loading'", function() {
			expect($scope.getLoadingState()).toEqual('loading');
		});
		it("should intiailise the address book collection to an empty array", function() {
			expect($scope.addressBookCollection).toBeInstanceOf(Array);
			expect($scope.addressBookCollection.length).toEqual(0);
		});
	});

	describe("loadingState", function() {
		it("should get/set the loading state", function() {
			$scope.setLoadingState('loaded');
			expect($scope.getLoadingState()).toEqual('loaded');
		});
		it("should throw an Error if set to an invalid state string", function() {
			expect(function() {
				$scope.setLoadingState('invalid');
			}).toThrow(new Error('Loading state must be: loading,loaded,failed'));
		});
	});

});
