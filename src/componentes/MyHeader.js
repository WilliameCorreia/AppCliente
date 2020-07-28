import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Header } from 'react-native-elements'

export default function MyHeader({ title, color, leftButton, rightButton }) {
    return (
        <Header
            statusBarProps={{ barStyle: 'light-content', backgroundColor: color }}
            barStyle="light-content"
            centerComponent={{ text: title, style: { color: '#fff', fontSize: 20 } }}
            leftComponent={leftButton}
            rightComponent={rightButton}
            containerStyle={{
                backgroundColor: color
            }}
        />
    )
}

const styles = StyleSheet.create({})
