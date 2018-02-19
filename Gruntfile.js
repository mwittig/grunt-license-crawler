'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        // Configuration to be run (and then tested).
        'license-crawler': {
            all: {
                start: ['.'],
                json: "LICENSES.json",
                omitVersion: false
            }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['license-crawler']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['test']);
};