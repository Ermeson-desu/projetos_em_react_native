import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SplashScreen, Home, Search, ReadBad } from '../screens'

export const Routes= ()=>{
    const Stack = createNativeStackNavigator();
    return(
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