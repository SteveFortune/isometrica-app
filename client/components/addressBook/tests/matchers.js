
'use strict';

var toHaveSameCtorAs = {
	toSameObjectAs: function(expectedObj) {
		return this.actual.constructor === expectedObj.constructor;
	},
	message: function() {
		return "Expected object to have constructor: " + this.actual.constructor;
	}
};
