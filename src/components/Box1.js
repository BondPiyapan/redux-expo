import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Box1 = props => {

    const calReducer = useSelector(({ calReducer }) => calReducer)
    return (
        <View style={{...props.style, justifyContent: 'center'}}>
            <Text style={{color: 'black', fontSize: 30, alignSelf: 'center'}}>
                Box 1 =  {calReducer.count}
            </Text>
        </View>
    )
}

export default Box1;