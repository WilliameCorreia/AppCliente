/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import styles from './style';

export default function Produto({ navigation }) {

  return (
    <View style={styles.container}>

      <ScrollView style={styles.Itens}>
        <View style={styles.Item}>
          <View style={styles.Pedido}>
            <Text style={styles.PedidoText}>PEDIDO 1502</Text>
          </View>
          <View style={styles.NomeMercantil}>
            <Text style={styles.PedidoText}>SUPERMERCADO ESTRELA</Text>
          </View>
          <View style={styles.Pedido}>
            <Text style={styles.PedidoText}>23/07/2020</Text>
          </View>
          <View style={styles.Status}>
            <Text style={styles.StatusText}>STATUS</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
