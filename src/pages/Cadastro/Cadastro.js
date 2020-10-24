import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    KeyboardAvoidingView
} from 'react-native';

import styles from './style';
import MyModal from '../../componentes/MyModal';
import auth from '@react-native-firebase/auth';

export default function Cadastro({ navigation }) {

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [confPassword, setConfPassword] = useState();
    const [loading, setloading] = useState(false);

    const [modalActive, setModalActive] = useState(false);
    const [msnModal, setMsnModal] = useState('primeira passada');

    const cadastrar = () => {
        setloading(true)
        if (!login || !password) {
            setMsnModal('Informe Usuario/Senha valídos')
            setModalActive(true)
            setloading(false)
        } if (password != confPassword) {
            setMsnModal('As senhas digitadas estão diferentes')
            setModalActive(true)
            setloading(false)
        }
        if (login && password && password == confPassword) {
            auth()
                .createUserWithEmailAndPassword(login, password)
                .then(() => {
                    setMsnModal('Conta Criada com Sucesso!')
                    setModalActive(true)
                    setloading(false)
                }).catch(error => {
                    switch (error.code) {
                        case 'auth/email-already-in-use':
                            setMsnModal('Email Já Está em Uso!')
                            setModalActive(true)
                            break;
                        case 'auth/invalid-email':
                            setMsnModal('Formato Inválido de E-mail')
                            setModalActive(true)
                            break;
                        case 'auth/weak-password':
                            setMsnModal('Sua senha precisa ter pelo menos 8 caracteres')
                            setModalActive(true)
                            break;
                        default:
                            setMsnModal(error.code)
                            setModalActive(true)
                            break;
                    }
                    setModalActive(true)
                    setloading(false)
                });
        }
    }

    return (
        <KeyboardAvoidingView
            contentContainerStyle={styles.teste}
            style={styles.container}
            behavior={'position'} >
            <View style={styles.box1}>
                <Image source={require('../../Assets/images/person.png')} style={styles.image_person} />
            </View>
            <View style={styles.box2}>
                {loading ? <ActivityIndicator size={"large"} color={'#ffff'}></ActivityIndicator> : <Text></Text>}
                <TextInput
                    returnKeyType={'next'}
                    autoCapitalize={'none'}
                    style={styles.input}
                    placeholder={'E-mail'}
                    placeholderTextColor={'#ffff'}
                    onChangeText={text => setLogin(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder={'Senha'}
                    placeholderTextColor={'#ffff'}
                    secureTextEntry
                    onChangeText={text => setPassword(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder={'Confirmar Senha'}
                    placeholderTextColor={'#ffff'}
                    secureTextEntry
                    onChangeText={text => setConfPassword(text)}
                />
                <TouchableOpacity onPress={cadastrar}>
                    <Image style={styles.btn} source={require('../../Assets/images/next.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.box3}>
                <MyModal activeModal={modalActive} mensagem={msnModal} mudarEstado={setModalActive} navigation />
            </View>
        </KeyboardAvoidingView>
    )
}