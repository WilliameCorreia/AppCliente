import React, { createContext, useState, useEffect, useReducer } from 'react'

import { credencias } from '../credenciais';
import Api from '../services/Api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState();

    async function GetAuth() {
        Api.post('Auth/login', credencias).then(response => {
            const { token } = response.data;
            setToken(token);
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        GetAuth();
    }, [])
    
    return (
        <AuthContext.Provider value={{token: token}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
