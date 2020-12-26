import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'

const CarroselCategorias = ({ navigation, EstabelecimentoId }) => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <TouchableOpacity style={styles.btnCat} onPress={() => navigation.navigate('Categorias', EstabelecimentoId)}>
                    <Text style={styles.textHeader}>CATEGORIAS</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box2}>
                {Array(4).fill(
                    <View style={styles.box2_1}>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MeusProdutos', { EstabelecimentoId: EstabelecimentoId, categoriaId: 1 })}>
                            <Image style={styles.img} source={require('../Assets/images/açougue.png')} />
                        </TouchableOpacity>
                        <Text style={styles.textBtn}>Açougue</Text>
                    </View>
                )}
            </View>
        </View>
    )
}

export default CarroselCategorias

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box1: {
        height: 30,
        justifyContent: 'center'
    },
    box2: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    box2_1: {
        alignItems: 'center'
    },
    textHeader: {
        width: '25%',
        fontSize: 15,
        elevation: 3,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        color: '#B32728',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btn: {
        backgroundColor: '#fff',
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    btnCat: {
        width: (Dimensions.get('screen').width * 1.5),
        height: '60%'
    },
    textBtn: {
        color: '#B32728'
    },
    img: {
        width: 60,
        height: 60,
        margin: 5,
        borderRadius: 10,
    }
})
