/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import CardItensProdutos from '../../componentes/CardItensProdutos';
import EstabelecimentoContext from '../../Contexts/Estabelecimento';

export default function Carrinho({ navigation }) {

  const { stateEstabelecimento } = useContext(EstabelecimentoContext);
  const [total, setTotal] = useState("0,00");

  const valorTotal = () => {
    let valor = 0;
    stateEstabelecimento.Produtos.forEach(item => {
      console.log(item);
      valor += (parseFloat(item.preco.replace(",", ".")) * item.quantidade);
    });
    setTotal(valor.toFixed(2))
  }

  const precoPersonalizado = (preco, initial) => {

    console.log(preco);

    if (preco.includes('.')) {
      let valor = preco.split('.');
      if (initial) {
        return valor[0];
      } else {
        console.log(valor[1]);
        return valor[1];
      }
    } else {
      let valor = preco.split(',');
      if (initial) {
        return valor[0];
      } else {
        console.log(valor[1]);
        return valor[1];
      }
    }
  }

  useEffect(() => {
    valorTotal();
  }, [stateEstabelecimento])

  return (
    <View style={styles.container1}>
      <View style={styles.container}>
        <CardItensProdutos produtos={stateEstabelecimento.Produtos} />
      </View>
      <View style={styles.ResumoTotal}>
        <Text style={styles.ResumoTotalText}>TOTAL</Text>
        <View style={styles.ResumoTotalValor}>
          <Text style={styles.ResumoTotalSimbolo}>R$</Text>
          <Text style={styles.ResumoTotalDecimal}>{precoPersonalizado(total.toString(), true)},</Text>
          <Text style={styles.ResumoTotalCentavos}>{precoPersonalizado(total.toString(), false)}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.BtnComprar}>
        <Text style={styles.BtnComprarText}>EFETUAR COMPRA</Text>
      </TouchableOpacity>
    </View>
  );

}
