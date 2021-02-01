/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import CardItensProdutos from '../../componentes/CardItensProdutos';
import EstabelecimentoContext from '../../Contexts/Estabelecimento';
import MyModalConfimation from '../../componentes/MyModalConfirmation';
import AuthContext from '../../Contexts/auth';
import Api from '../../services/Api';
import moment from 'moment';
import ProcessaRequisicao from '../../services/ProcessaRequisicao';
import AjusteCasasDecimaisPreco from '../../services/AjusteCasasDecimaisPreco';

export default function Carrinho({ navigation }) {

  const { stateEstabelecimento, dispathEstabelecimento } = useContext(EstabelecimentoContext);
  const { Pedido } = stateEstabelecimento;
  const { Estabelecimento } = stateEstabelecimento;
  const { Carrinho } = stateEstabelecimento;
  const { stateCliente } = useContext(AuthContext);
  const { User } = stateCliente;
  const [total, setTotal] = useState("0,00");
  const [produtos, setProdutos] = useState([]);
  const [modalConfim, setModalConfirm] = useState(false);
  const [load, setLoad] = useState(false);


  const valorTotal = () => {
    if (Carrinho) {
      let valor = 0;
      stateEstabelecimento.Carrinho.forEach(item => {
        valor += (parseFloat(item.produtos.preco.replace(",", ".")) * item.quantidade);
      });
      setTotal(valor.toFixed(2))
    }
  }

  const precoPersonalizado = (preco, initial) => {

    if (preco.includes('.')) {
      let valor = preco.split('.');
      if (initial) {
        return valor[0];
      } else {
        return valor[1];
      }
    } else {
      let valor = preco.split(',');
      if (initial) {
        return valor[0];
      } else {
        return valor[1];
      }
    }
  }

  const GetProdutosCarrinho = () => {
    if (Pedido) {     

      Carrinho.map(carro => {
        if (!carro.clientes.cod_Client) {
          // dispathEstabelecimento({ type: 'deletarProduto', carrinho: carro })
          Api.post(`v1/Carrinhos`, {
            produtosId: carro.produtos.id,
            quantidade: carro.quantidade,
            desconto: 0,
            cod_PedidoId: Pedido.cod_Pedido,
            cod_ClientId: User.cod_Client,
            estabelecimentoId: Estabelecimento.id,
          }).then(response => {
            const { result } = response.data;
            // console.log(carro.produtos.id , carro.id, carro.produtos);
            dispathEstabelecimento({ type: 'deletarProduto', carrinho: carro })
            setTimeout(() => {
              setLoad(false)
            }, 2000);
            // dispathEstabelecimento({ type: 'AddCarrinho', Carrinho: result, logado: true });
            // setMsnModal('Produto Adicionado ao Carrinho !')
            // setModalActive(true)
          }).catch(error => {
            console.log(error);
          })
        }
      })

      if (User.cod_Client) {
        setLoad(true)
        Api.get(`v1/Carrinhos/FilterCarrinhoCliente/${User.cod_Client},${Estabelecimento.id},${Pedido.cod_Pedido}`).then(response => {
          const { result } = response.data;
          // console.log(result)
          dispathEstabelecimento({ type: 'AddCarrinho', Carrinho: result, logado: true });
          setTimeout(() => {
            setLoad(false)
          }, 2000);
          // console.log("esse é o resultado")
          // console.log(result)
        }).catch(error => {
          console.log(error);
        })
      }
    }
  }

  const FinalizarCompra = () => {
    Api.put(`v1/Pedidos/${Pedido.cod_Pedido}`, {
      cod_Pedido: Pedido.cod_Pedido,
      cod_ClientId: User.cod_Client,
      valor_Total: parseFloat(total.replace(',', '.')),
      dataHora_Pedido: moment().format(),
      pedido_Concluido: true,
      status_Pedido: "A",
      estabelecimentoId: Estabelecimento.id,
    }).then(response => {
      const { result } = response.data;
      navigation.navigate('PagamentoEfetuado');
    }).catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {
    GetProdutosCarrinho();
  }, [User, Pedido])

  useEffect(() => {
    valorTotal();
  }, [stateEstabelecimento])

  if (load) {
    return <ProcessaRequisicao />
  } else {
    return (
      <View style={styles.container1}>
        <View style={styles.container}>
          <CardItensProdutos produtos={Carrinho} />
        </View>
        <View style={styles.ResumoTotal}>
          <Text style={styles.ResumoTotalText}>TOTAL</Text>
          <View style={styles.ResumoTotalValor}>
            <Text style={styles.ResumoTotalSimbolo}>R$</Text>
            <Text style={styles.ResumoTotalDecimal}>{AjusteCasasDecimaisPreco(total)}</Text>
          </View>
        </View>
        {User.cod_Client ?
          <View style={Carrinho.length !== 0 ? styles.boxBtn : styles.boxBtnDisabled}>
            <TouchableOpacity style={styles.BtnComprar} disabled={Carrinho.length === 0} onPress={() => setModalConfirm(true)}>
              <Text style={styles.BtnComprarText}>EFETUAR COMPRA</Text>
            </TouchableOpacity>
          </View>
          :
          <View style={{ flex: 1.1, backgroundColor: '#F23132', alignItems: 'center' }}>
            <View style={{ width: '60%', justifyContent: 'flex-start', marginVertical: 5 }}>
              <Text style={{ fontSize: 14, marginVertical: 5, color: '#fff' }}>Falta pouco!</Text>
              <Text style={{ fontSize: 12, color: '#fff' }}>Para concluir seu pedido, precisamos que você se identifique. Como quer continuar ?</Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#fff', padding: 5, borderRadius: 30, paddingHorizontal: 10 }} onPress={() => navigation.navigate('Login')}>
              <Text style={{ color: '#b32728', fontWeight: 'bold' }}>Entrar ou Cadastrar</Text>
            </TouchableOpacity>
          </View>
        }
        <View>
          <MyModalConfimation activeModal={modalConfim} setActiveModal={setModalConfirm} action={FinalizarCompra} mensagem={"Deseja Finalizar seu Pedido ?"} />
        </View>
        {/* <View style={{ flex: 1.1, backgroundColor: '#F23132', alignItems: 'center' }}>
            <View style={{ width: '60%', justifyContent: 'flex-start', marginVertical: 5 }}>
              <Text style={{ fontSize: 14, marginVertical: 5, color: '#fff' }}>Falta pouco!</Text>
              <Text style={{ fontSize: 12, color: '#fff' }}>Para concluir seu pedido, precisamos que você se identifique. Como quer continuar ?</Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#fff', padding: 5, borderRadius: 30, paddingHorizontal: 10 }} onPress={() => navigation.navigate('Login')}>
              <Text style={{ color: '#b32728', fontWeight: 'bold' }}>Entrar ou Cadastrar</Text>
            </TouchableOpacity>
          </View> */}
      </View>
    );
  }

}
