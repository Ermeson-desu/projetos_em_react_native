import { Routes } from './src/routes';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import {useFonts,JosefinSans_400Regular} from '@expo-google-fonts/josefin-sans';
import {JotiOne_400Regular} from '@expo-google-fonts/joti-one';
import {theme} from './src/styles';

export default function App() {
    
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JotiOne_400Regular
  })

  if (!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}
