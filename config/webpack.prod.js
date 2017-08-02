var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge.smart(commonConfig, {
  devtool: 'source-map',

  // entry: {
  //   'app': './src/client/main.ts'
  // },

  // module: {
  //   loaders: [
  //     {
  //       test: /\.ts$/,
  //       loaders: [
  //         'awesome-typescript-loader?tsconfig=./src/client/tsconfig.json',
  //         'angular2-template-loader',
  //         'angular2-router-loader?genDir=src/client/aot/app&aot=true'
  //       ]
  //     }
  //   ]
  // },

  output: {
    path: helpers.root('dist/client'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name].[hash].css')
  ]
});