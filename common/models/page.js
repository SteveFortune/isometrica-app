module.exports = function(Page) {

	/*
	 * Remote method to sign a page: adds the current user & timestamp to a list of signers on the page
	 * related pages.
	 *
	 * @author Mark Leusink
	 */
	Page.sign = function(pageId, userName, cb) {

		var loopback = require('loopback');
		//var Signature = loopback.findModel('Signature');

		Page.findById( pageId, function(err, page) {

			if (err) {
				console.error(err);
			}

			//TODO: get current user here...
			page.signaturesRel.create({ created : new Date(), createdBy : userName}, function(err, signature) {
			});

			cb(null);

		});

	};

	//register the remote method
	Page.remoteMethod(
		'sign',
		{
			'accepts': [
   				{arg: 'pageId', type: 'string', required: true},
   				{arg: 'userName', type: 'string', required: true}
   			],
   			'returns': {arg: 'message', type: 'string'},
			'description' : 'Add a signature to a page'
		}
	);

};
