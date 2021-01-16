import React, { useRef, useState, useContext, } from 'react';
import { Text, View, SafeAreaView, TextInput } from 'react-native';

import styles from './style';
import AuthContext from '../../../Contexts/auth';
import BtnProsseguir from '../../../componentes/BtnProsseguir';
import { foneMask } from '../../../utils/validacoes';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function CadastroTelefone({ navigation }) {

    const { dispathCliente } = useContext(AuthContext);
    const [modalActive, setModalActive] = useState(false);

    const Telefone = useRef(null);

    const validacaoTelefone = (value) => {
        let telefone = value.replace(/[" "()-]/g, "");
        if (telefone.length >= 10 || telefone.length >= 11) {
            return true
        } else {
            return false
        }
    }

    const FormSchema = Yup.object().shape({
        Telefone: Yup
            .string()
            .required("Telefone é obrigatório!")
            .test('validationTelefone', 'Telefone inválido', value => value && validacaoTelefone(value)),
    })

    const setFone = (value) => {
        dispathCliente({ type: 'setTelefone', telefone: value.Telefone })
        navigation.navigate('CadastroSenha')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Formik
                initialValues={{
                    Telefone: '',
                }}
                onSubmit={values => {
                    setFone(values);
                }}
                validationSchema={FormSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, }) => (
                    <View style={{ flex: 1 }} >
                        <View style={styles.box1}>
                            <Text style={styles.textInfo}>Informe seu Telefone</Text>
                            <Text style={styles.text}>Informe os dados para validar seu acesso !</Text>
                            <TextInput
                                ref={Telefone}
                                textContentType={'telephoneNumber'}
                                keyboardType={'phone-pad'}
                                style={styles.input}
                                onChangeText={handleChange('Telefone')}
                                onBlur={handleBlur('Telefone')}
                                value={foneMask(values.Telefone)}
                                placeholder={'(00)00000-0000'}
                            />
                            {(touched.Telefone && errors.Telefone) && <Text style={styles.Error}>{errors.Telefone}</Text>}
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
