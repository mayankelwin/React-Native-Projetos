import { StatusBar } from 'expo-status-bar';
import  {useFonts, Montserrat_700Bold, Montserrat_400Regular} from '@expo-google-fonts/montserrat'
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';
import { Profile } from './src/screens/Profile';

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular
  });

  return (
    <ThemeProvider theme={theme}>
    
      <StatusBar style="auto" />
      {fontsLoaded ? <Home /> : <Loading />}
      </ThemeProvider>
  );
}

