/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity, ScrollView, View, StyleSheet } from 'react-native';
import styles from './style';
import CardItensProdutos from '../../componentes/CardItensProdutos';
import EstabelecimentoContext from  '../../Contexts/Estabelecimento';

export default function Carrinho({ navigation }) {

  const { stateEstabelecimento } = useContext(EstabelecimentoContext);

  return (
    <View style={styles.container1}>
      <View style={styles.container}>
        <CardItensProdutos produtos={stateEstabelecimento.Produtos}/>
      </View>
      <View style={styles.ResumoTotal}>
        <Text style={styles.ResumoTotalText}>TOTAL</Text>
        <View style={styles.ResumoTotalValor}>
          <Text style={styles.ResumoTotalSimbolo}>R$</Text>
          <Text style={styles.ResumoTotalDecimal}>22,</Text>
          <Text style={styles.ResumoTotalSimbolo}>90</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.BtnComprar}>
        <Text style={styles.BtnComprarText}>EFETUAR COMPRA</Text>
      </TouchableOpacity>
    </View>
  );
}
