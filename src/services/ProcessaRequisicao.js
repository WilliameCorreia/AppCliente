import React from 'react'
import { ActivityIndicator, View, Dimensions } from 'react-native'

export default function ProcessaRequisicao() {
    return (
        <View>
            <ActivityIndicator style={{width: (Dimensions.get('window').width ), height: "100%", backgroundColor: '#fff' }} color={'red'} size={80} />
        </View>
    )
}
