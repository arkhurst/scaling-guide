import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function ParentComponent(){

    const [state,setState] = useState('')

    console.log('Parent component has rendered')
    return(
        <View>
            <TextInput placeholder='type in here' />
        </View>
    );
};

