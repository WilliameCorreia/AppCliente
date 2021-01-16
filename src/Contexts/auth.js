import React, { createContext, useState, useEffect, useReducer } from 'react';

import auth from '@react-native-firebase/auth';
import { credencias } from '../credenciais';
import Api from '../services/Api';
import { initialStateCliente, UserReducerCliente } from '../reducers/ClienteReducer';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [stateCliente, dispathCliente] = useReducer(UserReducerCliente, initialStateCliente);

    const GetAuth = async () => {
        return Api.post('Auth/login', credencias).then(response => {
            const { token } = response.data;
            Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            console.log(token);
            return token
        }).catch(error => {
            console.log(error);
        })
    }

    const GetUsuario = async (user) => {
        return Api.get(`v1/Clientes/FilterClientePorEmailTokenLogin?tokenLogin=${user.uid}`).then(response => {
            const { result } = response.data;
            return result
        })
    }

    const cadastroEndereco = async (values) => {
        return Api.post('v1/Enderecos', {
            numero: values.Numero,
            rua: values.Rua,
            cidade: values.Cidade,
            bairro: values.Bairro,
            estado: values.Estado,
            cep: 0,
            complemento: values.Complemento,
            clienteId: stateCliente.User.cod_Client,
            latitude: values.Latitude.toString(),
            longitude: values.Longitude.toString(),
        }).then(response => {
            const { result } = response.data;
            return result
        }).catch(error => {
            console.log(error);
        });
    }

    // metodo principal de validacão de acesso!
    const signIn = async (user) => {
        if (user) {
            try {
                const usuario = await GetUsuario(user);
                if (usuario.length > 0) {
                    dispathCliente({ type: 'AddUser', user: usuario })
                } else {
                    dispathCliente({ type: 'AddUser', user: { email: user.email, uid: user.uid } })
                }

            } catch (error) {
                console.log(error);
            } finally {

            }
        } else {
            dispathCliente({ type: 'delUser' })
        }
    }

    useEffect(() => {
        (async () => {
            const token = await GetAuth();
            if(token){
                const subscribe = auth().onAuthStateChanged(signIn);
            }
            return () => {

            }
        })()
    }, [])

    return (
        <AuthContext.Provider value={{ stateCliente, dispathCliente, cadastroEndereco, signIn, GetUsuario }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
