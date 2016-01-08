# grunt-license-crawler
Grunt task for [npm-license-crawler](https://www.npmjs.com/package/npm-license-crawler). Analyzes license information for multiple node.js modules (package.json files) as part of your software project.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out 
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create 
a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. 
Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-license-crawler --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-license-crawler');
```

## The "license-crawler" task

### Overview

In your project's Gruntfile, add a section named `license-crawler` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'license-crawler': {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.start
Type: `Array<String>`
Default value: [ `.` ]

Path to the directory the license search should start from. Multiple paths can be specified.

#### options.exclude

Type: `Array<String>`
Default Value: `undefined`

Path to a directory to be excluded (and its subdirectories) from the search. Multiple paths can be specified.

#### options.unknown
Type: `Boolean`
Default value: `false`

Only generate a list of licenses that can't be determined or have been guessed.

#### options.dependencies
Type: `Boolean`
Default value: `false`

Only generate a list of third-party licenses, i.e., only list the dependencies defined in package.json.

#### options.json
Type: `String`
Default Value: `undefined`

Export data as JSON to the given file path. Be cautious, the task will overwrite file if exists!

#### options.csv
Type: `String`
Default Value: `undefined`

Export data as CSV to the given file path. Be cautious, the task will overwrite file if exists!

##History

* 20150414, V0.0.1
    * Initial Version
* 20150819, V0.0.2
    * Updated to npm-license-crawler 0.1.0 (thanks @Kienz)
* 20160108, V0.0.3
    * Revised README
    * Updated to npm-license-crawler 0.1.1
    * Updated license info as part of package descriptor. Now using SPDX license tag.