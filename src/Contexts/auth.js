import React, { createContext, useState, useEffect, useReducer } from 'react';

import auth from '@react-native-firebase/auth';
import { credencias } from '../credenciais';
import Api from '../services/Api';
import { initialStateCliente, UserReducerCliente } from '../reducers/ClienteReducer';
import moment from 'moment';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState();
    const [stateCliente, dispathCliente] = useReducer(UserReducerCliente, initialStateCliente);

    async function GetAuth() {
        Api.post('Auth/login', credencias).then(response => {
            const { token } = response.data;
            setToken(token);
            console.log(token);
        }).catch(error => {
            console.log(error);
        })
    }

    async function GetUsuario(user) {

        const { email, uid } = user;

        Api.get(`v1/Clientes/FilterClientePorEmailTokenLogin?tokenLogin=${uid}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            const { result } = response.data;
            dispathCliente({ type: 'AddUser', user: { email: user.email, token: user.uid, ...result[0] } })
        }).catch(error => {
            console.log(error);
        })
    }

    async function signIn(user) {
        if (token) {
            if (user) {
                GetUsuario(user);
            } else {
                dispathCliente({ type: 'delUser' })
            }
        }
    }

    const cadastrarUser = async (_token) => {
        Api.post('v1/Clientes', {
            nome_Client: stateCliente.nome_Client,
            data_Nascimento: moment().format(),
            email: stateCliente.email,
            sms_Enviar: true,
            email_Enviar: true,
            token_Login: _token
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            const { result } = response.data
            const user = { email: result.email, uid: result.token_Login }
            GetUsuario(user);
            return result
        }).catch(error => {
            console.log(error);
        });
    }

    const cadastrarFireBase = async () => {
        return auth()
            .createUserWithEmailAndPassword(stateCliente.email, stateCliente.senha)
            .then(response => {
                const { uid } = response.user;
                return uid
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


    cadastroUsuario = async (values) => {
        try {
            const cdFire = await cadastrarFireBase();
            console.log(cdFire);
            const cdUser = await cadastrarUser(cdFire);
            return cdUser
        } catch (error) {
            console.log(error)
        }
    }

    cadastroEndereco = (values) => {
        Api.post('v1/Clientes', {
            numero: values.Numero,
            rua: values.Rua,
            cidade: values.Cidade,
            bairro: values.Bairro,
            estado: values.Estado,
            cep: values.Cep,
            complemento: values.Complemento,
            clienteId: stateCliente.cod_Client,
            latitude: values.Latidude,
            longitude: values.Logitude,
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        GetAuth();
    }, [])

    useEffect(() => {
        const subscriber = auth().onUserChanged(signIn)
    }, [token])

    return (
        <AuthContext.Provider value={{ token: token, stateCliente, dispathCliente, cadastroUsuario, cadastroEndereco }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
