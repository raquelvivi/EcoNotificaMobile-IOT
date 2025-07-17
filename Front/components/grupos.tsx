import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from 'react';
import { Link } from 'expo-router';

import TextoLixeira from '../components/textoLixeira';

import EyeOn from '../assets/images/Eye.png';
import EyeOff from '../assets/images/Eye off.png';

export default function Grupo({Nome = ''}) {

    const [visivel, setVisivel] = useState(false);

    function abrir() {
        setVisivel(!visivel); // ao tocar visivel inverte (se era verdadeiro fica falso)
    }

    return (
        <View style={[styles.conteine]}>
            <TouchableOpacity
                onPress={(abrir)}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center'}}  >
                    <Text style={styles.textP}> {Nome}</Text>
                    <Image source={visivel ? EyeOn : EyeOff} style={[styles.eye]} />
                </View>
            </TouchableOpacity>
            {visivel && (
                <View style={styles.caixa}>
                    <TextoLixeira nome = 'Lixeira - 1'/>
                    <TextoLixeira nome = 'Lixeira - 2' />
                </View>
            )}

        </View>

    );
}



const styles = StyleSheet.create({

    conteine: {

        backgroundColor: "#D9D9D9",
        padding: 10,
        maxWidth: 300,
        minWidth: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginBottom: 10,
        

    },
    eye: {
        margin: 5,
        width: 19,
        height: 15,
    }
    ,
    caixa:{
        marginTop: 5,
    },
    text:{
        color: '#434343',
        fontSize: 16,
        margin: 5,
    },
    textP:{
        fontSize: 18,
    }


});


