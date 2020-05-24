import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
/**
  Passing Child component state up with useRef Hook

  Think of useRef as a box where we can sotre values, meaning you can use
  useRef to store values from other component's state.

  ---------------------------------------------------
  HomeComponent renders  the ParentComponent
  ParentComponent renders the ChildComponent

  
 */
export default function Home({navigation}){

    const [state,setState] = useState('');

    const parentState = useRef(null);
    const childState = useRef(null);

    console.log('Home has rendered')
    return(
        <View style={styles.container}>  
            <Text>Hey there!</Text>
            <Button  title='Click me to go back' onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight,
        justifyContent:'center',
        alignItems:'center'
    }
})