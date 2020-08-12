import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

export default function CarroselProdutos({ navigation }) {
    return (
        <ScrollView horizontal={true} style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Descricao')}>
                <Image style={styles.img} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSy38JceVlOjblhgzHk2UvN2W4KZHa_wvVKKw&usqp=CAU' }} />
                <View style={styles.box}>
                    <View style={styles.box1}>
                        <Text style={styles.nomePr}>Arroz</Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={[styles.precoPr, styles.precoG]}>R$ 22,</Text>
                        <Text style={styles.precoPr}>90</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Descricao')}>
                <Image style={styles.img} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSy38JceVlOjblhgzHk2UvN2W4KZHa_wvVKKw&usqp=CAU' }} />
                <View style={styles.box}>
                    <View style={styles.box1}>
                        <Text style={styles.nomePr}>Arroz</Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={[styles.precoPr, styles.precoG]}>R$ 22,</Text>
                        <Text style={styles.precoPr}>90</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Descricao')}>
                <Image style={styles.img} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSy38JceVlOjblhgzHk2UvN2W4KZHa_wvVKKw&usqp=CAU' }} />
                <View style={styles.box}>
                    <View style={styles.box1}>
                        <Text style={styles.nomePr}>Arroz</Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={[styles.precoPr, styles.precoG]}>R$ 22,</Text>
                        <Text style={styles.precoPr}>90</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Descricao')}>
                <Image style={styles.img} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSy38JceVlOjblhgzHk2UvN2W4KZHa_wvVKKw&usqp=CAU' }} />
                <View style={styles.box}>
                    <View style={styles.box1}>
                        <Text style={styles.nomePr}>Arroz</Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={[styles.precoPr, styles.precoG]}>R$ 22,</Text>
                        <Text style={styles.precoPr}>90</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Descricao')}>
                <Image style={styles.img} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSy38JceVlOjblhgzHk2UvN2W4KZHa_wvVKKw&usqp=CAU' }} />
                <View style={styles.box}>
                    <View style={styles.box1}>
                        <Text style={styles.nomePr}>Arroz</Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={[styles.precoPr, styles.precoG]}>R$ 22,</Text>
                        <Text style={styles.precoPr}>90</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Descricao')}>
                <Image style={styles.img} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSy38JceVlOjblhgzHk2UvN2W4KZHa_wvVKKw&usqp=CAU' }} />
                <View style={styles.box}>
                    <View style={styles.box1}>
                        <Text style={styles.nomePr}>Arroz</Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={[styles.precoPr, styles.precoG]}>R$ 22,</Text>
                        <Text style={styles.precoPr}>90</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btn: {
        width: (Dimensions.get('window').width / 3),
        margin: 10,
        elevation: 3,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 120,
        height: 120
    },
    box:{
        flexDirection: 'row'
    },
    box1:{
        width: '30%',
        height: 40,
        alignItems: 'center'
    },
    box2:{
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    nomePr:{
        color: '#B32728',
        fontSize: 12
    },
    precoPr:{
        color: '#B32728',
        fontSize: 15
    },
    precoG:{
        fontSize: 22,
        fontWeight: 'bold'
    }
})
