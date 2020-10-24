/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import { Image, Text, TouchableOpacity, ScrollView, View, StyleSheet } from 'react-native';
import styles from './style';
import EstabelecimentoContext from '../../Contexts/Estabelecimento';
import BtnProdutoQuantidade from '../../componentes/BtnProdutoQuantidade';

export default function DescricaoProduto({ navigation, route }) {

  const { stateEstabelecimento, dispathEstabelecimento } = useContext(EstabelecimentoContext);

  const produto = route.params;

  const [quantidade, setQuantidade] = useState(0);

  const precoPersonalizado = (preco, initial) => {

    if (preco.includes('.')) {
      let valor = preco.split('.');
      if (initial) {
        return valor[0]
      } else {
        return valor[1]
      }
    } else {
      let valor = preco.split(',');
      if (initial) {
        return valor[0]
      } else {
        return valor[1]
      }
    }

  }

  const adicionarProduto = () => {

    dispathEstabelecimento(
      {
        type: 'setProdutos',
        produto:
        {
          codeBar: produto.codeBar,
          nome: produto._Produto,
          categoria: produto.categoriaId,
          EstabelecimentoId: produto.estabelecimentoId,
          preco: produto.preco,
          fotoPng: produto.fotoPng,
          quantidade: quantidade
        }
      }
    );

  }

  const Comprar = () => {
    console.log(stateEstabelecimento.Produtos);
  }

  return (
    <View style={styles.container1}>
      <View style={styles.container}>
        <View style={styles.ContainerImg}>
          <Image style={styles.img} source={{ uri: 'https://appmercantilimagens.s3.us-east-2.amazonaws.com/ImagensPng/png/' + produto.fotoPng }} />
        </View>
        <View style={styles.bntQuantidade}>
          <BtnProdutoQuantidade setQuantidade={setQuantidade} quantidade={quantidade} />
        </View>
        <View style={styles.NomeProduto}>
          <Text style={styles.NomeProdutoText}>{produto._Produto}</Text>
        </View>
        <View style={styles.ResumoTotal}>
          <Text style={styles.ResumoTotalSimbolo}>R$ </Text>
          <Text style={styles.ResumoTotalDecimal}>{precoPersonalizado(produto.preco, true)},</Text>
          <Text style={styles.ResumoTotalSimbolo}>{precoPersonalizado(produto.preco, false)}</Text>
        </View>
      </View>
      <View style={styles.BtnsFinalizarContainer}>
        <TouchableOpacity disabled={quantidade <= 0} style={quantidade <= 0 ? styles.BtnCarrinhoDisabled : styles.BtnCarrinho} onPress={() => adicionarProduto()}>
          <Text style={styles.BtnCarrinhoText}>ADICIONAR AO CARRINHO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BtnComprar} onPress={() => navigation.navigate('CarrinhoCompras')}>
          <Text style={styles.BtnComprarText}>COMPRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
