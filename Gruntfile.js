var fs    = require('fs'),
    path  = require('path');
            require('dotenv').load();

process.isDev = function () { return process.env.NODE_ENV === 'development'; };
process.isProd = function () { return process.env.NODE_ENV === 'production'; };

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    express: {
      options: {
        delay: 5000
      },
      dev: {
        options: {
          script: 'server/server.js'
        }
      }
    },

    jshint: {
      options: {
        reporter: require('jshint-stylish'),
      },
      dev: [ 'Gruntfile.js', './server/*.js', './server/**/*.js', './test/**/*.js' ],
      production: [ 'Gruntfile.js', './server/*.js', 'server/**/*.js', './public/**/*.js' ],
    },

    bower: {
      dev: {
        options: {
          targetDir: './test/',
          production: false,
          verbose: true,
          layout: function(type, component, source) {
            if (fs.lstatSync(source).isDirectory()) { return source; }

            return path.parse(source).dir;
          }
        },
      },
      production: {
        options: {
          targetDir: './public/',
          production: true,
          layout: function(type, component, source) {
            if (fs.lstatSync(source).isDirectory()) { return source; }

            return path.parse(source).dir;
          }
        },
      },
    },

    injector: {
      options: {
        //addRootSlash: false,
        bowerPrefix: 'bower:',
      },
      dev: {
        options: {
          destFile : 'test/index.html',
          ignorePath : [ 'test' ],
        },
        files: [ {
          expand: true,
          cwd: 'test/',
          dest: 'test/',
          src: [ '../bower.json', 'app/*.js', 'app/**/*.js', '**/*.css',
          '!lib/**/*.css' ],
        }, ],
      },
      production: {
        options: {
          destFile : 'public/index.html',
          ignorePath : [ 'public/' ],
        },
        files: [ {
          expand: true,
          cwd: 'public/',
          dest: 'public/',
          src: [ '../bower.json', 'app/*.js', 'app/**/*.js', '**/*.css',
          '!lib/**/*.css' ],
        }, ],
      },
    },

    watch: {
      dev: {
        options: { livereload: true, spawn: false },
        files:  [ 'server/*.js', 'server/**/*.js', 'client/**' ],
        tasks:  [ 'build' ]
      }
    },

    clean: {
      dev: [ "test" ],
      production: [ "public" ]
    },

    copy: {
      dev: {
        files: [
          { expand: true,
            cwd: 'client/',
            src: ['**', '!**/*.scss'],
            dest: 'test/',
            filter: 'isFile'
          }
        ],
      },
      production: {
        files: [
          { expand: true,
            cwd: 'client/',
            src: ['**', '!**/*.scss'],
            dest: 'public/',
            filter: 'isFile'
          }
        ],
      },
    },

    sass: {
      dev: {
        files: [{
          expand: true,
          cwd: 'lib/',
          src: ['*.scss'],
          dest: 'test/',
          ext: '.css'
        }, {
          expand: true,
          cwd: 'client/',
          src: ['**/*.scss'],
          dest: 'test/',
          ext: '.css'
        }],
      },
      production: {
        files: [{
          expand: true,
          cwd: 'lib/',
          src: ['*.scss'],
          dest: 'public/',
          ext: '.css'
        }, {
          expand: true,
          cwd: 'client/',
          src: ['**/*.scss'],
          dest: 'public/',
          ext: '.css'
        }],
      },
    },

    shell: {
      options: {
        failOnError: false
      },
      start: {
        command: 'forever start -a -o "' + __dirname + '/logs/logs.log" server/server.js'
      },
      stop: {
        command: 'forever stopall'
      },
      restart: {
        command: 'forever restart server/server.js'
      }
    },

  });

  grunt.registerTask('default', process.isDev() ? 'dev' : 'prod' );
  grunt.registerTask('build', process.isDev() ? 'dev_build' : 'prod_build' );
  grunt.registerTask('restart', [ 'shell:restart' ]);
  grunt.registerTask('start', [ 'shell:start' ]);
  grunt.registerTask('stop', [ 'shell:stop' ]);

  grunt.registerTask('dev_build', [ 'clean:dev', 'copy:dev', 'jshint:dev', 'bower:dev', 'sass:dev', 'injector:dev' ]);
  grunt.registerTask('dev', [ 'dev_build', 'express:dev', 'watch:dev' ]);

  grunt.registerTask('prod_build', [ 'clean:production', 'copy:production', 'jshint:production', 'bower:production', 'sass:production', 'injector:production' ]);
  grunt.registerTask('prod', [ 'prod_build', 'start' ]);
  grunt.registerTask('restart:prod', [ 'prod_build', 'restart' ]);
};