import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export default function ListEstabelecimentos() {
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.card}>
                <View style={styles.box1}>
                    <Text>Super Mwecado Estrela</Text>
                    <Text>(85) 9 8684-9878</Text>
                    <Text>Rua Ouro Preto, 15a Coqueiral</Text>
                </View>
                <View style={styles.box2}>
                    <Image style={styles.cardImg} source={require('../Assets/images/estrela.jpg')} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
                <View style={styles.box1}>
                    <Text>Super Mwecado Estrela</Text>
                    <Text>(85) 9 8684-9878</Text>
                    <Text>Rua Ouro Preto, 15a Coqueiral</Text>
                </View>
                <View style={styles.box2}>
                    <Image style={styles.cardImg} source={require('../Assets/images/estrela.jpg')} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
                <View style={styles.box1}>
                    <Text>Super Mwecado Estrela</Text>
                    <Text>(85) 9 8684-9878</Text>
                    <Text>Rua Ouro Preto, 15a Coqueiral</Text>
                </View>
                <View style={styles.box2}>
                    <Image style={styles.cardImg} source={require('../Assets/images/estrela.jpg')} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
                <View style={styles.box1}>
                    <Text>Super Mwecado Estrela</Text>
                    <Text>(85) 9 8684-9878</Text>
                    <Text>Rua Ouro Preto, 15a Coqueiral</Text>
                </View>
                <View style={styles.box2}>
                    <Image style={styles.cardImg} source={require('../Assets/images/estrela.jpg')} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
                <View style={styles.box1}>
                    <Text>Super Mwecado Estrela</Text>
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
        width: (Dimensions.get('window').width) - 50,
        height: (Dimensions.get('window').height / 4),
        marginTop: 20,
        elevation: 3,
        backgroundColor: '#fff',
    },
    box1: {
        width: '50%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center'
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