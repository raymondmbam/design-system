const path = require('path');

module.exports = function (context, options) {
  return {
    name: 'custom-webpack-plugin',
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          alias: {
            '@styles': path.resolve(__dirname, '../src/styles'),
          },
        },
        module: {
          rules: [
            {
              test: /\.scss$/,
              use: [
                'style-loader',
                'css-loader',
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true,
                  },
                },
              ],
            },
          ],
        },
      };
    },
  };
};
