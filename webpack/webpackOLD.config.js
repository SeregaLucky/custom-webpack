const path = require('path');
const { ProgressPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { merge } = require('webpack-merge');
const baseConfig = require('./configs/base.config');

const getModeConfig = (env, args) =>
  require(`./configs/${args.mode}.config`)(env, args);

module.exports = (env, args) =>
  merge(baseConfig(env, args), getModeConfig(env, args));

// module.exports = (env, args) => {
//   const { mode } = args;

//   const prodMode = mode === 'production';

//   return {
//     mode,
//     entry: './src/index.js',
//     stats: 'minimal',
//     devtool: prodMode ? 'source-map' : 'eval-cheap-source-map',
//     target: ['web', 'es5'],

//     output: {
//       path: path.resolve(__dirname, '../dist'),
//       filename: './[name].bundle.js',
//       publicPath: '',
//       clean: true,
//     },

//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           include: /src/,
//           use: ['babel-loader'],
//         },
//         {
//           test: /\.css$/,
//           use: prodMode
//             ? [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
//             : ['style-loader', 'css-loader'],
//         },
//         {
//           test: /\.scss$/,
//           use: prodMode
//             ? [
//                 MiniCssExtractPlugin.loader,
//                 'css-loader',
//                 'postcss-loader',
//                 'sass-loader',
//               ]
//             : ['style-loader', 'css-loader', 'sass-loader'],
//         },
//       ],
//     },

//     plugins: [
//       // new ProgressPlugin(),
//       new HtmlWebpackPlugin({
//         // filename: 'index.html',
//         filename: prodMode ? 'index.[contenthash].html' : 'index.html',
//         template: './src/index.html',
//         inject: 'body',
//         // minify: true,
//         minify: prodMode,
//       }),
//       new MiniCssExtractPlugin({
//         filename: 'styles.css',
//       }),
//     ],

//     devServer: {
//       // static: './src',
//       // entry: '../src/index.html',
//       port: 3000,
//       compress: true,
//       // hot: true,
//     },
//   };
// };

/* ПРОБЛЕМЫ */
// 1 babel-loader - преобразовывает в es5 лишь в деве но не для прода
// 2 для прода вот это работает если нужен es5 - target: ['web', 'es5']
