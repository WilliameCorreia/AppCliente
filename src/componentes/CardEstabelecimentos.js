import React, { useState, useEffect, useContext } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Dimensions, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Image } from 'react-native-elements';

export default function CardEstabelecimentos({ estabelecimentos, selectedEstabelecimento, filtrados }) {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity key={item.id} style={styles.card} onPress={() => selectedEstabelecimento(item)}>
                <View style={styles.box1}>
                    <Text>{item._Estabelecimento}</Text>
                    <Text>{item.email}</Text>
                    <Text>{item.razaoSocial}</Text>
                </View>
                <View style={styles.box2}>
                    <Image
                        key={item.id.toString()}
                        style={styles.uriImg}
                        source={{ uri: `https://planetaentregas.blob.core.windows.net/planeta-produtos/estabelecimento/${item.fotoName}?${new Date().getMinutes()}` }}
                        PlaceholderContent={<ActivityIndicator style={styles.Indicator} color={'red'} size={80} />}
                        transition={true}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView>
            <FlatList
                data={filtrados.length > 0 ? filtrados : estabelecimentos}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        flexDirection: 'row',
        width: '95%',
        height: (Dimensions.get('window').height / 4),
        margin: 10,
        elevation: 5,
        backgroundColor: '#fff',
    },
    box1: {
        width: '50%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10
    },
    box2: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardImg: {
        width: '80%',
        height: '80%',
    },
    Indicator: {
        width: (Dimensions.get('window').width ),
        // height: (Dimensions.get('window').height / 20 * 3),
        height: "100%",
        backgroundColor: '#fff'
    },
    uriImg: {
        width: (Dimensions.get('window').width / 100 * 45),
        height: "95%",
        //resizeMode: 'center'
    },
});