var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var prefix = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(prefix('last 2 version'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['sass']);
});
