/*
 Copyright (c) 2014, Ryuichi Okumura. All rights reserved.
 Code licensed under the BSD License:
 https://github.com/okuryu/package-json-flatten/blob/master/LICENSE.md
 */
"use strict";

module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            main: ["build", "dist"]
        },
        jshint: {
            options: {
                jshintrc: true
            },
            main: ["Gruntfile.js", "lib", "bin", "test"]
        },
        transpile: {
            main: {
                type: "cjs",
                compatFix: true,
                files: [{
                    expand: true,
                    cwd: "lib",
                    src: ["*.js"],
                    dest: "build"
                }]
            }
        },
        es6_module_wrap_default: {
            options: {
                type: "cjs"
            },
            main: {
                expand: true,
                cwd: "build",
                src: ["*.js"],
                dest: "dist"
            }
        },
        mocha_istanbul: {
            options: {
                coverage: true
            },
            main: {
                src: "test"
            }
        },
        coveralls: {
            main: {
                src: "coverage/lcov.info"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-es6-module-transpiler");
    grunt.loadNpmTasks("grunt-es6-module-wrap-default");
    grunt.loadNpmTasks("grunt-mocha-istanbul");
    grunt.loadNpmTasks("grunt-coveralls");

    grunt.registerTask("lint", ["jshint"]);
    grunt.registerTask("build", ["transpile", "es6_module_wrap_default"]);
    grunt.registerTask("test", ["mocha_istanbul"]);
    grunt.registerTask("default", ["clean", "lint", "build", "test"]);
};
