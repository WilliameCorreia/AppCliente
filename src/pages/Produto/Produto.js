/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import styles from './style';

export default function Produto({ navigation }) {

  return (
    <View style={styles.container}>

      <ScrollView style={styles.Itens}>
        <View style={styles.Item}>
          <View style={styles.ProdutoEPreco}>
            <Text style={styles.ProdutoNomeText}>Alcatra Kg</Text>
            <View style={styles.SimboloEPreco}>
              <Text style={styles.SimboloText}>R$</Text>
              <Text style={styles.PrecoText}>22,90</Text>
            </View>
          </View>
          <View style={styles.ImagemProduto}>
            <Image style={styles.img} source={{ uri: `https://appmercantilestabelecimento.s3.us-east-2.amazonaws.com/images/8rHnabDY3XMbq3l5Q9jsAh8mYam2/logo2.png` }} />
          </View>
        </View>
        <View style={styles.Item}>
          <View style={styles.ProdutoEPreco}>
            <Text style={styles.ProdutoNomeText}>Alcatra Kg</Text>
            <View style={styles.SimboloEPreco}>
              <Text style={styles.SimboloText}>R$</Text>
              <Text style={styles.PrecoText}>22,90</Text>
            </View>
          </View>
          <View style={styles.ImagemProduto}>
            <Image style={styles.img} source={{ uri: `https://appmercantilestabelecimento.s3.us-east-2.amazonaws.com/images/8rHnabDY3XMbq3l5Q9jsAh8mYam2/logo2.png` }} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
