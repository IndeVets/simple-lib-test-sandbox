Notes for steve

In Expo

```
npm install tamagui babel-plugin-tamagui
```

babel.config.js
```
module.exports = {
    presets: ['babel-preset-expo'],
    plugins: [
        ['tamagui', { config: './tamagui.config.ts' }]
    ]
}
```


_______

Metro?

```
npm install tamagui react-native-web
```

babel.config.js
```
module.exports = {
    presets: ['babel-preset-expo'],
    plugins: [
        ['tamagui', { config: './tamagui.config.ts' }]
    ]
}
```

metro.config.js

```
const path = require('path')

modules.exports = {
    resolver: {
        // Resolve 'react-native-web' for web
        extraNodeModules: {
            'react-native-web': path.resolve(__dirname, 'node_modules/react-native-web')
        }
    }
}
```