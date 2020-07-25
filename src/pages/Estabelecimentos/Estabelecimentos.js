import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Estabelecimentos({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('ListaEstabelecimentos')}>
                <Text>Churascaria</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})
