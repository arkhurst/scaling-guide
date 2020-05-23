import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

export default function Home({navigation}){
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