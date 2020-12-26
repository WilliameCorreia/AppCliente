import React, { useRef, useState, useContext, } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

import styles from './style';
import AuthContext from '../../../Contexts/auth';
import MybackButton from '../../../componentes/MybackButton';
import BtnProsseguir from '../../../componentes/BtnProsseguir';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function CadastroEmail({ navigation }) {

    const { dispatchAuth } = useContext(AuthContext);
    const [modalActive, setModalActive] = useState(false);

    const Email = useRef(null);

    const FormSchema = Yup.object().shape({
        Email: Yup
            .string()
            .required('Email é obrigatório!')
            .email('Por favor digite um Email válido!')
    })

    const setEmail = (value) => {
        //dispatchAuth({ type: 'setNome', email: value.email })
        navigation.navigate('CadastroConfEmail')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 50 }}>
                <MybackButton onPress={() => console.log('teste')} color={'#B32728'} />
            </View>
            <Formik
                initialValues={{
                    Email: '',
                }}
                onSubmit={values => {
                    setEmail(values);
                }}
                validationSchema={FormSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, }) => (
                    <View style={{ flex: 1 }} >
                        <View style={styles.box1}>
                            <Text style={styles.textInfo}>Informe seu E-mail</Text>
                            <Text style={styles.text}>Informe os dados para validar seu acesso !</Text>
                            <TextInput
                                ref={Email}
                                textContentType={'emailAddress'}
                                style={styles.input}
                                onChangeText={handleChange('Email')}
                                onBlur={handleBlur('Email')}
                                value={values.Email}
                            />
                            {(touched.Email && errors.Email) && <Text style={styles.Error}>{errors.Email}</Text>}
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
