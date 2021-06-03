import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import * as calAction from '../../src/action/cal.action';

const Box3 = props => {

    const calReducer = useSelector(({ calReducer }) => calReducer)

    return (
        <View style={{...props.style, justifyContent: 'center'}}>
            <Text style={{color: 'black', fontSize: 30, alignSelf: 'center'}}>
            Box 3 = {calReducer.count}
            </Text>
        </View>
    )
}

export default Box3;