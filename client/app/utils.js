var isa = isa || {};

isa.utils = {

	/**
	 * Dynamically register a provider with your module, specifically for persistent
	 * services. This takes care of setting up the boilerplate angular provider / config
	 * for you.
	 *
	 * @param	module			Object		The module to register the provider with
	 * @param	serviceName		String		The name of the service for which to register
	 * 										a provider
	 * @param	remoteFactory	Array		The remote service factory recipe
	 * @param	localFactory	Array		The local service factory recipe
	 */
	registerPersistentService: function(module, serviceName, remoteFactory, localFactory) {

		module.provider(serviceName, function() {

			/**
			 * Configuration value for whether or not the client is online.
			 *
			 * @var Boolean
			 */
			var isOnline = false;

			/**
			 * Used to configure the provider.
			 *
			 * @param	newIsOnline		Boolean
			 */
			this.setIsOnline = function(newIsOnline) {
				isOnline = !!newIsOnline;
			}

			/**
			 * Factory registered based on configurtation
			 *
			 * @var Array
			 */
			this.$get = isOnline ? remoteFactory : localFactory;

		});

		module.config([serviceName + 'Provider', 'CLIENT_ONLINE', function(serviceProvider, clientOnline) {
			serviceProvider.setIsOnline(clientOnline);
		}]);

	},

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
