import { View } from 'react-native';
// import { Button } from 'chameleon-ui'
// import { TamaguiProvider } from 'tamagui';
// import config from 'chameleon-ui/dist/lib/tamagui.config';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      {/* <TamaguiProvider config={config} defaultTheme="light"> */}
        <View>
          <Text>Test 12</Text>
        </View>
      {/* </TamaguiProvider> */}
    </SafeAreaProvider>
  );
}