'use strict';

var app = angular.module('isa.addressbook');

/**
 * @extends AddressBookViewController
 * @author 	Steve Fortune
 */
app.controller('AddressBookReadUserController',
	['$stateParams', '$scope', '$rootScope', 'EventNameAssembler', '$controller', 'UserService', '$modal',
	function($stateParams, $scope, $rootScope, EventNameAssembler, $controller, UserService, $modal) {

	$controller('AddressBookViewController', {
		$stateParams: $stateParams,
		$scope: $scope,
		$rootScope, $rootScope,
		EventNameAssembler: EventNameAssembler,
		factory: UserService,
		type: 'user'
	});

	/**
	 * Opens an edit user modal controller
	 *
	 * @protected
	 */
	$scope.editUser = function() {
		$modal.open({
			templateUrl: '/components/addressBook/view/editUser.html',
			controller : 'AddressBookEditUserController',
			resolve: {
				entity: function() {
					return $scope.entity;
				}
			}
		});
	};

}]);
