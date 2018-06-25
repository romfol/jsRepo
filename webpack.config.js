const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const conf = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
    publicPath: 'public/',
  },
  devServer: {
    overlay: true,
  },
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '/public',
        }),
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: false,
      allChunks: true,
    }),
  ],
};

module.exports = conf;
