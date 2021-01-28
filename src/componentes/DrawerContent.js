import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

import auth from '@react-native-firebase/auth';
import AuthContext from '../Contexts/auth';
import { boolean } from 'yup';

export default function DrawerContent({ navigation }) {

    const { stateCliente } = useContext(AuthContext);
    const { User } = stateCliente;

    const logout = () => {
        Alert.alert('Mensagem', 'Deseja Realmente sair?', [
            {
                text: "Cancelar",
                onPress: () => console.log("OK Pressed"),
                style: "cancel"
            },
            {
                text: "OK",
                onPress: () => auth().signOut().then(() => {
                    // navigation.navigate('Login');
                }).catch(error => {
                    Alert.alert('Erro', toString(error.code))
                })
            },
        ],
            { cancelable: true }
        )
    }

    return (
        <View>
            <View style={styles.box1}>
                <Image style={styles.imgHeader} source={require('../Assets/images/user.png')} />
                <Text style={styles.textNome}>{User.cod_Client ? User.nome_Client : "Você ainda não está logado!"}</Text>
                <Text style={styles.textSublinhado}>___________</Text>
            </View>
            {User.cod_Client ?
                <View style={styles.box2}>
                    <TouchableOpacity style={styles.box2_1} onPress={() => navigation.navigate('MeusPedidos')}>
                        <Image style={styles.imgItem} source={require('../Assets/images/pedidos.png')} />
                        <Text style={styles.textItem}>Pedidos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box2_2} onPress={() => navigation.navigate('CadastroEndereco')}>
                        <Image style={styles.imgItem} source={require('../Assets/images/pedidos.png')} />
                        <Text style={styles.textItem}>Suporte</Text>
                    </TouchableOpacity>
                </View> : null
            }
            <View style={styles.box3}>
                {User.cod_Client ?
                    <TouchableOpacity style={styles.box3_1} onPress={() => logout()}>
                        <Image style={styles.imgSair} source={require('../Assets/images/sair.png')} />
                        <Text style={styles.textItem}>Sair</Text>
                    </TouchableOpacity> :
                    <View>
                        <Text style={{ fontSize: 22, marginVertical: 5, color: '#fff', textAlign:"center" }}>Falta pouco!</Text>
                        <Text style={{ fontSize: 12, color: '#fff', textAlign:"center" }}>Para concluir seus pedidos, precisamos que você se identifique. Como quer continuar ?</Text>
                        <TouchableOpacity style={{ backgroundColor: '#fff', padding: 5, bordeRadius: 30, marginVertical: 25, marginLeft: "20%", width: "60%" }} onPress={() => navigation.navigate('Login')}>
                            <Text style={{ color: '#b32728', fontWeight: 'bold', textAlign: "center" }}>Entrar ou Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box1: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box2: {
        width: '100%',
        height: '25%',
    },
    box3: {
        width: '100%',
        height: '25%',
        justifyContent: 'flex-end',
    },
    imgHeader: {
        backgroundColor: '#fff',
        tintColor: '#e6e7e8',
        borderRadius: 80,
        width: 120,
        height: 120,
        margin: 10
    },
    textNome: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 20
    },
    textSublinhado: {
        color: '#fff',
        fontSize: 25,
        marginTop: -15
    },
    imgItem: {
        width: 60,
        height: 60
    },
    box2_1: {
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 20,
        alignItems: 'center'
    },
    box2_2: {
        marginHorizontal: 20,
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center'
    },
    textItem: {
        marginHorizontal: 10,
        fontSize: 20,
        color: '#fff'
    },
    imgSair: {
        width: 40,
        height: 40
    },
    box3_1: {
        marginHorizontal: 20,
        flexDirection: 'row',
        margin: 20,
        alignItems: 'center'
    }
})
