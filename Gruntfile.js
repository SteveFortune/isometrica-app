module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/* <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
    
    //clean the output folder and unused css files
    // clean: {
    //   output : {
    //     src: ["dist"]
    //   }
    // },

    // //move all js and font source files to the dist folder
    // copy: {
    //   main: {
    //     files: [
    //       {expand: true, src: ['src/js/*'], dest: 'dist/js/', filter: 'isFile', flatten: true},
    //       {expand: true, src: ['src/fonts/*'], dest: 'dist/fonts/', filter: 'isFile', flatten: true}
    //     ]
    //   }
    // },

    // uglify: {
    //   options: {
    //     banner: '<%= banner %>'
    //   },
    //   build: {
    //     src: 'dist/js/bootcards.js',
    //     dest: 'dist/js/bootcards.min.js'
    //   }
    // },

    sass: {
      dist: {
        files: {
          'client/assets/css/resilify.css' : 'client/assets/css/build.scss'
        }
      }
    },

    concat : {
      dist: {
        src: ['client/assets/css/resilify.scss', 'client/components/docWiki/styles.scss'],
        dest: 'client/assets/css/build.scss'
      }
    },

    cssmin: {
      minify : {
        options: { banner: '<%= banner %>' },
        files: [{
           expand: true,
           cwd: 'client/assets/css',
           src: ['*.css', '!*.min.css'],
           dest: 'client/assets/css/',
           ext: '.min.css'
        }]
      }
    },

    /*task to generate the Loopback Angular services*/
    loopback_sdk_angular: {
      options: {
        input: '../server/server.js',
        output: 'js/lb-services.js'
      }
    },

    clean: {
      build: ["client/assets/css/build.scss"]
    },

    watch : {
      scripts: {
        files: ['**/*.scss'],
        tasks: ['default'],
        options: {
          spawn: false,
        }
      }
    }

  });

  //load grunt plugins
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-loopback-sdk-angular');

  grunt.registerTask('default', [
    'concat',
    'sass',
    'cssmin',
    'clean:build'
  ]);

  grunt.registerTask('lbAngular', [
    'loopback_sdk_angular'
  ])

};