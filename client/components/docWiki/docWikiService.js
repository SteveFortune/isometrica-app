var app = angular.module('isa.docwiki.factories', []);

app.factory('DocWikiFactory', [function() {

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

