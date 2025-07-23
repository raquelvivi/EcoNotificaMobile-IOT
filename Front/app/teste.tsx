import { Text, View, Image, StyleSheet, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from 'react';

import AnimatedLoader from 'react-native-animated-loader';
import frasesReciclagem from '../data/frasesReciclagem';

export default function Index() {

  const [loading, setLoading] = useState(true);
  const [frase, setFrase] = useState('');

  useEffect(() => {
    const indexAleatorio = Math.floor(Math.random() * frasesReciclagem.length);
    setFrase(frasesReciclagem[indexAleatorio]);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 segundos

    return () => clearTimeout(timer);
  }, []);




  // <View style={styles.container}>
  //   <Text style={styles.text}>EcoNotifica</Text>
  //   <Text style={styles.text2}>{frase}</Text>
  //   <ActivityIndicator style={styles.ico} size="large" color="#4CAF50" />
  // </View>





  if (loading) {
    return (
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
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Entrou!</Text>
    </View>
  );
}

// erro: 404 {/* https://lottiefiles.com/free-animation/404-error-page-with-cat-ZltNpefmQj */}




const styles = StyleSheet.create({


  main: {
    flex: 1,
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
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  ico: {

    position: 'absolute',
    bottom: 100,

  },



});


