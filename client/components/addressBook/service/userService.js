'use strict';

/**
 * @author Steve Fortune
 */
(function(angular, isa) {

	var app = angular.module('isa.addressbook');
	var _UserServiceRemote = function(IsometricaUser) {
		isa.AbstractRemoteService.call(this, IsometricaUser);
	};
	_UserServiceRemote.$inject = [ 'IsometricaUser' ];
	_UserServiceRemote.prototype = Object.create(isa.AbstractRemoteService.prototype);

	app.service('_UserServiceRemote', _UserServiceRemote);
	app.service('_UserServiceLocal', function() {});
	isa.persistentService(app, 'UserService');

})(angular, isa);
