import React, { createContext, useReducer, useState, useEffect } from 'react';

import { initialStateStabelecimento, UserReducerEstabelecimento } from '../reducers/EstabelecimentoReducer';
import { initialStateCliente, UserReducerCliente } from '../reducers/ClienteReducer';

const EstabelecimentoContext = createContext();

export const EstabelecimentoProvider = ({ children }) => {

    const [ stateEstabelecimento, dispathEstabelecimento ] = useReducer(UserReducerEstabelecimento, initialStateStabelecimento);
    const [ stateCliente, dispathCliente ] = useReducer(UserReducerCliente, initialStateCliente);

    return (
        <EstabelecimentoContext.Provider value={{ stateCliente, dispathCliente, stateEstabelecimento, dispathEstabelecimento }}>
            {children}
        </EstabelecimentoContext.Provider>
    )
}

export default EstabelecimentoContext;
