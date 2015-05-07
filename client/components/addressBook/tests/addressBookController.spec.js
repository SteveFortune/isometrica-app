'use strict';

describe("AddressBookController", function() {

	var AddressBookController;
	var $scope;

	beforeEach(module('isa'));
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
			expect($scope.loadingState).toEqual('loading');
		});
		it("should intiailise the address book collection to an empty array", function() {
			expect($scope.addressBookCollection).toBeInstanceOf(Array);
			expect($scope.addressBookCollection.length).toEqual(0);
		});
	});

});
