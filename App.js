import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Box1 from './src/components/Box1';
import Box2 from './src/components/Box2';
import Box3 from './src/components/Box3';
import * as calAction from './src/action/cal.action';


export default function App() {

  const calReducer = useSelector(({ calReducer }) => calReducer)
  const dispatch = useDispatch()

  return (
    <View style={styles.root}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.header}>Redux Hook Demo</Text>
        <Text style={{ fontSize: 18 }}>{calReducer.count}</Text>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>
        <Button title="ADD" onPress={() => dispatch(calAction.add())} />
        <Button title="REM" onPress={() => dispatch(calAction.remove())} />
        <Button title="CLR" onPress={() => dispatch(calAction.clear(0))} />
      </View>
      <Box1 style={{ ...styles.box, backgroundColor: '#999' }} />
      <Box2 style={{ ...styles.box, backgroundColor: '#fff' }} />
      <Box3 style={{ ...styles.box, backgroundColor: '#ccc' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 50
  },
  header: {
    fontSize: 20
  },
  box: {
    flex: 1
  }
});
