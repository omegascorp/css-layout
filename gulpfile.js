const gulp = require('gulp');
const stylus = require('gulp-stylus');

gulp.task('default', ['no-prefix', 'bem-light']);

gulp.task('no-prefix', function() {
  return gulp.src('stylus/index-no-prefix.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist'));
});

gulp.task('bem-light', function() {
  return gulp.src('stylus/index-bem-light.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./dist'));
});
