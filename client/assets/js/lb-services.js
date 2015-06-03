(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.IsometricaUser
 * @header lbServices.IsometricaUser
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `IsometricaUser` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "IsometricaUser",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/IsometricaUsers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#prototype$__findById__accessTokens
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          url: urlBase + "/IsometricaUsers/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#prototype$__destroyById__accessTokens
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          url: urlBase + "/IsometricaUsers/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#prototype$__updateById__accessTokens
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          url: urlBase + "/IsometricaUsers/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use IsometricaUser.accounts.findById() instead.
        "prototype$__findById__accounts": {
          url: urlBase + "/IsometricaUsers/:id/accounts/:fk",
          method: "GET"
        },

        // INTERNAL. Use IsometricaUser.accounts.destroyById() instead.
        "prototype$__destroyById__accounts": {
          url: urlBase + "/IsometricaUsers/:id/accounts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use IsometricaUser.accounts.updateById() instead.
        "prototype$__updateById__accounts": {
          url: urlBase + "/IsometricaUsers/:id/accounts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use IsometricaUser.accounts.link() instead.
        "prototype$__link__accounts": {
          url: urlBase + "/IsometricaUsers/:id/accounts/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use IsometricaUser.accounts.unlink() instead.
        "prototype$__unlink__accounts": {
          url: urlBase + "/IsometricaUsers/:id/accounts/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use IsometricaUser.accounts.exists() instead.
        "prototype$__exists__accounts": {
          url: urlBase + "/IsometricaUsers/:id/accounts/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#prototype$__findById__phoneNumbers
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Find a related item by id for phoneNumbers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for phoneNumbers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        "prototype$__findById__phoneNumbers": {
          url: urlBase + "/IsometricaUsers/:id/phoneNumbers/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#prototype$__destroyById__phoneNumbers
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Delete a related item by id for phoneNumbers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for phoneNumbers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__phoneNumbers": {
          url: urlBase + "/IsometricaUsers/:id/phoneNumbers/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#prototype$__updateById__phoneNumbers
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Update a related item by id for phoneNumbers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for phoneNumbers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        "prototype$__updateById__phoneNumbers": {
          url: urlBase + "/IsometricaUsers/:id/phoneNumbers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use IsometricaUser.callTreeContacts.findById() instead.
        "prototype$__findById__callTreeContacts": {
          url: urlBase + "/IsometricaUsers/:id/callTreeContacts/:fk",
          method: "GET"
        },

        // INTERNAL. Use IsometricaUser.callTreeContacts.destroyById() instead.
        "prototype$__destroyById__callTreeContacts": {
          url: urlBase + "/IsometricaUsers/:id/callTreeContacts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use IsometricaUser.callTreeContacts.updateById() instead.
        "prototype$__updateById__callTreeContacts": {
          url: urlBase + "/IsometricaUsers/:id/callTreeContacts/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#prototype$__get__accessTokens
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Queries accessTokens of IsometricaUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/IsometricaUsers/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#prototype$__create__accessTokens
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/IsometricaUsers/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#prototype$__delete__accessTokens
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/IsometricaUsers/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#prototype$__count__accessTokens
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Counts accessTokens of IsometricaUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/IsometricaUsers/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use IsometricaUser.accounts() instead.
        "prototype$__get__accounts": {
          isArray: true,
          url: urlBase + "/IsometricaUsers/:id/accounts",
          method: "GET"
        },

        // INTERNAL. Use IsometricaUser.accounts.create() instead.
        "prototype$__create__accounts": {
          url: urlBase + "/IsometricaUsers/:id/accounts",
          method: "POST"
        },

        // INTERNAL. Use IsometricaUser.accounts.destroyAll() instead.
        "prototype$__delete__accounts": {
          url: urlBase + "/IsometricaUsers/:id/accounts",
          method: "DELETE"
        },

        // INTERNAL. Use IsometricaUser.accounts.count() instead.
        "prototype$__count__accounts": {
          url: urlBase + "/IsometricaUsers/:id/accounts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#prototype$__get__phoneNumbers
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Queries phoneNumbers of IsometricaUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        "prototype$__get__phoneNumbers": {
          isArray: true,
          url: urlBase + "/IsometricaUsers/:id/phoneNumbers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#prototype$__create__phoneNumbers
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Creates a new instance in phoneNumbers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        "prototype$__create__phoneNumbers": {
          url: urlBase + "/IsometricaUsers/:id/phoneNumbers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#prototype$__delete__phoneNumbers
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Deletes all phoneNumbers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__phoneNumbers": {
          url: urlBase + "/IsometricaUsers/:id/phoneNumbers",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#prototype$__count__phoneNumbers
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Counts phoneNumbers of IsometricaUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__phoneNumbers": {
          url: urlBase + "/IsometricaUsers/:id/phoneNumbers/count",
          method: "GET"
        },

        // INTERNAL. Use IsometricaUser.callTreeContacts() instead.
        "prototype$__get__callTreeContacts": {
          isArray: true,
          url: urlBase + "/IsometricaUsers/:id/callTreeContacts",
          method: "GET"
        },

        // INTERNAL. Use IsometricaUser.callTreeContacts.create() instead.
        "prototype$__create__callTreeContacts": {
          url: urlBase + "/IsometricaUsers/:id/callTreeContacts",
          method: "POST"
        },

        // INTERNAL. Use IsometricaUser.callTreeContacts.destroyAll() instead.
        "prototype$__delete__callTreeContacts": {
          url: urlBase + "/IsometricaUsers/:id/callTreeContacts",
          method: "DELETE"
        },

        // INTERNAL. Use IsometricaUser.callTreeContacts.count() instead.
        "prototype$__count__callTreeContacts": {
          url: urlBase + "/IsometricaUsers/:id/callTreeContacts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#create
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/IsometricaUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#upsert
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/IsometricaUsers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#exists
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/IsometricaUsers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#findById
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/IsometricaUsers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#find
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/IsometricaUsers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#findOne
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/IsometricaUsers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#updateAll
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/IsometricaUsers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#deleteById
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/IsometricaUsers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#count
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/IsometricaUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#prototype$updateAttributes
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/IsometricaUsers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#login
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/IsometricaUsers/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#logout
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Logout a user with access token
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/IsometricaUsers/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#confirm
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Confirm a user registration with email verification token
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/IsometricaUsers/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#resetPassword
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Reset password for a user with email
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/IsometricaUsers/reset",
          method: "POST"
        },

        // INTERNAL. Use Account.users.findById() instead.
        "::findById::Account::users": {
          url: urlBase + "/Accounts/:id/users/:fk",
          method: "GET"
        },

        // INTERNAL. Use Account.users.destroyById() instead.
        "::destroyById::Account::users": {
          url: urlBase + "/Accounts/:id/users/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.users.updateById() instead.
        "::updateById::Account::users": {
          url: urlBase + "/Accounts/:id/users/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.users.link() instead.
        "::link::Account::users": {
          url: urlBase + "/Accounts/:id/users/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.users.unlink() instead.
        "::unlink::Account::users": {
          url: urlBase + "/Accounts/:id/users/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.users.exists() instead.
        "::exists::Account::users": {
          url: urlBase + "/Accounts/:id/users/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Account.users() instead.
        "::get::Account::users": {
          isArray: true,
          url: urlBase + "/Accounts/:id/users",
          method: "GET"
        },

        // INTERNAL. Use Account.users.create() instead.
        "::create::Account::users": {
          url: urlBase + "/Accounts/:id/users",
          method: "POST"
        },

        // INTERNAL. Use Account.users.destroyAll() instead.
        "::delete::Account::users": {
          url: urlBase + "/Accounts/:id/users",
          method: "DELETE"
        },

        // INTERNAL. Use Account.users.count() instead.
        "::count::Account::users": {
          url: urlBase + "/Accounts/:id/users/count",
          method: "GET"
        },

        // INTERNAL. Use Contact.callTree() instead.
        "::get::Contact::callTree": {
          url: urlBase + "/Contacts/:id/callTree",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#getCurrent
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/IsometricaUsers" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#updateOrCreate
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#update
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#destroyById
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#removeById
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#getCachedCurrent
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.IsometricaUser#login} or
         * {@link lbServices.IsometricaUser#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A IsometricaUser instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#isAuthenticated
         * @methodOf lbServices.IsometricaUser
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#getCurrentId
         * @methodOf lbServices.IsometricaUser
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.IsometricaUser#modelName
    * @propertyOf lbServices.IsometricaUser
    * @description
    * The name of the model represented by this $resource,
    * i.e. `IsometricaUser`.
    */
    R.modelName = "IsometricaUser";

    /**
     * @ngdoc object
     * @name lbServices.IsometricaUser.accounts
     * @header lbServices.IsometricaUser.accounts
     * @object
     * @description
     *
     * The object `IsometricaUser.accounts` groups methods
     * manipulating `Account` instances related to `IsometricaUser`.
     *
     * Call {@link lbServices.IsometricaUser#accounts IsometricaUser.accounts()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#accounts
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Queries accounts of IsometricaUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.accounts = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::get::IsometricaUser::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser.accounts#count
         * @methodOf lbServices.IsometricaUser.accounts
         *
         * @description
         *
         * Counts accounts of IsometricaUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.accounts.count = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::count::IsometricaUser::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser.accounts#create
         * @methodOf lbServices.IsometricaUser.accounts
         *
         * @description
         *
         * Creates a new instance in accounts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.accounts.create = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::create::IsometricaUser::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser.accounts#destroyAll
         * @methodOf lbServices.IsometricaUser.accounts
         *
         * @description
         *
         * Deletes all accounts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accounts.destroyAll = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::delete::IsometricaUser::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser.accounts#destroyById
         * @methodOf lbServices.IsometricaUser.accounts
         *
         * @description
         *
         * Delete a related item by id for accounts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accounts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accounts.destroyById = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::destroyById::IsometricaUser::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser.accounts#exists
         * @methodOf lbServices.IsometricaUser.accounts
         *
         * @description
         *
         * Check the existence of accounts relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accounts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.accounts.exists = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::exists::IsometricaUser::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser.accounts#findById
         * @methodOf lbServices.IsometricaUser.accounts
         *
         * @description
         *
         * Find a related item by id for accounts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accounts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.accounts.findById = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::findById::IsometricaUser::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser.accounts#link
         * @methodOf lbServices.IsometricaUser.accounts
         *
         * @description
         *
         * Add a related item by id for accounts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accounts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.accounts.link = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::link::IsometricaUser::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser.accounts#unlink
         * @methodOf lbServices.IsometricaUser.accounts
         *
         * @description
         *
         * Remove the accounts relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accounts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accounts.unlink = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::unlink::IsometricaUser::accounts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser.accounts#updateById
         * @methodOf lbServices.IsometricaUser.accounts
         *
         * @description
         *
         * Update a related item by id for accounts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accounts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.accounts.updateById = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::updateById::IsometricaUser::accounts"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.IsometricaUser.callTreeContacts
     * @header lbServices.IsometricaUser.callTreeContacts
     * @object
     * @description
     *
     * The object `IsometricaUser.callTreeContacts` groups methods
     * manipulating `Contact` instances related to `IsometricaUser`.
     *
     * Call {@link lbServices.IsometricaUser#callTreeContacts IsometricaUser.callTreeContacts()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser#callTreeContacts
         * @methodOf lbServices.IsometricaUser
         *
         * @description
         *
         * Queries callTreeContacts of IsometricaUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        R.callTreeContacts = function() {
          var TargetResource = $injector.get("Contact");
          var action = TargetResource["::get::IsometricaUser::callTreeContacts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser.callTreeContacts#count
         * @methodOf lbServices.IsometricaUser.callTreeContacts
         *
         * @description
         *
         * Counts callTreeContacts of IsometricaUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.callTreeContacts.count = function() {
          var TargetResource = $injector.get("Contact");
          var action = TargetResource["::count::IsometricaUser::callTreeContacts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser.callTreeContacts#create
         * @methodOf lbServices.IsometricaUser.callTreeContacts
         *
         * @description
         *
         * Creates a new instance in callTreeContacts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        R.callTreeContacts.create = function() {
          var TargetResource = $injector.get("Contact");
          var action = TargetResource["::create::IsometricaUser::callTreeContacts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser.callTreeContacts#destroyAll
         * @methodOf lbServices.IsometricaUser.callTreeContacts
         *
         * @description
         *
         * Deletes all callTreeContacts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.callTreeContacts.destroyAll = function() {
          var TargetResource = $injector.get("Contact");
          var action = TargetResource["::delete::IsometricaUser::callTreeContacts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser.callTreeContacts#destroyById
         * @methodOf lbServices.IsometricaUser.callTreeContacts
         *
         * @description
         *
         * Delete a related item by id for callTreeContacts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for callTreeContacts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.callTreeContacts.destroyById = function() {
          var TargetResource = $injector.get("Contact");
          var action = TargetResource["::destroyById::IsometricaUser::callTreeContacts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser.callTreeContacts#findById
         * @methodOf lbServices.IsometricaUser.callTreeContacts
         *
         * @description
         *
         * Find a related item by id for callTreeContacts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for callTreeContacts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        R.callTreeContacts.findById = function() {
          var TargetResource = $injector.get("Contact");
          var action = TargetResource["::findById::IsometricaUser::callTreeContacts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IsometricaUser.callTreeContacts#updateById
         * @methodOf lbServices.IsometricaUser.callTreeContacts
         *
         * @description
         *
         * Update a related item by id for callTreeContacts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for callTreeContacts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        R.callTreeContacts.updateById = function() {
          var TargetResource = $injector.get("Contact");
          var action = TargetResource["::updateById::IsometricaUser::callTreeContacts"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Account
 * @header lbServices.Account
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Account` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Account",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Accounts/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Account.users.findById() instead.
        "prototype$__findById__users": {
          url: urlBase + "/Accounts/:id/users/:fk",
          method: "GET"
        },

        // INTERNAL. Use Account.users.destroyById() instead.
        "prototype$__destroyById__users": {
          url: urlBase + "/Accounts/:id/users/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.users.updateById() instead.
        "prototype$__updateById__users": {
          url: urlBase + "/Accounts/:id/users/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.users.link() instead.
        "prototype$__link__users": {
          url: urlBase + "/Accounts/:id/users/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.users.unlink() instead.
        "prototype$__unlink__users": {
          url: urlBase + "/Accounts/:id/users/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.users.exists() instead.
        "prototype$__exists__users": {
          url: urlBase + "/Accounts/:id/users/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Account.users() instead.
        "prototype$__get__users": {
          isArray: true,
          url: urlBase + "/Accounts/:id/users",
          method: "GET"
        },

        // INTERNAL. Use Account.users.create() instead.
        "prototype$__create__users": {
          url: urlBase + "/Accounts/:id/users",
          method: "POST"
        },

        // INTERNAL. Use Account.users.destroyAll() instead.
        "prototype$__delete__users": {
          url: urlBase + "/Accounts/:id/users",
          method: "DELETE"
        },

        // INTERNAL. Use Account.users.count() instead.
        "prototype$__count__users": {
          url: urlBase + "/Accounts/:id/users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#create
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Accounts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#upsert
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Accounts",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#exists
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Accounts/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#findById
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Accounts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#find
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Accounts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#findOne
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Accounts/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#updateAll
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Accounts/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#deleteById
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Accounts/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#count
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Accounts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$updateAttributes
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Accounts/:id",
          method: "PUT"
        },

        // INTERNAL. Use IsometricaUser.accounts.findById() instead.
        "::findById::IsometricaUser::accounts": {
          url: urlBase + "/IsometricaUsers/:id/accounts/:fk",
          method: "GET"
        },

        // INTERNAL. Use IsometricaUser.accounts.destroyById() instead.
        "::destroyById::IsometricaUser::accounts": {
          url: urlBase + "/IsometricaUsers/:id/accounts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use IsometricaUser.accounts.updateById() instead.
        "::updateById::IsometricaUser::accounts": {
          url: urlBase + "/IsometricaUsers/:id/accounts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use IsometricaUser.accounts.link() instead.
        "::link::IsometricaUser::accounts": {
          url: urlBase + "/IsometricaUsers/:id/accounts/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use IsometricaUser.accounts.unlink() instead.
        "::unlink::IsometricaUser::accounts": {
          url: urlBase + "/IsometricaUsers/:id/accounts/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use IsometricaUser.accounts.exists() instead.
        "::exists::IsometricaUser::accounts": {
          url: urlBase + "/IsometricaUsers/:id/accounts/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use IsometricaUser.accounts() instead.
        "::get::IsometricaUser::accounts": {
          isArray: true,
          url: urlBase + "/IsometricaUsers/:id/accounts",
          method: "GET"
        },

        // INTERNAL. Use IsometricaUser.accounts.create() instead.
        "::create::IsometricaUser::accounts": {
          url: urlBase + "/IsometricaUsers/:id/accounts",
          method: "POST"
        },

        // INTERNAL. Use IsometricaUser.accounts.destroyAll() instead.
        "::delete::IsometricaUser::accounts": {
          url: urlBase + "/IsometricaUsers/:id/accounts",
          method: "DELETE"
        },

        // INTERNAL. Use IsometricaUser.accounts.count() instead.
        "::count::IsometricaUser::accounts": {
          url: urlBase + "/IsometricaUsers/:id/accounts/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Account#updateOrCreate
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Account#update
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Account#destroyById
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Account#removeById
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Account#modelName
    * @propertyOf lbServices.Account
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Account`.
    */
    R.modelName = "Account";

    /**
     * @ngdoc object
     * @name lbServices.Account.users
     * @header lbServices.Account.users
     * @object
     * @description
     *
     * The object `Account.users` groups methods
     * manipulating `IsometricaUser` instances related to `Account`.
     *
     * Call {@link lbServices.Account#users Account.users()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Account#users
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Queries users of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        R.users = function() {
          var TargetResource = $injector.get("IsometricaUser");
          var action = TargetResource["::get::Account::users"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.users#count
         * @methodOf lbServices.Account.users
         *
         * @description
         *
         * Counts users of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.users.count = function() {
          var TargetResource = $injector.get("IsometricaUser");
          var action = TargetResource["::count::Account::users"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.users#create
         * @methodOf lbServices.Account.users
         *
         * @description
         *
         * Creates a new instance in users of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        R.users.create = function() {
          var TargetResource = $injector.get("IsometricaUser");
          var action = TargetResource["::create::Account::users"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.users#destroyAll
         * @methodOf lbServices.Account.users
         *
         * @description
         *
         * Deletes all users of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.users.destroyAll = function() {
          var TargetResource = $injector.get("IsometricaUser");
          var action = TargetResource["::delete::Account::users"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.users#destroyById
         * @methodOf lbServices.Account.users
         *
         * @description
         *
         * Delete a related item by id for users.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `fk` – `{*}` - Foreign key for users
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.users.destroyById = function() {
          var TargetResource = $injector.get("IsometricaUser");
          var action = TargetResource["::destroyById::Account::users"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.users#exists
         * @methodOf lbServices.Account.users
         *
         * @description
         *
         * Check the existence of users relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `fk` – `{*}` - Foreign key for users
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        R.users.exists = function() {
          var TargetResource = $injector.get("IsometricaUser");
          var action = TargetResource["::exists::Account::users"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.users#findById
         * @methodOf lbServices.Account.users
         *
         * @description
         *
         * Find a related item by id for users.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `fk` – `{*}` - Foreign key for users
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        R.users.findById = function() {
          var TargetResource = $injector.get("IsometricaUser");
          var action = TargetResource["::findById::Account::users"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.users#link
         * @methodOf lbServices.Account.users
         *
         * @description
         *
         * Add a related item by id for users.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `fk` – `{*}` - Foreign key for users
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        R.users.link = function() {
          var TargetResource = $injector.get("IsometricaUser");
          var action = TargetResource["::link::Account::users"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.users#unlink
         * @methodOf lbServices.Account.users
         *
         * @description
         *
         * Remove the users relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `fk` – `{*}` - Foreign key for users
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.users.unlink = function() {
          var TargetResource = $injector.get("IsometricaUser");
          var action = TargetResource["::unlink::Account::users"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.users#updateById
         * @methodOf lbServices.Account.users
         *
         * @description
         *
         * Update a related item by id for users.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `fk` – `{*}` - Foreign key for users
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        R.users.updateById = function() {
          var TargetResource = $injector.get("IsometricaUser");
          var action = TargetResource["::updateById::Account::users"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Plan
 * @header lbServices.Plan
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Plan` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Plan",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Plans/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Plan.canvasItems.findById() instead.
        "prototype$__findById__canvasItems": {
          url: urlBase + "/Plans/:id/canvasItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use Plan.canvasItems.destroyById() instead.
        "prototype$__destroyById__canvasItems": {
          url: urlBase + "/Plans/:id/canvasItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Plan.canvasItems.updateById() instead.
        "prototype$__updateById__canvasItems": {
          url: urlBase + "/Plans/:id/canvasItems/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Plan.canvasItems() instead.
        "prototype$__get__canvasItems": {
          isArray: true,
          url: urlBase + "/Plans/:id/canvasItems",
          method: "GET"
        },

        // INTERNAL. Use Plan.canvasItems.create() instead.
        "prototype$__create__canvasItems": {
          url: urlBase + "/Plans/:id/canvasItems",
          method: "POST"
        },

        // INTERNAL. Use Plan.canvasItems.destroyAll() instead.
        "prototype$__delete__canvasItems": {
          url: urlBase + "/Plans/:id/canvasItems",
          method: "DELETE"
        },

        // INTERNAL. Use Plan.canvasItems.count() instead.
        "prototype$__count__canvasItems": {
          url: urlBase + "/Plans/:id/canvasItems/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Plan#create
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Plan` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Plans",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Plan#upsert
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Plan` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Plans",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Plan#exists
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Plans/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Plan#findById
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Plan` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Plans/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Plan#find
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Plan` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Plans",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Plan#findOne
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Plan` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Plans/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Plan#updateAll
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Plans/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Plan#deleteById
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Plans/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Plan#count
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Plans/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Plan#prototype$updateAttributes
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Plan` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Plans/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Plan#copy
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Create a copy of a plan
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `planId` – `{string}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `title` – `{string=}` - 
         */
        "copy": {
          url: urlBase + "/Plans/copy",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Plan#tags
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Get a list of all tags used in a DocumentWiki
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `documentId` – `{string}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `tags` – `{object=}` - 
         */
        "tags": {
          url: urlBase + "/Plans/tags",
          method: "POST"
        },

        // INTERNAL. Use CanvasItem.plan() instead.
        "::get::CanvasItem::plan": {
          url: urlBase + "/CanvasItems/:id/plan",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Plan#updateOrCreate
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Plan` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Plan#update
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Plan#destroyById
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Plan#removeById
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Plan#modelName
    * @propertyOf lbServices.Plan
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Plan`.
    */
    R.modelName = "Plan";

    /**
     * @ngdoc object
     * @name lbServices.Plan.canvasItems
     * @header lbServices.Plan.canvasItems
     * @object
     * @description
     *
     * The object `Plan.canvasItems` groups methods
     * manipulating `CanvasItem` instances related to `Plan`.
     *
     * Call {@link lbServices.Plan#canvasItems Plan.canvasItems()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Plan#canvasItems
         * @methodOf lbServices.Plan
         *
         * @description
         *
         * Queries canvasItems of Plan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CanvasItem` object.)
         * </em>
         */
        R.canvasItems = function() {
          var TargetResource = $injector.get("CanvasItem");
          var action = TargetResource["::get::Plan::canvasItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Plan.canvasItems#count
         * @methodOf lbServices.Plan.canvasItems
         *
         * @description
         *
         * Counts canvasItems of Plan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.canvasItems.count = function() {
          var TargetResource = $injector.get("CanvasItem");
          var action = TargetResource["::count::Plan::canvasItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Plan.canvasItems#create
         * @methodOf lbServices.Plan.canvasItems
         *
         * @description
         *
         * Creates a new instance in canvasItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CanvasItem` object.)
         * </em>
         */
        R.canvasItems.create = function() {
          var TargetResource = $injector.get("CanvasItem");
          var action = TargetResource["::create::Plan::canvasItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Plan.canvasItems#destroyAll
         * @methodOf lbServices.Plan.canvasItems
         *
         * @description
         *
         * Deletes all canvasItems of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.canvasItems.destroyAll = function() {
          var TargetResource = $injector.get("CanvasItem");
          var action = TargetResource["::delete::Plan::canvasItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Plan.canvasItems#destroyById
         * @methodOf lbServices.Plan.canvasItems
         *
         * @description
         *
         * Delete a related item by id for canvasItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `fk` – `{*}` - Foreign key for canvasItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.canvasItems.destroyById = function() {
          var TargetResource = $injector.get("CanvasItem");
          var action = TargetResource["::destroyById::Plan::canvasItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Plan.canvasItems#findById
         * @methodOf lbServices.Plan.canvasItems
         *
         * @description
         *
         * Find a related item by id for canvasItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `fk` – `{*}` - Foreign key for canvasItems
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CanvasItem` object.)
         * </em>
         */
        R.canvasItems.findById = function() {
          var TargetResource = $injector.get("CanvasItem");
          var action = TargetResource["::findById::Plan::canvasItems"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Plan.canvasItems#updateById
         * @methodOf lbServices.Plan.canvasItems
         *
         * @description
         *
         * Update a related item by id for canvasItems.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `fk` – `{*}` - Foreign key for canvasItems
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CanvasItem` object.)
         * </em>
         */
        R.canvasItems.updateById = function() {
          var TargetResource = $injector.get("CanvasItem");
          var action = TargetResource["::updateById::Plan::canvasItems"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CanvasItem
 * @header lbServices.CanvasItem
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CanvasItem` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CanvasItem",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CanvasItems/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use CanvasItem.plan() instead.
        "prototype$__get__plan": {
          url: urlBase + "/CanvasItems/:id/plan",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CanvasItem#create
         * @methodOf lbServices.CanvasItem
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CanvasItem` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CanvasItems",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CanvasItem#upsert
         * @methodOf lbServices.CanvasItem
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CanvasItem` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CanvasItems",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CanvasItem#exists
         * @methodOf lbServices.CanvasItem
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CanvasItems/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CanvasItem#findById
         * @methodOf lbServices.CanvasItem
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CanvasItem` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CanvasItems/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CanvasItem#find
         * @methodOf lbServices.CanvasItem
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CanvasItem` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/CanvasItems",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CanvasItem#findOne
         * @methodOf lbServices.CanvasItem
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CanvasItem` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CanvasItems/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CanvasItem#updateAll
         * @methodOf lbServices.CanvasItem
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/CanvasItems/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CanvasItem#deleteById
         * @methodOf lbServices.CanvasItem
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/CanvasItems/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CanvasItem#count
         * @methodOf lbServices.CanvasItem
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CanvasItems/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CanvasItem#prototype$updateAttributes
         * @methodOf lbServices.CanvasItem
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CanvasItem` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CanvasItems/:id",
          method: "PUT"
        },

        // INTERNAL. Use Plan.canvasItems.findById() instead.
        "::findById::Plan::canvasItems": {
          url: urlBase + "/Plans/:id/canvasItems/:fk",
          method: "GET"
        },

        // INTERNAL. Use Plan.canvasItems.destroyById() instead.
        "::destroyById::Plan::canvasItems": {
          url: urlBase + "/Plans/:id/canvasItems/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Plan.canvasItems.updateById() instead.
        "::updateById::Plan::canvasItems": {
          url: urlBase + "/Plans/:id/canvasItems/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Plan.canvasItems() instead.
        "::get::Plan::canvasItems": {
          isArray: true,
          url: urlBase + "/Plans/:id/canvasItems",
          method: "GET"
        },

        // INTERNAL. Use Plan.canvasItems.create() instead.
        "::create::Plan::canvasItems": {
          url: urlBase + "/Plans/:id/canvasItems",
          method: "POST"
        },

        // INTERNAL. Use Plan.canvasItems.destroyAll() instead.
        "::delete::Plan::canvasItems": {
          url: urlBase + "/Plans/:id/canvasItems",
          method: "DELETE"
        },

        // INTERNAL. Use Plan.canvasItems.count() instead.
        "::count::Plan::canvasItems": {
          url: urlBase + "/Plans/:id/canvasItems/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CanvasItem#updateOrCreate
         * @methodOf lbServices.CanvasItem
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CanvasItem` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CanvasItem#update
         * @methodOf lbServices.CanvasItem
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CanvasItem#destroyById
         * @methodOf lbServices.CanvasItem
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CanvasItem#removeById
         * @methodOf lbServices.CanvasItem
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CanvasItem#modelName
    * @propertyOf lbServices.CanvasItem
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CanvasItem`.
    */
    R.modelName = "CanvasItem";


        /**
         * @ngdoc method
         * @name lbServices.CanvasItem#plan
         * @methodOf lbServices.CanvasItem
         *
         * @description
         *
         * Fetches belongsTo relation plan.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Plan` object.)
         * </em>
         */
        R.plan = function() {
          var TargetResource = $injector.get("Plan");
          var action = TargetResource["::get::CanvasItem::plan"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.DataObject
 * @header lbServices.DataObject
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `DataObject` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "DataObject",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/DataObjects/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.DataObject#create
         * @methodOf lbServices.DataObject
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataObject` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/DataObjects",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DataObject#upsert
         * @methodOf lbServices.DataObject
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataObject` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/DataObjects",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.DataObject#exists
         * @methodOf lbServices.DataObject
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/DataObjects/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DataObject#findById
         * @methodOf lbServices.DataObject
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataObject` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/DataObjects/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DataObject#find
         * @methodOf lbServices.DataObject
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataObject` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/DataObjects",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DataObject#findOne
         * @methodOf lbServices.DataObject
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataObject` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/DataObjects/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DataObject#updateAll
         * @methodOf lbServices.DataObject
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/DataObjects/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.DataObject#deleteById
         * @methodOf lbServices.DataObject
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/DataObjects/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.DataObject#count
         * @methodOf lbServices.DataObject
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/DataObjects/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.DataObject#prototype$updateAttributes
         * @methodOf lbServices.DataObject
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataObject` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/DataObjects/:id",
          method: "PUT"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.DataObject#updateOrCreate
         * @methodOf lbServices.DataObject
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `DataObject` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.DataObject#update
         * @methodOf lbServices.DataObject
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.DataObject#destroyById
         * @methodOf lbServices.DataObject
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.DataObject#removeById
         * @methodOf lbServices.DataObject
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.DataObject#modelName
    * @propertyOf lbServices.DataObject
    * @description
    * The name of the model represented by this $resource,
    * i.e. `DataObject`.
    */
    R.modelName = "DataObject";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Page
 * @header lbServices.Page
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Page` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Page",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Pages/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__findById__commentsRel
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Find a related item by id for commentsRel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `fk` – `{*}` - Foreign key for commentsRel
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__findById__commentsRel": {
          url: urlBase + "/Pages/:id/commentsRel/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__destroyById__commentsRel
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Delete a related item by id for commentsRel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `fk` – `{*}` - Foreign key for commentsRel
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__commentsRel": {
          url: urlBase + "/Pages/:id/commentsRel/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__updateById__commentsRel
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Update a related item by id for commentsRel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `fk` – `{*}` - Foreign key for commentsRel
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__updateById__commentsRel": {
          url: urlBase + "/Pages/:id/commentsRel/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__findById__signaturesRel
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Find a related item by id for signaturesRel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `fk` – `{*}` - Foreign key for signaturesRel
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__findById__signaturesRel": {
          url: urlBase + "/Pages/:id/signaturesRel/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__destroyById__signaturesRel
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Delete a related item by id for signaturesRel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `fk` – `{*}` - Foreign key for signaturesRel
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__signaturesRel": {
          url: urlBase + "/Pages/:id/signaturesRel/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__updateById__signaturesRel
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Update a related item by id for signaturesRel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `fk` – `{*}` - Foreign key for signaturesRel
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__updateById__signaturesRel": {
          url: urlBase + "/Pages/:id/signaturesRel/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#__get__current
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Queries current of Page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "__get__current": {
          isArray: true,
          url: urlBase + "/Pages/current",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#__create__current
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Creates a new instance in current of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "__create__current": {
          url: urlBase + "/Pages/current",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#__delete__current
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Deletes all current of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "__delete__current": {
          url: urlBase + "/Pages/current",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#__count__current
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Counts current of Page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "__count__current": {
          url: urlBase + "/Pages/current/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__get__commentsRel
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Queries commentsRel of Page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__get__commentsRel": {
          isArray: true,
          url: urlBase + "/Pages/:id/commentsRel",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__create__commentsRel
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Creates a new instance in commentsRel of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__create__commentsRel": {
          url: urlBase + "/Pages/:id/commentsRel",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__delete__commentsRel
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Deletes all commentsRel of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__commentsRel": {
          url: urlBase + "/Pages/:id/commentsRel",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__count__commentsRel
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Counts commentsRel of Page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__commentsRel": {
          url: urlBase + "/Pages/:id/commentsRel/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__get__signaturesRel
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Queries signaturesRel of Page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__get__signaturesRel": {
          isArray: true,
          url: urlBase + "/Pages/:id/signaturesRel",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__create__signaturesRel
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Creates a new instance in signaturesRel of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__create__signaturesRel": {
          url: urlBase + "/Pages/:id/signaturesRel",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__delete__signaturesRel
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Deletes all signaturesRel of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__signaturesRel": {
          url: urlBase + "/Pages/:id/signaturesRel",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__count__signaturesRel
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Counts signaturesRel of Page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__signaturesRel": {
          url: urlBase + "/Pages/:id/signaturesRel/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#create
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Pages",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#upsert
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Pages",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#exists
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Pages/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#findById
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Pages/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#find
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Pages",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#findOne
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Pages/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#updateAll
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Pages/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#deleteById
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Pages/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#count
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Pages/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$updateAttributes
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Pages/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#sign
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Add a signature to a page
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `pageId` – `{string}` - 
         *
         *  - `userName` – `{string}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `message` – `{string=}` - 
         */
        "sign": {
          url: urlBase + "/Pages/sign",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#createNewVersion
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Create a new version of a page in the DocumentWiki
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `pageId` – `{string}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `pageCopyId` – `{string=}` - 
         */
        "createNewVersion": {
          url: urlBase + "/Pages/createNewVersion",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#rollback
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Rollback to another version of a page
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `pageId` – `{string}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "rollback": {
          url: urlBase + "/Pages/rollback",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Page#updateOrCreate
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Page#update
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Page#destroyById
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Page#removeById
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Page#modelName
    * @propertyOf lbServices.Page
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Page`.
    */
    R.modelName = "Page";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Contact
 * @header lbServices.Contact
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Contact` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Contact",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Contacts/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Contact#prototype$__findById__phoneNumbers
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Find a related item by id for phoneNumbers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `fk` – `{*}` - Foreign key for phoneNumbers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        "prototype$__findById__phoneNumbers": {
          url: urlBase + "/Contacts/:id/phoneNumbers/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#prototype$__destroyById__phoneNumbers
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Delete a related item by id for phoneNumbers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `fk` – `{*}` - Foreign key for phoneNumbers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__phoneNumbers": {
          url: urlBase + "/Contacts/:id/phoneNumbers/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#prototype$__updateById__phoneNumbers
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Update a related item by id for phoneNumbers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `fk` – `{*}` - Foreign key for phoneNumbers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        "prototype$__updateById__phoneNumbers": {
          url: urlBase + "/Contacts/:id/phoneNumbers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Contact.callTree() instead.
        "prototype$__get__callTree": {
          url: urlBase + "/Contacts/:id/callTree",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#prototype$__get__phoneNumbers
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Queries phoneNumbers of Contact.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        "prototype$__get__phoneNumbers": {
          isArray: true,
          url: urlBase + "/Contacts/:id/phoneNumbers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#prototype$__create__phoneNumbers
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Creates a new instance in phoneNumbers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        "prototype$__create__phoneNumbers": {
          url: urlBase + "/Contacts/:id/phoneNumbers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#prototype$__delete__phoneNumbers
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Deletes all phoneNumbers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__phoneNumbers": {
          url: urlBase + "/Contacts/:id/phoneNumbers",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#prototype$__count__phoneNumbers
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Counts phoneNumbers of Contact.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__phoneNumbers": {
          url: urlBase + "/Contacts/:id/phoneNumbers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#create
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Contacts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#upsert
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Contacts",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#exists
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Contacts/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#findById
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Contacts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#find
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Contacts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#findOne
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Contacts/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#updateAll
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Contacts/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#deleteById
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Contacts/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#count
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Contacts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Contact#prototype$updateAttributes
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Contacts/:id",
          method: "PUT"
        },

        // INTERNAL. Use IsometricaUser.callTreeContacts.findById() instead.
        "::findById::IsometricaUser::callTreeContacts": {
          url: urlBase + "/IsometricaUsers/:id/callTreeContacts/:fk",
          method: "GET"
        },

        // INTERNAL. Use IsometricaUser.callTreeContacts.destroyById() instead.
        "::destroyById::IsometricaUser::callTreeContacts": {
          url: urlBase + "/IsometricaUsers/:id/callTreeContacts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use IsometricaUser.callTreeContacts.updateById() instead.
        "::updateById::IsometricaUser::callTreeContacts": {
          url: urlBase + "/IsometricaUsers/:id/callTreeContacts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use IsometricaUser.callTreeContacts() instead.
        "::get::IsometricaUser::callTreeContacts": {
          isArray: true,
          url: urlBase + "/IsometricaUsers/:id/callTreeContacts",
          method: "GET"
        },

        // INTERNAL. Use IsometricaUser.callTreeContacts.create() instead.
        "::create::IsometricaUser::callTreeContacts": {
          url: urlBase + "/IsometricaUsers/:id/callTreeContacts",
          method: "POST"
        },

        // INTERNAL. Use IsometricaUser.callTreeContacts.destroyAll() instead.
        "::delete::IsometricaUser::callTreeContacts": {
          url: urlBase + "/IsometricaUsers/:id/callTreeContacts",
          method: "DELETE"
        },

        // INTERNAL. Use IsometricaUser.callTreeContacts.count() instead.
        "::count::IsometricaUser::callTreeContacts": {
          url: urlBase + "/IsometricaUsers/:id/callTreeContacts/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Contact#updateOrCreate
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Contact` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Contact#update
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Contact#destroyById
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Contact#removeById
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Contact#modelName
    * @propertyOf lbServices.Contact
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Contact`.
    */
    R.modelName = "Contact";


        /**
         * @ngdoc method
         * @name lbServices.Contact#callTree
         * @methodOf lbServices.Contact
         *
         * @description
         *
         * Fetches belongsTo relation callTree.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModelExt id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IsometricaUser` object.)
         * </em>
         */
        R.callTree = function() {
          var TargetResource = $injector.get("IsometricaUser");
          var action = TargetResource["::get::Contact::callTree"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
