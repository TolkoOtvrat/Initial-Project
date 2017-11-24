var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug', function() {
    return gulp.src('./src/template/index.{pug, jade}')
          .pipe(pug({
            doctype: 'html',
            pretty: true
          }))
          .pipe(gulp.dest('./dist'))
})

gulp.task('pug:watch', function() {
    gulp.watch('./src/template/**/*.{pug, jade}', ['pug'])
})
