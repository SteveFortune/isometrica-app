'use strict';

describe("AddressBookController", function() {

	var AddressBookController;

	beforeEach(module('isa'));
	beforeEach(module('isa.addressbook'));
	beforeEach(inject(function(_AddressBookController_) {
		AddressBookController = _AddressBookController_;
	}));
	beforeEach(function() {
		jasmine.addMatchers(toBeInstanceOf);
	});

	describe("ctor", function() {
		it("should initialise the loadingState to 'loading'", function() {
			expect(AddressBookController.loadingState).toEqual('loading');
		});
		it("should intiailise the address book collection to an empty array", function() {
			expect(AddressBookController.addressBookCollection).toBeInstanceOf(Array);
			expect(AddressBookController.addressBookCollection.length).toEqual(0);
		});
	});

});
