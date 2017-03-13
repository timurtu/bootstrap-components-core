/**
 * Created by timur on 2/11/17.
 */

const gulp = require('gulp')
const babel = require('gulp-babel')
const rimraf = require('gulp-rimraf')
const fs = require('fs')

gulp.task('clean', () => gulp.src(['*.js', '!gulpfile.js'])
  .pipe(rimraf()))

const trimJSExt = fileName => fileName.slice(0, fileName.length - 3)

gulp.task('build', ['clean'], () => {

  const components = fs.readdirSync('src')

  const packageJson = Object.assign({},
    require('./package.json'),
    { files: components }
  )

  fs.writeFileSync(
    'package.json',
    JSON.stringify(packageJson, null, 2)
  )

  const importComponents = components.map(component => {
    return `import ${trimJSExt(component)} from './${component}'`
  })
    .reduce((accum, comp) => accum + comp + ';\n', '')

  const exportComponents = `export default {${
    components.map(component => '\n  ' +trimJSExt(component))
  }\n}`

  fs.writeFileSync(
    'src/index.js',
    `${importComponents}\n${exportComponents};`
  )


  return gulp.src('src/**')
    .pipe(babel())
    .pipe(gulp.dest('./'))
})

gulp.task('watch', ['build'], () => gulp.watch('src/**', ['build']))
