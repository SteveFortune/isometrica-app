
var app = angular.module('isa.addressbook');

/**
 * A collection decorates an array with paginated loading methods.
 *
 * @author Steve Fortune
 */
app.factory('Collection', function() {

	var Collection = function(query) {

		/**
		 * @public
		 * @var Array
		 */
		this.arr;

		/**
		 * @protected
		 * @var Function(Number)
		 */
		this.query = query;

		/**
		 * The state of the collection whilst loading.
		 *
		 * @protected
		 * @var String: 'loading' | 'loaded' | 'failed'
		 */
		this.loadingState;

		/**
		 * Current promised used for loading more.
		 *
		 * @protected
		 * @var Promise
		 */
		this.moreQ;

		this.refresh();

	};

	/**
	 * Loads more items into the collection by calling the query.
	 *
	 * @note	The obj returned by the Promise has the following
	 * 			key / vals:
	 *			- items: Array, the new recently added items
	 * 			- oldLength: The previous length of the collection
	 * 			- newLength: The new length of the collection
	 * 			- firstSuccessfulQuery: A boolean indicating whether
	 * 			  this was the first successful load of the
	 *			  collection.
	 * @return 	Promise
	 */
	Collection.prototype.more = function() {

		var col = this;
		if (col.moreQ) {
			return col.moreQ;
		}

		var lenBef = col.arr.length;
		var stateBef = col.loadingState;

		col.moreQ = col.query(lenBef).then(function(items) {
			Array.prototype.push.apply(col.arr, items);
			var lenAf = col.arr.length;
			col.loadingState = 'loaded';
			return {
				items: items,
				oldLength: lenBef,
				newLength: lenAf,
				firstSuccessfulQuery: stateBef === 'loading' && lenAf > 0
			};
		}, function(err) {
			col.loadingState = 'failed';
			return err;
		}).finally(function() {
			col.moreQ = null;
		});

		return col.moreQ;
	};


	/**
	 * Clears the collection and starts its loading again
	 *
	 * @return Promise
	 */
	Collection.prototype.refresh = function() {
		this.arr = [];
		this.loadingState = 'loading';
		return this.more();
	};

	return Collection;

});
