import React, { useRef, useState, useContext, } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

import styles from './style';
import AuthContext from '../../../Contexts/auth';
import MybackButton from '../../../componentes/MybackButton';
import BtnProsseguir from '../../../componentes/BtnProsseguir';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function CadastroConfEmail({ navigation }) {

    const { dispatchAuth } = useContext(AuthContext);
    const [modalActive, setModalActive] = useState(false);

    const ConfEmail = useRef(null);

    const FormSchema = Yup.object().shape({
        ConfEmail: Yup
            .string()
            .required('Email é obrigatório!')
            .email('Por favor digite um Email válido!')
            .oneOf([stateCliente.usertasy.DS_EMAIL], 'Os email-s digitados são diferentes')
    })

    const setConfEmail = (value) => {
        //dispatchAuth({ type: 'setNome', email: value.email })
        navigation.navigate('consultarNascimento')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 50 }}>
                <MybackButton onPress={() => console.log('teste')} color={'#B32728'} />
            </View>
            <Formik
                initialValues={{
                    ConfEmail: '',
                }}
                onSubmit={values => {
                    setConfEmail(values);
                }}
                validationSchema={FormSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, }) => (
                    <View style={{ flex: 1 }} >
                        <View style={styles.box1}>
                            <Text style={styles.textInfo}>Confirme seu E-mail</Text>
                            <Text style={styles.text}>Informe os dados para validar seu acesso !</Text>
                            <TextInput
                                ref={ConfEmail}
                                textContentType={'emailAddress'}
                                style={styles.input}
                                onChangeText={handleChange('ConfEmail')}
                                onBlur={handleBlur('ConfEmail')}
                                value={values.ConfEmail}
                            />
                            {(touched.ConfEmail && errors.ConfEmail) && <Text style={styles.Error}>{errors.EmConfEmailail}</Text>}
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
