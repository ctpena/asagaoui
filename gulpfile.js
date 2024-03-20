const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const sass = require('gulp-sass')(require('sass'));
const {exec} = require('child_process');
const fs = require('fs');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const csso = require('gulp-csso');

// Setup tasks
function generateSVGSIcon() {
    const config = {
        mode: {
            symbol: {
                sprite: "../icon.svg",
                example: true
            }
        }
    };
    return gulp.src('./assets/designsystem-assets/icon/svg/*.svg')
        .pipe(svgmin())
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./dist/icon/'));
}

function compileSass() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(gulp.dest('./site/assets/css'));
}

function buildJS(done) {
    exec('npm run buildjs', (err, stdout, stderr) => {
        console.log(stdout);
        console.error(stderr);
        if (err) {
            done(err);
        } else {
            fs.copyFile('dist/js/asagaoui.js', 'site/assets/js/asagaoui.js', done);
        }
    });
}

const setupTasks = gulp.parallel(generateSVGSIcon, compileSass, buildJS);

// Watch tasks
function watchFiles() {
    gulp.watch('./scss/**/*.scss', compileSass);
    gulp.watch('./ts/**/*.ts', buildJS);
}

// Production tasks
function minifyCSS() {
    return gulp.src('./dist/css/asagaoui.css')
        .pipe(csso())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
        .pipe(gulp.dest('./site/assets/css'));
}

function minifyJS() {
    return gulp.src('./dist/js/asagaoui.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))
        .pipe(gulp.dest('./site/assets/js'));
}

const productionTask = gulp.parallel(minifyCSS, minifyJS);
//
exports.setup = setupTasks;
exports.default = gulp.series(compileSass, buildJS, watchFiles);
exports.prod = gulp.series(setupTasks, productionTask);
