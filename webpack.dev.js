const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
var path = require('path');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8090,
    open: true,
    host: '0.0.0.0',
    liveReload: true,
    watchFiles: {
      paths: ['src/**/*', 'public/**/*'],
    },
  },
});
