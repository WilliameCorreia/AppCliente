import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';

import Api from '../services/Api';

export default function CardItemPedido({ produtos }) {

    const calculoTotal = (preco, quantidade) => {
        let valor = preco.replace(",", ".") * quantidade;
        return parseFloat(valor).toFixed(2);
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

    const DeletarItem = (item) =>{
        
        dispathEstabelecimento({type: 'deletarProduto', carrinho: item})
        Api.delete(`v1/Carrinhos/${item.item_Id}`).then(response =>{
            console.log(response);
        }).catch(error =>{
            console.log(error)
        });
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.Item}>
                <View style={styles.ContainerImg}>
                    <Image style={styles.img} source={{ uri: 'https://planetaentregas.blob.core.windows.net/planeta-produtos/ImagensPng/png/' + item.fotoPng }} />
                </View>
                <View style={styles.ContainerDescricao}>
                    <View style={styles.descricaoProduto} >
                        <Text style={styles.NomeProduto}>{item._Produto}</Text>
                    </View>
                    <View style={styles.Preco}>
                        <Text style={styles.PrecoSimbolo}>R$</Text>
                        <Text style={styles.PrecoDecimais}>{precoPersonalizado(item.preco, true)},</Text>
                        <Text style={styles.PrecoCentavos}>{precoPersonalizado(item.preco, false)}</Text>
                    </View>
                    <View style={styles.qnt}>
                        <View style={styles.quantidade}>
                        <Text style={styles.PrecoSimbolo}>Unidades</Text>
                            <Text style={styles.PrecoDecimais}>{item.quantidade}</Text>
                        </View>
                        <View style={styles.Total}>
                            <Text style={styles.PrecoDecimais}>{precoPersonalizado(calculoTotal(item.preco, item.quantidade).toString(), true)},</Text>
                            <Text style={styles.PrecoCentavos}>{precoPersonalizado(calculoTotal(item.preco, item.quantidade).toString(), false)}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={produtos && produtos}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Item: {
        backgroundColor: '#fff',
        marginVertical: 10,
        marginHorizontal: 10,
        elevation: 5,
        height: (Dimensions.get('screen').height / 6),
        flexDirection: "row",
        alignItems: "center",
    },
    ContainerImg: {
        margin: 10
    },
    ContainerDescricao: {
        flex: 1,
    },
    img: {
        width: 70,
        height: 70,
    },
    descricaoProduto: {
        flex: 1,
    },
    NomeProduto: {
        color: "#B32728",
        fontSize: 15
    },
    Preco: {
        flex: 1,
        flexDirection: "row",
        //justifyContent: 'center',
        alignItems: 'center',
    },
    PrecoSimbolo: {
        margin: 5,
        color: "#B32728",
        fontSize: 12
    },
    PrecoDecimais: {
        color: "#B32728",
        fontSize: 22
    },
    PrecoCentavos: {
        color: "#B32728",
        fontSize: 12
    },
    qnt: {
        flex: 1.5,
        flexDirection: "row",
        justifyContent: 'center',
    },
    ContainerQnt: {
        marginVertical: 10,
        width: 40,
        backgroundColor: '#fff',
        elevation: 4,
        alignItems: "center",
        justifyContent: 'center'
    },
    qntButton: {
        backgroundColor: "#B32728",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
    },
    qntSinal: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold"
    },
    quantidade: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    Total: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    },
})

