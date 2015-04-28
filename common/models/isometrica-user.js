/*
 * Notes: the accounts array on an IsometricaUser is a list of objects with
 * an id (id of an account) and type (access type, can be one of 'owner' or 'member')
 */

module.exports = function(IsometricaUser) {

	IsometricaUser.observe('before save', function updateTimestamp(ctx, next) {

		//set the created/ updated timestamps

		if (ctx.instance) {
		  	//create
		  	ctx.instance.created = new Date();
		  	ctx.instance.updated = new Date();
		} else {
		  	//update
		  	ctx.data.updated = new Date();
		}

	  	next();

	});

};
