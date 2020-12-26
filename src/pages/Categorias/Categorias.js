import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { Image } from 'react-native-elements';
import AuthContext from '../../Contexts/auth';
import Api from '../../services/Api'

export default function Categorias( { navigation, route } ) {

    const { token } = useContext(AuthContext);
    const [categorias, setCategorias] = useState([]);
    const EstabelecimentoId = route.params;
    
    function LoadCategorias(){
        Api.get(`v1/Estabelecimentos/FiltrarCategoriasPorEstabelecimentos/${EstabelecimentoId}`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            const { result } =  response.data;
            let _categorias = [];
            result.map(item =>{
                const { categorias } = item.tipo_Estabelecimento;
                categorias.map(element =>{
                    _categorias.push(element);
                });
            });
            setCategorias(_categorias)
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        LoadCategorias();
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {Array(10).fill(
                <ShimmerPlaceHolder style={styles.uriShimmer} autoRun={true} visible={categorias.length != 0} />
            )}
            {categorias.map((item, index) => {
                return (
                    <TouchableOpacity
                        style={styles.btnCategoria}
                        key={item.id.toString()}
                        onPress={() => navigation.navigate('MeusProdutos', {categoriaId: item.id, EstabelecimentoId: EstabelecimentoId} )}
                    >
                        <Image
                            key={index.toString()}
                            source={{ uri: 'https://planetaentregas.blob.core.windows.net/planeta-produtos/categorias/' + item.categoriaPng }}
                            style={styles.uriImg}
                            PlaceholderContent={<ActivityIndicator style={styles.Indicator} color={'red'} />}
                            transition={true}
                        />
                    </TouchableOpacity>
                )
            })}
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff'
    },
    btnCategoria: {
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height / 40 * 6),
        alignItems: 'center',
        justifyContent: 'center',
    },
    uriImg: {
        width: (Dimensions.get('window').width / 100 * 45),
        height: (Dimensions.get('window').height / 100 * 13),
        //resizeMode: 'center'
    },
    Indicator: {
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height / 20 * 3),
        backgroundColor: '#fff'
    },
    uriShimmer: {
        width: '45%',
        height: (Dimensions.get('screen').height / 20 * 3),
        margin: 8
    }
})