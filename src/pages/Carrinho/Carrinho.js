/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import CardItensProdutos from '../../componentes/CardItensProdutos';
import EstabelecimentoContext from '../../Contexts/Estabelecimento';
import AuthContext from '../../Contexts/auth';

export default function Carrinho({ navigation }) {

  const { stateEstabelecimento } = useContext(EstabelecimentoContext);
  const { stateCliente } = useContext(AuthContext);
  const [total, setTotal] = useState("0,00");

  console.log(stateCliente);

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
      {stateCliente ?
        <View style={{ backgroundColor: 'red', flex: 0.5, justifyContent: 'center' }}>
          <TouchableOpacity style={[styles.BtnComprar, { flex: 1 }]}>
            <Text style={styles.BtnComprarText}>EFETUAR COMPRA</Text>
          </TouchableOpacity>
        </View>
        :
        <View style={{ flex: 1.1, backgroundColor: '#F23132', alignItems: 'center' }}>
          <View style={{ width: '60%', justifyContent: 'flex-start', marginVertical: 5 }}>
            <Text style={{ fontSize: 14, marginVertical: 5, color: '#fff' }}>Falta pouco!</Text>
            <Text style={{ fontSize: 12, color: '#fff' }}>Para concluir seu pedido, precisamos que você se identifique. Como quer continuar ?</Text>
          </View>
          <TouchableOpacity style={{ backgroundColor: '#fff', padding: 5, borderRadius: 30, paddingHorizontal: 10 }} onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#b32728', fontWeight: 'bold'}}>Entrar ou Cadastrar</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  );
}
