import React, { useState, useEffect, useContext } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Api from '../services/Api';
import AuthContext from '../Contexts/auth';

export default function CardEstabelecimentos({ navigation }) {

    const { token } = useContext(AuthContext);

    const [estabelecimentos, setEstabelecimentos] = useState([]);

    function getEstabelecimentos() {
        if (token) {
            Api.get('v1/Estabelecimentos', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                setEstabelecimentos(response.data.result)
            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        getEstabelecimentos();
    }, [])

    return (
        <ScrollView style={styles.container}>
            {estabelecimentos.map(item => {
                return (
                    <TouchableOpacity key={item.id} style={styles.card} onPress={() => navigation.navigate('RouteButton', item)}>
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