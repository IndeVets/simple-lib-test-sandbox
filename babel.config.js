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
       [
        'babel-plugin-styled-components',
        {
          meaninglessFileNames: ['index', 'styles']
        }
      ],
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
    ]
  }
}
