import React, { createContext, useState,useEffect } from 'react';

import api from '../services/Api';
import { getUser } from '../utilits'

export const ProdutosContext = createContext();

const ProdutosProvider = ({ children }) => {

    const [categorias, setCategorias] = useState([]);
    const [token, setToken] = useState();

    const [teste, setTest] = useState();

    function getUsuario (){
        getUser().then(dados => {
            setToken(dados.token)
            LoadCategorias(dados.token);
            console.log("-------------------------------")
            console.log(token)
            console.log("-------------------------------")
        }).catch(error => {
            console.log(error)
        })
    }

    function LoadCategorias(_token){
        console.log("entrou em load categorias")
        api.get("v1/Categorias",{
            headers: {
                'Authorization': `Bearer ${_token}`
            }
        }).then(response => {
            setCategorias(response.data.result)
            console.log(response.data.result)
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        getUsuario();
    }, [])

    const testando =  valor => {
        console.log(valor);
        setTest(valor);
    }

    return (
        <ProdutosContext.Provider value={{categorias, testando, LoadCategorias}} >
            {children}
        </ProdutosContext.Provider>
    )

}

export default ProdutosProvider