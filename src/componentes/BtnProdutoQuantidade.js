import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function BtnProdutoQuantidade({ setQuantidade, quantidade }) {

    const adicionarvalor = () => {
        setQuantidade(quantidade + 1)
    }

    const removerValor = () => {
        if(quantidade > 0){
            setQuantidade(quantidade - 1)
        }
    }

    return (
        <View style={styles.qnt}>
          <TouchableOpacity style={styles.qntMenorButton} onPress={() => removerValor()}>
            <Text style={styles.qntMenor}>-</Text>
          </TouchableOpacity>
          <View style={styles.ContainerQnt}>
            <Text style={styles.PrecoDecimais}>{quantidade}</Text>
          </View>
          <TouchableOpacity style={styles.qntMaiorButton} onPress={() => adicionarvalor()}>
            <Text style={styles.qntMaior}>+</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    qnt: {
        flexDirection: "row",
        marginBottom: "2%",
        justifyContent:"flex-end",
        paddingHorizontal:"8%",
        paddingVertical:"2%"
    },
    qntMenorButton: {
        backgroundColor: "#B32728",
        flexDirection: "column",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 25,
        width: "10%",
        marginRight: 7,
        marginTop: 5
    },
    qntMenor: {
        color: "white",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold"
    },
    ContainerQnt: {
        backgroundColor: '#fff',
        elevation: 4,
        width:"20%",
        alignItems: "center",
        justifyContent:"center"
    },
    PrecoDecimais: {   
        color: "#B32728",
        fontSize: 22
    },
    qntMaiorButton: {
        backgroundColor: "#B32728",
        flexDirection: "column",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 25,
        width: "10%",
        marginLeft: 7,
        marginTop: 5
    },
    qntMaior: {
        color: "white",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold"
    },
})
