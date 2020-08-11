/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, TouchableOpacity, ScrollView, View, StyleSheet } from 'react-native';
import styles from './style';

export default function DescricaoProduto({ navigation }) {

  return (
    <View style={styles.container1}>
      <View style={styles.container}>
        <View style={styles.ContainerImg}>
          <Image style={styles.img} source={{ uri: `https://appmercantilestabelecimento.s3.us-east-2.amazonaws.com/images/8rHnabDY3XMbq3l5Q9jsAh8mYam2/logo2.png` }} />
        </View>
        <View style={styles.qnt}>
          <TouchableOpacity style={styles.qntMenorButton}>
            <Text style={styles.qntMenor}>-</Text>
          </TouchableOpacity>
          <View style={styles.ContainerQnt}>
            <Text style={styles.PrecoDecimais}>22</Text>
          </View>
          <TouchableOpacity style={styles.qntMaiorButton}>
            <Text style={styles.qntMaior}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.NomeProduto}>
          <Text style={styles.NomeProdutoText}>Alcatra</Text>
        </View>
        <View style={styles.ResumoTotal}>

          <Text style={styles.ResumoTotalSimbolo}>R$</Text>
          <Text style={styles.ResumoTotalDecimal}>22,</Text>
          <Text style={styles.ResumoTotalSimbolo}>90</Text>

        </View>
      </View>
      <View style={styles.BtnsFinalizarContainer}>
        <TouchableOpacity style={styles.BtnCarrinho}>
          <Text style={styles.BtnCarrinhoText}>ADICIONAR AO CARRINHO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BtnComprar}>
          <Text style={styles.BtnComprarText}>COMPRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
