import { View, Text } from 'react-native';
import { Button, Provider } from 'chameleon-ui';
import { TamaguiProvider } from 'tamagui';
import config from 'chameleon-ui/dist/lib/tamagui.config';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Provider>
          <View>
            <Text>Test 12</Text>
            {/* <Button title="Test Button" onPress={() => console.log('pressed')}></Button> */}
          </View>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
