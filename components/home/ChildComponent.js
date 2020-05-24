import React, { useState, memo } from 'react'
import {Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

 function ChildComponent({childRef}){

    const [state, setState ] = useState('')

    console.log('child component has rendered')
    return(
        <View style={{paddingTop:20}}>
            <TextInput style={{borderWidth:1, height:40, padding:20}} value={state} onChange={stateVal => setState(stateVal)} placeholder='type something' />
        </View>
    )
}

export default memo(ChildComponent);