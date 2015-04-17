var app = angular.module('isa.doclib.factories', []);

app.factory('DocLibFactory', [function() {

    return {

        all: function() {

            return [{
                    id: "1",
                    section: "1.",
                    title: "Introduction",
                    contents: "<p>Contents here</p>"
                }, {
                    id: "2",
                    section: "2.",
                    title: "Organization",
                    contents: "<p>Contents here</p>"
                }, {
                    id: "3",
                    section: "2.1",
                    title: "General",
                    contents: "<p>Contents here</p>"
                },

            ];

        }

    };

}]);

app.factory('SectionsFactory', ['DocLibFactory',
    function(DocLibFactory) {

        return {

            get: function(id) {

            	var all = DocLibFactory.all();

            	for (var i=0; i<all.length; i++) {
            		section = all[i];
    
            		if (section.id === id) {
            			return section;
            		}
            	}

            }

        };


    }
]);
