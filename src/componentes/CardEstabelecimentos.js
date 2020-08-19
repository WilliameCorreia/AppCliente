import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import { getUser } from '../utilits'
import Api from '../services/Api'

export default function CardEstabelecimentos({ navigation }) {

    const [estabelecimentos, setEstabelecimentos] = useState();
    const [token, setToken] = useState();

    getUser().then(dados => {
        setToken(dados.token)
        getEstabelecimentos();
        console.log("-------------------------------")
        console.log(token)
        console.log("-------------------------------")
    }).catch(error => {
        console.log(error)
    })

    function getEstabelecimentos() {
        console.log(token)
        if (token) {
            Api.get('v1/Estabelecimentos', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                console.log("=======================================")
                console.log(response);
                console.log("=======================================")
            }).catch(error => {
                console.log("*********************************")
                console.log(error)
                console.log("*********************************")
            })
        }

    }

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RouteButton')}>
                <View style={styles.box1}>
                    <Text>Super Mercado Estrela</Text>
                    <Text>(85) 9 8684-9878</Text>
                    <Text>Rua Ouro Preto, 15a Coqueiral</Text>
                </View>
                <View style={styles.box2}>
                    <Image style={styles.cardImg} source={require('../Assets/images/estrela.jpg')} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RouteButton')}>
                <View style={styles.box1}>
                    <Text>Super Mercado Estrela</Text>
                    <Text>(85) 9 8684-9878</Text>
                    <Text>Rua Ouro Preto, 15a Coqueiral</Text>
                </View>
                <View style={styles.box2}>
                    <Image style={styles.cardImg} source={require('../Assets/images/estrela.jpg')} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RouteButton')}>
                <View style={styles.box1}>
                    <Text>Super Mercado Estrela</Text>
                    <Text>(85) 9 8684-9878</Text>
                    <Text>Rua Ouro Preto, 15a Coqueiral</Text>
                </View>
                <View style={styles.box2}>
                    <Image style={styles.cardImg} source={require('../Assets/images/estrela.jpg')} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RouteButton')}>
                <View style={styles.box1}>
                    <Text>Super Mercado Estrela</Text>
                    <Text>(85) 9 8684-9878</Text>
                    <Text>Rua Ouro Preto, 15a Coqueiral</Text>
                </View>
                <View style={styles.box2}>
                    <Image style={styles.cardImg} source={require('../Assets/images/estrela.jpg')} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RouteButton')}>
                <View style={styles.box1}>
                    <Text>Super Mercado Estrela</Text>
                    <Text>(85) 9 8684-9878</Text>
                    <Text>Rua Ouro Preto, 15a Coqueiral</Text>
                </View>
                <View style={styles.box2}>
                    <Image style={styles.cardImg} source={require('../Assets/images/estrela.jpg')} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('RouteButton')}>
                <View style={styles.box1}>
                    <Text>Super Mercado Estrela</Text>
                    <Text>(85) 9 8684-9878</Text>
                    <Text>Rua Ouro Preto, 15a Coqueiral</Text>
                </View>
                <View style={styles.box2}>
                    <Image style={styles.cardImg} source={require('../Assets/images/estrela.jpg')} />
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        flexDirection: 'row',
        width: '95%',
        height: (Dimensions.get('window').height / 4),
        margin: 10,
        elevation: 5,
        backgroundColor: '#fff',
    },
    box1: {
        width: '50%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10
    },
    box2: {
        width: '50%',
        height: '100%',
    },
    cardImg: {
        width: '100%',
        height: '100%',
    }
});