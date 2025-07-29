import { Text, View, Image, StyleSheet, Button, ScrollView, Dimensions } from "react-native";
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';
import AnimatedLoader from 'react-native-animated-loader';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Lixeiras from '../components/lixeira';
import IconeLink from '../components/iconeLink';

import frasesReciclagem from '../data/frasesReciclagem'; 
import { Lixeira } from '../type'
import { API_BASE_URL } from '../conf/api'

const deviceWidth = Dimensions.get('window').width;


export default function Index() {
  const router = useRouter();

  const [dados, setDados] = useState<Lixeira[]>([]);
  const [loading, setLoading] = useState(true);
  const [frase, setFrase] = useState(''); 
  const [localizacao, setLocalizacao] = useState(null);
  const [erro, setErro] = useState('');

  const [id, setId] = useState(""); 

  useEffect(() => {
    const verificarLogin = async () => {
      const idPessoa = await AsyncStorage.getItem('usuarioId');
      if (idPessoa) {
        setId(idPessoa)
      }

      console.log(`id da pessoa logada: ${idPessoa}`)
    };
 //if se não tiver pessoa buscar.
    verificarLogin();

    const indexAleatorio = Math.floor(Math.random() * frasesReciclagem.length);
    setFrase(frasesReciclagem[indexAleatorio]);
    
  }, []);

  // Frase e dados
  useEffect(() => {
    const fetchFraseEDados = async () => {
      try {
        let url = '';

        if (id) {
          url = `${API_BASE_URL}/api/lixeira/pessoa/${id}`;
        } else {
          url = `${API_BASE_URL}/api/lixeira`;
        }

        const res = await fetch(url);
        const data: Lixeira[] = await res.json();
        setDados(data);
      } catch (err) {
        console.error("Erro ao carregar dados:", err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2500);
      }
    };

    fetchFraseEDados();
  }, [id]); // <- Executa quando o `id` estiver pronto


// Localização
useEffect(() => {
  const localizar = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErro('Permissão de localização negada.');
      return;
    }

    const local = await Location.getCurrentPositionAsync({});
    setLocalizacao(local);
  };

  localizar();
}, []);



  if (loading) {
    return (
      <View style={styles.outro}>
        <View style={styles.overlay}>
          <AnimatedLoader
            visible={true}
            overlayColor="rgba(255, 255, 255, 0)"
            source={require('../assets/images/Loading animation for Client book.json')}
            animationStyle={{ width: 300, height: 300, marginTop: -150 }}
            speed={0.8}
            loop={false}
          />
          
        </View>

        <Text style={styles.text2}>{frase}</Text>
      </View>
    );
  }



  return (



    //dando cor de fundo
    <LinearGradient
      colors={['#FFFFFF', '#80BC82']} // branco para verde 
      style={styles.body}
    >
      <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>


        <View style={[styles.main]}>

          <Image source={require('../assets/images/logo_login.png')} style={[styles.img2]} />

          <View style={[styles.lista]}>

            <ScrollView>
              {dados.length == 0 ? (
                <View style={[styles.main]}>
                  <Image source={require('../assets/images/reciclando.png')} style={[styles.img]} />


                  <Text style={[styles.botao]}>Vamos Reciclar?</Text>
                </View>
              ) : (dados.map((item: Lixeira, index) => ( //.slice(15, 20)

                <View key={index}>
                  <Lixeiras dado={item} />
                </View>
              ))
              )}
            </ScrollView>
          </View>

          <Image source={require('../assets/images/icone_reciclagem.png')} style={[styles.icone]} />

        </View >

        <View style={[styles.main]}>

          <Image source={require('../assets/images/logo_login.png')} style={[styles.img2]} />


          <View style={styles.quadrado}>
            {/* {localizacao && (<MapView
              style={styles.map}
              initialRegion={{
                latitude: localizacao.coords.latitude || -22.9528074,
                longitude: localizacao.coords.longitude || -43.214294,
                latitudeDelta: 0.10, // quanto menor, mais zoom
                longitudeDelta: 0.10,
              }}
            >
              {dados.map((item: Lixeira, index) => (
                <Marker
                  key={index}
                  coordinate={{ latitude: parseFloat(item.latitude), longitude: parseFloat(item.longitude) }}
                  title={`${item.nome}`}
                  description={`ID: ${item.id}`}
                >
                  <View style={styles.markerCustom}>
                    <Text style={{ fontSize: 24 }}>♻️</Text>
                  </View>
                </Marker>
              ))}

            </MapView>)} */}


            {dados && (<MapView
              style={styles.map}
              initialRegion={{
                latitude: localizacao?.coords.latitude || -22.9528074,
                longitude: localizacao?.coords.longitude || -43.214294,
                latitudeDelta: 0.10, // quanto menor, mais zoom
                longitudeDelta: 0.10,
              }}
            >
              {dados.map((item: Lixeira, index) => (
                <Marker
                  key={index}
                  coordinate={{ latitude: parseFloat(item.latitude), longitude: parseFloat(item.longitude) }}
                  title={`${item.nome}`}
                  description={`ID: ${item.id}`}
                >
                  <View style={styles.markerCustom}>
                    <Text style={{ fontSize: 24 }}>♻️</Text>
                  </View>
                </Marker>
              ))}

            </MapView>) }
          </View>

          <Image source={require('../assets/images/icone_reciclagem.png')} style={[styles.icone]} />

        </View >



      </ScrollView>

      <View>
        <IconeLink />
      </View>

    </LinearGradient>


  );
}



const styles = StyleSheet.create({

  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"

  },
  main: {
    width: deviceWidth,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    // flexDirection: 'row'
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
    position: "absolute",
    bottom: 0,
    marginTop: 30,
    marginBottom: 60,
    width: 40,
    height: 40,
  },





  lista: {
    marginTop: 0,
    maxHeight: 550,
  },


  conteine: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 20,
    minHeight: 200,
    maxHeight: 500,


  },

  map: {
    width: 300,
    height: 500,
    zIndex: 2,
    position: "absolute",

  },
  quadrado: {
    width: 300,
    height: 500,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000',
    overflow: 'hidden',
    alignSelf: 'center',
  },
  markerCustom: {
    padding: 5,

  },

  overlay: {
    flex: 1,
    
    // backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: -100,
    fontSize: 30,
    color: '#000000',
  },
  text2: {
    marginTop: 550,
    zIndex: 21,
    position: "absolute",
    fontSize: 18,
    color: 'rgb(100, 175, 96)',
    textAlign: 'center',
    fontWeight: '500',
    maxWidth: 350,
  },

  ico: {

    position: 'absolute',
    bottom: 100,

  },
  outro:{

    position: 'relative',
    alignItems: 'center',
  }


});


