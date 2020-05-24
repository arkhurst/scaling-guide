import React, { useState, memo, useEffect } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ChildComponent from './ChildComponent';

 function ParentComponent({parentRef, childRef}){

    const [state,setState] = useState('')

    useEffect(() => {
        parentRef.current = state
    },[state])
    console.log('Parent component has rendered')
    return(
        <View style={{paddingTop:20}}>
            <TextInput style={{borderWidth:1, padding:20}} placeholder='type in here' onChange={(stateVal) => setState(stateVal)} />
            <ChildComponent childRef={childRef} />
        </View>
    );
};

export default memo(ParentComponent)
