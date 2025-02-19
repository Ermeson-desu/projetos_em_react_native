import React,{useEffect} from 'react';
import {Logo,Background, Container} from '../../components'

export const SplashScreen = ({navigation}) => {
  useEffect(()=> {
    setTimeout(() => {
      navigation.navigate('ReadBad')
    }, 2000);
  },[navigation])
  return (
    <Container align ="center" justify = "center">
      <Background opacity={"first"}/>
      <Logo/>
    </Container>
    
  );
}