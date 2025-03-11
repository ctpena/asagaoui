import gulp from 'gulp';
import { generateFonts } from 'fantasticon';
import gulpSass from 'gulp-sass';
import svgSprite from 'gulp-svg-sprite';
import * as dartSass from 'sass';

const sassCompiler = gulpSass(dartSass);

/**********************************************************************
 Setup Tasks
 Generate SVG Icons
 **********************************************************************/

function generateSVGSIcon() {
    const config = {
        mode: {
            symbol: {
                sprite: "../asagaoui-icons.svg",
                example: true
            }
        }
    };
    return gulp.src('./assets/icons/svg/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./dist/icon/'))
}

function generateIconFont() {
    return generateFonts({
        inputDir: './assets/icons/svg',
        outputDir: './dist/icon',
        name: 'asagaoui-icons',
        prefix: 'ai',
        fontTypes: ['woff2'],
        assetTypes: ['css'],
        fontsUrl: '../icon',
        pathOptions: {
            css: './dist/css/asagaoui-icons.css'
        }
    })
        .then(results => {
            console.log('Icon fonts generated successfully:', results);
        })
        .catch(err => {
            console.error('Error generating icon fonts:', err);
            throw err;
        });
}

const setupTasks = gulp.parallel(generateSVGSIcon, generateIconFont);

/**********************************************************************
 default Tasks
 compile Sass
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
 Export tasks
 **********************************************************************/

export const setup = setupTasks;
export default gulp.series(compileSass, watchFiles);
