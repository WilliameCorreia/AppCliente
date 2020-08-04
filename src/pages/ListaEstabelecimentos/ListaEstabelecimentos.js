/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';

import MySearch from '../../componentes/MySearchBar';
import ListEstabelecimentos from '../../componentes/ListEstabelecimentos'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ListaEstabelecimentos({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <MySearch/>
      <ListEstabelecimentos/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  }
});
