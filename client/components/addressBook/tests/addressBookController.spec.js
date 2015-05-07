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
			expect($scope.loadingState).toEqual('loading');
		});
		it("should intiailise the address book collection to an empty array", function() {
			expect($scope.addressBookCollection).toBeInstanceOf(Array);
			expect($scope.addressBookCollection.length).toEqual(0);
		});
	});

	describe("loadingState", function() {
		it("should set the loading state", function() {
			$scope.setLoadingState('loaded');
			expect($scope.loadingState).toEqual('loaded');
		});
		it("should throw an Error if set to an invalid state string", function() {
			expect(function() {
				$scope.setLoadingState('invalid');
			}).toThrow(new Error('Loading state must be: loading,loaded,failed'));
		});
	});

	describe("selectState", function() {
		it("should set the select state", function() {
			$scope.setSelectState('Users');
			expect($scope.selectState).toEqual('Users');
		});
		it("should throw an Error if set to an invalid state string", function() {
			expect(function() {
				$scope.setSelectState('invalid');
			}).toThrow(new Error('Select state must be: Users,Contacts,Organisations'));
		});
	});

});
