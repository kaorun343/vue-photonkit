import buble from 'rollup-plugin-buble'
import html from 'rollup-plugin-html'

const { version } = require('./package.json')

export default {
  entry: './src/index.js',
  dest: './lib/index.js',
  format: 'cjs',
  exports: 'named',
  plugins: [
    html({
      htmlMinifierOptions: {
        collapseWhitespace: true
      }
    }),
    buble()
  ],
  banner: `/*!
  * Vue Photonkit version ${version}
  * under MIT License copyright ${new Date().getFullYear()} kaorun343
  */`
}
