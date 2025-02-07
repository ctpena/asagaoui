import gulp from 'gulp';
import sass from 'gulp-sass';
import dartSass from 'sass';

const sassCompiler = sass(dartSass);

function compileSass() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sassCompiler.sync().on('error', sassCompiler.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(gulp.dest('./website/assets/css'));
}

// Watch tasks
function watchFiles() {
    gulp.watch('./scss/**/*.scss', compileSass);
    // gulp.watch('./ts/**/*.ts', buildJS);
}

// Export tasks
export default gulp.series(compileSass, watchFiles);
// export const prod = gulp.series(setupTasks, productionTask);
