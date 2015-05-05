
var app = angular.module('isa');

/**
 * A lazy loading, paged collection. This holds and decorates an array of entities.
 * whenever new items are added to or deleted from the collection, the collection
 * will emit events.
 *
 * The collection also requires a persistent service that it will call whenever it
 * needs to perform CRUD operations on its entities.
 *
 * The idea of this class is that it will maintain the state of a result-set loaded
 * form the persistence layer.
 *
 * @note This is *purely experimental*. I can imagine Mark and Michael have better
 * 		 ideas on how to integrate our persistence layer with  Lowla / Loopback.
 * @author Steve Fortune
 **/
app.factory('PaginatableCollection', ['persistentService', 'pageSize', function(persistentService){

	return {

		/**
		 * The entities that we've loaded into memory.
		 *
		 * @protected
		 * @var Array
		 */
		entities: [],

		/**
		 * @protected
		 * @var Number
		 */
		pageSize: pageSize,

		/**
		 * @public
		 * @return Number
		 */
		getPageSize: function() {
			return this.pageSize;
		},

		/**
		 * @public
		 * @param 	entity	object	The new entity to insert
		 * @return 	Promise			Will resolve to the result of the operation
		 */
		insert: function(entity) {

		},

		/**
		 * @public
		 * @param 	entity 	object 	The entity to delete
		 * @return 	Promise			Will resolve to the result of the operation
		 */
		delete: function(entity) {

		}

	};

}]);
