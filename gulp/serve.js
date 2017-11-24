var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var runSeq = require('run-sequence');

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        },
        files: ['./dist/**/*']
    })
})

gulp.task('serve', function() {
    runSeq (
        'clean',
        'pug',
        'sass',
        'image',
        'babelify',
        'server',
        'pug:watch', 'sass:watch', 'babelify:watch', 'image:watch'
    )
})
