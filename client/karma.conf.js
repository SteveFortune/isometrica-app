'use strict';

module.exports = function(config) {
    config.set({
        basePath: './',
		frameworks: [
			'jasmine'
		],
        files: [
		  'assets/libs/angular/angular.js',
		  'assets/libs/angular-ui-router/release/angular-ui-router.js',
		  'assets/libs/angular-animate/angular-animate.js',
          'assets/libs/angular-sanitize/angular-sanitize.js',
          'assets/libs/angular-touch/angular-touch.js',
          'assets/libs/angular-resource/angular-resource.js',
          'assets/libs/angular-growl-2/build/angular-growl.js',
          'assets/libs/angular-file-upload/angular-file-upload.js',
          'assets/libs/angular-bootstrap/ui-bootstrap.js',
          'assets/libs/rangy/rangy-core.js',
          'assets/libs/rangy/rangy-selectionsaverestore.js',
          'assets/libs/textAngular/src/textAngular.js',
          'assets/libs/textAngular/src/textAngular-sanitize.js',
          'assets/libs/textAngular/src/textAngularSetup.js',
          'assets/js/lb-services.js',
		  '../node_modules/angular-mocks/angular-mocks.js',
		  'app/module.js',
		  'app/**/*.js',
		  'components/**/*.js',
		  '**/*.spec.js'
        ],
        exclude: [],
        reporters: ['progress'],
        junitReporter: {
          outputFile: 'test-results.xml'
        },
        port: 9876,
        runnerPort: 9100,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: [],
        captureTimeout: 5000,
        singleRun: false,
        reportSlowerThan: 500,
        preprocessors: {
          '**/*.coffee': 'coffee'
        }

    });
};
