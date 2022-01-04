const { merge } = require('webpack-merge');
const baseConfig = require('./configs/base.config');

const getModeConfig = (env, args) =>
  require(`./configs/${args.mode}.config`)(env, args);

module.exports = (env, args) =>
  merge(baseConfig(env, args), getModeConfig(env, args));
