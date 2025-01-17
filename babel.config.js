module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      [
        'module:metro-react-native-babel-preset',
        {
          useTransformReactJSXExperimental: true
        }
      ],
      'babel-preset-expo'
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json', '.cjs']
        }
      ],
      // [
      //   '@tamagui/babel-plugin',
      //   {
      //     components: ['tamagui', 'chameleon-ui'],
      //     config: './node_modules/chameleon-ui/dist/lib/tamagui.config.js'
      //   }
      // ],
      'react-native-reanimated/plugin'
    ]
  }
}
