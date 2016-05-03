/**
 * Copyright (c) 2014, Ryuichi Okumura. All rights reserved.
 * Code licensed under the BSD License:
 * https://github.com/okuryu/package-json-flatten/blob/master/LICENSE.md
 */
module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      main: ["build", "dist"]
    },
    eslint: {
      main: ["*.js", "lib", "bin", "test"]
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
    es6_module_wrap_default: { // eslint-disable-line camelcase
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
    mocha_istanbul: { // eslint-disable-line camelcase
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
  grunt.loadNpmTasks("grunt-es6-module-transpiler");
  grunt.loadNpmTasks("grunt-es6-module-wrap-default");
  grunt.loadNpmTasks("grunt-eslint");
  grunt.loadNpmTasks("grunt-mocha-istanbul");
  grunt.loadNpmTasks("grunt-coveralls");

  grunt.registerTask("lint", ["eslint"]);
  grunt.registerTask("build", ["transpile", "es6_module_wrap_default"]);
  grunt.registerTask("test", ["mocha_istanbul"]);
  grunt.registerTask("default", ["clean", "lint", "build", "test"]);
};
