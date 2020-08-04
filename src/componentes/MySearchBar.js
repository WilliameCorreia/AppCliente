/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import { SearchBar } from 'react-native-elements';

export default function MySearchBar() {
  return (
    <View style={styles.container}>
      <SearchBar
        platform={'android'}
        placeholder="pesquise o estabelecimento"
        containerStyle={styles.search}
        inputStyle={styles.input}
        placeholderTextColor={'#fff'}
        //onChangeText={}
        //value={}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    seachInput:{
        backgroundColor: '#B32728',
        borderRadius: 30,
    },
    search:{
      width:(Dimensions.get('window').width / 10 * 8),
      height: (Dimensions.get('window').height / 100 * 6),
      elevation: 3, 
      borderRadius: 30,
      justifyContent: 'center',
  },
});
