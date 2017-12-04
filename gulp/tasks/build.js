var gulp = require('gulp')
var uglify = require('gulp-uglify-es').default
var babel = require('gulp-babel')
var rename = require('gulp-rename')
var watch = require('gulp-watch')

gulp.task('scripts', () => {
  return watch('./src', () => {
    gulp.start('build')
  })
})

gulp.task('build', () => {
  return gulp.src('src/index.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename('scroll-snap.js'))
    .pipe(gulp.dest('dist'))
})
