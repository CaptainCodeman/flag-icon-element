'use strict';

import pkg from './package.json';
import typescript from 'rollup-plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default commandLineArgs => {
  if (commandLineArgs.w || commandLineArgs.watch) {
    return {
      input: 'src/index.ts',
      output: {
        file: 'flag-icon.dev.js',
        format: 'iife',
        name: 'flagicon',
        sourcemap: true,
      },
      plugins: [
        typescript({
          typescript: require('typescript'),
        }),
      ],
    }
  } else {
    return [{
      input: 'src/index.ts',
      output: {
        file: 'dist/' + pkg.main,
        format: 'cjs',
        name: 'flagicon',
        sourcemap: false,
      },
      plugins: [
        typescript({
          typescript: require('typescript'),
        }),
      ],
    }, {
      input: 'src/index.ts',
      output: {
        file: 'dist/' + pkg.browser,
        format: 'iife',
        name: 'flagicon',
        sourcemap: false,
      },
      plugins: [
        typescript({
          typescript: require('typescript'),
        }),
        terser({
          ecma: 6,
          ie8: false,
          safari10: true,
          compress: {
            passes: 2,
            toplevel: true,
          },
          mangle: {
            properties: {
              regex: /^_/
            },
            toplevel: true,
          },
        }),
      ],
    }]
  }
}
