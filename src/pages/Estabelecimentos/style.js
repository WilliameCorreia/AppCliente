/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    cardBtn: {
        width: (Dimensions.get('window').width),
        height: Dimensions.get('window').height / 5,
        marginVertical: 10,
    },
    img: {
        width: '95%',
        height: '100%',
        resizeMode: 'stretch',
    },
    label: {

    },
});

export default styles;
