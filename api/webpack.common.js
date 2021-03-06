const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  entry: './src/index.js',
  externals: [
    nodeExternals({
      whitelist: [/^lodash/],
    }),
  ],
}
