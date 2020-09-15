import React, { useState, useEffect, Component } from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
} from 'react-native'

import { FlatList } from 'react-native-gesture-handler';

export default function listaProdutos({ Produtos, loading, navigation, LoadListaProdutos}) {

    console.log("((((((((((((((((((((lista de produtos renderizado))))))))))))))))))))")
    console.log(Produtos);

    const _renderItem = ({ item }) => (
        <View>
            <TouchableOpacity
                style={styles.cards}
                onPress={() => navigation.navigate('Descricao', item)}
            >
                <View style={styles.box}>
                    <View style={styles.box1}>
                        <View style={styles.box1_1}>
                            <Text style={styles.nomeProduto}>{item._Produto}</Text>
                        </View>
                        <View style={styles.box1_2}>
                            <Text style={styles.textoPreco}>R$</Text>
                            <Text style={[styles.textoPreco, styles.texto$]}>{item.preco}</Text>
                        </View>
                    </View>
                    <View style={styles.box2}>
                        <Image
                            style={styles.prodImg} source={{ uri: 'https://appmercantilimagens.s3.us-east-2.amazonaws.com/ImagensPng/png/' + item.fotoPng }}
                            PlaceholderContent={<ActivityIndicator />}
                        />
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
            data={Produtos}
            renderItem={_renderItem}
            keyExtractor={item => item.codbar}
            //onEndReached={Produtos.length >= 5 ? LoadListaProdutos : null}
            onEndReachedThreshold={0.1}
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
        margin: 15,
        height: 160,
        elevation: 6
    },
    box1: {
        flex: 2,
        padding: 10,
        justifyContent: 'space-evenly',
    },
    box1_2:{
        flexDirection: 'row',
        alignItems: 'center'
    },  
    box2: {
        flex: 1.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    prodImg: {
        height: '80%',
        width: '100%',
        marginBottom: 5,
    },
    nomeProduto: {
        fontSize: 20,
        color: '#999999',
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '600',
    },
    textoPreco: {
        fontSize: 20,
        color: '#999999',
        paddingLeft: 10,
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '600',
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
    texto$:{
        color: 'red',
        fontWeight: 'bold',
        fontSize: 25
    }

})