import { Home } from "./src/screens/Home";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { theme } from "./src/theme";
import { Loading } from "./src/components/Loading";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });
  return (
    <>
      {fontsLoaded ? <Home /> : <Loading />}
      <StatusBar
        barStyle="ligh-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}
