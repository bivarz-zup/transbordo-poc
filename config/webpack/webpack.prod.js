const webpack = require('webpack');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: './.env' });

const deps = require('../../package.json').dependencies;
const commonConfig = require('./webpack.common');
const version = require('../../package.json').version;

const appDirectory = fs.realpathSync(process.cwd());

const prodConfig = {
  mode: 'production',
  output: {
    filename: 'static/js/[name].[contenthash].js',
    chunkFilename: 'static/js/[name].[contenthash].chunk.js',
    assetModuleFilename: 'static/media/[name].[hash][ext]',
    path: path.resolve(appDirectory, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        ...process.env,
        REACT_APP_VERSION: version,
      }),
    }),
    // new ModuleFederationPlugin({
    //   name: 'alta',
    //   filename: 'remoteEntry.js',
    //   exposes: {
    //     './AltaApp': './src/bootstrap.tsx',
    //   },
    //   shared: {
    //     ...deps,
    //     react: {
    //       singleton: true,
    //       eager: true,
    //       requiredVersion: deps.react,
    //     },
    //     'react-dom': {
    //       singleton: true,
    //       eager: true,
    //       requiredVersion: deps['react-dom'],
    //     },
    //     'react-router-dom': {
    //       singleton: true,
    //       eager: true,
    //       requiredVersion: deps['react-router-dom'],
    //     },
    //   },
    // }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash].css',
      chunkFilename: 'static/css/[name].[contenthash].chunk.css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public/',
          to: '.',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
