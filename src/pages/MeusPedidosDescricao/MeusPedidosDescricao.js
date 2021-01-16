import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import CardItemPedido from '../../componentes/CardItemPedido';
import EstabelecimentoContext from '../../Contexts/Estabelecimento';
import MyModalConfimation from '../../componentes/MyModalConfirmation';
import AuthContext from '../../Contexts/auth';
import Api from '../../services/Api';
import moment from 'moment';

export default function MeusPedidosDescricao({ route }) {

    console.log(route.params);

    const { produtos } = route.params;

    const [total, setTotal] = useState("0,00");

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

    return (
        <View style={styles.container1}>
            <View style={styles.container}>
                <CardItemPedido produtos={produtos} />
            </View>
            <View style={styles.ResumoTotal}>
                <Text style={styles.ResumoTotalText}>TOTAL</Text>
                <View style={styles.ResumoTotalValor}>
                    <Text style={styles.ResumoTotalSimbolo}>R$</Text>
                    <Text style={styles.ResumoTotalDecimal}>{precoPersonalizado(total.toString(), true)},</Text>
                    <Text style={styles.ResumoTotalCentavos}>{precoPersonalizado(total.toString(), false)}</Text>
                </View>
            </View>
        </View>
    )
}
