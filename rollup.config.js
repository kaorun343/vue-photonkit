import buble from 'rollup-plugin-buble'

const { version } = require('./package.json')

export default {
  entry: './src/index.js',
  dest: './lib/index.js',
  format: 'cjs',
  exports: 'named',
  plugins: [
    buble()
  ],
  banner: `/*!
  * Vue Photonkit version ${version}
  * under MIT License copyright ${new Date().getFullYear()} kaorun343
  */`
}
