import React, { useRef, useState, useContext, } from 'react';
import { Text, View, SafeAreaView, TextInput } from 'react-native';

import styles from './style';
import AuthContext from '../../../Contexts/auth';
import MybackButton from '../../../componentes/MybackButton';
import BtnProsseguir from '../../../componentes/BtnProsseguir';
import { Formik } from 'formik';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth';
import Api from '../../../services/Api';
import moment from 'moment';
import EstabelecimentoContext from '../../../Contexts/Estabelecimento';
import MyModal from '../../../componentes/MyModal';

export default function CadastroConfSenha({ navigation }) {

    const { stateCliente, dispathCliente } = useContext(AuthContext);
    const [modalActive, setModalActive] = useState(false);
    const [msnModal, setMsnModal] = useState('');

    const ConfSenha = useRef(null);

    const cadastrarFireBase = async () => {
        auth()
            .createUserWithEmailAndPassword(stateCliente.email, stateCliente.senha)
            .then(response => {
                const { uid } = response.user;
                teste(uid);
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
            });
    }

    const cadastrarUser = async (_token) => {
        return Api.post('v1/Clientes', {
            nome_Client: stateCliente.nome_Client,
            data_Nascimento: moment().format(),
            email: stateCliente.email,
            telefone:  stateCliente.telefone,
            sms_Enviar: true,
            email_Enviar: true,
            token_Login: _token
        }).then(response => {
            const { result } = response.data
            return result
        }).catch(error => {
            const user = auth().currentUser
            user.delete();
            setMsnModal(error.message)
            setModalActive(true)
            console.log(error);
        });
    }

    const FormSchema = Yup.object().shape({
        ConfSenha: Yup
            .string()
            .required("A confirmação da senha é obrigatório!")
            .min(8, ({ min }) => `A senha deve ter pelo menos ${min} caracteres`)
            .oneOf([stateCliente.senha], 'As senhas digitadas são diferentes')
    })

    const teste = async (token) => {
        try {
            const usuarioApp = await cadastrarUser(token);
            console.log(usuarioApp);
            if (usuarioApp) {
                dispathCliente({ type: 'AddUser', user: { ...usuarioApp } })
                navigation.navigate('CadastroEndereco')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Formik
                initialValues={{
                    ConfSenha: '',
                }}
                onSubmit={values => {
                    cadastrarFireBase();
                }}
                validationSchema={FormSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, }) => (
                    <View style={{ flex: 1 }} >
                        <View style={styles.box1}>
                            <Text style={styles.textInfo}>Confirme sua Senha</Text>
                            <Text style={styles.text}>Informe os dados para validar seu acesso !</Text>
                            <TextInput
                                ref={ConfSenha}
                                textContentType={'password'}
                                style={styles.input}
                                onChangeText={handleChange('ConfSenha')}
                                onBlur={handleBlur('ConfSenha')}
                                value={values.ConfSenha}
                                secureTextEntry={true}
                            />
                            {(touched.ConfSenha && errors.ConfSenha) && <Text style={styles.Error}>{errors.ConfSenha}</Text>}
                        </View>
                        <View style={styles.box2}>
                            <BtnProsseguir
                                onPress={() => handleSubmit()}
                                text={'Cadastrar-se'}
                            />
                        </View>
                        <View style={styles.box3}>
                            <MyModal activeModal={modalActive} mensagem={msnModal} mudarEstado={setModalActive} />
                        </View>
                    </View>
                )}
            </Formik>
        </SafeAreaView >
    )
}
