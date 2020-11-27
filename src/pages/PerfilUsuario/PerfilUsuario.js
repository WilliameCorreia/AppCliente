import React, { Component, useContext, useState, useRef } from 'react'
import { Image, Text, View, TouchableWithoutFeedback, TextInput, TouchableOpacity, ScrollView } from 'react-native'

import Styles from './style'

export default function PerfilUsuario({ route }) {

    return (
        <View style={Styles.container}>
            <View style={Styles.box1}>
                <Image style={Styles.img} source={require("../../Assets/images/user.png")} />
                <Text style={Styles.Text}>PAULO ARTUR</Text>
                <Text style={Styles.linha} />
            </View>
            < ScrollView style={Styles.box2}>
                <View style={Styles.item}>
                    <TextInput
                        style={Styles.itemInput}
                        placeholderTextColor = "#B32728"
                        placeholder='Nome'
                    />
                </View>                
                <View style={Styles.item}>
                    <TextInput
                        style={Styles.itemInput}
                        placeholderTextColor = "#B32728"
                        placeholder='Email'
                    />
                </View>                
                <View style={Styles.item}>
                    <TextInput
                        style={Styles.itemInput}
                        placeholderTextColor = "#B32728"
                        placeholder='Telefone'
                    />
                </View>                
                <View style={Styles.item}>
                    <TextInput
                        style={Styles.itemInput}
                        placeholderTextColor = "#B32728"
                        placeholder='Endereço'
                    />
                </View>                
                <View style={Styles.item}>
                    <TextInput
                        style={Styles.itemInput}
                        placeholderTextColor = "#B32728"
                        placeholder='Nº'
                    />
                </View>                
                <View style={[Styles.item, Styles.LastItemInput]}>
                    <TextInput
                        style={Styles.itemInput}
                        placeholderTextColor = "#B32728"
                        placeholder='Cep'
                    />
                </View>                
            </ScrollView>
            <View style={Styles.box3}>
                <TouchableOpacity style={Styles.item8_1} >
                    <Text style={Styles.item8_1Text} >ALTERAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}




