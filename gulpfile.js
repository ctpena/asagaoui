import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as fs from "node:fs";
import * as dartSass from 'sass';
import {generateFonts} from 'fantasticon';

const sassCompiler = gulpSass(dartSass);

/**********************************************************************
 Setup Tasks
 Generate SVG Icons
 **********************************************************************/

/**********************************************************************
 Icon Font Generation
 **********************************************************************/
function generateIconFonts() {
    return generateFonts({
        inputDir: './assets/icons/svg',
        outputDir: './dist/icons',
        name: 'asagaoui-icons',
        fontTypes: ['woff2'],
        assetTypes: ['json', 'scss'],
        prefix: '',
        fontsUrl: '../icons',
        templates: {
            scss: 'assets/icons/scss.hbs'
        },
        getIconId: ({basename, relativeDirPath}) => {
            let prefix = 'ai';
            if (relativeDirPath) {
                if (relativeDirPath.includes('fill')) {
                    prefix = 'aif';
                } else if (relativeDirPath.includes('line')) {
                    prefix = 'ail';
                }
            }
            return `${prefix}-${basename}`;
        }
    }).then(results => {
        gulp.src('./dist/icons/asagaoui-icons.scss')
            .pipe(gulp.dest('./scss/'))
            .on('end', () => {
                fs.unlinkSync('./dist/icons/asagaoui-icons.scss');
            });
        return results;
    }).catch(error => {
        console.error('Error generating icon fonts:', error);
        throw error;
    });
}

/**********************************************************************
 * Default Tasks
 * Compile Sass
 **********************************************************************/
function compileSass() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sassCompiler.sync().on('error', sassCompiler.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(gulp.dest('/home/ctpena/Documents/jonstage/src/assets/'))
        .pipe(gulp.dest('./website/assets/css'));
}

function watchFiles() {
    gulp.watch('./scss/**/*.scss', compileSass);
    // gulp.watch('./ts/**/*.ts', buildJS);
}

/**********************************************************************
 * Export Tasks
 **********************************************************************/
export const icons = generateIconFonts;
export default gulp.series(compileSass, watchFiles);
