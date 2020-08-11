import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

export default function CardEstabelecimentos({ navigation }) {
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