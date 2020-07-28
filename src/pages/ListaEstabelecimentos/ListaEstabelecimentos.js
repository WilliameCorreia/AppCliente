import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ListaEstabelecimentos({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('RouteButton')}>
                <Text>João e Companhia!</Text>
                <Text>João e Companhia!</Text>
                <Text>João e Companhia!</Text>
                <Text>João e Companhia!</Text>
                <Text>João e Companhia!</Text>
                <Text>João e Companhia!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

})
