import { Home } from "./src/screens/Home";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { theme } from "./src/theme";
import { ThemeProvider } from "styled-components";
import { ActivityIndicator } from "react-native";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fonstLoaded] = useFonts({ Montserrat_400Regular, Montserrat_700Bold })


  
  return (
    <ThemeProvider theme= {theme}>
      {fonstLoaded ? <Home />: <Loading/>}

    </ThemeProvider>

  ) 
    
    
}
