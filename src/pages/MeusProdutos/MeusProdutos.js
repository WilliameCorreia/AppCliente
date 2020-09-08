import React from 'react';
import { StyleSheet, View } from 'react-native';

import { SearchBar } from 'react-native-elements';
import styles from './style';

export default function MeusProdutos() {
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
            {/* <ListaProdutos navigation={navigation} Produtos={produtos.data ? produtos.data : []} LoadListaProdutos loading={produtos.loading}/> */}
        </View>
    )
}
