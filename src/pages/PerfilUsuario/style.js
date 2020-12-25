import { StyleSheet, Dimensions } from "react-native"
const windowWidth = Dimensions.get('window').width / 100
const windowHeight = Dimensions.get('window').height / 100

const Styles = StyleSheet.create({

    container: {
       flex:1,
       backgroundColor:"#fff"
    },
    box1: {
        height: windowHeight * 20,
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor: "#B32728",
        elevation: 10
    },
    box2: { 
        height:windowHeight * 53, 
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding:"5%" 
    },
    box3: {
        backgroundColor:"#fff",
        // marginTop:"6%",
        alignItems:"center",
        justifyContent:"center", 
        height: windowHeight *10, 
        flexDirection: 'column',
        padding:"8%" 
    },
    btnSalvar:{
        backgroundColor:"orange"
    },
    img: {
        backgroundColor:"#fff",
        borderRadius:100,
        width: 60,
        height: 60,
        marginBottom:"3%"
    },
    item: { 
        flexDirection: "column",
        marginBottom:"5%"
    },    
    Text: { 
        // fontFamily: "Montserrat-Medium", 
        fontSize: 20,
        color:"white",
        marginBottom:"2%"
    },
    linha:{
        width:"28%",
        borderBottomWidth:5,
        color:"white",
        borderColor:"white",
        height:0,
        marginBottom:"2%"
    },
    itemInput: {
        marginTop:"2%",
        marginHorizontal:"2%",
        marginBottom:"2%",
        color: '#B32728',
        textAlign: "left",
        backgroundColor: "#fff",
        elevation: 10,
        borderRadius: 25,
        paddingLeft:22,
        fontSize: 18,
        fontFamily: "Montserrat-light",
        borderColor: "#b4b4b4"
    },
    LastItemInput:{
        marginBottom:"10%",
    },
    ultimo:{marginBottom:"10%"},

    textError:{
        fontSize: 10, 
        color: 'red',
        alignSelf: 'center'
    },

    item8_1: { width: "100%", backgroundColor: "#fff", alignItems: "center" },
    item8_1Text: { borderRadius: 25, width: "60%", backgroundColor: "#9C3F3A", textAlign: "center", padding: "2%", fontSize: 16, fontFamily: "Montserrat-SemiBold", color: "white" },
})

export default Styles