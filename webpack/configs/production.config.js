const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = () => {
  return {
    devtool: 'source-map',
    target: ['web', 'es5'],

    module: {
      rules: [
        // {
        //   sideEffects: true, // выключает тришейкинг! УДАЛИТЬ!!!!
        // },
        {
          test: /\.js$/,
          include: /src/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
      ],
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles/[name].[contenthash].css',
        chunkFilename: '[name].[id].[contenthash].css',
      }),
    ],

    optimization: {
      moduleIds: 'deterministic',
      // runtimeChunk: 'single',
      runtimeChunk: {
        name: 'runtime',
      },
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },

      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
        // new TerserPlugin(), //Расскоментировать! Для большего сжатия данных в файлах.
      ],
    },

    // performance: {
    //   hints: false,
    //   maxEntrypointSize: 512000,
    //   maxAssetSize: 512000,
    // },
  };
};
