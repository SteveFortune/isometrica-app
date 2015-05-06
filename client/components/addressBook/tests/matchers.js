
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
