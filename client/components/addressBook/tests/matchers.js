
'use strict';

var toHaveSameCtorAs = {
	toHaveSameCtorAs: function(util, customEqualityTesters) {
		return {
			compare: function(actual, expected) {
				var pass = util.equals(actual.constructor, expected.constructor, customEqualityTesters);
				return {
					pass: pass,
					message: pass ?
						'Expected ctors to be similar, weren\'t' :
						'Expected ctors to be distinct, weren\'t'
				}
			}
		};
	}
};

var toBeInstanceOf = {
	toHaveSameCtorAs: function(util, customEqualityTesters) {
		return {
			compare: function(actual, expected) {

				// @todo Assert these predocnditions using the actual matcher functionallity
				if (!expected instanceof Function) {
					throw new Error("Expected should be function");
				} else if (!actual instanceof Object){
					throw new Error("Actual should be an object");
				}
				var pass = util.equals(actual instanceof expected, true, customEqualityTesters);
				return {
					pass: pass,
					message: pass ?
						'Expected this to be an instance of ' + expected :
						'Expected this not to be and instance of ' + expected
				}
			}
		};
	}
};
