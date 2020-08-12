import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function DrawerContent() {
    return (
        <View>
            <View style={styles.box1}>
                <Image style={styles.imgHeader} source={require('../Assets/images/user.png')} />
                <Text style={styles.textNome}>PAULO ARTUR</Text>
                <Text style={styles.textSublinhado}>___________</Text>
            </View>
            <View style={styles.box2}>
                <View style={styles.box2_1}>
                    <Image style={styles.imgItem} source={require('../Assets/images/pedidos.png')} />
                    <Text style={styles.textItem}>Pedidos</Text>
                </View>
                <View style={styles.box2_2}>
                    <Image style={styles.imgItem} source={require('../Assets/images/pedidos.png')} />
                    <Text style={styles.textItem}>Suporte</Text>
                </View>
            </View>
            <View style={styles.box3}>
                <View style={styles.box3_1}>
                    <Image style={styles.imgSair} source={require('../Assets/images/sair.png')} />
                    <Text style={styles.textItem}>Sair</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box1: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box2: {
        width: '100%',
        height: '25%',
    },
    box3: {
        width: '100%',
        height: '25%',
        justifyContent: 'flex-end',
    },
    imgHeader: {
        backgroundColor: '#fff',
        tintColor: '#e6e7e8',
        borderRadius: 80,
        width: 120,
        height: 120,
        margin: 10
    },
    textNome: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 20
    },
    textSublinhado: {
        color: '#fff',
        fontSize: 25,
        marginTop: -15
    },
    imgItem: {
        width: 60,
        height: 60
    },
    box2_1: {
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 20,
        alignItems: 'center'
    },
    box2_2: {
        marginHorizontal: 20,
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center'
    },
    textItem: {
        marginHorizontal: 10,
        fontSize: 20,
        color: '#fff'
    },
    imgSair: {
        width: 40,
        height: 40
    },
    box3_1:{
        marginHorizontal: 20,
        flexDirection: 'row',
        margin: 20,
        alignItems: 'center'
    }
})
