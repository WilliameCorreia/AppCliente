import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function MenuButton({ onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.img} source={require('../Assets/images/menu.png')} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})
