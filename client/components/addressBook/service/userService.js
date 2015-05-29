'use strict';

var app = angular.module('isa.addressbook');

/**
 * @author Steve Fortune
 */
isa.persistentService(app, 'UserService');

var _UserServiceRemote = function(IsometricaUser, $q) {
	isa.AbstractRemoteService.call(this, IsometricaUser, $q);
};
_UserServiceRemote.$inject = [ 'IsometricaUser', '$q' ];
_UserServiceRemote.prototype = Object.create(isa.AbstractRemoteService.prototype);

app.service('_UserServiceRemote', _UserServiceRemote);
app.service('_UserServiceLocal', ['$q', function($q) {}]);
