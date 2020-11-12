import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    Alert,
    TouchableOpacity,
} from 'react-native';

export default function MyModalConfirmation({ activeModal, setActiveModal, action, mensagem }) {

    const cancel = () => {
        setActiveModal(false);
    }

    const ok = () => {
        action();
        setActiveModal(false);
    }


    return (
        <View style={styles.centeredView}>
            <Modal
                //onDismiss={() => navigation.navigate('')}
                animationType="slide"
                transparent={true}
                visible={activeModal}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View>
                            <Text style={styles.modalText}>{mensagem}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={{ ...styles.openButton }}
                                onPress={() => ok()}
                            >
                                <Text style={styles.textStyle}>OK</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ ...styles.openButton }}
                                onPress={() => cancel()}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: '80%',
        backgroundColor: "#FFF",
        borderRadius: 20,
        padding: 10,
        paddingBottom: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalText: {
        textAlign: "center",
        fontSize: 20,
        margin: 10,
        padding: 10
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16
    },
    openButton: {
        width: 80,
        backgroundColor: "#FF7223",
        borderRadius: 10,
        elevation: 5,
        marginBottom: 20,
        padding: 10,
        marginHorizontal: 20
    },
})
