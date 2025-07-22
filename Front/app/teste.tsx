import { Text, View, Image, StyleSheet, ActivityIndicator} from "react-native";
import React, { useState, useEffect } from 'react';

import AnimatedLoader from 'react-native-animated-loader';


function LoadingScreen({ message = 'Carregando...' }) {
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(0,0,0,0.3)"
        source={require('../assets/images/Loading animation for Client book.json')}
        animationStyle={{ width: 300, height: 300 }}
        speed={0.2}
        loop={false}
      />
    </View>
    </View>
  );
}



export default function Index() {


    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carregamento
    setTimeout(() => setLoading(false), 30000);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> entrou</Text>
    </View>




//     <View style={[styles.main]}>

//         <LottieView 
//             source={animacao}
//             autoPlay
//             resizeMode='contain'
//             loop
//             style={{ width: 200, height: 200 }}
//         />
// {/* https://lottiefiles.com/free-animation/404-error-page-with-cat-ZltNpefmQj */}
//     </View>




  );
}



const styles = StyleSheet.create({

  
  main: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: '#000000', // fundo semitransparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    color: '#ffffff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },



});


