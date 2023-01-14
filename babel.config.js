module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
            '.graphql',
          ],
          alias: {
            assets: './src/assets',
            components: './src/components',
            domains: './src/domains',
            hooks: './src/hooks',
            navigation: './src/navigation',
            screens: './src/screens',
            services: './src/services',
            shared: './src/shared',
          },
        },
      ],
    ],
  };
};
