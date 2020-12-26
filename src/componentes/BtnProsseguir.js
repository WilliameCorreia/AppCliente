import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

export default function BtnProsseguir({ onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>Continuar</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width: (Dimensions.get('window').width),
        height: '100%',
        justifyContent: 'center',
        alignItems:'center',
        borderTopWidth: 1,
        borderTopColor: '#DBCCCC'
    },
    text:{
        fontSize: 24,
        color: '#1E707D'
    }
})
