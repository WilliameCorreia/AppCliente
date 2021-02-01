/* eslint-disable prettier/prettier */
import React, { useEffect, useContext, useState } from 'react';
import { Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';
import Api from '../../services/Api';
import Myloading from '../../componentes/MyLoading';

export default function Estabelecimentos({ navigation }) {

  const [tipoEstabelecimentos, setTipoEstabelecimento] = useState(null);

  const getTipoEstabelecimentos = () => {
    Api.get(`v1/TipoEstabelecimentos`).then(response => {
      const { result } = response.data;
      setTipoEstabelecimento(result);
      // console.log(result);
    }).catch(error => {
      console.log(error)
    });
  }

  useEffect(() => {
    getTipoEstabelecimentos();
  }, [])

  return (
    <ScrollView style={styles.container}>
      {
        !tipoEstabelecimentos ? 
        <Myloading/>
        :
        tipoEstabelecimentos.map(item => {
          return (
            <TouchableOpacity key={item.tipoEstab_Id} style={styles.cardBtn} onPress={() => navigation.navigate('ListaEstabelecimentos', { tipo: item.tipoEstab_Id })}>
              <Image style={styles.img} source={{ uri: `https://planetaentregas.blob.core.windows.net/planeta-produtos/TipoEstabelecimentos/${item.fotoTipoEstab}?${new Date().getHours()}` }} />
            </TouchableOpacity>
          )
        })
      }
    </ScrollView>
  );
}
