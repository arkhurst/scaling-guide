import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from '../Screen/Onboarding';
import BottomTabNavigator from './BottomTab';

const Stack = createStackNavigator();

export default function StackNavigator(){
    return(
        <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown:false,
          
        }} mode='modal' >
            <Stack.Screen 
              name="Onboarding"
              component={Onboarding}
             
            />
            <Stack.Screen 
               name="MainApp"
               component={BottomTabNavigator}
            />
        </Stack.Navigator>
        </NavigationContainer>
    )
}