const webpack = require('webpack');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
require('dotenv').config({ path: './.env.development' });

const deps = require('../../package.json').dependencies;
const commonConfig = require('./webpack.common');
const version = require('../../package.json').version;

const devConfig = {
	mode: 'development',
	output: {
		publicPath: 'http://localhost:3000/',
		filename: 'static/js/bundle.js',
		chunkFilename: 'static/js/[name].chunk.js',
		assetModuleFilename: 'static/media/[name].[hash][ext]',
	},
	devServer: {
		port: 3000,
		historyApiFallback: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		// new webpack.DefinePlugin({
		// 	'process.env': JSON.stringify({
		// 		...process.env,
		// 		REACT_APP_VERSION: version,
		// 	}),
		// }),
		new ReactRefreshWebpackPlugin({
			overlay: false,
		}),
		// new ModuleFederationPlugin({
		// 	name: 'container',
		// 	remotes: {
		// 		alta: process.env.DEV_ALTA,
		// 	},
		// 	shared: {
		// 		...deps,
		// 		react: {
		// 			singleton: true,
		// 			eager: true,
		// 			requiredVersion: deps.react,
		// 		},
		// 		'react-dom': {
		// 			singleton: true,
		// 			eager: true,
		// 			requiredVersion: deps['react-dom'],
		// 		},
		// 		'react-router-dom': {
		// 			singleton: true,
		// 			eager: true,
		// 			requiredVersion: deps['react-router-dom'],
		// 		},
		// 	},
		// }),
	],
};

module.exports = merge(commonConfig, devConfig);
