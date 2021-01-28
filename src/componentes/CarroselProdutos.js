import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';

import EstabelecimentoContext from '../Contexts/Estabelecimento';
import Api from '../services/Api';

export default function CarroselProdutos({ navigation }) {

    const { stateEstabelecimento } = useContext(EstabelecimentoContext);
    const { Estabelecimento } = stateEstabelecimento;

    const [listOfertas, setListOfertas] = useState({
        data: [],
        page: 1,
        loading: false,
        continue: true
    });

    const Add_Ofertas = () => {
        if (listOfertas.continue) {
            setListOfertas({ ...listOfertas, loading: true })
            Api.get(`v1/Produtos/pesquisarOfertasProdutos?estabelecimentoId=${Estabelecimento.id}&oferta=${true}&pagina=${listOfertas.page}`).then(response => {
                const { result } = response.data;
                if (result && result.length > 0) {
                    setListOfertas({
                        data: [...listOfertas.data, ...result],
                        page: listOfertas.page + 1,
                        loading: false,
                        continue: true
                    });
                }else{
                    setListOfertas({ ...listOfertas, continue: false, loading: false })
                }
            }).catch(error => {
                console.log(error)
            })
        }else{
            console.log('fim da lista');
        }
    }

    const precoPersonalizado = (preco, initial) => {

        if (preco.includes('.')) {
            let valor = preco.split('.');
            if (initial) {
                return valor[0]
            } else {
                return valor[1]
            }
        } else {
            let valor = preco.split(',');
            if (initial) {
                return valor[0]
            } else {
                return valor[1]
            }
        }

    }

    useEffect(() => {
        Add_Ofertas();
    }, [])

    const _renderItem = ({ item }) => (
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Descricao', item)}>
            <View style={styles.box}>
                <Image style={styles.img} source={{ uri: 'https://planetaentregas.blob.core.windows.net/planeta-produtos/ImagensPng/png/' + item.fotoPng }} />
            </View>
            <View style={styles.box}>
                <View style={styles.box1}>
                    <Text style={styles.nomePr}>{item._Produto.substring(0, 30)}</Text>
                </View>
                <View style={styles.box2}>
                    <Text style={[styles.precoPr, styles.precoG]}>R$ {precoPersonalizado(item.preco, true)},</Text>
                    <Text style={styles.precoPr}>{precoPersonalizado(item.preco, false)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

    const renderFooter = () => {
        if (!listOfertas.loading) return null;
        return (
            <View style={styles.footerLoading}>
                <ActivityIndicator style={styles.loading} size={"large", 20} color={'#000'} />
            </View>
        )
    }

    const RenderEmpty = () => {
        return (
            <View style={styles.msn}>
                <Text style={styles.textMsn}>Nenhum produto Encontrado</Text>
            </View>
        )
    }

    return (
        <View>
            <Text style={styles.Label}>Produtos em Oferta</Text>
            <FlatList
                horizontal={true}
                data={listOfertas.data}
                renderItem={_renderItem}
                keyExtractor={item => item.codeBar}
                onEndReached={() => Add_Ofertas()}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
                ListEmptyComponent={RenderEmpty}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btn: {
        width: (Dimensions.get('window').width / 4),
        height: (Dimensions.get('window').height / 4),
        margin: 10,
        elevation: 3,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 80,
        height: 80
    },
    box: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    box1: {
        flex: 2,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box2: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5
    },
    nomePr: {
        color: '#B32728',
        fontSize: 12,
        textAlign: 'center'
    },
    precoPr: {
        color: '#B32728',
        fontSize: 15
    },
    precoG: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    Label: {
        color: '#B32728',
        fontSize:20,
        marginHorizontal:15
    }
})
