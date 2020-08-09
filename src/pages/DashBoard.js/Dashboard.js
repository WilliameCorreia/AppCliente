/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CarroselOferts from '../../componentes/CarroselOfetas'
import CarroselOfetas from '../../componentes/CarroselOfetas';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <CarroselOfetas />
      </View>
      <View style={styles.box2}>
       
      </View>
      <View style={styles.box3}>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  box1:{
    flex: 1,
    width: '100%',
    height: '100%',
  },
  box2:{
    flex: 1,
    width: '100%',
    height: '100%'
  },
  box3:{
    flex: 1,
    width: '100%',
    height: '100%'
  }
});

