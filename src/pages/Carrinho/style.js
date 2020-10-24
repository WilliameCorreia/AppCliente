/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#fff'      
    },
    container: {        
        flex: 4,
        backgroundColor: '#fff',
    },
    BtnComprar:{
        backgroundColor:"#9c3f3a",
        alignItems:"center",
        justifyContent:"center"
    },
    BtnComprarText:{
        color:"white",
        fontWeight:"bold",
        fontSize:24
    },
    ResumoTotal:{
        flex: 0.3,
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems: 'center'
    },
    ResumoTotalText:{
        color:"#9c3f3a",
        fontSize:20
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
        fontSize:20,
        marginTop:"5%",        
    },
    ResumoTotalCentavos:{
        color:"#B32728",
        fontSize: 14,
        marginTop:"5%",        
    },
});

export default styles;
