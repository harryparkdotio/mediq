import typescript from 'rollup-plugin-typescript2';
import minify from 'rollup-plugin-babel-minify';
import path from 'path';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: path.join('dist', pkg.main),
      format: 'cjs',
      exports: 'named',
    },
    {
      file: path.join('dist', pkg.module),
      format: 'es',
      exports: 'named',
    },
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.build.json',
      typescript: require('typescript'),
    }),
    minify({ comments: false }),
  ],
};
