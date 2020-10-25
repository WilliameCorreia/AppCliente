/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';

export default function Estabelecimentos({ navigation }) {

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.cardBtn} onPress={() => navigation.navigate('ListaEstabelecimentos',{ tipo: "2" })}>
        <Image style={styles.img} source={{uri:'https://appestabelecimentoscliente.s3.us-east-2.amazonaws.com/CategoriasEstabelecimentos/churascaria.png'}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardBtn} onPress={() => navigation.navigate('ListaEstabelecimentos', { tipo: "1" })}>
        <Image style={styles.img} source={{uri:'https://appestabelecimentoscliente.s3.us-east-2.amazonaws.com/CategoriasEstabelecimentos/mercantil.png'}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardBtn} onPress={() => navigation.navigate('ListaEstabelecimentos', { tipo: "3" })}>
        <Image style={styles.img} source={{uri:'https://appestabelecimentoscliente.s3.us-east-2.amazonaws.com/CategoriasEstabelecimentos/pizzaria.png'}}/>
      </TouchableOpacity>
    </ScrollView>
  );
}
