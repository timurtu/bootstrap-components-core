/**
 * Created by timur on 2/11/17.
 */

const gulp = require('gulp')
const babel = require('gulp-babel')
const rimraf = require('gulp-rimraf')
const fs = require('fs')

gulp.task('clean', () => gulp.src(['*.js', '!gulpfile.js'])
  .pipe(rimraf()))

gulp.task('build', ['clean'], () => {

  const components = fs.readdirSync('src/components')

  const packageJson = Object.assign({},
    require('./package.json'),
    { files: components }
  )

  fs.writeFileSync(
    'package.json',
    JSON.stringify(packageJson, null, 2)
  )



  return gulp.src('src/**')
    .pipe(babel())
    .pipe(gulp.dest('./'))
})

gulp.task('watch', ['build'], () => gulp.watch('src/**', ['build']))
