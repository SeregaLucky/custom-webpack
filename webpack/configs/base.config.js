const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('../utils/paths');

module.exports = (env, args) => {
  const { mode } = args;

  const prodMode = mode === process.env.production;

  return {
    mode,
    stats: 'minimal',
    devtool: prodMode ? 'source-map' : 'eval-cheap-source-map',
    target: ['web', 'es5'],
    context: paths.SRC_DIR,

    entry: './index.js',

    output: {
      path: paths.BUILD_DIR,
      filename: prodMode
        ? './[name].[contenthash].bundle.js'
        : './[name].bundle.js',
      publicPath: '',
      clean: true,
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
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader',
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/,
          type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|)$/,
          type: 'asset/inline',
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        filename: prodMode ? 'index.[contenthash].html' : 'index.html',
        template: './index.html',
        inject: 'body',
        minify: prodMode,
      }),
    ],
  };
};

/* Не помнятно */
// 1 babel-loader - преобразовывает в es5 лишь в деве но не для прода
// 2 для прода вот это работает если нужен es5 - target: ['web', 'es5']
