/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    Item: {
        marginVertical: 8,
        marginHorizontal: 5,
        elevation: 8,
        flexDirection: "row",
        height: 160,
        backgroundColor: '#fff'    
    },
    ProdutoEPreco: {
        padding: "4%",
        backgroundColor: '#fff',
        width: "50%",
        height: "100%",
        flexDirection: "column"
    },
    ProdutoNomeText: {
        color: "#969696",
        fontSize: 26,
        marginBottom: 0
    },
    SimboloEPreco: {        
        height: "50%",
        justifyContent: "space-between",
        marginTop: "15%",
        flexDirection: "row",
        alignItems:"center"
    },
    SimboloText: {
        color: "#969696",
        fontSize: 22,
        marginBottom: 0
    },
    PrecoText: {
        color: "red",
        fontSize: 24,
        marginRight:"45%"
    },
    ImagemProduto: {       
        width: "47%",
        height: "90%",
        marginVertical:"2%",
        elevation:4,
        flexDirection:"column"    
    },
    img: {        
        width: "85%",
        height: "95%",
        resizeMode: 'stretch',
        alignSelf: "center",
        
    },
});

export default styles;
