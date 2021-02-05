import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import EstabelecimentoContext from '../Contexts/Estabelecimento';
import Api from '../services/Api';

export default function BtnProdutoQuantidade({ setQuantidade, quantidade, item, tipo, produto, pedido }) {

    const disabled = quantidade <= 1;

    const { stateEstabelecimento, dispathEstabelecimento } = useContext(EstabelecimentoContext);

    const adicionarvalor = () => {  
        if(tipo){
            dispathEstabelecimento({ type: 'AddQuantidade', carrinho: item });
            Api.put(`v1/Carrinhos/${item.item_Id}`, {
                item_Id: item.item_Id,
                produtosId: item.produtosId,
                preco: item.preco,
                quantidade: item.quantidade,
                desconto: item.desconto,
                cod_PedidoId: item.cod_PedidoId,
                cod_ClientId: item.cod_ClientId,
                estabelecimentoId: item.estabelecimentoId,
            }).then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            });
        }else{
            setQuantidade(quantidade + 1);
            // Api.put(`v1/Carrinhos/${produto.id}`, {
            //     item_Id: item.item_Id,
            //     produtosId: item.produtosId,
            //     preco: item.preco,
            //     quantidade: item.quantidade,
            //     desconto: item.desconto,
            //     cod_PedidoId: item.cod_PedidoId,
            //     cod_ClientId: item.cod_ClientId,
            //     estabelecimentoId: item.estabelecimentoId,
            // }).then(response => {
            //     console.log(response);
            // }).catch(error => {
            //     console.log(error);
            // });
        }
        
    }

    const removerValor = () => {
        tipo ? dispathEstabelecimento({ type: 'RemoverQuantidade', carrinho: item }) : setQuantidade(quantidade - 1)
        tipo &&
            Api.put(`v1/Carrinhos/${item.item_Id}`, {
                item_Id: item.item_Id,
                produtosId: item.produtosId,
                preco: item.preco,
                quantidade: item.quantidade,
                desconto: item.desconto,
                cod_PedidoId: item.cod_PedidoId,
                cod_ClientId: item.cod_ClientId,
                estabelecimentoId: item.estabelecimentoId,
            }).then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            });
    }

    return (
        <View style={styles.qnt}>
            <TouchableOpacity disabled={disabled} style={disabled ? styles.qntButtonDisabled : styles.qntButton} onPress={() => removerValor()}>
                <Text style={styles.qntSinal}>-</Text>
            </TouchableOpacity>
            <View style={styles.ContainerQnt}>
                <Text style={styles.PrecoDecimais}>{quantidade}</Text>
            </View>
            <TouchableOpacity style={styles.qntButton} onPress={() => adicionarvalor()}>
                <Text style={styles.qntSinal}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    qnt: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    ContainerQnt: {
        margin: 5,
        width: 40,
        backgroundColor: '#fff',
        elevation: 4,
        alignItems: "center",
        justifyContent: 'center',
    },
    PrecoDecimais: {
        color: "#B32728",
        fontSize: 22,
    },
    qntButton: {
        backgroundColor: "#B32728",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        width: 25,
        height: 25
    },
    qntButtonDisabled: {
        backgroundColor: "#b3272873",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        width: 25,
        height: 25
    },
    qntSinal: {
        color: "white",
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold"
    },
})
