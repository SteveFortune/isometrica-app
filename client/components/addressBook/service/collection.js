
var app = angular.module('isa.addressbook');

/**
 * A collection decorates an array with paginated loading methods.
 *
 * @author Steve Fortune
 */
app.factory('Collection', function() {

	var Collection = function(query, arr) {

		/**
		 * @var Array
		 */
		this.arr = arr || [];

		/**
		 * @var Function(Number)
		 */
		this.query = query;

	};

	/**
	 * Loads more items into the collection by calling the query.
	 *
	 * @return Promise
	 */
	Collection.prototype.more = function() {
		var col = this;
		return col.query(col.arr.length).then(function(items) {
			Array.prototype.push.apply(col, items);
		});
	};


	/**
	 * Clears the collection and starts its loading again
	 *
	 * @return Promise
	 */
	Collection.prototype.refresh = function() {
		this.arr = [];
		return this.more();
	};

	return Collection;

});
