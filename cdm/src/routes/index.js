import React from "react";
// Container principal de navegação
import { NavigationContainer } from "@react-navigation/native"; 
 // Criador de stack navigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Importação das telas que serão usadas na navegação
import {SplashScreen, Home, Search, ReadBad } from '../screens'



// Função de configuração das rotas (navegação)
export const Routes= ()=>{

     // Criação do Stack Navigator que gerenciará a navegação entre as telas
    const Stack = createNativeStackNavigator();

    return(
        // O NavigationContainer é o componente que envolve toda a navegação
        //  e garante que ela funcione corretamente
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen 
                    name="Splash" 
                    component={SplashScreen} 
                    options = {{headerShown: false}}    
                />
                <Stack.Screen 
                    name="Home" 
                    component={Home}
                    options = {{headerShown: false}}
                />
                <Stack.Screen 
                    name="Search" 
                    component={Search}
                    options = {{headerShown: false}}
                />
                <Stack.Screen 
                    name="ReadBad" 
                    component={ReadBad}
                    options = {{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}