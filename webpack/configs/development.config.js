const path = require('path');

module.exports = (env, args) => {
  return {
    stats: 'minimal',
    devtool: 'eval-cheap-source-map',

    module: {
      rules: [
        {
          test: /\.js$/,
          include: /src/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },

    plugins: [],

    devServer: {
      // static: './src',
      port: 3000,
      compress: true,
      historyApiFallback: true,
    },
  };
};

/* ПРОБЛЕМЫ */
// 1 babel-loader - преобразовывает в es5 лишь в деве но не для прода
// 2 для прода вот это работает если нужен es5 - target: ['web', 'es5']
