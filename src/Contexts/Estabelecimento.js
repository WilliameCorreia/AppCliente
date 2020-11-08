import React, { createContext, useReducer, useState, useEffect } from 'react';

import { initialStateStabelecimento, UserReducerEstabelecimento } from '../reducers/EstabelecimentoReducer';
import { initialStateCliente, UserReducerCliente } from '../reducers/ClienteReducer';

const EstabelecimentoContext = createContext();

export const EstabelecimentoProvider = ({ children }) => {

    const [ stateEstabelecimento, dispathEstabelecimento ] = useReducer(UserReducerEstabelecimento, initialStateStabelecimento);

    return (
        <EstabelecimentoContext.Provider value={{ stateEstabelecimento, dispathEstabelecimento }}>
            {children}
        </EstabelecimentoContext.Provider>
    )
}

export default EstabelecimentoContext;
