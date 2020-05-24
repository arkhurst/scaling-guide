import React, { useState, memo } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ChildComponent from './ChildComponent';

 function ParentComponent({parentRef, childRef}){

    const [state,setState] = useState('')

    console.log('Parent component has rendered')
    return(
        <View>
            <TextInput placeholder='type in here' value={state} onChange={(e) => setState(e)} />
            <ChildComponent childRef={childRef} />
        </View>
    );
};

export default memo(ParentComponent)
