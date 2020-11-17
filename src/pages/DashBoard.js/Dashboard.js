import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import CarroselOfetas from '../../componentes/CarroselOfetas';
import CarroselCategorias from '../../componentes/CarroselCategorias';
import CarroselProdutos from '../../componentes/CarroselProdutos';
import AuthContext from '../../Contexts/auth';
import EstabelecimentoContext from '../../Contexts/Estabelecimento';
import Api from '../../services/Api';

export default function Dashboard({ navigation }) {

  const { token, stateCliente } = useContext(AuthContext);

  const { User } = stateCliente;

  const { stateEstabelecimento, dispathEstabelecimento, GetPedidosAbertos } = useContext(EstabelecimentoContext);

  const { Estabelecimento } = stateEstabelecimento;

  const [listOfertas, setListOfertas] = useState([]);

  const Add_Ofertas = () => {

    Api.get(`v1/Produtos/pesquisarOfertasProdutos/${Estabelecimento.id}/12/true/1`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(response => {
      const { result } = response.data;
      if (result) {
        setListOfertas(result);
      }
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    Add_Ofertas();
  }, [])

  useEffect(() => {
    GetPedidosAbertos();
  }, [User])

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <CarroselOfetas />
      </View>
      <View style={styles.box2}>
        <CarroselCategorias EstabelecimentoId={Estabelecimento.id} navigation={navigation} />
      </View>
      <View style={styles.box3}>
        <CarroselProdutos navigation={navigation} ofertas={listOfertas} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  box1: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginVertical: 10
  },
  box2: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginVertical: 10
  },
  box3: {
    flex: 1.5,
    width: '100%',
    height: '100%',
    marginVertical: 10
  }
});

