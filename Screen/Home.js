import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { TextInput } from 'react-native-gesture-handler';
import ParentComponent from '../components/home/ParentComponent';
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

    const handleSubmit = () => {
       console.log(state)
       console.log(parentState.current)
       console.log(childState.current)
    } 

    console.log('Home has rendered')
    return(
        <View style={styles.container}>  
            <Text>Hey there from Home!</Text>
            <Button  title='Click me to Onboarding' onPress={() => navigation.navigate('Onboarding')} />
            <View style={{paddingTop:20}}>
                <TextInput style={{borderWidth:1, height:40, padding:20}} placeholder='type something from home' value={state} onChange={(stateVal) => setState(stateVal)} />
                <ParentComponent parentRef={parentState} childRef={childState} />
            </View>
            <Button title="Submit" onPress={handleSubmit} />
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