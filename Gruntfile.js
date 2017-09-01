module.exports = function(grunt) {

  require('time-grunt')(grunt);

  // Load Grunt modules
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    config: {
      src: 'app',
      dist: '_dist'
    },

    jekyll: {
      options: {
        bundleExec: true,
        src: '<%= config.src %>',
        safe: false,
      },
      dist: {
        options: {
          dest: '<%= config.dist %>',
          config: '<%= config.src %>/_config.yml'
        }
      },
      dev: {
        options: {
          dest: '.jekyll',
          config: '<%= config.src %>/_config.yml'
        }
      }
    },

    watch : {
      options : {
          livereload : true
      },
      jekyll: {
        files: [ 
          '<%= config.src %>/**/_*{,/**}',
          '<%= config.src %>/*.html',
          '!<%= config.src %>/assets/**'
        ],
        tasks: [ 'jekyll:dev', 'sass:dev', 'autoprefixer:dev', 'concat:dev' ]
      },
      sass: {
        files: [
          '<%= config.src %>/assets/styles/**/*{.scss,.sass}'
        ],
        tasks: [ 'sass:dev', 'autoprefixer:dev' ]
      },
      scripts: {
        files: [
          '<%= config.src %>/assets/scripts/**/*.js'
        ],
        tasks: [ 'concat:dev' ]
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          '<%= config.dist %>/assets/styles/main.css': '<%= config.src %>/assets/styles/main.scss',
        }
      },
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          '.jekyll/assets/styles/main.css': '<%= config.src %>/assets/styles/main.scss',
        }
      }
    },

    autoprefixer: {
      options: {
        map: false
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= config.dist %>/assets/styles',
            src: ['**/*.css'],
            dest: '<%= config.dist %>/assets/styles',
            ext: '.css'
          },
        ]
        // Target-specific file lists and/or options go here.
      },
      dev: {
        files: [
          {
            expand: true,
            cwd: '.jekyll/assets/styles',
            src: ['**/*.css'],
            dest: '.jekyll/assets/styles',
            ext: '.css'
          },
        ]
      }
    },

    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.dist %>/assets/styles',
          src: ['*.css', '!*.min.css'],
          dest: '<%= config.dist %>/assets/styles',
          ext: '.min.css'
        }]
      }
    },

    concat: {
      options: {
          separator: ';\n',
          stripBanners: true
      },
      dist: {
          src: [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/js-throttle-debounce/build/js-throttle-debounce.min.js',
            '<%= config.src %>/assets/scripts/**/*.js'
          ],
          dest: '<%= config.dist %>/assets/scripts/master.js'
      },
      dev: {
          src: [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/js-throttle-debounce/build/js-throttle-debounce.min.js',
            '<%= config.src %>/assets/scripts/**/*.js'
          ],
          dest: '.jekyll/assets/scripts/master.js'
      }
    },

    grunticon: {
      icons: {
        files: [{
            expand: true, 
            cwd: 'grunticons/',
            src: ['*.svg', '*.png'],
            dest: 'assets/images/icons/'
        }],
        options: {
            compressPNG: true,
            loadersnippet: 'grunticon.loader.js',
            defaultWidth: '65px',
            defaultHeight: '65px',
            colors: {
              black: '#2F2F2F',
              white: '#FFFFFF',
              grayl3: '#c8c8c8',
              grayl4: '#e3e3e3',
              blue: '#0060AC'
            }
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 4000,
          livereload: true,
          base: '.jekyll',
        }
      }
    }

  });

  // Default task(s).
  grunt.registerTask('default', [
    'build'
  ]);

  grunt.registerTask('build', [
    'grunticon',
    'jekyll:dist',
    'sass:dist',
    'autoprefixer:dist',
    'cssmin',
    'concat:dist'
  ]);

  grunt.registerTask('serve', [
    'jekyll:dev',
    'sass:dev',
    'autoprefixer:dev',
    'concat:dev',
    'connect',
    'watch',
  ]);

  grunt.registerTask('icons', ['grunticon']);

};
