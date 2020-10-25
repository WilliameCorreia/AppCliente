import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F23132',
    },
    box1:{
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
    },
    box2:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    input: {
        width: '80%',
        fontSize: 15,
        backgroundColor: 'transparent',
        fontFamily: 'Montserrat-SemiBold', 
        fontWeight: '600',
        marginLeft: 5
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
        alignItems: 'center',
    },
    icon:{
        width: 50,
        height: 50,
        tintColor: '#9C3F3A',
    },
    icon2:{
        width:35,
        height: 35,
        tintColor: '#9C3F3A',
        marginLeft: 10,
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