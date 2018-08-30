'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rigger = require('gulp-rigger');

gulp.task('default', function () {
    return gulp.src('./template/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./template/css'));
});

gulp.task('html', function () {
    gulp.src('./html/*.html')
        .pipe(rigger())
        .pipe(gulp.dest('./dest'));
})

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

