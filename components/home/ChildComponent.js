import React, { useState, memo, useEffect } from 'react'
import {Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

 function ChildComponent({childRef}){

    const [state, setState ] = useState('')

    useEffect(() => {
        childRef.current = state
    },[state])

    console.log('child component has rendered')
    return(
        <View style={{paddingTop:20}}>
            <TextInput style={{borderWidth:1,  padding:20}}  onChange={stateVal => setState(stateVal)} placeholder='type something' />
        </View>
    )
}

export default memo(ChildComponent);