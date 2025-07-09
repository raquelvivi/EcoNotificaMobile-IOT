import { Text, View, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';



export default function Index() {

  const [fontsLoaded] = useFonts({
    Inder: require('../assets/fonts/Inder-Regular.ttf'), // Caminho da fonte
  });

  if (!fontsLoaded) {
    return null; // ou uma tela de loading
  }
  return (



    <View style={[styles.main]}>


      <Image source={require('../assets/images/ecologia.png')} style={[styles.img]} />
      <Text style={[styles.texto]} >BEM VINDO</Text>

    {/* se a pessoa ja tiver feito login vai para as lixeiras (principal) se não vai cadastrar */}
    
      <Link href="/principal" style={{marginTop: 30}}>  
        <Text style={[styles.botao]} >ENTRAR</Text>
      </Link>



    </View>




  );
}



const styles = StyleSheet.create({

  body: {
    flex: 1,

  },
  main: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    backgroundColor: "#2E9031",
  },
  img: {
    marginTop: 150,
    width: 200,
    height: 200,

  },
  texto: {
    marginTop: 20,
    fontSize: 20,
    color: "#ffffff",
    fontFamily: "Inder"
  },
  botao: {
    
    borderRadius: 5,
    backgroundColor: '#ffffff',
    padding: 10,
    fontSize: 15,
    fontFamily: "Inder"

  },
  icone: {
    position: "absolute",
    bottom: 0,
    marginBottom: 30,
    width: 40,
    height: 40,
  },

  lista: {
    marginTop: 200,
  },


});


