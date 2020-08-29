import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CarroselOfetas from '../../componentes/CarroselOfetas';
import CarroselCategorias from '../../componentes/CarroselCategorias';
import CarroselProdutos from '../../componentes/CarroselProdutos';
import AuthContext from '../../Contexts/auth';

export default function Dashboard({ navigation, route }) {

  const { token } = useContext(AuthContext);

  const { razaoSocial } = route.params;
  
  return (
    <View style={styles.container}>
      <Text>{razaoSocial}</Text>
      <View style={styles.box1}>
        <CarroselOfetas />
      </View>
      <View style={styles.box2}>
        <CarroselCategorias navigation={navigation} />
      </View>
      <View style={styles.box3}>
        <CarroselProdutos navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  box1: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginVertical: 10
  },
  box2: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginVertical: 10
  },
  box3: {
    flex: 1.5,
    width: '100%',
    height: '100%',
    marginVertical: 10
  }
});

