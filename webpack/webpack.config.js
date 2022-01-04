const { merge } = require('webpack-merge');
const baseConfig = require('./configs/base.config');

const getModeConfig = (env, args) =>
  require(`./configs/${args.mode}.config`)(env, args);

module.exports = (env, args) =>
  merge(baseConfig(env, args), getModeConfig(env, args));

/* ПРОБЛЕМЫ */
// 1 babel-loader - преобразовывает в es5 лишь в деве но не для прода
// 2 для прода вот это работает если нужен es5 - target: ['web', 'es5']
