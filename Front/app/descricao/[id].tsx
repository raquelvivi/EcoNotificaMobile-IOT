import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import * as Location from 'expo-location';
import { LineChart, ProgressChart } from 'react-native-chart-kit';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import Feather from 'react-native-vector-icons/Feather';
import AnimatedLoader from 'react-native-animated-loader';

import Bola from '../../components/bolaGrafico'
import { Lixeira } from '../../type'

const screenWidth = Dimensions.get("window").width;

const data = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      data: [2, 4, 3, 8, 9, 6],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#15d76c',
  backgroundGradientTo: '#00863cff',
  decimalPlaces: 0, //arredonda os numeros na culuna
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
};





export default function TelaComLocalizacaoEGrafico() {

  const { id } = useLocalSearchParams();

  const [dados, setDados] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    if (dados == null) {

      (async () => {
        const resposta = await fetch(`https://econotifica-api.onrender.com/api/lixeira/${id}`);
        const lixeira = await resposta.json();
        setDados(lixeira)
        // console.log(lixeira)
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })();








      getPushTokenAndCheckLixeiras();
    }


  }, []);

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

    try {
      const resposta = await fetch('https://econotifica-api.onrender.com/api/lixeira');
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

  const simularNotificacao = async () => {
    try {
      const resposta = await fetch('https://econotifica-api.onrender.com/api/lixeira');
      const lixeiras = await resposta.json();
      const total = lixeiras.length;
      const cheia = lixeiras.find(l => l.situacao === 'cheia');

      await Notifications.scheduleNotificationAsync({
        content: {
          title: "🔔 Lixeiras monitoradas",
          body: cheia
            ? `Você tem ${total} lixeiras. A lixeira ${cheia.nome} está cheia!`
            : `Você tem ${total} lixeiras cadastradas.`,
        },
        trigger: null,
      });
    } catch (e) {
      console.error("Erro ao simular notificação:", e);
    }
  };

  if (loading) {
    return (
      <View style={styles.outro}>
        <View style={styles.overlay}>
          <AnimatedLoader
            visible={true}
            overlayColor="rgba(255, 255, 255, 0)"
            source={require('../../assets/images/Loading animation for Client book.json')}
            animationStyle={{ width: 300, height: 300, marginTop: -150 }}
            speed={1}
            loop={false}
          />

        </View>
      </View>
    );
  };

  return (
    <View style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.sombra}>
          <View style={styles.Container}>
            <Text style={styles.titulo}>{dados?.nome}</Text>

            <View style={styles.linha}>

              <View style={{ alignItems: 'flex-start' }}>
                <Text style={styles.texto}>Status: {dados?.situacao || "Manutenção"}</Text>
                <Text style={styles.texto}>Grupos: {dados?.grupo || "nenhum"}</Text>
              </View>


              {dados?.porcentagem !== undefined && (
                <View style={styles.BolaContainer}>
                  <Bola valores={dados.porcentagem} />


                </ View>
              )}


            </View>
          </View>
        </View>



        <View style={styles.graficoContainer}>

          <LineChart
            data={data} //conteudo
            width={screenWidth - 20}  //tamanho
            height={220}  //altura
            chartConfig={chartConfig} //styles
            bezier //arredonda a linha principal
            withInnerLines={false} //tira as linhas pontilhadas
            //withDots={true} // meche nos pontos
            fromZero={true} // os numeros da esquerda começam em zero

          />
        </View>


        <View style={[styles.linha, { marginTop: 40 }]}>
          <Text style={{ fontSize: 30 }}>💧</Text>
          <Text style={{ fontSize: 30 }}>🌡</Text>
        </View>
        <View style={[styles.linha, { marginTop: 10 }]}>
          <Text style={{ fontSize: 15 }}>{dados?.umidade || "0%"}</Text>
          <Text style={{ fontSize: 15 }}>{dados?.temperatura || "não registrado"}°</Text>
        </View>



        {/* ADICIONAR BOTÃO DE MUDAR NOME E DELETAR */}


      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  linha: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  gradient: {
    flex: 1,
    backgroundColor: "#D8FDD9"
  },
  scrollContainer: {
    padding: 20,
    paddingTop: 100,
  },
  graficoContainer: {
    marginTop: 40,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 5, //groçura
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  Container: {
    borderRadius: 40,

    backgroundColor: '#ffffff',
    padding: 16,

  },

  sombra: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 0,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  BolaContainer: {

  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  texto: {
    fontSize: 17,
    padding: 5,
    color: '#000',
  },
  grafico: {
    borderWidth: 1,
    borderColor: '#78eb6dff',
    borderRadius: 8,
  },
  botao: {
    backgroundColor: '#78eb6d',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  botaoTexto: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  outro: {

    position: 'relative',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,

    // backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
