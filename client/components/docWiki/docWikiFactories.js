var app = angular.module('isa.docwiki.factories', []);

app.factory('PageFactory', [ '$rootScope', '$injector', function($rootScope, $injector) {

	if ($rootScope.online) {
		return $injector.get('_PageRemote');
	} else {
		return $injector.get('_PageLocal');
	}

}]);

app.factory('_PageRemote', [ 'Page', function(Page) {

	return {

		/* return a list of all pages belonging to a single document
  		 * we're using a scope (see page.js model) here to return only 
  		 * current version pages (currentVersion=true)
		  */
		all : function(documentId) {

			return Page.__get__current(
			  { filter: { where: { documentId : documentId }, order : 'section ASC' } },
			  function(list) { },
			  function(errorResponse) {
			  	console.error(errorResponse);
			  }
			);

		},

		/* return a list of all pages from a docwiki
		 * in which the specified tag is used
		 */
		byTag : function(documentId, tag) {

			return Page.__get__current(
			  { filter: { 
			  	where : {
			  		and : [
			  			{ documentId : documentId },
			  			{ tags : {inq : [tag] } }
			  		]
			  	},
			  	order : 'section ASC' }
			  },
			  function(list) { },
			  function(errorResponse) {
			  	console.error(errorResponse);
			  }
			);

		}

	};


}]);

app.factory('_PageLocal', [ function() {

	return {

		all : function(documentId) {

			//talk to local datastore here

			return [
				{ title : 'from local', section : ''}
			];
		},

		byTag : function(documentId, tag) {
			//talk to local datastore here
			console.info('TODO: implement');
		}
	};

}]);