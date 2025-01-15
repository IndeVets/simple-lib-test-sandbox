// Learn more: https://docs.expo.dev/guides/customizing-metro/
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Extend the resolver to handle `react-native-web`, `expo-router`, and your library
config.resolver = {
  ...config.resolver,
  extraNodeModules: {
    ...config.resolver.extraNodeModules,
    'react-native-web': path.resolve(__dirname, 'node_modules/react-native-web'), // Ensure correct resolution of `react-native-web`
    // 'chameleon-ui': path.resolve(__dirname, '../chameleon-ui/dist/lib'), // Path to your library's `lib` directory
  },
  resolverMainFields: ['browser', 'module', 'main'], // Ensures proper resolution for `expo-router`
};

// Add custom `nodeModulesPaths` to ensure Metro looks in the right locations
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'), // Default Expo node_modules
  // path.resolve(__dirname, '../chameleon-ui/node_modules'), // Library dependencies
];

// Optionally set up aliases for cleaner imports if needed
config.resolver.alias = {
  ...config.resolver.alias,
  // 'chameleon-ui': path.resolve(__dirname, '../chameleon-ui/dist/lib'),
};

// Ensure `expo-router` and its web entry points are resolved
config.watchFolders = [
  // path.resolve(__dirname, '../chameleon-ui'), // Watch your library for changes
];

module.exports = config;
