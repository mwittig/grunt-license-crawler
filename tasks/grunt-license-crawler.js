'use strict';
/*
 * grunt-license-crawler
 * https://github.com/mwittig/grunt-license-crawler
 *
 * Copyright (c) 2015-2016 Marcus Wittig
 * Licensed under the BSD 3-clause license.
 */
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