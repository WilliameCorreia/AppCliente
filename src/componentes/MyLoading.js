import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function MyLoading() {
    return (
        <View style={styles.container}>
            <Image source={require('../Assets/images/Pulse-1s-200px.gif')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
