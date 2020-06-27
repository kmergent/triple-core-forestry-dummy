const path = require('path');
module.exports = {
  stories: ['../stories/**/*.stories.(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-docs'
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
          options:{
            configFileName: path.resolve(__dirname, './tsconfig.json')
          }
        },
        {
          loader: require.resolve('react-docgen-typescript-loader')
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  };
