const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(gulp.dest('./website/assets/css'));
}

// Watch tasks
function watchFiles() {
    gulp.watch('./scss/**/*.scss', compileSass);
    // gulp.watch('./ts/**/*.ts', buildJS);
}

// exports.setup = setupTasks;
exports.default = gulp.series(compileSass, watchFiles);
// exports.prod = gulp.series(setupTasks, productionTask);
