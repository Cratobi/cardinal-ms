const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin(['build'])],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
})
