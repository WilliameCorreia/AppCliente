import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function PedidoEfetuado() {
    return (
        <View style={styles.container}>
            <View>
            <Image source={require('../../Assets/pagamento.png')} style={styles.imagem} />

            </View>
            <Text style={styles.texto}>PEDIDO EFETUADO COM SUCESSO</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'

    },

    texto: {
    fontSize: 22,
    color: '#838383',
    
    },

    imagem: {
    width: 80,
    height: 80,
    marginBottom: 15
    }
});
