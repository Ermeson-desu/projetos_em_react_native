import { Routes } from './src/routes';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import {useFonts,JosefinSans_400Regular} from '@expo-google-fonts/josefin-sans'
import {JotiOne_400Regular} from '@expo-google-fonts/joti-one'
import {theme} from './src/styles'
// import Api from '@/src/services/Api'
import { useState } from 'react'; 


export default function App() {
  const [title, setTitle] = useState("")

  async function buscarManga(){
    if(title.trim() === "") {
      Alert.alert("Nome Inválido", "Por favor, digite um nome válido");
      return
    }
      
    try {
      const response = await Api.get(`/${title}`)
      setTitle(response.title)
    } catch (error) {
      Alert.alert("Erro", "Não foi possível buscar os dados. Verifique o título do mangá buscado e tente novamente.")
    }
    }
    
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
