
var app = angular.module('isa.profileimg', []);

/**
 * Nice little directive that encapsulates a user's profile picture image. Avoids heavy
 * HTML duplication and allows a single point of truth for user profile picture styling.
 *
 * @author Steve Fortune
 */
app.directive('isaProfileImg', function(){
	return {		
		templateUrl: '/components/profileImg/profileImg.html',
		restrict: 'AE',
		scope: {
			user: '='
		}
	};
});
