import React, { useRef, useState, useContext, } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

import styles from './style';
import AuthContext from '../../../Contexts/auth';
import MybackButton from '../../../componentes/MybackButton';
import BtnProsseguir from '../../../componentes/BtnProsseguir';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function CadastroSenha({ navigation }) {

    const { dispathCliente } = useContext(AuthContext);
    const [modalActive, setModalActive] = useState(false);

    const Senha = useRef(null);

    const FormSchema = Yup.object().shape({
        Senha: Yup
        .string()
        .required("Senha é obrigatório!")
        .min(8, ({ min }) => `A senha deve ter pelo menos ${min} caracteres`)
    })

    const setSenha = (value) => {
        dispathCliente({ type: 'setSenha', senha: value.Senha })
        navigation.navigate('CadastroConfSenha')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 50 }}>
                <MybackButton onPress={() => console.log('teste')} color={'#B32728'} />
            </View>
            <Formik
                initialValues={{
                    Senha: '',
                }}
                onSubmit={values => {
                    setSenha(values);
                }}
                validationSchema={FormSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, }) => (
                    <View style={{ flex: 1 }} >
                        <View style={styles.box1}>
                            <Text style={styles.textInfo}>Cadastre sua Senha</Text>
                            <Text style={styles.text}>Informe os dados para validar seu acesso !</Text>
                            <TextInput
                                ref={Senha}
                                textContentType={'password'}
                                style={styles.input}
                                onChangeText={handleChange('Senha')}
                                onBlur={handleBlur('Senha')}
                                value={values.Senha}
                            />
                            {(touched.Senha && errors.Senha) && <Text style={styles.Error}>{errors.Senha}</Text>}
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
