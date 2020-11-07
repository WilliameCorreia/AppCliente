import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#b32728',
    },
    box1:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    box2:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    image_person:{
        width: (Dimensions.get('window').width / 10 * 2),
        height: (Dimensions.get('window').width / 10 * 2),
        margin: 10
    },
    input: {
        width: (Dimensions.get('window').width / 4 * 3),
        height: (Dimensions.get('window').width / 8),
        margin: 15,
        borderWidth: 4,
        borderRadius: 30,
        borderColor: '#ff7223',
        backgroundColor: 'transparent',
        paddingLeft: 20,
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '600'
       
    },
    btn:{
        width: (Dimensions.get('window').width / 6),
        height: (Dimensions.get('window').height / 10),
        margin: 20
    }
})

export default styles