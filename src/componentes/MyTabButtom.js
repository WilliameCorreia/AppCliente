import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function MyTabButtom({ color, state, descriptors, activeTintColor }) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity  onPress={() => navigation.navigate('DashBoard')}>
                <Image style={[styles.img, {tintColor: color}]} source={require('../Assets/images/home.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ListaEstabelecimentos')}>
                <Image style={[styles.img, {tintColor: color}]} source={require('../Assets/images/estabelecimento.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CarrinhoCompras')}>
                <Image style={[styles.img, {tintColor: color}]} source={require('../Assets/images/carrinho.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('user')}>
                <Image style={[styles.img, {tintColor: color}]} source={require('../Assets/images/user.png')}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: (Dimensions.get('screen').width),
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#B32728',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    img:{
        width: 40, 
        height: 40, 
        backgroundColor: '#fff', 
        borderRadius: 30, 
    }
})
