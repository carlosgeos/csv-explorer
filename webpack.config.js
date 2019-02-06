const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = (env, argv) => {
  return {
    entry: './index.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main-[hash].js'
    },
    module: {
      rules: [
        {
          // Papaparse has to be statically served and not webpack bundled
          test: /papaparse\.js$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: argv.mode == 'development' ? 'csv-explorer' : ''
              },
            },
          ],
        },
        {
          test: /\.m?jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    },
    devServer: {
      hot: true
    },
    plugins: [
      new CleanWebpackPlugin('dist'),
      new HtmlWebpackPlugin({template: './index.html'}),
      new webpack.HotModuleReplacementPlugin()
    ]
  };
};
