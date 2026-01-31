import { generateFonts } from 'fantasticon';

const config = {
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
    pathOptions: {
        scss: './scss/asagaoui-icons.scss'
    },
    getIconId: ({ basename, relativeDirPath }) => {
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
};

async function run() {
    try {
        console.log('Icon font generation started...');

        await generateFonts(config);

        console.log('Fonts and SCSS generated successfully.');

    } catch (error) {
        console.error('Error generating icon fonts:', error);
        process.exit(1);
    }
}

void run();
