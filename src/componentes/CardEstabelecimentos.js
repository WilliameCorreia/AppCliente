import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import { getUser } from '../utilits'
import Api from '../services/Api'

export default function CardEstabelecimentos({ navigation }) {

    const [estabelecimentos, setEstabelecimentos] = useState([]);
    const [token, setToken] = useState();

    function getToken() {
        getUser().then(dados => {
            setToken(dados.token)
            getEstabelecimentos(dados.token);
            console.log("-------------------------------")
            console.log(token)
            console.log("-------------------------------")
        }).catch(error => {
            console.log(error)
        })
    }

    function getEstabelecimentos(_token) {
        console.log(_token)
        if (_token) {
            Api.get('v1/Estabelecimentos', {
                headers: {
                    'Authorization': `Bearer ${_token}`
                }
            }).then(response => {
                console.log("=======================================")
                console.log(response.data.result);
                setEstabelecimentos(response.data.result)
                console.log("=======================================")
            }).catch(error => {
                console.log("*********************************")
                console.log(error)
                console.log("*********************************")
            })
        }
    }

    useEffect(() => {
        getToken();
    }, [])

    return (
        <ScrollView style={styles.container}>
            {estabelecimentos.map(item => {
                return (
                    <TouchableOpacity key={item.id} style={styles.card} onPress={() => navigation.navigate('RouteButton')}>
                        <View style={styles.box1}>
                            <Text>{item._Estabelecimento}</Text>
                            <Text>{item.email}</Text>
                            <Text>{item.razaoSocial}</Text>
                        </View>
                        <View style={styles.box2}>
                            <Image style={styles.cardImg} source={require('../Assets/images/estrela.jpg')} />
                        </View>
                    </TouchableOpacity>
                )
            })}
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