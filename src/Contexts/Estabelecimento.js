import React, { createContext, useReducer, useState, useEffect, useContext } from 'react';

import { initialStateStabelecimento, UserReducerEstabelecimento } from '../reducers/EstabelecimentoReducer';
import AuthContext from '../Contexts/auth';
import Api from '../services/Api';
import moment from 'moment';

const EstabelecimentoContext = createContext();

export const EstabelecimentoProvider = ({ children }) => {

  const { token, stateCliente } = useContext(AuthContext);
  const { User } = stateCliente;
  const [clienteLocation, setClienteLocation] = useState(null);

  const [stateEstabelecimento, dispathEstabelecimento] = useReducer(UserReducerEstabelecimento, initialStateStabelecimento);
  const { Estabelecimento } = stateEstabelecimento;

  const GetPedidosAbertos = async () => {
    if (User.cod_Client) {
      return Api.get(`v1/Pedidos/FilterPedidosAbertos/${User.cod_Client},false,${Estabelecimento.id}`).then(response => {
        const { result } = response.data;
        // console.log("***********************")
        // console.log(result)
        if (result) {
          dispathEstabelecimento({ type: 'AddPedido', pedido: result });
          return result;
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
      cod_ClientId: User.cod_Client,
      dataHora_Pedido: moment().format('YYYY-MM-DD'),
      pedido_Concluido: false,
      status_Pedido: 'A',
      estabelecimentoId: Estabelecimento.id,
    }).then(response => {
      const { result } = response.data;
      GetPedidosAbertos();
    }).catch(error => {
      console.log(error)
    });
  }


  useEffect(() => {
    GetPedidosAbertos();
  }, [])

  return (
    <EstabelecimentoContext.Provider value={{ stateEstabelecimento, dispathEstabelecimento, GetPedidosAbertos }}>
      {children}
    </EstabelecimentoContext.Provider>
  )
}

export default EstabelecimentoContext;
