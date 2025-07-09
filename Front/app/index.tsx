import { Text, View, Image, StyleSheet, Button,  } from "react-native";
import React, { useState, useEffect } from 'react';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

import Lixeiras from '../components/lixeira'

import { Pessoa } from '../type'

export default function Index() {
  const router = useRouter();
  
  const [dados, setDados] = useState<Pessoa[]>([]);

// comente todas as lixeiras para ver frame 8 do figma (pedido de cadastro)
  const listaLixeiras = [
    { nome: "Lixeira - DNER",  nivel: "Parcial"},
    { nome: "lixeira - Praça cristo Rei", nivel: "Cheia" },
    { nome: "lixeira - JK", nivel: "Vazia" },
    { nome: "lixeira - Dr. Jose Bezerra", nivel: "Parcial" }
    

  ]

  // useEffect(() => { //pesquisa para colocar lixeiras
  //   fetch('http://192.168.18.11:8080/api/fixa') // use o IP local da sua máquina
  //     .then((res) => res.json())
  //     .then((data: Pessoa[]) => setDados(data))
  //     .catch((err) => console.log(err));
  // }, []);
 

  return (
    //dando cor de fundo
    <LinearGradient
      colors={['#FFFFFF', '#80BC82']} // branco para verde 
      style={styles.body}
    >


      <View style={[styles.main]}>

        <Image source={require('../assets/images/logo_login.png')} style={[styles.img2]} />

        {/* <Link href="/login"><Text style={[styles.texto]}>Cadastro</Text></Link> */}
        

          {listaLixeiras.length == 0 ? (
          <View style={[styles.main]}>
              <Image source={require('../assets/images/reciclando.png')} style={[styles.img]} />

              <Text style={[styles.texto]}>Você Ainda Não Começou a Reciclar</Text>

              <Text style={[styles.botao]}>Vamos Reciclar?</Text>
            </View>
          ) : (listaLixeiras.map((item, index) => (

            <View key={index}>
              <Lixeiras dado={item}/>
            </View>
          ))
          )}

        <Image source={require('../assets/images/icone_reciclagem.png')} style={[styles.icone]} />
      </View >

      
    </LinearGradient>


  );
}



const styles = StyleSheet.create({

  body: {
    flex: 1,

  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  img: {
    width: 250,
    height: 250,

  },
  img2: {
    position: "absolute",
    top: 40,
    padding: 10,
    height: 65,
    width: 240,

  },
  texto: {
    marginTop: 100,
    fontSize: 20,
    marginLeft: 50,
    marginRight: 50,
  },
  botao: {
    marginTop: 30,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    padding: 10,
    fontSize: 15

  },
  icone: {
    position: "absolute",
    bottom: 0,
    marginBottom: 30,
    width: 40,
    height: 40,
  },
  
  lista: {

  },


});


