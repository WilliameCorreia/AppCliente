import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native';

export default function CarroselProdutos({ navigation, ofertas }) {

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

    return (
        <View>
            <FlatList
                horizontal={true}
                //style={styles.container}
                data={ofertas}
                renderItem={_renderItem}
                keyExtractor={item => item.codeBar}
            //onEndReached={}
            //ListFooterComponent={}
            //ListEmptyComponent={}
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
    }
})
