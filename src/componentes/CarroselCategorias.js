import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const CarroselCategorias = ({ navigation, EstabelecimentoId }) => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <TouchableOpacity onPress={() => navigation.navigate('Categorias', EstabelecimentoId)}>
                    <Text style={styles.textHeader}>CATEGORIAS</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box2}>
                <View style={styles.box2_1}>
                    <TouchableOpacity style={styles.btn}>
                        <Image style={styles.img} source={require('../Assets/images/açougue.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Açougue</Text>
                </View>
                <View style={styles.box2_1}>
                    <TouchableOpacity style={styles.btn}>
                        <Image style={styles.img} source={require('../Assets/images/bebidas.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Bebidas</Text>
                </View>
                <View style={styles.box2_1}>
                    <TouchableOpacity style={styles.btn}>
                        <Image style={styles.img} source={require('../Assets/images/cereais.png')} />
                    </TouchableOpacity>
                    <Text style={styles.textBtn}>Cereais</Text>
                </View>
                <View style={styles.box2_1}>
                    <TouchableOpacity style={styles.btn}>
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
        fontWeight: 'bold'
    },
    btn: {
        backgroundColor: '#fff',
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
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
