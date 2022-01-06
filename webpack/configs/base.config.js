const HtmlWebpackPlugin = require('html-webpack-plugin');
const { EnvironmentPlugin, ProvidePlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');
const paths = require('../utils/paths');
const modes = require('../utils/modes');

module.exports = (env, args) => {
  const { mode } = args;

  const prodMode = mode === modes.PRODUCTION;

  return {
    mode,
    stats: 'minimal',
    devtool: prodMode ? 'source-map' : 'eval-cheap-source-map',
    context: paths.SRC_DIR,
    // process: '0.11.10',

    resolve: {
      // extensions: ['.js', '.jsx', '.ts', '.tsx'],
      // alias: {
      //   process: 'process/browser',
      // },
    },

    entry: './index.js',

    output: {
      path: paths.BUILD_DIR,
      filename: prodMode ? 'js/[name].[contenthash].js' : './[name].bundle.js',
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
          /* Кладет все svg в бандл */
          test: /\.svg$/,
          loader: 'svg-inline-loader',
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/,
          type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|)$/,
          // type: 'asset/inline',
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 30 * 1024, // 30 KB
            },
          },
        },
        {
          test: /\.txt$/,
          type: 'asset/source',
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

      new ProvidePlugin({
        process: 'process/browser',
      }),

      /* Прям на прямую без файла .env записать в process.env */
      new EnvironmentPlugin({
        API: 'https://...',
      }),

      /* Берет с файла .env */
      new Dotenv(),
      // new Dotenv({
      //   path: '../../.env', // load this now instead of the ones in '.env'
      //   // safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      //   // allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
      //   // systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      //   // silent: true, // hide any errors
      //   // defaults: false, // load '.env.defaults' as the default values if empty.
      // }),
    ],
  };
};

/* Не помнятно */
// 1 babel-loader - преобразовывает в es5 лишь в деве но не для прода
// 2 для прода вот это работает если нужен es5 - target: ['web', 'es5']
