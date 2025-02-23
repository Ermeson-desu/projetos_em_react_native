// React e hook useEffect para manipular o ciclo de vida do componente
import React,{useEffect} from 'react';
import {Logo,Background, Container} from '../../components'

/**
 * Tela de Splash
 * A tela inicial que exibe o logo e o background, com uma navegação
 * automática para a tela "Search" após 2 segundos.
 * 
 * @param {Object} navigation - Objeto de navegação fornecido pelo React Navigation 
 * para controlar a navegação entre as telas
 */
export const SplashScreen = ({navigation}) => {

  // O useEffect é utilizado para executar a navegação 
  // após o tempo determinado (2 segundos)
  useEffect(()=> {

     // A função setTimeout define um atraso antes de navegar para a tela "Search"
    setTimeout(() => {
      navigation.navigate('Search')
    }, 2000);
  },[navigation])


  return (
     // Container centraliza o conteúdo da tela, alinhando e justificado no centro
    <Container align ="center" justify = "center">

      <Background opacity={"first"}/>
      <Logo/>
      
    </Container>
    
  );
}