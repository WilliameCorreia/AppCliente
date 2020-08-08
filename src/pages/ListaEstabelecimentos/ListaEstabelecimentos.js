/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';

import MySearch from '../../componentes/MySearchBar';
import CardEstabelecimentos from '../../componentes/CardEstabelecimentos'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ListaEstabelecimentos({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <MySearch />
      <CardEstabelecimentos navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
