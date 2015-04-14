'use strict';

var crawler = require('npm-license-crawler');

module.exports = function (grunt) {

    grunt.registerMultiTask('license-crawler', 'Generates list of licenses for your project', function () {
        var done = this.async(),
            defaults = {
                start: ['.']
            },
            options = grunt.util._.extend(defaults, this.data);

        crawler.dumpLicenses(options,
            function (error) {
                done(error);
            }
        );
    });
};