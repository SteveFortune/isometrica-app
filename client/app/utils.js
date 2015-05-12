var isa = isa || {};

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
