import React, { useRef, useState, useContext, } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

import styles from './style';
import AuthContext from '../../../Contexts/auth';
import MybackButton from '../../../componentes/MybackButton';
import BtnProsseguir from '../../../componentes/BtnProsseguir';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function CadastroConfSenha({ navigation }) {

    const { stateCliente } = useContext(AuthContext);
    const [modalActive, setModalActive] = useState(false);

    const ConfSenha = useRef(null);

    const FormSchema = Yup.object().shape({
        ConfSenha: Yup
        .string()
        .required("A confirmação da senha é obrigatório!")
        .min(8, ({ min }) => `A senha deve ter pelo menos ${min} caracteres`)
        .oneOf([stateCliente.senha], 'As senhas digitadas são diferentes')
    })

    const setConfSenha = (value) => {
        navigation.navigate('CadastroEndereco')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 50 }}>
                <MybackButton onPress={() => console.log('teste')} color={'#B32728'} />
            </View>
            <Formik
                initialValues={{
                    ConfSenha: '',
                }}
                onSubmit={values => {
                    setConfSenha(values);
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
                            />
                            {(touched.ConfSenha && errors.ConfSenha) && <Text style={styles.Error}>{errors.ConfSenha}</Text>}
                        </View>
                        <View style={styles.box2}>
                            <BtnProsseguir
                                onPress={() => handleSubmit()}
                            />
                        </View>
                        <View style={styles.box3}>
                            {/* <Loading activeModal={modalActive} /> */}
                        </View>
                    </View>
                )}
            </Formik>
        </SafeAreaView >
    )
}
