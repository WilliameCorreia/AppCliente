/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MySearch from '../../componentes/MySearchBar';
import CardEstabelecimentos from '../../componentes/CardEstabelecimentos'
import { SafeAreaView } from 'react-native-safe-area-context';

import Api from '../../services/Api';
import AuthContext from '../../Contexts/auth';
import EstabelecimentoContext from '../../Contexts/Estabelecimento';

export default function ListaEstabelecimentos({ navigation }) {

  const { token } = useContext(AuthContext);

  const { stateEstabelecimento, dispathEstabelecimento } = useContext(EstabelecimentoContext);

  const [estabelecimentos, setEstabelecimentos] = useState([]);

  const [estabelecimentoFiltrados, setEstabelecimentoFiltrados] = useState([]);

  function getEstabelecimentos() {
    if (token) {
      Api.get('v1/Estabelecimentos', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(response => {
        setEstabelecimentos(response.data.result);
      }).catch(error => {
        console.log(error)
      })
    }
  }

  const selectedEstabelecimento = item => {
    dispathEstabelecimento({ type: 'setEstabelecimento', estabelecimento: item });
    navigation.navigate('RouteButton');
  }

  const pesquisarEstabelecimento = (word) => {
    setEstabelecimentoFiltrados(estabelecimentos.filter((item, index) => item._Estabelecimento.toLowerCase().includes(word.toLowerCase())));
  }

  useEffect(() => {
    getEstabelecimentos();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <MySearch action={pesquisarEstabelecimento} />
      <CardEstabelecimentos estabelecimentos={estabelecimentos} filtrados={estabelecimentoFiltrados} selectedEstabelecimento={selectedEstabelecimento} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
