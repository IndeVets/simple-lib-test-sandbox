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
      'react-native-reanimated/plugin'
    ]
  }
}
