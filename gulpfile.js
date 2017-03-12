/**
 * Created by timur on 2/11/17.
 */

const gulp = require('gulp')
const babel = require('gulp-babel')
const rimraf = require('gulp-rimraf')

gulp.task('clean', () => gulp.src(['*.js', '!gulpfile.js'])
  .pipe(rimraf()))

gulp.task('build', ['clean'], () => gulp.src('src/**')
  .pipe(babel())
  .pipe(gulp.dest('./')))

gulp.task('watch', ['build'], () => gulp.watch('src/**', ['build']))
