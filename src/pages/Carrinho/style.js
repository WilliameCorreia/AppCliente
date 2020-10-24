/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#fff'      
    },
    container: {        
        height:"83%",
        backgroundColor: '#fff',
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
        justifyContent:'space-around'
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
        marginTop:"10%",
        marginHorizontal: 5,
    },
    ResumoTotalDecimal:{
        color:"#B32728",
        fontSize:28,
        marginTop:"5%",        
    },
    ResumoTotalCentavos:{
        color:"#B32728",
        fontSize:28,
        marginTop:"5%",        
    },
});

export default styles;
