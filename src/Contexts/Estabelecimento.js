import React, { createContext, useReducer, useState, useEffect, useContext } from 'react';

import { initialStateStabelecimento, UserReducerEstabelecimento } from '../reducers/EstabelecimentoReducer';
import AuthContext from '../Contexts/auth';
import Api from '../services/Api';

const EstabelecimentoContext = createContext();

export const EstabelecimentoProvider = ({ children }) => {

  const { token, stateCliente } = useContext(AuthContext);
  const { User } = stateCliente;

  const [stateEstabelecimento, dispathEstabelecimento] = useReducer(UserReducerEstabelecimento, initialStateStabelecimento);
  const { Estabelecimento } = stateEstabelecimento;

  const GetPedidosAbertos = () => {
    if (User) {
      Api.get(`v1/Pedidos/FilterPedidosAbertos/${User.id},false,${Estabelecimento.id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(response => {
        const { result } = response.data;
        if (result) {
          dispathEstabelecimento({ type: 'AddPedido', pedido: result });
        } else {
          gerarPedido();
        }
      }).catch(error => {
        console.log(error);
      });
    }
  }

  const gerarPedido = () => {
    Api.post(`v1/Pedidos`, {
      cod_ClientId: User.id,
      pedido_Concluido: false,
      estabelecimentoId: Estabelecimento.id,
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(response => {
      const { result } = response.data;
      GetPedidosAbertos();
    }).catch(error => {
      console.log(error)
    });
  }

  return (
    <EstabelecimentoContext.Provider value={{ stateEstabelecimento, dispathEstabelecimento, GetPedidosAbertos }}>
      {children}
    </EstabelecimentoContext.Provider>
  )
}

export default EstabelecimentoContext;
