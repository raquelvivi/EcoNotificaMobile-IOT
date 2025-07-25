import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import * as Location from 'expo-location';
import { LinearGradient } from 'expo-linear-gradient';
import { StackedBarChart } from 'react-native-chart-kit';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';


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
     (async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErro('Permissão de localização negada.');
      return;
    }

    const local = await Location.getCurrentPositionAsync({});
    setLocalizacao(local);
  })();

  async function getPushTokenAndCheckLixeiras() {
    if (!Device.isDevice) {
      alert('Notificações só funcionam em dispositivos físicos.');
      return;
    }

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('Permissão de notificação negada');
      return;
    }

    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log('Expo push token:', token);

    // Aqui pega os dados das lixeiras
    try {
      const resposta = await fetch('https://econotifica-api.onrender.com/api/lixeira'); // Substitua pelo IP da sua API
      const lixeiras = await resposta.json();

      const lixeirasCheias = lixeiras.filter(l => l.situacao === 'cheia');
      console.log('Lixeiras cheias:', lixeirasCheias);

      for (const lixeira of lixeirasCheias) {
        await fetch('https://exp.host/--/api/v2/push/send', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: token,
            title: 'Lixeira cheia!',
            body: `A lixeira ${lixeira.nome} está cheia!`,
          }),
        });
      }
    } catch (e) {
      console.error('Erro ao buscar lixeiras:', e);
    }
  }

  getPushTokenAndCheckLixeiras();
  }, []);

  return (
    <LinearGradient colors={['#ffffff', '#80BC82']} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.localizacaoContainer}>
          <Text style={styles.titulo}>Localização Atual</Text>
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
