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
                <View style={styles.box2_1}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MeusProdutos', {EstabelecimentoId: EstabelecimentoId, itemID: 1 })}>
                        <Image style={styles.img} source={require('../Assets/images/açougue.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Açougue</Text>
                </View>
                <View style={styles.box2_1}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MeusProdutos', {EstabelecimentoId: EstabelecimentoId, itemID: 4 })}>
                        <Image style={styles.img} source={require('../Assets/images/bebidas.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Bebidas</Text>
                </View>
                <View style={styles.box2_1}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MeusProdutos', {EstabelecimentoId: EstabelecimentoId, itemID: 12 })}>
                        <Image style={styles.img} source={require('../Assets/images/cereais.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Cereais</Text>
                </View>
                <View style={styles.box2_1}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MeusProdutos', {EstabelecimentoId: EstabelecimentoId, itemID: 10 })}>
                        <Image style={styles.img} source={require('../Assets/images/hortifruti.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Hort Fruti</Text>
                </View>
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
    box2_1:{
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
    btnCat:{
        width: (Dimensions.get('screen').width * 1.5),
        height: '60%'
    },
    textBtn: {
        color: '#B32728'
    },
    img: {
        width: 70,
        height: 70,
        margin: 5,
        borderRadius: 10,
    }
})
