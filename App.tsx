import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'

import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading'

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

import{
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold

  
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme'

import {Register}  from './src/screens/Register';
import { SafeAreaView } from 'react-native';



export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  if(!fontsLoaded){
    return <AppLoading/>
  }


  return(
      
    <ThemeProvider theme={theme}>

      <NavigationContainer>
          <AppRoutes />
      </NavigationContainer>
     
    </ThemeProvider>
 
  );
}
