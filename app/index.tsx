import { View } from 'react-native';
import { Button } from 'chameleon-ui'
import { TamaguiProvider } from 'tamagui';
import config from 'chameleon-ui/dist/lib/tamagui.config';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <TamaguiProvider config={config} defaultTheme="light">
        <View>
          <Button title='Test' onPress={() => {
            console.log('This works')
          }} />
        </View>
      </TamaguiProvider>
    </SafeAreaView>
  );
}