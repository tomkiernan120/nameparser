import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import pkg from './package.json';

export default [
{
  entry: 'src/nameparser.js',
  dest: pk.browser,
  format: 'umd',
  moduleName: 'nameparser',
  plugins: [
    resolve(),
    commonjs(),
    buble({
      exclude:['node_modules/**']
    })
  ]
}
]