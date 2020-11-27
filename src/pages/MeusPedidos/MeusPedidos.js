/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, SafeAreaView, View, FlatList } from 'react-native';
import styles from './style';

import AuthContext from '../../Contexts/auth';
import EstabelecimentoContext from '../../Contexts/Estabelecimento';
import Api from '../../services/Api';
import moment from 'moment';

export default function MeusPedidos({ navigation }) {

  const { stateCliente, token } = useContext(AuthContext);
  const { User } = stateCliente;
  const { stateEstabelecimento } = useContext(EstabelecimentoContext);
  const { Estabelecimento } = stateEstabelecimento;
  const [meusPedidos, setMeusPedidos] = useState([]);

  const GetPedidos = () => {
    if (User) {
      Api.get(`v1/Pedidos/FilterPedidoCliente/${User.id},${Estabelecimento.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(response => {
        const { result } = response.data;

        let filtrados = [];

        for (let index = 0; index < result.length; index++) {
          const element1 = result[index];
          if (filtrados.length === 0) {
            filtrados.push(element1)
          }
          for (let index = 0; index < filtrados.length; index++) {
            const element2 = filtrados[index];
            if (element1.cod_Pedido === element2.cod_Pedido) {
              element2.produtos.push(element1.produtos[0])
            } else {
              if (!filtrados.find(item => item.cod_Pedido === element1.cod_Pedido)) {
                filtrados.push(element1)
              }
            }
          }
        }
        setMeusPedidos(filtrados);
      }).catch(error => {
        console.log(error);
      })
    }
  }

  const statusPerson = (item) => {
    switch (item) {
      case 'C': return 'Concluído'
        break;
      case 'A': return 'Aberto'
        break;
      case 'E': return 'Entrega'
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    GetPedidos();
  }, [])


  const renderItem = ({ item }) => {
    console.log(item);
    return (
      <View style={styles.Item}>
        <View style={styles.Pedido}>
          <Text style={styles.PedidoText}>Número do Pedido: {item.cod_Pedido}</Text>
        </View>
        <View style={styles.NomeMercantil}>
          <Text style={styles.PedidoText}>{item.estabelecimentos._Estabelecimento}</Text>
        </View>
        <View style={styles.Pedido}>
          <Text style={styles.PedidoText}>{moment(item.dataHora_Pedido).format('DD/MM/YYYY - HH-mm')}</Text>
        </View>
        <View style={styles.Status}>
          <Text style={styles.StatusText}>{statusPerson(item.status_Pedido)}</Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={meusPedidos && meusPedidos}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
