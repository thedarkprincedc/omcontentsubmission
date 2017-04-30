/*global module:false*/
module.exports = function(grunt) {
     grunt.initConfig({
          pkg: grunt.file.readJSON('package.json'),
          yeoman: {
               // configurable paths
               app: require('./bower.json').appPath || 'app',
               dist: 'dist'
          },
          clean: {
               build: ['build/', 'dist/'],
          },
          copy: {
               main: {
                    files: [
                         {
                              expand: true,
                              cwd: 'app/libs',
                              src: ['bootstrap-sass'],
                              dest: 'css/'
                         }
                    ]
               },
               dist : {
                    files: [{
                         expand: true,
                         dot: true,
                         cwd: '<%= yeoman.app %>',
                         dest: '<%= yeoman.dist %>',
                         src: [
                              //'**/*',
                              '**/main.css',
                              'assets/img/**',
                              'assets/fonts/**',
                              '**/templates.js',
                              '**/require.js',
                              '!_assets/css/sass',
                              '!_assets/css/less',
                              '!_assets/images'
                         ]
                    }]
               }
          },
          bowercopy :{
               options: {
                    clean :true,
                    ignore : ['*/README.md'],
               },
               libs : {
                    options :{
                         destPrefix: 'app/libs',
                         copyOptions : {
                              flatten: false
                         },
                    },
                    files : {
                         "app/libs" : "./"
                    }
               }
          },
          ngtemplates: {
               app:        {
                    cwd:      './app',
                    src:      ['**/*_template.html'],
                    dest:     './app/components/templates.js',
                    options: {
                         htmlmin: {
                              collapseWhitespace: true,
                              collapseBooleanAttributes: true
                         },
                         bootstrap:  function(module, script) {
                              return 'define(["app"], function(app) {app.run(["$templateCache", function($templateCache) {' + script + '}]);});';
                         }
                    }
               }
          },
          compass : {
               options: {
                    sassDir: '<%= yeoman.app %>/assets/css/sass',
                    cssDir: '<%= yeoman.app %>/assets/css',
                    imagesDir: '<%= yeoman.app %>/assets/images',
                    javascriptsDir: '<%= yeoman.app %>/libs',
                    importPath: ['<%= yeoman.app %>/libs', '<%= yeoman.app %>/components', '<%= yeoman.app %>/assets/css/sass'],
                    relativeAssets: false,
                    assetCacheBuster: false,
                    raw: 'Sass::Script::Number.precision = 10\n',
                    outputStyle: 'compressed',
                    force: true
               },
               server: {
                    options: {
                         debugInfo: true
                    }
               }
          },
          replace : {
               dist: {
                    options: {
                         patterns: [
                              {
                                   match: 'components/config.js',
                                   replacement: 'components/config-built-min.js'
                              }
                         ],
                         usePrefix: false
                    },
                    files: [

                         {expand: true, flatten: true, src: ['app/index.html'], dest: 'dist/'}
                    ]
               }
          },
          requirejs : {
               compile: {
                    options: {
                         baseUrl: '<%= yeoman.app %>/components',
                         //optimize: 'uglify2',
                         optimize: 'none',
                         name: 'config',
                         mainConfigFile: '<%= yeoman.app %>/components/config.js',
                         out: '<%= yeoman.dist %>/components/config-built-min.js',
                         preserveLicenseComments: false
                    }
               }
          }
     });
     grunt.loadNpmTasks('grunt-contrib-clean');
     grunt.loadNpmTasks('grunt-contrib-copy');
     grunt.loadNpmTasks('grunt-bowercopy');
     grunt.loadNpmTasks('grunt-bower');
     grunt.loadNpmTasks('grunt-angular-templates');
     grunt.loadNpmTasks('grunt-contrib-compass');
     grunt.loadNpmTasks('grunt-replace');
     grunt.loadNpmTasks('grunt-contrib-requirejs');
     // Default task.
     grunt.registerTask('default', ['build']);
     grunt.registerTask('build', ['clean', 'bowercopy', 'ngtemplates']);
     grunt.registerTask('prod', ['build', 'requirejs', 'replace', 'copy:dist']);
     //grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
     //grunt.registerTask('build', ['clean', 'copy', 'compress']);
};
