import React, { useRef, useContext, useState } from 'react'
import { Image, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'

import Styles from './style'
import { Formik } from 'formik';
import * as Yup from 'yup';
import AuthContext from '../../Contexts/auth';

export default function PerfilUsuario({ route }) {

    const { stateCliente } = useContext(AuthContext);
    const { User } = stateCliente;

    console.log(stateCliente);

    const Nome = useRef(null);
    const Email = useRef(null);
    const Telefone = useRef(null);
    const Endereco = useRef(null);
    const Numero = useRef(null);
    const Cep = useRef(null);

    const validacaoTelefone = (value) => {
        let telefone = value.replace(/[" "()-]/g, "");
        if (telefone.length >= 10 || telefone.length >= 11) {
            return true
        } else {
            return false
        }
    }

    const FormSchema = Yup.object().shape({
        Nome: Yup
            .string()
            .required("Nome é obrigatório!")
            .matches(/(\w.+\s).+/, 'Insira seu nome e sobrenome'),
        Email: Yup
            .string()
            .email("Por favor digite um Email válido!")
            .required("Email é obrigatório!"),
        Telefone: Yup
            .string()
            .required("Telefone é obrigatório!")
            .test('validationTelefone', 'Telefone inválido', value => value && validacaoTelefone(value)),
        Endereco: Yup
            .string()
            .required("Endereço é obrigatório!"),
        Numero: Yup
            .string()
            .required("Número é obrigatório!"),
        Cep: Yup
            .string()
            .required("Cep é obrigatório!")
    });

    return (
        <Formik
            initialValues={{
                email: User.email,
                enderecos: User.enderecos[0].rua,
                nome_Client: User.nome_Client,
                telefone: User.telefone,
            }}
            onSubmit={values => {
                console.log(values);
            }}
            validationSchema={FormSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
                <View style={Styles.container}>
                    <View style={Styles.box1}>
                        <Image style={Styles.img} source={require("../../Assets/images/user.png")} />
                        <Text style={Styles.Text}>{values.nome_Client}</Text>
                        <Text style={Styles.linha} />
                    </View>
                    < ScrollView style={Styles.box2}>
                        <View style={Styles.item}>
                            <TextInput
                                ref={Nome}
                                placeholder='Nome'
                                style={Styles.itemInput}
                                onChangeText={handleChange('Nome')}
                                onBlur={handleBlur('Nome')}
                                value={values.nome_Client}
                                placeholderTextColor="#B32728"
                            />
                            {(touched.Nome && errors.Nome) && <Text style={Styles.textError}>{errors.Nome}</Text>}
                        </View>
                        <View style={Styles.item}>
                            <TextInput
                                ref={Email}
                                placeholder='Email'
                                style={Styles.itemInput}
                                onChangeText={handleChange('Email')}
                                onBlur={handleBlur('Email')}
                                value={values.email}
                                placeholderTextColor="#B32728"
                            />
                            {(touched.Email && errors.Email) && <Text style={Styles.textError}>{errors.Email}</Text>}
                        </View>
                        <View style={Styles.item}>
                            <TextInput
                                ref={Telefone}
                                placeholder='Telefone'
                                style={Styles.itemInput}
                                onChangeText={handleChange('Telefone')}
                                onBlur={handleBlur('Telefone')}
                                value={values.telefone}
                                placeholderTextColor="#B32728"
                            />
                            {(touched.Telefone && errors.Telefone) && <Text style={Styles.textError}>{errors.Telefone}</Text>}
                        </View>
                        <View style={Styles.item}>
                            <TextInput
                                ref={Endereco}
                                placeholder='Endereço'
                                style={Styles.itemInput}
                                onChangeText={handleChange('Endereco')}
                                onBlur={handleBlur('Endereco')}
                                value={values.enderecos}
                                placeholderTextColor="#B32728"
                            />
                            {(touched.Endereco && errors.Endereco) && <Text style={Styles.textError}>{errors.Endereco}</Text>}
                        </View>
                        <View style={Styles.item}>
                            <TextInput
                                ref={Numero}
                                placeholder='Nº'
                                style={Styles.itemInput}
                                onChangeText={handleChange('Numero')}
                                onBlur={handleBlur('Numero')}
                                value={values.Numero}
                                placeholderTextColor="#B32728"
                            />
                            {(touched.Numero && errors.Numero) && <Text style={Styles.textError}>{errors.Numero}</Text>}
                        </View>
                        <View style={[Styles.item, Styles.LastItemInput]}>
                            <TextInput
                                ref={Cep}
                                placeholder='Cep'
                                style={Styles.itemInput}
                                onChangeText={handleChange('Cep')}
                                onBlur={handleBlur('Cep')}
                                placeholderTextColor="#B32728"
                            />
                            {(touched.Cep && errors.Cep) && <Text style={Styles.textError}>{errors.Cep}</Text>}
                        </View>
                    </ScrollView>
                    <View style={Styles.box3}>
                        <TouchableOpacity style={Styles.item8_1} >
                            <Text style={Styles.item8_1Text} >ALTERAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </Formik>
    );
}



