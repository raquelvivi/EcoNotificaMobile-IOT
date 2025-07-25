import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import { LinearGradient } from 'expo-linear-gradient';

export default function TelaComLocalizacao() {
  const [localizacao, setLocalizacao] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErro('Permissão de localização negada.');
        return;
      }

      const local = await Location.getCurrentPositionAsync({});
      setLocalizacao(local);
    })();
  }, []);

  return (
    <LinearGradient
      colors={['#ffffff', '#80BC82']}
      style={styles.gradient}
    >
      <View style={styles.container}>
        {erro && <Text style={styles.texto}>{erro}</Text>}
        {localizacao ? (
          <Text style={styles.texto}>
            Latitude: {localizacao.coords.latitude}{"\n"}
            Longitude: {localizacao.coords.longitude}
          </Text>
        ) : (
          <Text style={styles.texto}>Obtendo localização...</Text>
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1
  },
  container: {
    marginTop: 100,
    padding: 20
  },
  texto: {
    color: '#000', // preto pra contrastar com o fundo claro
    fontSize: 16
  }
});
