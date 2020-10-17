/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: '#fff'
    },
    container: {
        height: "75%",
        backgroundColor: '#fff',
    },
    ContainerImg: {
        marginTop:"3%",
        backgroundColor: '#fff',
        elevation: 2,
        width:"100%",
        height:"60%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: "50%",
        height: "80%",
        alignSelf: "center"
    },
    NomeProduto: {    
       paddingHorizontal:"10%"
    },
    NomeProdutoText: {    
        color: "#B32728",
        fontSize: 22
    },
    Preco: {
        flexDirection: "row",
        marginTop: "12%",
        marginRight: "3%"

    },
    PrecoSimbolo: {
        marginTop: "28%",
        color: "#B32728",
        fontSize: 12
    },
   
    PrecoCentavos: {
        marginTop: "28%",
        color: "#B32728",
        fontSize: 12
    },
    Total: {
        marginLeft: 10,
        flexDirection: "row",
        marginTop: "12%"

    },
    BtnComprar: {
        backgroundColor: "#9c3f3a",
        width:"50%",        
        justifyContent:"center",
        alignItems:"center"        
    },
    BtnCarrinho: {
        backgroundColor: "#ff7223",
        width:"50%",        
        justifyContent:"center",
        alignItems:"center"        
    },
    BtnCarrinhoDisabled: {
        backgroundColor: "#ff722340",
        width:"50%",        
        justifyContent:"center",
        alignItems:"center",
        opacity: 9
    },
    BtnComprarText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24
    },
    BtnCarrinhoText: {
        padding:"10%",
        color: "white",
        fontWeight: "bold",
        fontSize: 24
    },
    BtnsFinalizarContainer:{
        flexDirection:"row",
        height:"10%",
        backgroundColor:"#fff"
    },
    ResumoTotal: {
        flexDirection: "row",
        paddingHorizontal:"30%"
    },
    ResumoTotalText: {
        color: "#9c3f3a",
        fontSize: 28
    },
    ResumoTotalValor: {
        flexDirection: "row",
        alignItems: "center"
    },
    ResumoTotalSimbolo: {
        color: "#B32728",
        fontSize: 20,
        fontWeight:"bold",
        marginTop: "10%"
    },
    ResumoTotalDecimal: {
        color: "#B32728",
        fontSize: 45,
        fontWeight:"bold"      
    },
    bntQuantidade:{
        flex: 1,
        paddingHorizontal: 10,
    }
});

export default styles;
