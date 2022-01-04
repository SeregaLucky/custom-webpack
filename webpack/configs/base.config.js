const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, args) => {
  const { mode } = args;

  const prodMode = mode === 'production';

  return {
    mode,
    stats: 'minimal',
    devtool: prodMode ? 'source-map' : 'eval-cheap-source-map',
    target: ['web', 'es5'],

    entry: './src/index.js',

    output: {
      path: path.resolve(__dirname, '../../dist'),
      filename: prodMode
        ? './[name].[contenthash].bundle.js'
        : './[name].bundle.js',
      publicPath: '',
      clean: true,
      // assetModuleFilename: '[path]/[name].[ext]',
      assetModuleFilename: 'images/[name].[ext]',
    },

    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
        {
          test: /\.js$/,
          include: /src/,
          use: ['babel-loader'],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        filename: prodMode ? 'index.[contenthash].html' : 'index.html',
        template: './src/index.html',
        inject: 'body',
        minify: prodMode,
      }),
    ],
  };
};

/* ПРОБЛЕМЫ */
// 1 babel-loader - преобразовывает в es5 лишь в деве но не для прода
// 2 для прода вот это работает если нужен es5 - target: ['web', 'es5']
