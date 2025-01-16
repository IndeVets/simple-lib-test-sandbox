const { getDefaultConfig } = require('expo/metro-config');
const { platform } = require('babel-preset-expo')

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push('cjs')
config.resolver.assetExts.push('png')

const { transformer, resolver } = config

module.exports = {
  ...config,
  transformer: {
    ...transformer,
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true
      }
    }),
    assetPlugins: ['expo-asset/tools/hashAssetFiles']
  },
  // resolver: {
  //   ...resolver,
  //   resolveRequest: (context, moduleName, platform) => {
  //     if (moduleName.startsWith('unist-util-visit-parents')) {
  //       return {
  //         filePath: __dirname + '/node_modules/unist-util-visit-parents/lib/color.js',
  //         type: 'sourceFile'
  //       }
  //     }

  //     // Optionally, chain to the standard Metro resolver.
  //     return context.resolveRequest(context, moduleName, platform)
  //   }
  // }
}
