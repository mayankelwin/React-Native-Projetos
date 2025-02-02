import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";


export default function App() {
  const [fontsLoaded] = useFonts({Montserrat_700Bold, Montserrat_400Regular})

  return (

    <GluestackUIProvider config={config}>
      
    <View style={{

flex:1,
alignItems:'center',
justifyContent:'center',
backgroundColor: '#202024'

    }}>
      <StatusBar style="auto" />
      
      {fontsLoaded ? <Text color='white' >ok</Text> : <View/> }
    </View>

    </GluestackUIProvider>

  );
}

