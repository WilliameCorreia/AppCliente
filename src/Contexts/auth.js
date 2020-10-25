import React, { createContext, useState, useEffect, useReducer } from 'react';

import auth from '@react-native-firebase/auth';
import { credencias } from '../credenciais';
import Api from '../services/Api';
import { initialStateCliente, UserReducerCliente } from '../reducers/ClienteReducer';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState();
    const [ stateCliente, dispathCliente ] = useReducer(UserReducerCliente, initialStateCliente);

    async function GetAuth() {
        Api.post('Auth/login', credencias).then(response => {
            const { token } = response.data;
            setToken(token);
            console.log(token);
        }).catch(error => {
            console.log(error);
        })
    }

    async function signIn(user) {
        console.log("@@@@@@@@@@@@@@@@@SignIn@@@@@@@@@@@@@@@@@@@@@@@")
        setTimeout(() => {
            if (user) {
                dispathCliente({ type: 'AddUser', user: { email: user.email, token: user.uid } })
            } else {
                dispathCliente({ type: 'delUser'})
            }
        }, 2000)
    }

    useEffect(() => {
        const subscriber = auth().onUserChanged(signIn)
        GetAuth();
    }, [])
    
    return (
        <AuthContext.Provider value={{token: token, stateCliente, dispathCliente}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
