import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import * as Location from 'expo-location';
import { LinearGradient } from 'expo-linear-gradient';
import { StackedBarChart } from 'react-native-chart-kit';

import Bola from '../components/bolaGrafico'

const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr"],
  data: [
    [3840],
    [1600],
    [640],
    [3320]
  ],
  barColors: ['#78eb6dff'],
};

export default function TelaComLocalizacaoEGrafico() {
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
    <LinearGradient colors={['#ffffff', '#80BC82']} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <Bola />
        <View style={styles.graficoContainer}>
          <Text style={styles.titulo}>Cheia por Semana</Text>
          <StackedBarChart
            data={data}
            width={screenWidth - 40}
            height={220}
            chartConfig={{
              backgroundColor: "#fff",
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            style={styles.grafico}
          />
        </View>

      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  scrollContainer: {
    padding: 20,
    paddingTop: 100,
  },
  localizacaoContainer: {
    marginBottom: 40,
  },
  graficoContainer: {
    alignItems: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  texto: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
  },
  grafico: {
    borderWidth: 1,
    borderColor: '#78eb6dff',
    borderRadius: 8,
  },
});
