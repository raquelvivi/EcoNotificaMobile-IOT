import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from 'react';
import { Link } from 'expo-router';

export default function dadosLixeira({Nome = ''}) {


    return (
        <View style={[styles.conteine]}>
            <Text>BEM VINDO AOS DADOS DA LIXEIRA</Text>


        </View>

    );
}



const styles = StyleSheet.create({



    conteine: {
        backgroundColor: "#ffffff",

    },



});


