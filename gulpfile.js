'use strict';
var gulp = require('gulp');
var gutil = require("gulp-util");
var browserSync = require('browser-sync');
var webpack = require("webpack");
var webpackConfig = require('./webpack.config');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './'
                // ,
                // routes: {
                //     '/bower_components': 'bower_components'
                // }
        }
    });
});

gulp.task("webpack", function(callback) {
    // run webpack
    webpack(webpackConfig, function(err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

// Reload all Browsers
gulp.task('bs-reload', function() {
    browserSync.reload();
});


gulp.task('default', ['browser-sync'], function() {
    gulp.watch('*.html', ['bs-reload']);
    gulp.watch('app/stylesheets/**/*.scss', ['webpack', 'bs-reload']);
    gulp.watch('app/javascripts/**/*.js', ['webpack', 'bs-reload']);

    // body...
});
