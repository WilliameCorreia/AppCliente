import React, { useEffect, useContext, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import ListaProdutos from '../../componentes/ListaProdutos';
import { SearchBar } from 'react-native-elements';
import styles from './style';
import AuthContext from '../../Contexts/auth';
import Api from '../../services/Api';

export default function MeusProdutos({ navigation, route }) {

    const item = route.params;

    const { token } = useContext(AuthContext);
    const [texto, setTexto] = useState();
    const [produtos, setProdutos] = useState({
        data: [],
        page: 1,
        loading: false,
    });

    const LoadProdutos = () => {
        Api.get(`v1/Produtos/${item.categoriaId}/${item.EstabelecimentoId}/${1}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            const { result } = response.data;
            if (result) {
                setProdutos({
                    data: [...result],
                    page: 1,
                    loading: false
                })
            }
        }).catch(error => {
            console.log(error);
        })
    }

    const pesquisar = () => {
        if (texto) {
            Api.get(`v1/Produtos/Pesquisar/${item.EstabelecimentoId}/${item.categoriaId}/${texto}/${1}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                const { result } = response.data; 
                console.log(result);
                setProdutos({
                    data: [...result],
                    page: produtos.page + 1,
                    loading: false
                })
            }
            ).catch(error => {
                console.log(error);
            })
        }
    }

    useEffect(() => {
        LoadProdutos();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.containerSearch}>
                <SearchBar
                    platform={'android'}
                    placeholder="Pesquise o produto"
                    containerStyle={styles.search}
                    inputStyle={styles.input}
                    placeholderTextColor={"#fff"}
                    onChangeText={text => text.length < 1 ? LoadProdutos() && setTexto(text): setTexto(text)}
                    value={texto}
                    cancelIcon={false}
                    clearIcon={false}
                    searchIcon={false}
                />
                <TouchableOpacity onPress={pesquisar} style={styles.btnPesquisar}>
                    <Text style={styles.textPesquisar}>Pesquisar</Text>
                </TouchableOpacity>
            </View>
            <ListaProdutos navigation={navigation} Produtos={produtos.data} /* LoadListaProdutos */ /* loading={produtos.loading} */ />
        </View>
    )
}
