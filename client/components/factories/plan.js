
var app = angular.module('resilify');

app.factory( 'PlanFactory', ['$resource', function($resource) {

	return $resource('/api/Plans/:id', null,
		{

			'update': { method : 'PUT' }

		});

} ] );
