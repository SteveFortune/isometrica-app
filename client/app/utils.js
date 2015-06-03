var isa = isa || {};

/**
 * Convenient function for registering a persistent service.
 *
 * @param	module			Object
 * @param	name			String
 */
isa.persistentService = function(module, name) {
	module.factory(name, ['$injector', 'PersistentFactoryNameResolver',
		function($injector, PersistentFactoryNameResolver) {
			return $injector.get(PersistentFactoryNameResolver.resolveFactory(name));
	}]);
};

isa.utils = {

	getIconClassForFile : function(fileName) {
		//returns the classes for an icon to show next to a filename

		var ext = fileName.substring(fileName.lastIndexOf('.')+1).toLowerCase();

		switch (ext) {
			case 'pdf':
				return 'fa fa-file-pdf-o';
			case 'doc': case 'docx':
				return 'fa fa-file-word-o';
			case 'ppt': case 'pptx':
				return 'fa fa-file-powerpoint-o';
			case 'xls': case 'xlsx':
				return 'fa fa-file-excel-o';
			case 'jpg': case 'jpeg':
				return 'fa fa-file-picture-o';
			default:
				return 'fa fa-file-text-o';
		}

	},

	/**
	 * Computes the index of a needle, or the index of the first element
	 * that satisfies the matcher.
	 *
	 * @param	haystack	Array
	 * @param	needle		Multiple
	 * @param	matcher		Function
	 * @return 	Number		Index if successful, -1 if not found.
	 */
	indexOf: function(haystack, needle, matcher) {
		var result = -1;
		if (angular.isFunction(matcher)) {
			angular.forEach(haystack, function(elm, index) {
				if (matcher(elm)) {
					result = index;
					return;
				}
			});
		} else {
			return haystack.indexOf(needle);
		}
		return result;
	},

	/**
	 * Does a given array contain an element?
	 *
	 * @param	haystack	Array
	 * @param	needle		Multiple
	 * @param	matcher		Function
	 * @return 	Boolean
	 */
	contains: function(haystack, needle, matcher) {
		return !!~this.indexOf(haystack, needle, matcher);
	},

	/**
	 * Replaces an element in an array with a given value
	 *
	 * @param	haystack		Array
	 * @param	needle			Multiple
	 * @param	replacement		Multiple
	 * @param	matcher			Function
	 */
	replace: function(haystack, needle, replacement, matcher) {
		var index = this.indexOf(haystack, needle, matcher);
		if (!!~index) {
			haystack[index] = replacement;
		}
	},

	htmlCleanup : function( htmlIn ) {
		//cleans up (pasted) HTML code from (for instance) MS Word:
		//removing all font/ changed size information

		var NOT_ALLOWED = ["FONT", "TITLE", "SPAN"];

		//setup a HTML element and inject the html
		var div = document.createElement("div");
    	div.innerHTML = htmlIn;

    	//remove all disallowed tags
    	var tags = Array.prototype.slice.apply(div.getElementsByTagName("*"), [0]);

	    for (var i = 0; i < tags.length; i++) {
	    	if ( NOT_ALLOWED.indexOf(tags[i].nodeName) > -1) {
	    		this.removeNode(tags[i]);
	    	}
    	}

    	return div.innerHTML;
	},

	removeNode : function(tag) {
		//removes a node form a DOM object, attaching all childs to its parent
		var last = tag;
	    for (var i = tag.childNodes.length - 1; i >= 0; i--) {
	        var e = tag.removeChild(tag.childNodes[i]);
	        tag.parentNode.insertBefore(e, last);
	        last = e;
	    }
	    tag.parentNode.removeChild(tag);
	}

};

/*
 * removes duplicates from an array
 *
 * @author Mark Leusink
 */
Array.prototype.makeArrayUnique = function() {
	'use strict';

	var temp = {};
    for (var i = 0; i < this.length; i++) {
        temp[this[i]] = true;
    }

    var res = [];
    for (var en in temp) {
        res.push(en);
    }
    return res;

};
