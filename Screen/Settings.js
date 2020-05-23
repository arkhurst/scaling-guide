import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

export default function Settings(){
    return(
        <View style={styles.container}>  
            <Text>Hey there from Settings!</Text>
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