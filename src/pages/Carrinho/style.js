/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent:"space-between",
        backgroundColor: '#fff'      
    },
    container: {        
        height:"75%",
        padding: 10,
        backgroundColor: '#fff',
    },
    LabelCarrinho:{
        height:"5%",
        flexDirection:"row",
        marginLeft:"25%"
    },
    LabelCarrinhoProduto:{        
        width:"18%",
        marginRight:"7%",    
        color:"#B32728",
        fontSize:14
    },
    LabelCarrinhoPreco:{        
        width:"18%",
        marginRight:"12%",
        color:"#B32728",
        fontSize:14
    },
    LabelCarrinhoQnt:{        
        width:"18%",
        marginRight:"9%",
        color:"#B32728",
        fontSize:14
    },
    LabelCarrinhoTotal:{        
        width:"18%",
        color:"#B32728",
        fontSize:14
    },
    Itens:{
        backgroundColor:"#fff",
        height:10
        // backgroundColor:"blue"
    },
    Item:{
        marginVertical:5,
        marginHorizontal:5,
        elevation:5,
        padding:"2%",
        height:110,
        backgroundColor: '#fff',
        flexDirection:"row",
        alignItems:"center"
    },
    ContainerImg:{
        backgroundColor: '#fff',
        elevation:4,
        width:"20%",
        height:"80%",
        alignItems:"center"
    },
    img: {        
        width: "85%",
        height: "95%"
    },
    NomeProduto:{
        marginTop:"15%",
        marginHorizontal:"3%",
        color:"#B32728",
        fontSize:18
    },
    Preco:{
        flexDirection:"row",
        marginTop:"12%",
        marginRight:"3%"
        
    },
    PrecoSimbolo:{
        marginTop:"28%",        
        color:"#B32728",
        fontSize:12
    },
    PrecoDecimais:{
        marginTop:"15%",
        color:"#B32728",
        fontSize:22
    },
    PrecoCentavos:{
        marginTop:"28%",
        color:"#B32728",
        fontSize:12
    },
    qnt:{
        flexDirection:"row",
        marginBottom:"8%"
    },
    qntMenorButton:{
        backgroundColor:"#B32728",
        flexDirection:"column",
        borderRadius:25,
        width:20,
        height:"1%",
        marginRight:7,
        marginTop:5
    },
    qntMenor:{    
        color:"white",
        textAlign:"center",
        fontSize:16,
        fontWeight:"bold"        
    },
    qntMaiorButton:{
        backgroundColor:"#B32728",
        flexDirection:"column",
        borderRadius:25,
        width:20,
        height:"1%",
        marginLeft:7,
        marginTop:5
    },
    qntMaior:{
        color:"white",
        textAlign:"center",
        fontSize:16,
        fontWeight:"bold"
    },
    ContainerQnt:{
        backgroundColor: '#fff',
        elevation:4,
        alignItems:"center",
    },
    Total:{
        marginLeft:10,
        flexDirection:"row",
        marginTop:"12%"
        
    },
    BtnComprar:{
        backgroundColor:"#9c3f3a",
        height:"10%",
        alignItems:"center",
        justifyContent:"center"
    },
    BtnComprarText:{
        color:"white",
        fontWeight:"bold",
        fontSize:24
    },
    ResumoTotal:{
        flexDirection:"row",
        padding:10,
        height:"10%",
        justifyContent:"space-between"
        // backgroundColor:"red"
    },
    ResumoTotalText:{
        color:"#9c3f3a",
        fontSize:28
    },
    ResumoTotalValor:{
        flexDirection:"row",
        alignItems:"center"
    },
    ResumoTotalSimbolo:{
        color:"#B32728",
        fontSize:14,
        marginTop:"10%"
    },
    ResumoTotalDecimal:{
        color:"#B32728",
        fontSize:28,
        marginTop:"5%",        
        // color:"#B32728",
        // fontSize:12
    },
});

export default styles;
