import React, { createContext, useState,useEffect } from 'react';

import api from '../services/Api';

export const ProdutosContext = createContext();

const ProdutosProvider = ({ children }) => {

    const [categorias, setCategorias] = useState([]);

    const [teste, setTest] = useState();

    const LoadCategorias = async () => {
        console.log("entrou em load categorias")
        const getCategorias = await api.get("Categorias").then(response => {
            setCategorias(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    const testando =  valor => {
        console.log(valor);
        setTest(valor);
    }

    useEffect(() => {
        LoadCategorias();
        return () => {
        }
    }, [])

    return (
        <ProdutosContext.Provider value={{categorias, testando, LoadCategorias}} >
            {children}
        </ProdutosContext.Provider>
    )

}

export default ProdutosProvider