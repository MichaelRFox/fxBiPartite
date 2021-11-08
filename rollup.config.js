import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

  var config = {
    input: process.env.BUILD == 'umd' ? 'dist/fxBiPartite.js' : 'src/index.js',
    output: {
      name: 'biPartite',
      // file: 'dist/fxBiPartite.js',
      strict: true,
      format: process.env.BUILD 
    },
    plugins: process.env.BUILD == 'umd' ?
    [ nodeResolve(),
      commonjs(),
      babel({'babelHelpers': 'bundled'})
    ] :
    [
      nodeResolve()
    ]
  };

  if (process.env.BUILD == 'cjs') {
    config.output.dir = './test/src';
    config.output.preserveModules = true;
    config.output.preserveModulesRoot = 'src';
    config.output.exports = 'auto';
  } else {
      config.output.file = 'dist/fxBiPartite.js';
  };

  export default config;