import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native'
import api from '../services/Api';

const CarroselCategorias = ({ navigation, EstabelecimentoId }) => {
    const [Categorias, setCategorias] = useState(null);
    function LoadCategorias(){
        api.get(`v1/Estabelecimentos/FiltrarCategoriasPorEstabelecimentos/${EstabelecimentoId}`).then(response => {
            const { result } =  response.data;
            setCategorias(result[0].tipo_Estabelecimento.categorias)
        }).catch(error => {
            console.log(error);
        })
    }
    useEffect(() => {
        LoadCategorias();
    }, [])
    const _renderItem = ({ item }) => (
        <View style={styles.container}>
        <View style={styles.box2}>
                <View style={styles.box2_1}>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MeusProdutos', {categoriaId: item.id, EstabelecimentoId: EstabelecimentoId})}>
                        <Image 
                        style={styles.img} 
                        source={{ uri: 'https://planetaentregas.blob.core.windows.net/planeta-produtos/categorias/' + item.categoriaPng }}
                        />
                    </TouchableOpacity>
            <Text style={styles.textBtn}>{item.nome}</Text>
                </View>
        </View>
    </View>
    )
    return (
        <View>
            <Text style={styles.Label}>Categorias de produto</Text>
            <FlatList
                horizontal={true}
                data={Categorias}
                renderItem={_renderItem}
                // keyExtractor={item => item.codeBar}
                // onEndReached={() => Add_Ofertas()}
                // onEndReachedThreshold={0.5}
                // ListFooterComponent={renderFooter}
                // ListEmptyComponent={RenderEmpty}
            />
        </View>
    )
}

export default CarroselCategorias

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box1: {
        height: 30,
        justifyContent: 'center'
    },
    box2: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    box2_1: {
        alignItems: 'center',
    },
    textHeader: {
        width: '25%',
        fontSize: 15,
        elevation: 3,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        color: '#B32728',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btn: {
        backgroundColor: '#fff',
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    btnCat: {
        width: (Dimensions.get('screen').width * 1.5),
        height: '60%'
    },
    textBtn: {
        color: '#B32728'
    },
    Label: {
        color: '#B32728',
        fontSize:20,
        marginHorizontal:15
    },
    img: {
        width: Dimensions.get('window').width / 100 * 45,
        height: Dimensions.get('window').height / 100 * 13,
        margin: 5,
        borderRadius: 10,
        // resizeMode:"center"
    }
})
