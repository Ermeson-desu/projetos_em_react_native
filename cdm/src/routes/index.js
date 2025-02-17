import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SplashScreen, Home} from '../screens'

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
            </Stack.Navigator>
        </NavigationContainer>
    )
}