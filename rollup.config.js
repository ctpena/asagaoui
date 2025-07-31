import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'ts/asagaoui.ts',
    output: {
        dir: './dist/js',
        format: 'es',
        sourcemap: true
    },
    plugins: [
        resolve(), // Resolve node_modules
        commonjs(), // Convert CommonJS modules to ES6
        postcss({
            extract: false, // Inject CSS into the bundle
            minimize: true, // Minify CSS
            modules: false // Don't use CSS modules
        }),
        typescript()
    ]
}
