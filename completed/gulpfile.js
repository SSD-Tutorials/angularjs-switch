var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');

gulp.task('css', function() {

    gulp.src([
            './css/working/normalize.css',
            './css/working/foundation.css',
            './css/working/app.css'
        ])
        .pipe(concat('app.css'))
        .pipe(cssMin())
        .pipe(gulp.dest('./css'));

});

gulp.task('scripts', function() {

    gulp.src([
            './js/angular/angular.js',
            './js/angular/angular-cookies.js'
        ])
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));

    gulp.src([
            './js/modules.js',
            './js/services/**/*.js',
            './js/directives/**/*.js',
            './js/controllers/**/*.js'
        ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));

});

gulp.task('default', ['css', 'scripts']);