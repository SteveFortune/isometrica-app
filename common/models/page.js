module.exports = function(Page) {

	/*
	 * Remote method to sign a page: adds the current user & timestamp to a list of signers on the page
	 * related pages.
	 *
	 * @author Mark Leusink
	 */
	Page.sign = function(pageId, cb) {

		var loopback = require('loopback');
		var Signature = loopback.findModel('Signature');
		
		Page.findById( pageId, function(err, page) {

			if (err) {
				console.error(err);
			}

			//TODO: get current user
			Signature.create({ created : new Date(), createdBy : 'Mark Leusink'}, function(err, signature) {
				console.log('add', signature);
				page.signatures.add(signature);
				
			});

			cb(null);

		});

	};

	//register the remote method
	Page.remoteMethod(
		'sign',
		{
			'accepts': [
   				{arg: 'pageId', type: 'string', required: true}
   			],
   			'returns': {arg: 'message', type: 'string'},
			'description' : 'Sign a page'
		}
	);

};
