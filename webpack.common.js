const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/js/index.js',
    background: './src/js/background.js',
    scroll: './src/js/scroll.js',
    carousel: './src/js/carousel.js',
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: __dirname + '/dist/',
    assetModuleFilename: 'images/[name].[hash:8][ext][query]',
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: {
            list: [
              {
                tag: 'img',
                attribute: 'src',
                type: 'src',
              },
              {
                tag: 'img',
                attribute: 'data-gallery-src',
                type: 'src',
              },
              {
                tag: 'source',
                attribute: 'src',
                type: 'src',
              },
              {
                tag: 'video',
                attribute: 'poster',
                type: 'src',
              },
            ],
          },
          minimize: false,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.mp4|webm$/i,
        type: 'asset/resource',
        generator: {
          filename: 'video/[name].[hash:8][ext][query]',
        },
      },
    ],
  },
  plugins: [
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: 'public',
    //       globOptions: {
    //         ignore: ['**/*.DS_Store'],
    //       },
    //     },
    //   ],
    // }),
    new HtmlWebpackPlugin({
      template: './src/pages/index.html',
      inject: 'body',
      chunks: ['index'],
      filename: 'index.html',
      minify: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/modules-example.html',
      inject: true,
      chunks: ['index', 'background', 'scroll', 'carousel'],
      filename: 'modules-example.html',
      minify: false,
    }),
  ],
};
