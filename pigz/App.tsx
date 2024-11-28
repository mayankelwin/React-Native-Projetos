import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components";


import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'; 

import  {theme}   from './src/theme';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';


export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold});

  return (
    
      <ThemeProvider theme={theme}>
  <StatusBar 
  backgroundColor="transparent" 
  translucent/>
      
  
  {fontsLoaded ? <Routes />  :  <Loading/> }
  
  
  </ThemeProvider>

    
    
    );
}

