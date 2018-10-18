var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css');

gulp.task('inline', function () {
    return gulp.src('./_site/*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('build/'));
});

gulp.task("watch", function() {
    return gulp.watch(['./_site/*.html'], ['inline']);;
});