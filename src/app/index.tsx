import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import {
  Button,
  ButtonVariant, 
  Text as CH_Text,
  TamaguiProvider,
  TextVariant,
  ToastProvider as IVToastProvider,
  config,
  TamaguiInternalConfig
} from '@indevets/chameleon-ui'

export default function HomeScreen() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <TamaguiProvider config={config as TamaguiInternalConfig}>
            <IVToastProvider>
            <View>
              <CH_Text variant={TextVariant.smallText} textAlign='center'>
                Currently doesn't have an onPress()
              </CH_Text>
              <Button variant={ButtonVariant.primary}>Chameleon Test Button</Button>
            </View>
          </IVToastProvider>
        </TamaguiProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}