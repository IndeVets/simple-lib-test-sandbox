module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // ['@tamagui/babel-plugin', { config: 'chameleon-ui/lib/tamagui.config.ts' }]
      'react-native-reanimated/plugin'
    ]
  };
};
