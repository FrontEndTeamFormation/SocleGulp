/*
 * gulpfile.js
 *
 */

// Load plugins
var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  cssnano = require('gulp-cssnano'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  notify = require('gulp-notify'),
  cache = require('gulp-cache'),
  livereload = require('gulp-livereload'),
  del = require('del'),
  util = require('gulp-util');

// Stylesheet
gulp.task('stylesheet', function() {
  return sass('assets/stylesheet/**/*.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('assets/stylesheet'))
    .pipe(notify({ message: 'stylesheet task complete' }));
});

// JavaScript
gulp.task('javascript', function() {
  return gulp.src(['assets/javascript/libs/headjs/head.core.js',
    'assets/javascript/libs/jQuery/v2.1.1/jquery.js',
      'assets/javascript/libs/slick/slick.js',
    'assets/javascript/modules/test.js',
      'assets/javascript/modules/slick.js',
    'assets/javascript/modules/run.js'])
    .pipe(concat('main.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('assets/javascript'))
    .pipe(notify({ message: 'javascript task complete' }));
});

// Images
gulp.task('images', function() {
  return gulp.src('assets/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('assets/images'))
    .pipe(notify({ message: 'images task complete' }));
});

// Clean
gulp.task('clean', function() {
  return del(['assets/stylesheet/*.css', 'assets/javascript/main.min.js']);
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start('stylesheet', 'javascript', 'images');
});

// Watch
gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('assets/stylesheet/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('assets/javascript/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('assets/images/**/*', ['images']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', livereload.changed);
});
