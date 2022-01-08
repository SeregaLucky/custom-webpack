const { HotModuleReplacementPlugin } = require('webpack');

module.exports = () => {
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

    plugins: [
      // new HotModuleReplacementPlugin()
    ],

    devServer: {
      port: 3000,
      compress: true,
      historyApiFallback: true,
      // hot: true,
    },
  };
};
