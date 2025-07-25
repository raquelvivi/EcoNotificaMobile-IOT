import { Text, View, Image, StyleSheet, ScrollView, Dimensions } from "react-native";
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';
import ConnectionWrapper from "../components/ConnectionWrapper";

import Lixeiras from '../components/lixeira';
import IconeLink from '../components/iconeLink';
import AnimatedLoader from 'react-native-animated-loader';

import { Lixeira } from '../type';
import { API_BASE_URL } from '../conf/api';

const deviceWidth = Dimensions.get('window').width;

export default function Index() {
  const router = useRouter();
  const [dados, setDados] = useState<Lixeira[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/lixeira`);
        const data: Lixeira[] = await res.json();
        setDados(data);

        // Espera 25 segundos DEPOIS que os dados chegaram
        setTimeout(() => {
          setLoading(false);
        }, 25000);

      } catch (err) {
        console.error("Erro ao carregar dados:", err);
      }
    };

    fetchDados();
  }, []);

  if (loading) {
    return (
      <ConnectionWrapper>
        <View style={styles.overlay}>
          <AnimatedLoader
            visible={true}
            overlayColor="rgb(255, 255, 255)"
            source={require('../assets/images/Loading animation for Client book.json')}
            animationStyle={{ width: 300, height: 300 }}
            speed={0.2}
            loop={false}
          />
        </View>
      </ConnectionWrapper>
    );
  }

  return (
    <LinearGradient colors={['#FFFFFF', '#80BC82']} style={styles.body}>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        {/* Página 1 */}
        <View style={styles.main}>
          <Image source={require('../assets/images/logo_login.png')} style={styles.img2} />
          <View style={styles.lista}>
            {dados.length === 0 ? (
              <View style={styles.main}>
                <Image source={require('../assets/images/reciclando.png')} style={styles.img} />
                <Text style={styles.botao}>Vamos Reciclar?</Text>
              </View>
            ) : (
              dados.slice(15, 20).map((item: Lixeira, index) => (
                <View key={index}>
                  <Lixeiras dado={item} />
                </View>
              ))
            )}
          </View>
          <Image source={require('../assets/images/icone_reciclagem.png')} style={styles.icone} />
        </View>

        {/* Página 2 */}
        <View style={styles.main}>
          <Image source={require('../assets/images/logo_login.png')} style={styles.img2} />
          <View style={styles.quadrado}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: -22.9528074,
                longitude: -43.214294,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              {dados.map((item: Lixeira, index) => (
                <Marker
                  key={index}
                  coordinate={{
                    latitude: parseFloat(item.latitude),
                    longitude: parseFloat(item.longitude)
                  }}
                  title={item.nome}
                  description={`ID: ${item.id}`}
                >
                  <View style={styles.markerCustom}>
                    <Text style={{ fontSize: 24 }}>♻️</Text>
                  </View>
                </Marker>
              ))}
            </MapView>
          </View>
          <Image source={require('../assets/images/icone_reciclagem.png')} style={styles.icone} />
        </View>
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
    overflow: 'hidden',
    alignSelf: 'center',
  },
  markerCustom: {
    padding: 5,
  },
  overlay: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: -100,
    fontSize: 30,
    color: '#000000',
  },
  text2: {
    marginTop: 50,
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
});
