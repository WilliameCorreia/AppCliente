import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function MybackButton({ onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.img} source={require('../Assets/images/back.png')} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})
