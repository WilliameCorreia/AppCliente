/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    Item: {
        marginVertical: 5,
        marginHorizontal: 5,
        elevation: 5,
        padding:"4%",
        height: 160,
        backgroundColor: '#fff'
    },
    Pedido: {

    },
    PedidoText: {
        color: "#969696",
        fontSize: 22,
        marginBottom:0
    },
    NomeMercantil: {
        marginTop:"2%"
    },
    Status: {
        marginTop:0, 
        flexDirection:"row",
        justifyContent:"flex-end"
    },
    StatusText:{
        backgroundColor:"red",
        color:"white",
        fontSize:20,
        borderRadius:25,
        paddingHorizontal:"15%",
        paddingVertical:"1%"
    }
});

export default styles;
