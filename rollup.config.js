import typescript from '@rollup/plugin-typescript';

export default {
    input: 'ts/asagaoui.ts',
    output: {
        dir: './dist/js',
        format: 'es',
        sourcemap: true
    },
    plugins: [typescript()]
}
