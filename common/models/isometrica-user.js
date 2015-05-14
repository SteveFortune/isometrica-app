/*
 * Notes: the accounts array on an IsometricaUser is a list of objects with
 * an id (id of an account) and type (access type, can be one of 'owner' or 'member')
 */

module.exports = function(IsometricaUser) {

	IsometricaUser.observe('before save', function(context, next) {
		if (context.instance) {
			var user = context.instance;
			user.name = computeFullName(user);
			user.created = new Date();
			user.updated = new Date();
		} else {
			context.data.name = computeFullName(context.data);
		}
	  	next();
	});

	/**
	 * @param 	model	Object
	 * @return 	String
	 * @author 	Steve Fortune
	 * @todo Find a better way of doing this. Can't we register some sort of dynamic
	 * 		 model property with loopback, so that we don't have to store redundant
	 *		 data ?
	 */
	var computeFullName = function(model) {
		return model.firstName + ' ' + model.lastName;
	};

	/**
	 * Model validations
	 *
	 * @note Password validation: min 6 chars long containing both letters and numbers
	 * @note Defining here rather than in the json file because the [docs say
	 * 		 so](http://docs.strongloop.com/display/public/LB/Model+definition+JSON+file;jsessionid=D25089B559F634FAEA33260B9C331A20#ModeldefinitionJSONfile-Validations)
	 * @author Steve Fortune
	 */
	IsometricaUser.validatesPresenceOf('firstName', 'lastName', 'email', 'password');
	IsometricaUser.validatesUniquenessOf('email', {
		message: 'A user is already registered with this email address.'
	});
	IsometricaUser.validatesFormatOf('email', {
		// @note This regex is copied straight from the Loopback documentation for validating
		// an email address here: http://docs.strongloop.com/display/public/LB/Validating+model+data.
		// In the future it might be worth registering a custom validator to do a more sophisticated
		// check.
		with: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		message: 'Email address should be in the format local-part@host' 
	})
	IsometricaUser.validatesLengthOf('password', {
		min: 6,
		message: 'Password must be > 6 characters long'
	});
	IsometricaUser.validatesFormatOf('password', {
		with: /^(?=.*[a-zA-Z])(?=.*[0-9])/,
		message: 'Password must be > 6 characters long'
	});

};
