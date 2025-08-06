// Essa tela foi criada para simular notificação. (vamos ter que mudar para a notificação se comunicar com a placa)
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import * as Notifications from "expo-notifications";

// Configuração inicial das notificações
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function SimularNotificacao() {
  const [simulando, setSimulando] = useState(false);

  const simularStatusLixeira = async (status: 'cheia' | 'vazia' | 'parcial') => {
    setSimulando(true);
    
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `Lixeira ${status.toUpperCase()}`,
        body: status === 'cheia' 
          ? 'A lixeira está cheia e precisa ser esvaziada!'
          : status === 'vazia'
          ? 'A lixeira está vazia'
          : 'A lixeira está parcialmente cheia',
        data: {
          tipo: 'simulacao',
          status,
          timestamp: new Date().toISOString()
        },
      },
      trigger: { seconds: 1 },
    });

    setSimulando(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Simulador de Status da Lixeira</Text>
      
      <TouchableOpacity 
        style={[styles.botao, styles.botaoCheia]}
        onPress={() => simularStatusLixeira('cheia')}
        disabled={simulando}
      >
        <Text style={styles.botaoTexto}>Simular Lixeira CHEIA</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.botao, styles.botaoParcial]}
        onPress={() => simularStatusLixeira('parcial')}
        disabled={simulando}
      >
        <Text style={styles.botaoTexto}>Simular Lixeira PARCIAL</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.botao, styles.botaoVazia]}
        onPress={() => simularStatusLixeira('vazia')}
        disabled={simulando}
      >
        <Text style={styles.botaoTexto}>Simular Lixeira VAZIA</Text>
      </TouchableOpacity>

      {simulando && <Text style={styles.carregando}>Enviando notificação...</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  titulo: { 
    fontSize: 22, 
    marginBottom: 30, 
    fontWeight: "bold",
    color: '#333'
  },
  botao: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  botaoCheia: {
    backgroundColor: "#e74c3c",
  },
  botaoParcial: {
    backgroundColor: "#f39c12",
  },
  botaoVazia: {
    backgroundColor: "#2ecc71",
  },
  botaoTexto: { 
    color: "#fff", 
    fontSize: 16,
    fontWeight: 'bold'
  },
  carregando: {
    marginTop: 20,
    color: '#7f8c8d',
    fontStyle: 'italic'
  }
});
