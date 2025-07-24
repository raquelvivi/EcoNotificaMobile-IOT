import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';

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
  }, []); // o array vazio [] garante que isso rode só uma vez ao abrir a tela

  return (
    <View style={{ marginTop: 100, padding: 20 }}>
      {erro && <Text>{erro}</Text>}
      {localizacao ? (
        <Text>
          Latitude: {localizacao.coords.latitude}{"\n"}
          Longitude: {localizacao.coords.longitude}
        </Text>
      ) : (
        <Text>Obtendo localização...</Text>
      )}
    </View>
  );
}
