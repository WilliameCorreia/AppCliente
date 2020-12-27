import React, { createContext, useState, useEffect, useReducer } from 'react';

import auth from '@react-native-firebase/auth';
import { credencias } from '../credenciais';
import Api from '../services/Api';
import { initialStateCliente, UserReducerCliente } from '../reducers/ClienteReducer';

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

    useEffect(() => {
        GetAuth();
    }, [])

    useEffect(() => {
        const subscriber = auth().onUserChanged(signIn)
    }, [token])

    return (
        <AuthContext.Provider value={{ token: token, stateCliente, dispathCliente }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
