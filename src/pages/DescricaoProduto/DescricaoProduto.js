/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, TouchableOpacity, ScrollView, View, StyleSheet } from 'react-native';
import styles from './style';

export default function DescricaoProduto({ navigation, route }) {

  const produto = route.params;

  console.log("+++++++++++++++++++++++++++++++++");
  console.log(produto);
  console.log("+++++++++++++++++++++++++++++++++");

  return (
    <View style={styles.container1}>
      <View style={styles.container}>
        <View style={styles.ContainerImg}>
          <Image style={styles.img} source={{ uri: 'https://appmercantilimagens.s3.us-east-2.amazonaws.com/ImagensPng/png/' + produto.fotoPng }} />
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
          <Text style={styles.NomeProdutoText}>{produto._Produto}</Text>
        </View>
        <View style={styles.ResumoTotal}>

          <Text style={styles.ResumoTotalSimbolo}>R$</Text>
          <Text style={styles.ResumoTotalDecimal}>{produto.preco}</Text>
         {/*  <Text style={styles.ResumoTotalSimbolo}>90</Text> */}

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
