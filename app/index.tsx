import { View } from 'react-native';
import { Button } from 'chameleon-ui'
import { TamaguiProvider } from 'tamagui';
import config from 'chameleon-ui/dist/lib/tamagui.config';

export default function HomeScreen() {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <View>
        <Button title='Test' onPress={() => {
          console.log('This works')
        }} />
      </View>
    </TamaguiProvider>
  );
}