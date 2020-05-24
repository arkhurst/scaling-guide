import React, { useState, memo } from 'react'
import {Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

 function ChildComponent({childRef}){

    const [state, setState ] = useState('')

    console.log('child component has rendered')
    return(
        <View>
            <TextInput value={state} onChange={e => setState(e)} placeholder='type something' />
        </View>
    )
}

export default memo(ChildComponent);