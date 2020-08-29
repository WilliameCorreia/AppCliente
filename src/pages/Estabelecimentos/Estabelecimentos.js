/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';

export default function Estabelecimentos({ navigation }) {

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.cardBtn} onPress={() => navigation.navigate('ListaEstabelecimentos')}>
        <Image style={styles.img} source={{uri:'https://appestabelecimentoscliente.s3.us-east-2.amazonaws.com/CategoriasEstabelecimentos/churascaria.png'}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardBtn} onPress={() => navigation.navigate('ListaEstabelecimentos')}>
        <Image style={styles.img} source={{uri:'https://appestabelecimentoscliente.s3.us-east-2.amazonaws.com/CategoriasEstabelecimentos/mercantil.png'}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardBtn} onPress={() => navigation.navigate('ListaEstabelecimentos')}>
        <Image style={styles.img} source={{uri:'https://appestabelecimentoscliente.s3.us-east-2.amazonaws.com/CategoriasEstabelecimentos/pizzaria.png'}}/>
      </TouchableOpacity>
    </ScrollView>
  );
}
