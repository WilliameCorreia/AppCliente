/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';

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
    PrecoDecimais: {   
        color: "#B32728",
        fontSize: 22
    },
    PrecoCentavos: {
        marginTop: "28%",
        color: "#B32728",
        fontSize: 12
    },
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
        // height: "35%",
        marginRight: 7,
        marginTop: 5
    },
    qntMenor: {
        color: "white",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold"
    },
    qntMaiorButton: {
        backgroundColor: "#B32728",
        flexDirection: "column",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 25,
        width: "10%",
        // height: "35%",
        marginLeft: 7,
        marginTop: 5
    },
    qntMaior: {
        color: "white",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold"
    },
    ContainerQnt: {
        backgroundColor: '#fff',
        elevation: 4,
        width:"20%",
        // height:"45%",
        alignItems: "center",
        justifyContent:"center"
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
});

export default styles;


    // LabelCarrinho:{w
    //     height:"5%",
    //     flexDirection:"row",
    //     marginLeft:"25%"
    // },
    // LabelCarrinhoProduto:{        
    //     width:"18%",
    //     marginRight:"7%",    
    //     color:"#B32728",
    //     fontSize:14
    // },
    // LabelCarrinhoPreco:{        
    //     width:"18%",
    //     marginRight:"12%",
    //     color:"#B32728",
    //     fontSize:14
    // },
    // LabelCarrinhoQnt:{        
    //     width:"18%",
    //     marginRight:"9%",
    //     color:"#B32728",
    //     fontSize:14
    // },
    // LabelCarrinhoTotal:{        
    //     width:"18%",
    //     color:"#B32728",
    //     fontSize:14
    // },
    // Itens:{
    //     backgroundColor:"#fff",
    //     height:10
    //     // backgroundColor:"blue"
    // },
    // Item:{
    //     marginVertical:5,
    //     marginHorizontal:5,
    //     elevation:5,
    //     padding:"2%",
    //     height:110,
    //     backgroundColor: '#fff',
    //     flexDirection:"row",
    //     alignItems:"center"
    // },
