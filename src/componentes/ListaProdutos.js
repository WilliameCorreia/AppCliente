import React, { useState, useEffect, Component } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
    FlatList,
    Dimensions
} from 'react-native'
import { Image } from 'react-native-elements';
import AjusteCasasDecimaisPreco from '../services/AjusteCasasDecimaisPreco';

export default function listaProdutos({ Produtos, navigation, LoadProdutos }) {

    const { data, page, loading } = Produtos;

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

    const _renderItem = ({ item, index }) => (
        <View>
            <TouchableOpacity
                style={index+1 === data.filter(dat=>dat.quantidade>0).length ? styles.cardsLast: styles.cards }
                onPress={() => navigation.navigate('Descricao', item)}
            >
                <View style={styles.box}>
                    <View style={styles.box1}>
                        <View style={styles.box1_1}>
                            <Text style={styles.nomeProduto}>{item._Produto.length> 55? item._Produto.substr(0, 55) + "...": item._Produto}</Text>
                        </View>
                        <View style={styles.box1_2}>
                            <Text style={styles.PrecoSimbolo}>R$</Text>
                            <Text style={styles.PrecoDecimais}>{AjusteCasasDecimaisPreco(item.preco)}</Text>
                        </View>
                    </View>
                    <View style={styles.box2}>
                        <Image
                            style={styles.uriImg}
                            source={{ uri: `https://planetaentregas.blob.core.windows.net/planeta-produtos/ImagensPng/png/${item.fotoPng}?${new Date().getHours()}` }}
                            PlaceholderContent={<ActivityIndicator style={styles.loading} color={'red'} size={80} />}
                            transition={true}
                            transitionDuration={1}
                        />
                        {/* <Image
                            style={styles.prodImg} source={{ uri: 'https://planetaentregas.blob.core.windows.net/planeta-produtos/ImagensPng/png/' + item.fotoPng }}
                            PlaceholderContent={<ActivityIndicator />}
                        /> */}
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )

    const renderFooter = () => {
        if (!loading) return null;
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
            {<FlatList
                data={data.filter(dat=>dat.quantidade>0)}
                renderItem={e => _renderItem(e)}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={() => LoadProdutos()}
                onEndReachedThreshold={0.9}
                ListFooterComponent={renderFooter}
                ListEmptyComponent={RenderEmpty}
            />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    box: {
        flex: 1,
        flexDirection: 'row',
    },
    cards: {
        backgroundColor: '#ffff',
        margin: 10,
        // marginBottom:25,
        height: 160,
        elevation: 6
    },
    cardsLast: {
        backgroundColor: '#ffff',
        margin: 10,
        marginBottom:60,
        height: 160,
        elevation: 6
    },
    box1: {
        
        flex: 3,
        padding: 10,
        justifyContent: 'center',
    },
    box1_2: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    box2: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    prodImg: {
        height: '80%',
        width: '100%',
        marginBottom: 5,
    },
    uriImg: {
        width: (Dimensions.get('window').width / 100 * 30),
        height: "90%",
        //resizeMode: 'center'
    },
    nomeProduto: {
        fontSize: 20,
        color: '#999999',
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '600',
    },
    PrecoSimbolo: {
        margin: 5,
        color: "#B32728",
        fontSize: 16
    },
    PrecoDecimais: {
        color: "#B32728",
        fontSize: 22,
    },
    PrecoCentavos: {
        color: "#B32728",
        fontSize: 16
    },
    dispon: {
        backgroundColor: '#f23132',
        paddingHorizontal: 15,
        borderRadius: 30,
        color: '#fff',
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '600'
    },
    active: {
        justifyContent: 'center',
        marginTop: 250
    },
    loading: {
        width: (Dimensions.get('window').width ),
        // height: (Dimensions.get('window').height / 20 * 3),
        height: "100%",
        backgroundColor: '#fff'
    },
    msn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textMsn: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '600'
    },
    texto$: {
        color: '#B32728',
        fontWeight: 'bold',
        fontSize: 25
    }

})