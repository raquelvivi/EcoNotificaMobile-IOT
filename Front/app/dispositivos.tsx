import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Dispositivos() {
  const dispositivos = [
    { nome: 'exemplo de lixera 1', conectado: false },
    { nome: "exemplo de lixera 2", conectado: true },
    { nome: 'exemplo de lixera 3', conectado: false },
    { nome: 'exemplo de lixera 4', conectado: true },
  ];

  return (
    <LinearGradient colors={['#FFFFFF', '#80BC82']} style={styles.body}>
      <Image
        source={require('../assets/images/logo_login.png')}
        style={styles.logo}
      />

      <View style={styles.container}>
        <Text style={styles.title}>Dispositivos Conectados</Text>

        <ScrollView contentContainerStyle={styles.listContainer}>
          {dispositivos.map((item, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.deviceName}>{item.nome}</Text>
              <Text style={[styles.status, item.conectado ? styles.connected : styles.notConnected]}>
                {item.conectado ? 'Conectado' : 'Não conectado'}
              </Text>
            </View>
          ))}
        </ScrollView>
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
    fontSize: 15                          ,
    marginTop: 4,
  },
  connected: {
    color: '#207a3c',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  notConnected: {
    color: '#7a7a7a',
    fontStyle: 'italic',
  },
  recicleIcon: {
    width: 28,
    height: 28,
    marginTop: 20,
    tintColor: '#ffffff',
  },
});
