/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, TouchableOpacity, ScrollView, View, StyleSheet } from 'react-native';
import styles from './style';

export default function Carrinho({ navigation }) {

  return (
    <View style={styles.container1}>
      <View style={styles.container}>

        <View style={styles.LabelCarrinho}>
          <Text style={styles.LabelCarrinhoProduto}>Produto</Text>
          <Text style={styles.LabelCarrinhoPreco}>Preço</Text>
          <Text style={styles.LabelCarrinhoQnt}>Qnt.</Text>
          <Text style={styles.LabelCarrinhoTotal}>Total</Text>
        </View>
        <ScrollView style={styles.Itens}>
          <View style={styles.Item}>
            <View style={styles.ContainerImg}>
              <Image style={styles.img} source={{ uri: `https://appmercantilestabelecimento.s3.us-east-2.amazonaws.com/images/8rHnabDY3XMbq3l5Q9jsAh8mYam2/logo2.png` }} />
            </View>
            <Text style={styles.NomeProduto}>Alcatra</Text>
            <View style={styles.Preco}>
              <Text style={styles.PrecoSimbolo}>R$</Text>
              <Text style={styles.PrecoDecimais}>22,</Text>
              <Text style={styles.PrecoCentavos}>90</Text>
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
            <View style={styles.Total}>
              <Text style={styles.PrecoSimbolo}>R$</Text>
              <Text style={styles.PrecoDecimais}>22,</Text>
              <Text style={styles.PrecoCentavos}>90</Text>
            </View>
          </View>
          
          <View style={styles.Item}>
            <View style={styles.ContainerImg}>
              <Image style={styles.img} source={{ uri: `https://appmercantilestabelecimento.s3.us-east-2.amazonaws.com/images/8rHnabDY3XMbq3l5Q9jsAh8mYam2/logo2.png` }} />
            </View>
            <Text style={styles.NomeProduto}>Alcatra</Text>
            <View style={styles.Preco}>
              <Text style={styles.PrecoSimbolo}>R$</Text>
              <Text style={styles.PrecoDecimais}>22,</Text>
              <Text style={styles.PrecoCentavos}>90</Text>
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
            <View style={styles.Total}>
              <Text style={styles.PrecoSimbolo}>R$</Text>
              <Text style={styles.PrecoDecimais}>22,</Text>
              <Text style={styles.PrecoCentavos}>90</Text>
            </View>
          </View>
        </ScrollView>
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
