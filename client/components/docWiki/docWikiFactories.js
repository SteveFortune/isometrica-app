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

		/* return a list of all pages belonging to a single document */
		all : function(documentId) {

			return Page.find(
			  { filter: { where: { documentId : documentId }, order : 'section ASC' } },
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
		}
	};

}]);