import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'

export default function Pagamento() {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../../Assets/pin.png')} style={styles.imagem} />

            </View>

            <Text style={styles.texto}>PAULO ARTUR</Text>
            <Text style={styles.textoSecundario1}>RUA OURO PRETO</Text>
            <Text style={styles.textoSecundario2}>15 A, COQUEIRAL</Text>
            <Text style={styles.textoSecundario3}>MARACANAÚ - CE</Text>
            <Text style={styles.textoBotao}>ALTERAR</Text>

            <View style={{ margin: 100 }}>
                <Button
                    title='Finalizar'
                    onPress={() => this.props.navigation.navigate('')} />
            </View>

            <Text style={styles.textoTotal}>R$ 24,90</Text>



        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#fff'

    },

    imagem: {
        marginTop: 20,
        marginLeft: 20,
    },

    texto: {
        marginTop: -32,
        fontSize: 24,
        marginLeft: 55,

    },

    textoSecundario1: {
        flexDirection: 'column',
        fontSize: 22,
        marginLeft: 55,

    },

    textoSecundario2: {
        fontSize: 22,
        marginLeft: 55,

    },

    textoSecundario3: {
        fontSize: 22,
        marginLeft: 55,

    },
    textoBotao: {
        alignItems: 'flex-end',
        fontSize: 15,
        marginLeft: 300,
        marginTop: -80,
        color: '#838383',
    },

    textoTotal: {
        fontSize: 30,
        marginLeft: 30,
        margin: 100,
    },
});