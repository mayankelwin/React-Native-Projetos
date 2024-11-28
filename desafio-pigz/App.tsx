import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components";


import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'; 

import { Login } from './src/screens/Login';
import  {theme}   from './src/theme';
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';


export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold});

  return (
    
      <ThemeProvider theme={theme}>
  <StatusBar 
  barStyle="light-content" 
  backgroundColor="transparent" 
  translucent/>
      
  
  {fontsLoaded ? <Router />  :  <Loading/> }
  
  
  </ThemeProvider>

    
    
    );
}

