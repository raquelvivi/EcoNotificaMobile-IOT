import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ConectarDispositivo() {
  const [serial, setSerial] = useState('');

  const handleConectar = () => {
    if (!serial.trim()) {
      Alert.alert('Erro', 'Digite o número de série do dispositivo.');
      return;
    }

    // Conectar com bluetooth, API ou MQTT futuramente
    Alert.alert('🔗 Dispositivo', `Tentando conectar com o dispositivo de serial: ${serial}`);
  };

  return (
    <LinearGradient colors={['#FFFFFF', '#80BC82']} style={styles.body}>
      <Image
        source={require('../assets/images/logo_login.png')}
        style={styles.logo}
      />

      <View style={styles.container}>
        <Text style={styles.title}>Conectar Dispositivo</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o número de série"
          placeholderTextColor="#7a997c"
          value={serial}
          onChangeText={setSerial}
        />

        <TouchableOpacity style={styles.button} onPress={handleConectar}>
          <Text style={styles.buttonText}>Conectar</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={require('../assets/images/icone_reciclagem.png')}
        style={styles.reciclagem}
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
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 45,
    backgroundColor: '#fff',
    borderColor: '#b2d8b4',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#1f552a',
  },
  button: {
    backgroundColor: '#207a3c',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  reciclagem: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    opacity: 0.7,
  },
});
