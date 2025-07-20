import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

interface Lixeira {
  nome: string;
  serial: string;
  situacao: 'Cheia' | 'Parcial' | 'Vazia';
  conectado: boolean;
  porcentagem: number;
}

export default function Dispositivos() {
  const [lixeiras, setLixeiras] = useState<Lixeira[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buscarLixeiras = async () => {
      try {
        const response = await axios.get('http://192.168.1.20:8080/api/lixeiras');
        console.log('📦 Dados recebidos do backend:', response.data);
        setLixeiras(response.data);
      } catch (err) {
        console.error('Erro ao buscar lixeiras:', err);
      } finally {
        setLoading(false);
      }
    };

    buscarLixeiras();
    const interval = setInterval(buscarLixeiras, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LinearGradient colors={['#FFFFFF', '#80BC82']} style={styles.body}>
      <Image
        source={require('../assets/images/logo_login.png')}
        style={styles.logo}
      />

      <View style={styles.container}>
        <Text style={styles.title}>Dispositivos Conectados</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#207a3c" />
        ) : (
          <ScrollView contentContainerStyle={styles.listContainer}>
            {lixeiras.map((item, index) => (
              <View key={index} style={styles.item}>
                <Text style={styles.deviceName}>{item.nome}</Text>

                {item.conectado ? (
                  <>
                    <Text
                      style={[
                        styles.status,
                        item.situacao === 'Cheia'
                          ? styles.cheia
                          : item.situacao === 'Parcial'
                          ? styles.parcial
                          : styles.vazia,
                      ]}
                    >
                      {`Conectado - ${item.situacao}`}
                    </Text>
                    <Text style={styles.percent}>{`Nível: ${item.porcentagem}%`}</Text>
                  </>
                ) : (
                  <Text style={[styles.status, styles.notConnected]}>
                    Não conectado
                  </Text>
                )}
              </View>
            ))}
          </ScrollView>
        )}
      </View>

      <Image
        source={require('../assets/images/icone_reciclagem.png')}
        style={styles.recicleIcon}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    top: 60,
    width: 240,
    height: 65,
    resizeMode: 'contain',
  },
  container: {
    marginTop: 130,
    width: 320,
    backgroundColor: '#e5ffe9cc',
    borderRadius: 16,
    padding: 40,
    shadowColor: '#3b6d42',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#224d29',
    marginBottom: 15,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#b2d8b4',
  },
  deviceName: {
    fontSize: 18,
    color: '#2e4d30',
    fontWeight: 'bold',
  },
  status: {
    fontSize: 15,
    marginTop: 4,
  },
  notConnected: {
    color: '#7a7a7a',
    fontStyle: 'italic',
  },
  cheia: {
    color: 'red',
    fontWeight: 'bold',
  },
  parcial: {
    color: 'orange',
    fontWeight: 'bold',
  },
  vazia: {
    color: 'green',
    fontWeight: 'bold',
  },
  percent: {
    fontSize: 14,
    marginTop: 2,
    color: '#444',
  },
  recicleIcon: {
    width: 28,
    height: 28,
    marginTop: 20,
    tintColor: '#ffffff',
  },
});
