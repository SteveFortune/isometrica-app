// Sample Testacular configuration file, that contain pretty much all the available options
// It's used for running client tests on Travis (http://travis-ci.org/#!/karma-runner/karma)
// Most of the options can be overriden by cli arguments (see karma --help)
//
// For all available config options and default values, see:
// https://github.com/karma-runner/karma/blob/stable/lib/config.js#L54

module.exports = function(config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: './',

		frameworks: [
			'jasmine'
		],

        // list of files / patterns to load in the browser
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
          //'static/testacular.src.js',
          //'test/client/mocks/ObjectModel.js',
          //'adapter/*.src.js',
        ],

        // list of files to exclude
        exclude: [
        ],

        // use dots reporter, as travis terminal does not support escaping sequences
        // possible values: 'dots', 'progress', 'junit', 'teamcity'
        // CLI --reporters progress
        reporters: ['progress'],

        junitReporter: {
          // will be resolved to basePath (in the same way as files/exclude patterns)
          outputFile: 'test-results.xml'
        },

        // web server port
        // CLI --port 9876
        port: 9876,

        // cli runner port
        // CLI --runner-port 9100
        runnerPort: 9100,

        // enable / disable colors in the output (reporters and logs)
        // CLI --colors --no-colors
        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        // CLI --log-level debug
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        // CLI --auto-watch --no-auto-watch
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        // CLI --browsers Chrome,Firefox,Safari
        browsers: [],

        // If browser does not capture in given timeout [ms], kill it
        // CLI --capture-timeout 5000
        captureTimeout: 5000,

        // Auto run tests on start (when browsers are captured) and exit
        // CLI --single-run --no-single-run
        singleRun: false,

        // report which specs are slower than 500ms
        // CLI --report-slower-than 500
        reportSlowerThan: 500,

        // compile coffee scripts
        preprocessors: {
          '**/*.coffee': 'coffee'
        }

    });
};
