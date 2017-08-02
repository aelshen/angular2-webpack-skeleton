var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var config = require('./');
var helpers = require('./helpers');
var TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

module.exports = {
  entry: {
    'polyfills': './src/client/polyfills.ts',
    'vendor': './src/client/vendor.ts',
    'app': './src/client/main.ts'
  },

  resolve: {
    extensions: ['.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader?tsconfig=./src/client/tsconfig.json',
          'angular2-template-loader',
          'angular2-router-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['raw-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'client', 'app'),
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style', loader: 'css?sourceMap' })
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'client', 'app'),
        loader: 'raw-loader'
      },
      {
        test: /\.md$/,
        loader: "html-loader!markdown-loader"
      }
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/client/index.html',
      // favicon: 'src/client/favicon.ico'
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(config.ENV),
        'FOO': JSON.stringify(config.FOO)
      }
    })
  ]
};