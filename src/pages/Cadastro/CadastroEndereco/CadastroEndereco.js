import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

import styles from './style';
import AuthContext from '../../../Contexts/auth';
import MybackButton from '../../../componentes/MybackButton';
import BtnProsseguir from '../../../componentes/BtnProsseguir';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function CadastroEndereco() {

    const ConfSenha = useRef(null);
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [endereco, setEndereco] = useState({
        numero: "",
        rua: "",
        cidade: "",
        bairro: "",
        estado: "",
        cep: 0,
        complemento: "",
    });

    const localizacao = async () => {
        Geolocation.getCurrentPosition(
            (pos) => {
                setLatitude(pos.coords.latitude);
                setLongitude(pos.coords.longitude);
                console.log(pos.coords.latitude)
                console.log(pos.coords.longitude)
            },
            (erro) => {
                console.log('erro', erro.message)
            },
            {
                enableHighAccuracy: true, timeout: 120000, maximumAge: 1000
            }
        )
    }

    const localizacaoPersonalizada = () => {

        if (latitude && longitude) {
            Geocoder.init('AIzaSyCUfziSFI6i_XsXLzWm5NNC1J0ZRI7RYks', { language: "pt" });

            // Search by address
            Geocoder.from(latitude, longitude)
                .then(json => {
                    const { address_components, formatted_address } = json.results[0];
                    if (address_components.length === 7) {
                        setEndereco({
                            ...endereco,
                            numero: address_components[0].long_name,
                            rua: address_components[1].long_name,
                            bairro: address_components[2].long_name,
                            cidade: address_components[3].long_name,
                            estado: address_components[4].short_name,
                            cep: address_components[6].long_name,
                        });
                    }
                    if (address_components.length === 5) {
                        const rua = formatted_address.split(',')
                        setEndereco({
                            ...endereco,
                            rua: rua[0],
                            cidade: address_components[0].long_name,
                            bairro: address_components[1].long_name,
                            estado: address_components[2].short_name,
                            cep: address_components[4].long_name,
                        });
                    }

                    console.log(endereco);
                })
                .catch(
                    error => console.warn(error)
                );
        }
    }

    useEffect(() => {
        localizacao();
    }, [])

    useEffect(() => {
        localizacaoPersonalizada();
    }, [latitude, longitude])

    /* const FormSchema = Yup.object().shape({
        ConfSenha: Yup
        .string()
        .required("A confirmação da senha é obrigatório!")
        .min(8, ({ min }) => `A senha deve ter pelo menos ${min} caracteres`)
    })

    const setSenha = (value) => {
        dispathCliente({ type: 'setConfSenha', senha: value.ConfSenha })
        navigation.navigate('CadastroConfEmail')
    } */

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 0.5,justifyContent: 'center' }}>
                <MybackButton onPress={() => console.log('teste')} color={'#B32728'} />
            </View>
            <View>
                <Text>{endereco.rua} - {endereco.bairro} - {endereco.cidade} - {endereco.estado}</Text>
            </View>
            <Formik
                initialValues={{
                    ConfSenha: '',
                }}
                onSubmit={values => {
                    localizacaoPersonalizada();
                    //setConfSenha(values);
                }}
            /* validationSchema={FormSchema} */
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, }) => (
                    <View style={{ flex: 1 }} >
                        <View style={styles.box1}>
                            <Text style={styles.textInfo}>Cadastre seu endereço para entrega!</Text>
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
