import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 80
    },
    search:{
        backgroundColor: '#fff',
        margin: 10
    },
    seachInput:{
        backgroundColor: "#B32728",
        borderRadius: 30,
    },
    input:{
        fontFamily: 'Montserrat-SemiBold'
    },
    search:{
        width:(Dimensions.get('window').width / 10 * 8),
        height: (Dimensions.get('window').height / 100 * 6),
        elevation: 3, 
        borderRadius: 30,
        justifyContent: 'center',
    },
    containerSearch:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    btnPesquisar:{
        backgroundColor: '#B32728',
        padding: 5,
        borderRadius: 30,
        marginTop: 5,
    },
    textPesquisar:{
        color: '#fff'
    }
})

export default styles