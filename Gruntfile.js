var webpack = require('webpack');
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concurrent: {
            dev: {
                options: {
                    logConcurrentOutput: true
                },
                tasks: ['watch:sass', 'webpack:dev', 'jekyll:dev']
                // tasks: ['watch:sass', 'webpack:dev']
            }
        },
        jekyll: {
           dev: {
               options: {
                   src: 'src',
                   serve: true
               }
           },
           dist: {
               options: {
                   src: 'dist',
                   dest: 'dist-jekyll'
               }
           }
        },
        webpack: {
            dev: {
                watch: true,
                keepalive: true,
                failOnError: false,
                entry: __dirname + '/src/assets/js/main.js',
                output: {
                    path: __dirname + '/src/assets/js',
                    filename: 'main-bundle.js'
                },
                resolve: {
                    extensions: ['', '.js', '.jsx'],
                    modulesDirectories: [
                        'web_modules',
                        'node_modules',
                        //'bower_components',
                        __dirname + '/src/assets/js',
                        //__dirname + '/parse/cloud'
                    ],
                    // alias: {
                    //     foundation: 'foundation/js/foundation'
                    // }
                },
                plugins: [
                    new webpack.ProvidePlugin({
                        $: 'jquery',
                        jQuery: 'jquery'
                    })
                ],
                //module: {
                //    loaders: [
                //        {
                //            test: /\.jsx?$/,
                //            loader: 'jsx-loader?insertPragma=React.DOM'
                //        }
                //    ]
                //},
                devtool: '#source-map'
            },
            dist: {
                entry: __dirname + '/src/assets/js/main.js',
                output: {
                    path: __dirname + '/src/assets/js',
                    filename: 'main-bundle.js'
                },
                resolve: {
                    extensions: ['', '.js', '.jsx'],
                    modulesDirectories: [
                        'web_modules',
                        'node_modules',
                        //'bower_components',
                        __dirname + '/src/assets/js',
                        //__dirname + '/parse/cloud'
                    ],
                    // alias: {
                    //     foundation: 'foundation/js/foundation'
                    // }
                },
                plugins: [
                    new webpack.ProvidePlugin({
                        $: 'jquery',
                        jQuery: 'jquery'
                    })
                ],
                //module: {
                //    loaders: [
                //        {
                //            test: /\.jsx?$/,
                //            loader: 'jsx-loader?insertPragma=React.DOM'
                //        }
                //    ]
                //}
            }
        },
        //modernizr: {
        //    dist: {
        //        devFile: 'src/assets/js/modernizr.js',
        //        dest: 'dist/assets/js/modernizr.js',
        //        files: {
        //            src: [
        //                'src/**'
        //            ]
        //        },
        //        tests: ['prefixed'] //hack
        //    }
        //},
        watch: {
            sass: {
                files: 'src/assets/scss/**/*.scss',
                tasks: ['sass:dev'],
                options: {atBegin: true}
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/assets/scss',
                    src: ['**/*.scss'],
                    dest: 'dist/assets/css',
                    ext: '.css'
                }],
                options: {
                    style: 'compressed'
                }
            },
            dev: {
                files: [{
                    expand: true,
                    cwd: 'src/assets/scss',
                    src: ['**/*.scss'],
                    dest: 'src/assets/css',
                    ext: '.css'

                }],
                options: {
                    style: 'nested',
                    quiet: true,
                    lineNumbers: true
                }
            }
        },
        copy: {
            dist: {
                expand: true,
                cwd: 'src/',
                src: [
                    '**',
                    '!assets/.sass-cache/',
                    '!assets/css/**',
                    '!assets/scss/**',
                    '!assets/js/**',
                    '/index.html'
                ],
                dest: 'dist/'
            }
        },
        uglify: {
            app: {
                files: {
                    'dist/assets/js/main-bundle.js': 'src/assets/js/main-bundle.js'
                }
            }
        },
        'gh-pages': {
           options: {
               base: 'dist-jekyll'
           },
           src: ['**']
        },
        clean: {
            dist: ['dist']
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['**/*.png'],
                        dest: 'dist'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-webpack');
    //grunt.loadNpmTasks('grunt-modernizr');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('dev', ['concurrent:dev']);
    //grunt.registerTask('build', ['clean:dist', 'copy:dist', 'imagemin:dist', 'webpack:dist', 'uglify:app', 'modernizr:dist', 'sass:dist', 'jekyll:dist']);
    grunt.registerTask('build', ['clean:dist', 'copy:dist', 'webpack:dist', 'uglify:app', 'sass:dist', 'jekyll:dist']);
    grunt.registerTask('deploy', ['build', 'gh-pages']);
};
