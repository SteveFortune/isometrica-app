'use strict';

/**
 * An abstract base class for remote services. Requires various ctor dependencies
 * including a `lbModel`, which represents a Loopback model that exposes the
 * following public methods: `find`, `findOne`, `create`, `deleteById` and `update`
 *
 * It effectively wraps up the `lbModel` and exposes some basic CRUD methods to
 * subclasses.
 *
 * Here is how to declare a remote service using this base class:
 *
 *		var _ExampleServiceRemote = funtion(Example, $q, ...) {
 *			isa.AbstractRemoteService.call(this, Example, $q, ...); // Example is out lbModel
 * 		};
 *		ExampleService.$inject = [ 'Example', '$q', ... ];
 *		ExampleService.prototype = Object.create(isa.AbstractRemoteService.prototype);
 *
 *		app.service('_ExampleServiceRemote', ExampleService);
 *
 * @author Steve Fortune
 */
(function(angular, isa) {

	var AbstractRemoteService = function(lbModel, $q) {

		/**
		 * The main loopback model we use to interact with our backend service.
		 *
		 * @var Object
		 */
		this.lbModel = lbModel;

		/**
		 * Angular's $q service
		 *
		 * @var Object
		 */
		this.$q = $q;

		/**
		 * Size of the pages to load in `all`
		 *
		 * @var Number
		 */
		this.pageSize = 10;

	};

	angular.extend(AbstractRemoteService.prototype, {

		/**
		 * Finds a all entities. Result sets are limited to the pageSize.
		 *
		 * @public
		 * @param	offet		Number	The offset for the result set
		 * @return 	Promise
		 */
		all: function(offset) {
			var self = this;
			return self.$q(function(resolve, reject) {
				self.lbModel.find({
					filter: {
						offset: offset,
						order: "created DESC",
						limit: self.pageSize
					}
				}, resolve, reject);
			});
		},

		/**
		 * Finds an individual entity by a given predicate (e.g. a hash of attributes to
		 * match against).
		 *
		 * @public
		 * @param	predicate	Object	Hash of attribute-value pairs to match against
		 * @return 	Promise
		 */
		findOneBy: function(predicate) {
			var self = this;
			return self.$q(function(resolve, reject) {
				self.lbModel.findOne({
					filter: {
						where: predicate
					}
				}, resolve, reject);
			});
		},

		/**
		 * Creates a new entity. Should _not_ perform any validation.
		 *
		 * @public
		 * @param	newEntity		Object	The entity's attribute/values
		 * @return 	Promise
		 */
		insert: function(newEntity) {
			var self = this;
			return self.$q(function(resolve, reject) {
				self.lbModel.create(null, newEntity, resolve, reject);
			});
		},

		/**
		 * Deletes an entity by a given id.
		 *
		 * @public
		 * @param	id			Number | String		The id of the entity to delete
		 * @return 	Promise
		 */
		deleteById: function(id) {
			var self = this;
			return self.$q(function(resolve, reject) {
				self.lbModel.deleteById({
					id: id
				}, resolve, reject);
			});
		},

		/**
		 * Updates an entity by a given id.
		 *
		 * @public
		 * @param	id			Number | String		The id of the entity to update
		 * @param	entity		Object				Attributes / values for the entity
		 * @return 	Promise
		 */
		updateById: function(id, attrs) {
			var self = this;
			return self.$q(function(resolve, reject) {
				self.lbModel.update({
					where: {
						id: id
					}
				}, attrs, resolve, reject);
			});
		}

	});

	isa.AbstractRemoteService = AbstractRemoteService;

})(angular, isa);
