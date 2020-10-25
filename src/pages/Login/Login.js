import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
    ActivityIndicator,
    StatusBar,
    KeyboardAvoidingView
} from 'react-native';

import { Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import MyModal from '../../componentes/MyModal';

import styles from './style';

export default function login({ navigation }) {

    const [loading, setloading] = useState(false);
    const [usuario, setUsuario] = useState();
    const [password, setPassword] = useState();
    const [modalActive, setModalActive] = useState(false);
    const [msnModal, setMsnModal] = useState('primeira passada');

    autenticar = () => {
        setloading(true)
        if (usuario && password) {
            auth()
                .signInWithEmailAndPassword(usuario, password)
                .then(({ user }) => {
                    console.log('autenticado')
                    console.log(user);
                    setloading(false)
                })
                .catch(error => {
                    switch (error.code) {
                        case 'auth/invalid-email':
                            setMsnModal('Formato Inválido de E-mail')
                            setModalActive(true)
                            break;
                        case 'auth/operation-not-allowed':
                            setMsnModal('Sua conta não foi ativada, Verifique seu Email!')
                            setModalActive(true)
                            break;
                        case 'auth/weak-password':
                            setMsnModal('Sua senha precisa ter pelo menos 8 caracteres')
                            setModalActive(true)
                            break;
                        case 'auth/user-not-found':
                            setMsnModal('Usuário não encontrado !')
                            setModalActive(true)
                            break;
                        case 'auth/wrong-password':
                            setMsnModal('Senha Inválida !')
                            setModalActive(true)
                            break;
                        default:
                            setMsnModal(error.code)
                            setModalActive(true)
                            break;
                    }
                    setloading(false)
                });
        } else {
            setMsnModal('Informe Usuario/Senha valídos')
            setModalActive(true)
            setloading(false)
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={40} behavior={"position"}>
            <View style={styles.box1}>
                <Image source={require('../../Assets/images/logoInicio1.png')} style={styles.image_logo} />
            </View>
            {loading ? <ActivityIndicator size={"large"} color={'#ffff'}></ActivityIndicator> : <Text></Text>}
            <View style={styles.box2}>
                <View style={styles.SectionStyle}>
                    <Image style={styles.icon} source={require('../../Assets/images/user.png')} />
                    <TextInput
                        returnKeyType={'next'}
                        autoCapitalize={'none'}
                        dataDetectorTypes={'address'}
                        style={styles.input}
                        placeholder={'USUÁRIO'}
                        placeholderTextColor={'#ffff'}
                        onChangeText={texto => setUsuario(texto)}
                    />
                </View>
                <View style={styles.SectionStyle}>
                    <Image style={styles.icon2} source={require('../../Assets/images/padlock.png')} />
                    <TextInput
                        returnKeyType={'next'}
                        autoCapitalize={'none'}
                        style={styles.input}
                        placeholder={'********'}
                        placeholderTextColor={'#ffff'}
                        secureTextEntry
                        onChangeText={texto => setPassword(texto)}
                    />
                    <TextInput />
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => autenticar()}>
                    <Text style={styles.text}>Entrar</Text>
                </TouchableOpacity>
                <StatusBar backgroundColor={'#FF7223'} barStyle='dark-content' />
                <TouchableOpacity onPress={() => { navigation.navigate('Cadastro') }} style={styles.textBtn}>
                    <Text style={styles.text2}>Ainda não possui conta ?</Text>
                    <Text style={styles.text2}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box3}>
                <MyModal activeModal={modalActive} mensagem={msnModal} mudarEstado={setModalActive} />
            </View>

        </KeyboardAvoidingView>
    )
}