var isa = isa || {};

isa.utils = {

	getIconClassForFile : function(fileName) {
		//returns the classes for an icon to show next to a filename

		var ext = fileName.substring(fileName.lastIndexOf('.')+1).toLowerCase();

		switch (ext) {
			case 'pdf':
				return 'fa fa-file-pdf-o';
			case 'doc': case 'docx':
				return 'fa fa-file-word-o';
			case 'ppt': case 'pptx':
				return 'fa fa-file-powerpoint-o';
			case 'xls': case 'xlsx':
				return 'fa fa-file-excel-o';
			case 'jpg': case 'jpeg':
				return 'fa fa-file-picture-o';
			default:
				return 'fa fa-file-text-o';
		}

	}

};