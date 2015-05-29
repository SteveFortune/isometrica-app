'use strict';

/**
 * @author Steve Fortune
 */
(function(angular, isa) {

	var app = angular.module('isa.addressbook');
	var _UserServiceRemote = function(IsometricaUser, $q) {
		isa.AbstractRemoteService.call(this, IsometricaUser, $q);
	};
	_UserServiceRemote.$inject = [ 'IsometricaUser', '$q' ];
	_UserServiceRemote.prototype = Object.create(isa.AbstractRemoteService.prototype);

	app.service('_UserServiceRemote', _UserServiceRemote);
	app.service('_UserServiceLocal', ['$q', function($q) {}]);
	isa.persistentService(app, 'UserService');

})(angular, isa);
