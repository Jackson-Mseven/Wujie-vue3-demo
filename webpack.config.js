const { Configuration } = require('webpack');
const path = require('path');

/**
 * @type {Configuration} //配置智能提示
 */
const config = {
  mode: 'none',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'wujievue',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'swc-loader'
      }
    ]
  },
  externals: {
    vue: 'vue',
    wujie: 'wujie'
  }
}

module.exports = config