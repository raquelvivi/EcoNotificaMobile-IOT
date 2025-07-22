import { Text, View, Image, StyleSheet, Button, ScrollView, Dimensions } from "react-native";
import React, { useState, useEffect } from 'react';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';


import Lixeiras from '../components/lixeira';
import Grupo from '../components/grupos';
import IconeLink from '../components/iconeLink';


import { Lixeira } from '../type'

import { API_BASE_URL } from '../conf/api'

const deviceWidth = Dimensions.get('window').width;


export default function Index() {
  const router = useRouter();

  const [dados, setDados] = useState<Lixeira[]>([]);

  useEffect(() => { //pesquisa para colocar lixeiras
    fetch(`${API_BASE_URL}/api/lixeira`)
      .then((res) => res.json())
      .then((data: Lixeira[]) => setDados(data))
      .catch((err) => console.log(err));
    console.log(dados)
  }, []);





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

            {dados.length == 0 ? (
              <View style={[styles.main]}>
                <Image source={require('../assets/images/reciclando.png')} style={[styles.img]} />


                <Text style={[styles.botao]}>Vamos Reciclar?</Text>
              </View>
            ) : (dados.slice(15, 20).map((item: Lixeira, index) => (

              <View key={index}>
                <Lixeiras dado={item} />
              </View>
            ))
            )}
          </View>

          <Image source={require('../assets/images/icone_reciclagem.png')} style={[styles.icone]} />

        </View >

        <View style={[styles.main]}>

          <Image source={require('../assets/images/logo_login.png')} style={[styles.img2]} />


          <View style={styles.quadrado}>
            { <MapView
              style={styles.map}
              initialRegion={{
                latitude: -22.9528074,
                longitude: -43.214294,
                latitudeDelta: 0.01, // quanto menor, mais zoom
                longitudeDelta: 0.01,
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

            </MapView>}
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
    marginTop: 40,
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
    overflow: 'hidden', // ESSENCIAL para aplicar o borderRadius no MapView
    alignSelf: 'center',
  },
  markerCustom: {
  padding: 5,

}


});


