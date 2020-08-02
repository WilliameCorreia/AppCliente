/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    cardBtn:{
        width: (Dimensions.get('window').width / 10 * 9),
        backgroundColor: 'red',
        alignItems:'center',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 10,
        height: (Dimensions.get('window').height / 6),
        borderRadius: 10,
    }
})

export default styles;