import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';

const sassCompiler = gulpSass(dartSass);

/**********************************************************************
 Setup Tasks
 Generate SVG Icons
 **********************************************************************/

/**********************************************************************
 Icon Font Generation
 **********************************************************************/

/**********************************************************************
 * Default Tasks
 * Compile Sass
 **********************************************************************/
function compileSass() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sassCompiler.sync().on('error', sassCompiler.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(gulp.dest('./website/assets/css'));
}

function watchFiles() {
    gulp.watch('./scss/**/*.scss', compileSass);
    // gulp.watch('./ts/**/*.ts', buildJS);
}

/**********************************************************************
 * Export Tasks
 **********************************************************************/
export default gulp.series(compileSass, watchFiles);
