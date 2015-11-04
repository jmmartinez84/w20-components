/*
 * Copyright (c) 2013-2015 by The SeedStack authors. All rights reserved.
 *
 * This file is part of SeedStack, An enterprise-oriented full development stack.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/* global module: false, config: false */
module.exports = function(config) {
    'use strict';

    config.set({
        frameworks: [ 'jasmine', 'requirejs' ],
        files: [
            'test-main.js',
            { pattern: '*.json', included: false },
            { pattern: 'modules/**/*.js', included: false },
            { pattern: 'specs/**/*.js', included: false },
            { pattern: 'bower_components/**/*', included: false }
        ],
        preprocessors: {
            'modules/*.js': 'coverage'
        },
        reporters: ['dots', 'coverage' ],
        coverageReporter: {
            type: 'lcov',
            dir: 'coverage/',
            subdir: '.'
        },
        port: 9876,
        colors: true,
        logLevel: 'INFO',
        browsers: [ 'PhantomJS' ]
    });
};