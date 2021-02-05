/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import styles from './style';
import EstabelecimentoContext from '../../Contexts/Estabelecimento';
import BtnProdutoQuantidade from '../../componentes/BtnProdutoQuantidade';
import MyModal from '../../componentes/MyModal';
import AuthContext from '../../Contexts/auth';
import Api from '../../services/Api';
import AjusteCasasDecimaisPreco from '../../services/AjusteCasasDecimaisPreco';

export default function DescricaoProduto({ navigation, route }) {

  const { stateEstabelecimento, dispathEstabelecimento } = useContext(EstabelecimentoContext);
  const { Estabelecimento } = stateEstabelecimento;
  const { Carrinho } = stateEstabelecimento;
  const { Pedido } = stateEstabelecimento;
  const { stateCliente, token } = useContext(AuthContext);
  const { User } = stateCliente;

  const produto = route.params;

  const [quantidade, setQuantidade] = useState(0);
  const [modalActive, setModalActive] = useState(false);
  const [msnModal, setMsnModal] = useState('primeira passada');

  

  const adicionarProduto = () => {



    if (!User.cod_Client) {
      let carro = [{
        "clientes": User,
        "cod_ClientId": User.cod_ClientId,
        "desconto": 0,
        "estabelecimentoId": Estabelecimento.id,
        "estabelecimentos": Estabelecimento,
        "produtos": {
          "_Produto": produto._Produto,
          "categoria": null,
          "categoriaId": produto.categoriaId,
          "codeBar": produto.codeBar,
          "estabelecimento": produto.estabelecimento,
          "estabelecimentoId": produto.estabelecimentoId,
          "fotoPng": produto.fotoPng,
          "id": produto.id,
          "marca": produto.marca,
          "oferta": produto.oferta,
          "preco": produto.preco,
          "quantidade": quantidade,
          "unidade": null
        },
        "produtosId": produto.id,
        "quantidade": quantidade
      }]

      dispathEstabelecimento({ type: 'AddCarrinho', carrinho: carro })
      setMsnModal('Produto Adicionado ao Carrinho !')
      setModalActive(true)
    } else {
      let quantidadeFinal = quantidade;
      console.log(Carrinho)

      Api.post(`v1/Carrinhos`, {
        produtosId: produto.id,
        quantidade: quantidade,
        desconto: 0,
        cod_PedidoId: Pedido.cod_Pedido,
        cod_ClientId: User.cod_Client,
        estabelecimentoId: Estabelecimento.id,
      }).then(response => {
        const { result } = response.data;
        console.log({
          produtosId: produto.id,
          quantidade: quantidade,
          desconto: 0,
          cod_PedidoId: Pedido.cod_Pedido,
          cod_ClientId: User.cod_Client,
          estabelecimentoId: Estabelecimento.id,
        })
        setMsnModal('Produto Adicionado ao Carrinho !')
        setModalActive(true)
      }).catch(error => {
        console.log(error);
      })
    }




    //  dispathEstabelecimento({ type: 'AddCarrinho', carrinho: [ {"produtosId" : produto.id, "quantidade": quantidade, "desconto": 0, "estabelecimentoId": Estabelecimento.id }] });
  }

  const Comprar = () => {
  }

  return (
    <View style={styles.container1}>
      <View style={styles.container}>
        <View style={styles.ContainerImg}>
          <Image
            // style={styles.img}
            source={{ uri: `https://planetaentregas.blob.core.windows.net/planeta-produtos/ImagensPng/png/${produto.fotoPng}?${new Date().getMinutes()}` }}
            // PlaceholderContent={<ActivityIndicator style={styles.Indicator} color={'red'} />}
            transition={true}
            style={styles.uriImg}
            PlaceholderContent={<ActivityIndicator style={styles.Indicator} color={'red'} size={80} />}
            // transition={true}
          />
        </View>
        <View style={styles.bntQuantidade}>
          <BtnProdutoQuantidade setQuantidade={setQuantidade} quantidade={quantidade} produto={produto} pedido={Pedido}/>
        </View>
        <View style={styles.NomeProduto}>
          <Text style={styles.NomeProdutoText}>{produto._Produto}</Text>
        </View>
        <View style={styles.ResumoTotal}>
          <Text style={styles.ResumoTotalSimbolo}>R$ </Text>          
          <Text style={styles.ResumoTotalDecimal}>{AjusteCasasDecimaisPreco(produto.preco)}</Text>
        </View>
      </View>
      {User ?
        <View style={styles.BtnsFinalizarContainer}>
          <TouchableOpacity disabled={quantidade <= 0} style={quantidade <= 0 ? styles.BtnCarrinhoDisabled : styles.BtnCarrinho} onPress={() => adicionarProduto()}>
            <Text style={styles.BtnCarrinhoText}>ADICIONAR CARRINHO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BtnComprar} onPress={() => navigation.navigate('CarrinhoCompras')}>
            <Text style={styles.BtnComprarText}>COMPRAR</Text>
          </TouchableOpacity>
        </View>
        :
        <View style={{ flex: 1, backgroundColor: '#F23132', alignItems: 'center' }}>
          <View style={{ width: '60%', justifyContent: 'flex-start', marginVertical: 5 }}>
            <Text style={{ fontSize: 14, marginVertical: 5, color: '#fff' }}>Falta pouco!</Text>
            <Text style={{ fontSize: 12, color: '#fff' }}>Para adicionar itens ao seu Carrinho, precisamos que você se identifique. Como quer continuar ?</Text>
          </View>
          <TouchableOpacity style={{ backgroundColor: '#fff', padding: 5, borderRadius: 30, paddingHorizontal: 10 }} onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#b32728', fontWeight: 'bold' }}>Entrar ou Cadastrar</Text>
          </TouchableOpacity>
        </View>
      }

      <View style={styles.box3}>
        <MyModal activeModal={modalActive} mensagem={msnModal} mudarEstado={setModalActive} />
      </View>
    </View>
  );
}
