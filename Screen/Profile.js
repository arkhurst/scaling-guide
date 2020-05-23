import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

export default function Profile(){
    return(
        <View style={styles.container}>  
            <Text>Hey there from Profile!</Text>
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