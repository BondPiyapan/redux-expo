import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as calAction from '../../src/action/cal.action';

const Box2 = props => {

    const calReducer = useSelector(({ calReducer }) => calReducer)
    const dispatch = useDispatch()

    return (
        <View style={{...props.style, justifyContent: 'center'}}>
            <Text style={{color: 'black', fontSize: 30, alignSelf: 'center'}}
            onPress={() => dispatch(calAction.clear(10))}>
            Box 2 = {calReducer.count}
            </Text>
        </View>
    )
}

export default Box2;