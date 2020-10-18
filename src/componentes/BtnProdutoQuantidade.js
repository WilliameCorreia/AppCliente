import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import EstabelecimentoContext from '../Contexts/Estabelecimento';

export default function BtnProdutoQuantidade({ setQuantidade, quantidade, item, tipo }) {

    const disabled = quantidade <= 1;

    const { stateEstabelecimento, dispathEstabelecimento } = useContext(EstabelecimentoContext);

    const adicionarvalor = () => {
        tipo ? dispathEstabelecimento({type:'AddProdutosQuantidade', produto: item})  : setQuantidade(quantidade + 1) 
    }

    const removerValor = () => {
        tipo ? dispathEstabelecimento({type:'removerProdutosQuantidade', produto: item })  : setQuantidade(quantidade - 1)
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
        justifyContent:"flex-end",
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
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 25,
        width: 25,
        height: 25
    },
    qntButtonDisabled: {
        backgroundColor: "#b3272873",
        flexDirection: "column",
        alignItems:"center",
        justifyContent:"center",
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
