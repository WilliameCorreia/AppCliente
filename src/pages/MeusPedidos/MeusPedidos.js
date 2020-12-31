/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, SafeAreaView, View, FlatList, TouchableOpacity } from 'react-native';
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
      Api.get(`v1/Pedidos/FilterPedidoCliente?cod_ClientId=${User.cod_Client}&estabelecimentoId=${Estabelecimento.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(response => {
        const { result } = response.data;
        if (result) {
          setMeusPedidos(result);
        }
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
      default:  return 'Andamento'
        break;
    }
  }

  useEffect(() => {
    GetPedidos();
  }, [])


  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.Item} onPress={() => navigation.navigate('MeusPedidosDescricao', { produtos: item.produtos } )}>
        <View style={styles.Pedido}>
          <Text style={styles.PedidoText}>Número do Pedido: {item.cod_Pedido}</Text>
        </View>
        <View style={styles.NomeMercantil}>
          <Text style={styles.PedidoText}>{item.estabelecimentos.razaoSocial}</Text>
        </View>
        <View style={styles.Pedido}>
          <Text style={styles.PedidoText}>{moment(item.dataHora_Pedido).format('DD/MM/YYYY - HH-mm')}</Text>
        </View>
        <View style={styles.Status}>
          <Text style={styles.StatusText}>{statusPerson(item.status_Pedido)}</Text>
        </View>
      </TouchableOpacity>
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
