import React, { useRef, useState, useContext, } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

import styles from './style';
import AuthContext from '../../../Contexts/auth';
import MybackButton from '../../../componentes/MybackButton';
import BtnProsseguir from '../../../componentes/BtnProsseguir';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function CadastroNome({ navigation }) {

    const { dispatchAuth } = useContext(AuthContext);
    const [modalActive, setModalActive] = useState(false);

    const Nome = useRef(null);

    const FormSchema = Yup.object().shape({
        Nome: Yup
            .string()
            .required('Nome é obrigatório!')
            .matches(/(\w.+\s).+/, 'Insira seu nome e sobrenome'),
    })

    const setNome = (value) => {
        //dispatchAuth({ type: 'setNome', nome_Client: value.Nome })
        navigation.navigate('CadastroEmail')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 50 }}>
                <MybackButton onPress={() => console.log('teste')} color={'#B32728'} />
            </View>
            <Formik
                initialValues={{
                    Nome: '',
                }}
                onSubmit={values => {
                    setNome(values);
                }}
                validationSchema={FormSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, }) => (
                    <View style={{ flex: 1 }} >
                        <View style={styles.box1}>
                            <Text style={styles.textInfo}>Informe seu Nome</Text>
                            <Text style={styles.text}>Informe os dados para validar seu acesso !</Text>
                            <TextInput
                                ref={Nome}
                                style={styles.input}
                                onChangeText={handleChange('Nome')}
                                onBlur={handleBlur('Nome')}
                                value={values.Nome}
                            />
                            {(touched.Nome && errors.Nome) && <Text style={styles.Error}>{errors.Nome}</Text>}
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

