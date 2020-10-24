import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF7223',
    },
    box1:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    box2:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    input: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        backgroundColor: 'transparent',
        fontFamily: 'Montserrat-SemiBold', fontWeight: '600'
    },
    SectionStyle: {
        width: (Dimensions.get('window').width / 4 * 3),
        height: (Dimensions.get('window').width / 7),
        margin: 10,
        borderWidth: 4,
        borderRadius: 30,
        borderColor: '#9C3F3A',
        textAlign: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    icon:{
        margin: 15,
    },
    btn: {
        backgroundColor: "#ffff",
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height / 12),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        margin: 10
    },
    text: {
        fontSize: 30,
        color: '#B32728',
        textAlign: 'center',
        letterSpacing: 3,
        fontFamily: 'Montserrat-SemiBold', fontWeight: '600'
    },
    image_logo:{
        width: (Dimensions.get('window').width / 100 * 80),
        height: (Dimensions.get('window').height / 100 * 15),
        resizeMode: 'center',
    },
    name_logo:{
        width: (Dimensions.get('window').width / 100 * 40),
        height: (Dimensions.get('window').height / 100 * 15),
        resizeMode: 'center',
    },
    textBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    text2:{
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold', fontWeight: '600'
    }
    
})

export default styles