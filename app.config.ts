import { ConfigContext, ExpoConfig } from '@expo/config'

export default ({ config }: ConfigContext): ExpoConfig => {
  // Base properties across all environments
  const baseConfig: ExpoConfig = {
    ...config,
    name: 'Dev IndeVets',
    slug: 'indevets-dev',
    scheme: 'indevets',
    owner: 'indevets',
    version: '4.6.1',
    jsEngine: 'hermes',
    newArchEnabled: false,
    runtimeVersion: {
      policy: 'appVersion'
    },
    ios: {
        bundleIdentifier: 'com.indevets.mobile.dev',
    },
    android: {
        package: 'com.indevets.mobile.dev',
    },
    web: {
      bundler: 'metro',
      output: 'single',
    },
    plugins: [
      'expo-router',
      [
        'expo-build-properties',
        {
          android: {
            compileSdkVersion: 34,
            targetSdkVersion: 34,
            buildToolsVersion: '34.0.0',
          },
          ios: {
            deploymentTarget: '16.0',
            useFrameworks: 'static',
          }
        }
      ]
    ]
  }

  return baseConfig
}
