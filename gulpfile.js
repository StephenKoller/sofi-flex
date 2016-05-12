var gulp   = require('gulp');
    sass   = require('gulp-sass');
    cssmin = require('gulp-cssmin');
    rename = require('gulp-rename');
    prefix = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(prefix('last 2 versions'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['sass']);
});
