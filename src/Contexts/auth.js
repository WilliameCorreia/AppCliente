import React, { createContext, useState, useEffect, Children } from 'react'

import { credencias } from '../credenciais'
import Api from '../services/Api'
import { getUser, saveUser, mergeUser } from '../utilits'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    console.log("João é fera!")
   
    async function GetAuth(){
        console.log("João é fera 2222!")
        getUser().then(dados =>{
            console.log("João é fera 33333!")
            if(dados == null){
                Api.post('Auth/login', credencias).then(response =>{
                    console.log(response.data)
                    saveUser(response.data);
                }).catch(error =>{
                    console.log(error);
                })
            }else{
                Api.post('Auth/login', credencias).then(response =>{
                    console.log(response.data)
                    mergeUser(response.data);
                }).catch(error => {
                    console.log(error)
                })
            }
        })
    }

    useEffect(() => {
        GetAuth();
    }, [])

    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext;
