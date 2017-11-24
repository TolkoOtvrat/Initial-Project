var browserify = require('browserify');
var babelify = require('babelify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var util = require('gulp-util');

gulp.task('babelify', function () {
  var b = browserify({
    entries: './src/js/index.js',
    debug: true,
    transform: [babelify.configure({
      presets: ['es2015']
    })]
  });

  return b.bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
      // Add other gulp transformations (eg. uglify) to the pipeline here.
      .on('error', util.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('babelify:watch', function() {
  gulp.watch('./src/js/**/*', ['babelify'])
})
