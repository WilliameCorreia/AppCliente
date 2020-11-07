import React, { useState, useRef, useContext } from 'react';
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

import AuthContext from '../../Contexts/auth';

import styles from './style';
import MyModal from '../../componentes/MyModal';
import auth from '@react-native-firebase/auth';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Api from '../../services/Api';

export default function Cadastro({ navigation }) {

    //const [login, setLogin] = useState();
    //const [password, setPassword] = useState();
    //const [confPassword, setConfPassword] = useState();
    const { token } = useContext(AuthContext);
    const [loading, setloading] = useState(false);

    const [modalActive, setModalActive] = useState(false);
    const [msnModal, setMsnModal] = useState('primeira passada');

    const user = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const confPassword = useRef(null);

    const cadastrarUser = (values, _token) => {
        Api.post('v1/Clientes',{
            nome_Client: values.user,
            data_Nascimento: "2020-11-07T18:02:24.286Z",
            email: values.email,
            token_Login: _token
        },{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response =>{
            console.log(response);
        }).catch(error =>{
            console.log(error);
        });
    }

    const cadastrar = (values) => {
        setloading(true)
        if (values.password != values.confPassword) {
            setMsnModal('As senhas digitadas estão diferentes')
            setModalActive(true)
            setloading(false)
        }
        if (values.user && values.password && values.password == values.confPassword) {
            auth()
                .createUserWithEmailAndPassword(values.email, values.password)
                .then(response => {
                    const { uid } = response.user;
                    cadastrarUser(values, uid)
                    setMsnModal('Conta Criada com Sucesso!')
                    setModalActive(true)
                    setloading(false)
                    navigation.goBack();
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

    const FormSchema = Yup.object().shape({
        user: Yup.string().required('Usuário é obrigatório'),
        email: Yup.string().required('Email é obrigatório'),
        password: Yup.string().required('Senha é obrigatório'),
        confPassword: Yup.string().required('Confirmar senha é obrigatório'),
    })

    return (
        <KeyboardAvoidingView
            contentContainerStyle={styles.teste}
            style={styles.container}
            behavior={'position'} >
            <View style={styles.box1}>
                <Image source={require('../../Assets/images/person.png')} style={styles.image_person} />
            </View>
            {loading ? <ActivityIndicator size={"large"} color={'#ffff'}></ActivityIndicator> : <Text></Text>}
            <Formik
                initialValues={{
                    user: '',
                    email: '',
                    password: '',
                    confPassword: '',
                }}
                onSubmit={values => {
                    console.log(values);
                    cadastrar(values);
                }}
                validationSchema={FormSchema}
            >
                {({ values, handleChange, handleSubmit, errors }) => (
                    <View style={styles.box2}>
                        <TextInput
                            returnKeyType={'next'}
                            autoCapitalize={'none'}
                            style={styles.input}
                            placeholder={'Nome'}
                            placeholderTextColor={'#ffff'}
                            ref={user}
                            value={values.user}
                            onChangeText={handleChange('user')}
                        />
                        {errors.user && <Text>{errors.user}</Text>}
                        <TextInput
                            returnKeyType={'next'}
                            autoCapitalize={'none'}
                            style={styles.input}
                            placeholder={'E-mail'}
                            placeholderTextColor={'#ffff'}
                            ref={email}
                            value={values.email}
                            onChangeText={handleChange('email')}
                        />
                        {errors.email && <Text>{errors.email}</Text>}
                        <TextInput
                            style={styles.input}
                            placeholder={'Senha'}
                            placeholderTextColor={'#ffff'}
                            secureTextEntry
                            ref={password}
                            value={values.password}
                            onChangeText={handleChange('password')}
                        />
                        {errors.password && <Text>{errors.password}</Text>}
                        <TextInput
                            style={styles.input}
                            placeholder={'Confirmar Senha'}
                            placeholderTextColor={'#ffff'}
                            secureTextEntry
                            ref={confPassword}
                            value={values.confPassword}
                            onChangeText={handleChange('confPassword')}
                        />
                        {errors.confPassword && <Text>{errors.confPassword}</Text>}
                        <TouchableOpacity onPress={handleSubmit}>
                            <Image style={styles.btn} source={require('../../Assets/images/next.png')} />
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
            <View style={styles.box3}>
                <MyModal activeModal={modalActive} mensagem={msnModal} mudarEstado={setModalActive} navigation />
            </View>
        </KeyboardAvoidingView>
    )
}