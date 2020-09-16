import React, { useEffect, useContext, useState } from 'react';
import { View } from 'react-native';

import ListaProdutos from '../../componentes/ListaProdutos';
import { SearchBar } from 'react-native-elements';
import styles from './style';
import AuthContext from '../../Contexts/auth';
import Api from '../../services/Api';

export default function MeusProdutos({ navigation, route }) {

    const item = route.params;

    const { token } = useContext(AuthContext);
    const [Produtos, SetProdutos] = useState();

    const produtos = () => {
        Api.get(`v1/Produtos/${item.itemID}/${item.EstabelecimentoId}/${1}`, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }).then(response =>{
            const { result } = response.data;
            if(result){
                SetProdutos(result);
            }
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    useEffect(() => {
        produtos();
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
                    //onChangeText={text => text.length < 1 ? LoadListaProdutos() && setTexto(text): setTexto(text)}
                    //value={texto}
                />
                {/* <TouchableOpacity onPress={pesquisar} style={styles.btnPesquisar}><Text style={styles.textPesquisar}>Pesquisar</Text></TouchableOpacity> */}
            </View>
            <ListaProdutos navigation={navigation} Produtos={Produtos} /* LoadListaProdutos */ /* loading={produtos.loading} *//>
        </View>
    )
}
