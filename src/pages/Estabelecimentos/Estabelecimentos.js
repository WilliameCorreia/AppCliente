/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import styles from './style';

export default function Estabelecimentos({ navigation }) {

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.cardBtn}>
        <Text>Churascaria</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardBtn}>
        <Text>Churascaria</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardBtn}>
        <Text>Churascaria</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardBtn}>
        <Text>Churascaria</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardBtn}>
        <Text>Churascaria</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
