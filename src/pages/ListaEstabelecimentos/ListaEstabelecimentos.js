/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MySearch from '../../componentes/MySearchBar';
import CardEstabelecimentos from '../../componentes/CardEstabelecimentos'
import { SafeAreaView } from 'react-native-safe-area-context';

import Api from '../../services/Api';
import AuthContext from '../../Contexts/auth';
import EstabelecimentoContext from '../../Contexts/Estabelecimento';
import MyLoading from '../../componentes/MyLoading';

export default function ListaEstabelecimentos({ navigation, route }) {

  const { tipo } = route.params;

  const { stateEstabelecimento, dispathEstabelecimento } = useContext(EstabelecimentoContext);

  const [estabelecimentos, setEstabelecimentos] = useState(null);

  const [estabelecimentoFiltrados, setEstabelecimentoFiltrados] = useState([]);

  function getEstabelecimentos() {
    // console.log(tipo);
    Api.get(`v1/Estabelecimentos/TipoEstabelecimento/${tipo}`).then(response => {
      const { result } = response.data;
      setEstabelecimentos(result.filter(e => e.estabelecimentoFechado === 'n'));
    }).catch(error => {
      console.log(error)
    })
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
      {
        !estabelecimentos ?
          <MyLoading />
          :
          <>
            <MySearch action={pesquisarEstabelecimento} />
            <CardEstabelecimentos estabelecimentos={estabelecimentos} filtrados={estabelecimentoFiltrados} selectedEstabelecimento={selectedEstabelecimento} />
          </>
      }

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
