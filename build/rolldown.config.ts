import {defineConfig} from 'rolldown';

const banner = `
/*!
 * AsagaoUI  v0.1.9 (https://asagaoui.com)
 * Copyright 2026 Hiroshi ISOBE
 * Licensed under MIT (https://github.com/ctpena/asagaoui/blob/main/LICENSE)
 */
`;

export default defineConfig([{
    input: 'ts/asagaoui.ts',
    output: [
        {
            file: 'dist/js/asagaoui.js',
            banner: banner,
        },
        {
            file: 'dist/js/asagaoui.min.js',
            minify: true,
            banner: banner,
        },
    ],
}]);
