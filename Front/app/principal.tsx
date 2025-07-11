import { Text, View, Image, StyleSheet, Button, ScrollView  } from "react-native";
import React, { useState, useEffect } from 'react';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

import Lixeiras from '../components/lixeira'

import { Lixeira } from '../type'

import { API_BASE_URL } from '../../config/api'

export default function Index() {
  const router = useRouter();
  
  const [dados, setDados] = useState<Lixeira[]>([]);
  
  useEffect(() => { //pesquisa para colocar lixeiras
      fetch(`${API_BASE_URL}/api/lixeira`) // use o IP local da sua máquina ou suba o back para o render (back online)
      .then((res) => res.json())
      .then((data: Lixeira[]) => setDados(data))
      .catch((err) => console.log(err));
  }, []);



  return (
    //dando cor de fundo
    <LinearGradient
      colors={['#FFFFFF', '#80BC82']} // branco para verde 
      style={styles.body}
    >
      <ScrollView>


      <View style={[styles.main]}>

        <Image source={require('../assets/images/logo_login.png')} style={[styles.img2]} />

        
        
        <View style={[styles.lista]}>
        
        {dados.length == 0 ? (
          <View style={[styles.main]}>
              <Image source={require('../assets/images/reciclando.png')} style={[styles.img]} />

              <Text style={[styles.texto]}>Você Ainda Não Começou a Reciclar</Text>

              <Text style={[styles.botao]}>Vamos Reciclar?</Text>
            </View>
            ) : (dados.slice(0, 6).map((item:Lixeira, index) => (

            <View key={index}>
              <Lixeiras dado={item}/>
            </View>
          ))
          )}
        </View>

        <Image source={require('../assets/images/icone_reciclagem.png')} style={[styles.icone]} />

      </View >

        </ScrollView>

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
    marginTop: 50,
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
    //position: "absolute",
    bottom: 0,
    marginTop: 30,
    marginBottom: 30,
    width: 40,
    height: 40,
  },
  
  lista: {
    marginTop: 200,
  },


});


