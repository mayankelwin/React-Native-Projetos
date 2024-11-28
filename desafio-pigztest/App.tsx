import { StatusBar } from "expo-status-bar";


import { GluestackUIProvider, Text, Center, View } from "@gluestack-ui/themed";
import { config } from "./config/gluestack-ui.config";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Loading } from "@components/Loading";
import { Login } from "@screens/Login";

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? (
        <Login />
      ) : (
        <Loading />
      )}
    </GluestackUIProvider>
  );
}
