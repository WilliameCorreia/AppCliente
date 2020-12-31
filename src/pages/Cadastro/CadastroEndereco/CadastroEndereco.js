import React, { useRef, useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

import styles from './style';
import AuthContext from '../../../Contexts/auth';
import MybackButton from '../../../componentes/MybackButton';
import BtnProsseguir from '../../../componentes/BtnProsseguir';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Myloading from '../../../componentes/MyLoading';

export default function CadastroEndereco({ navigation }) {

    const { dispathCliente, cadastroEndereco } = useContext(AuthContext);

    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [endereco, setEndereco] = useState();

    const Rua = useRef(null);
    const Numero = useRef(null);
    const Bairro = useRef(null);
    const Cidade = useRef(null);
    const Telefone = useRef(null);
    const Complemento = useRef(null);

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
                            rua: rua[0],
                            cidade: address_components[0].long_name,
                            bairro: address_components[1].long_name,
                            estado: address_components[2].short_name,
                            cep: address_components[4].long_name,
                            numero: '',
                        });
                    }
                    console.log(json.results[0]);
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

    const FormSchema = Yup.object().shape({
        Rua: Yup
            .string()
            .required("A Rua é obrigatório!"),
        Bairro: Yup
            .string()
            .required("O Bairro é obrigatório!"),
        Numero: Yup
            .string(),
        Cidade: Yup
            .string()
            .required("A Cidade é obrigatório!"),
        Telefone: Yup
            .string()
            .required("Telefone é obrigatório!"),
    })

    const cadastrarUsuario = async (values) => {
        
        const result = await cadastroEndereco(values);
        
        navigation.navigate('RouteButton')
    }

    return (
        <SafeAreaView style={styles.container}>
            {
                endereco ?
                <Formik
                    initialValues={{
                        Rua: endereco.rua,
                        Bairro: endereco.bairro,
                        Numero: endereco.numero.toString(),
                        Cidade: endereco.cidade,
                        Estado: endereco.estado,
                        Cep: endereco.cep,
                        Complemento: '',
                        Telefone: '',
                        Longitude: longitude,
                        Latitude: latitude,
                    }}
                    onSubmit={values => {
                        dispathCliente({ type: 'setEndereco', enderecos: values })
                        cadastrarUsuario(values);
                    }}
                    validationSchema={FormSchema}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, }) => (
                        <View style={{ flex: 1, margin: 10 }} >
                            <View style={styles.box1}>
                                <View style={styles.box1Item1}>
                                    <Text style={styles.textInfo}>Cadastre seu endereço para entrega!</Text>
                                    <Text style={styles.text}>Informe os dados para validar seu acesso !</Text>
                                </View>
                                <View style={styles.box1Item2}>
                                    <View style={{ flex: 3 }}>
                                        <Text style={styles.InputLabel}>Rua</Text>
                                        <TextInput
                                            ref={Rua}
                                            keyboardType={'default'}
                                            returnKeyType={'next'}
                                            style={styles.input}
                                            onChangeText={handleChange('Rua')}
                                            onBlur={handleBlur('Rua')}
                                            value={values.Rua}
                                            maxLength={30}
                                        />
                                        {(touched.Rua && errors.Rua) && <Text style={styles.Error}>{errors.Rua}</Text>}
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.InputLabel}>Numero</Text>
                                        <TextInput
                                            ref={Numero}
                                            keyboardType={'numeric'}
                                            returnKeyType={'next'}
                                            style={styles.input}
                                            onChangeText={handleChange('Numero')}
                                            onBlur={handleBlur('Numero')}
                                            value={values.Numero}
                                            maxLength={10}
                                        />
                                        {(touched.Numero && errors.Numero) && <Text style={styles.Error}>{errors.Numero}</Text>}
                                    </View>
                                </View>
                                <View style={styles.box1Item2}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.InputLabel}>Bairro</Text>
                                        <TextInput
                                            ref={Bairro}
                                            keyboardType={'default'}
                                            returnKeyType={'next'}
                                            style={styles.input}
                                            onChangeText={handleChange('Bairro')}
                                            onBlur={handleBlur('Bairro')}
                                            value={values.Bairro}
                                        />
                                        {(touched.Bairro && errors.Bairro) && <Text style={styles.Error}>{errors.Bairro}</Text>}
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.InputLabel}>Cidade</Text>
                                        <TextInput
                                            ref={Cidade}
                                            keyboardType={'default'}
                                            returnKeyType={'next'}
                                            style={styles.input}
                                            onChangeText={handleChange('Cidade')}
                                            onBlur={handleBlur('Cidade')}
                                            value={values.Cidade}
                                        />
                                        {(touched.Cidade && errors.Cidade) && <Text style={styles.Error}>{errors.Cidade}</Text>}
                                    </View>
                                </View>
                                <View style={styles.box1Item2}>
                                    <View style={{ flex: 1.5 }}>
                                        <Text style={styles.InputLabel}>Complemento</Text>
                                        <TextInput
                                            ref={Complemento}
                                            keyboardType={'default'}
                                            returnKeyType={'next'}
                                            style={styles.input}
                                            onChangeText={handleChange('Complemento')}
                                            onBlur={handleBlur('Complemento')}
                                            value={values.Complemento}
                                        />
                                        {(touched.Complemento && errors.Complemento) && <Text style={styles.Error}>{errors.Complemento}</Text>}
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.InputLabel}>Telefone</Text>
                                        <TextInput
                                            ref={Telefone}
                                            keyboardType={'numeric'}
                                            style={styles.input}
                                            onChangeText={handleChange('Telefone')}
                                            onBlur={handleBlur('Telefone')}
                                            value={values.Cep}
                                            maxLength={14}
                                        />
                                        {(touched.Telefone && errors.Telefone) && <Text style={styles.Error}>{errors.Telefone}</Text>}
                                    </View>
                                </View>
                            </View>
                            <View style={styles.box2}>
                                <BtnProsseguir
                                    onPress={() => handleSubmit()}
                                    text={'Cadastrar'}
                                />
                            </View>
                            <View style={styles.box3}>
                                {/* <Loading activeModal={modalActive} /> */}
                            </View>
                        </View>
                    )}
                </Formik>
                :
                <Myloading/>
            }
        </SafeAreaView >
    )
}
