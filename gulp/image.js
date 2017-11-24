var gulp = require('gulp');

gulp.task('image', function() {
  return gulp.src('./src/img/**/*')
    .pipe(gulp.dest('./dist/img/'));
})

gulp.task('image:watch', function() {
    gulp.watch('./src/img/**/*', ['image']);
})
