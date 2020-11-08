/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import CardItensProdutos from '../../componentes/CardItensProdutos';
import EstabelecimentoContext from '../../Contexts/Estabelecimento';
import AuthContext from '../../Contexts/auth';
import Api from '../../services/Api';

export default function Carrinho({ navigation }) {

  const { stateEstabelecimento, dispathEstabelecimento } = useContext(EstabelecimentoContext);
  const { Estabelecimento } = stateEstabelecimento;
  const { Carrinho } = stateEstabelecimento;
  const { stateCliente, token } = useContext(AuthContext);
  const { User } = stateCliente;
  const [total, setTotal] = useState("0,00");
  const [produtos, setProdutos] = useState([]);


  const valorTotal = () => {
    if (Carrinho) {
      let valor = 0;
      stateEstabelecimento.Carrinho.forEach(item => {
        console.log(item);
        valor += (parseFloat(item.produtos.preco.replace(",", ".")) * item.quantidade);
      });
      setTotal(valor.toFixed(2))
    }

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

  const GetProdutosCarrinho = () => {
    Api.get(`v1/Carrinhos/FilterCarrinhoCliente/${User.id},${Estabelecimento.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(response => {
      const { result } = response.data;
      dispathEstabelecimento({ type: 'AddCarrinho', carrinho: result });
    }).catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    GetProdutosCarrinho();
  }, [])

  useEffect(() => {
    valorTotal();
  }, [stateEstabelecimento])

  return (
    <View style={styles.container1}>
      <View style={styles.container}>
        <CardItensProdutos produtos={Carrinho} />
      </View>
      <View style={styles.ResumoTotal}>
        <Text style={styles.ResumoTotalText}>TOTAL</Text>
        <View style={styles.ResumoTotalValor}>
          <Text style={styles.ResumoTotalSimbolo}>R$</Text>
          <Text style={styles.ResumoTotalDecimal}>{precoPersonalizado(total.toString(), true)},</Text>
          <Text style={styles.ResumoTotalCentavos}>{precoPersonalizado(total.toString(), false)}</Text>
        </View>
      </View>
      {User ?
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
            <Text style={{ color: '#b32728', fontWeight: 'bold' }}>Entrar ou Cadastrar</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  );
}
