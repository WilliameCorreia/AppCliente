
import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    },
    box1:{
        flex: 8,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    box1Item1:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    box1Item2:{
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'flex-start'
    },
    box2:{
        position: 'relative',
        width: (Dimensions.get('screen').width),
        height: (Dimensions.get('screen').height / 18) 
    },
    textInfo:{
        color: '#3f4348f2',
        fontSize: 18,
        textAlign: 'center'
    },
    text:{
        color: '#8b949e',
        fontSize: 14
    },
    input:{
        width: '95%',
        height: 37,
        alignSelf: 'center',
        borderBottomColor: '#DBCCCC',
        borderBottomWidth:1,
        fontSize: 14,
        textAlign: 'left',
    },
    InputLabel:{
        paddingLeft: 10,
    },
    Error:{
        color:'red',
        fontSize: 14
    },
})

export default styles