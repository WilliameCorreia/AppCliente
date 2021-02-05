/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, View, Text } from 'react-native';
import MySearch from '../../componentes/MySearchBar';
import CardEstabelecimentos from '../../componentes/CardEstabelecimentos'
import { SafeAreaView } from 'react-native-safe-area-context';

import Api from '../../services/Api';
import AuthContext from '../../Contexts/auth';
import EstabelecimentoContext from '../../Contexts/Estabelecimento';
import MyLoading from '../../componentes/MyLoading';
import Geolocation from '@react-native-community/geolocation';
import verificaDistancia from '../../services/verificaDistancia';
export default function ListaEstabelecimentos({ navigation, route }) {

  const { tipo } = route.params;

  const { stateEstabelecimento, dispathEstabelecimento } = useContext(EstabelecimentoContext);

  const [estabelecimentos, setEstabelecimentos] = useState(null);
  const [clienteLocation, setClienteLocation] = useState(null);
  const [load, setLoad] = useState(true);

  const [estabelecimentoFiltrados, setEstabelecimentoFiltrados] = useState([]);

  function getEstabelecimentos() {
    Api.get(`v1/Estabelecimentos/TipoEstabelecimento/${tipo}`).then(response => {
      const { result } = response.data;
      let abertos = result.filter(e => e.estabelecimentoFechado === 'n');
      let comCoordenadas = abertos.filter(a => a.enderecos !== null ? a.enderecos.includes("{") : null);
      if (clienteLocation) {
        let permitidos = comCoordenadas.filter(c => verificaDistancia({ coor1: clienteLocation, coor2: { latitude: JSON.parse(c.enderecos).latitude, longitude: JSON.parse(c.enderecos).longitude } })<=2)
        setEstabelecimentos(permitidos);
      }
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

  const localizacao = async () => {
    if (!clienteLocation) {
      obtemLocalizacao();
    }
  }

  async function obtemLocalizacao() {
    Geolocation.getCurrentPosition(
      (pos) => {
        const variavel = { latitude: pos.coords.latitude, longitude: pos.coords.longitude }

        setClienteLocation(variavel);
        setLoad(false);
      },
      (erro) => {
        console.log('erro', erro.message)
      },
      {
        enableHighAccuracy: true, timeout: 120000, maximumAge: 1000
      }
    )
  }

  // useEffect(() => {
  //   getEstabelecimentos();
  // }, [])

  useEffect(() => {
    getEstabelecimentos();
    localizacao();
  }, [clienteLocation])

  if (clienteLocation && estabelecimentos) {
    if (estabelecimentos.length < 1) {
      return <View style={{ flex: 1, justifyContent: "center" }}><Text style={{ textAlign: "center", fontSize: 28 }}>Sentimos muito, mas ainda não existem estabelecimentos nessa categoria que entregam em sua localização!</Text></View>
    } else {
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
  } else {
    return <ActivityIndicator style={{ flex: 1 }} color={"red"} size={80} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
