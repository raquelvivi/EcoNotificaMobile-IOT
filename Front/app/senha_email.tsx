import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SenhaEmail() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://econotifica-api.onrender.com/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });
  
      if (!response.ok) {
        Alert.alert('Erro', 'Credenciais inválidas ou erro na autenticação');
        return;
      }
  
      const data = await response.json();
      await AsyncStorage.setItem('usuarioId', data.id.toString());

      console.log('Usuário logado:', data);
      router.push('/'); // redirecionar após login bem-sucedido
    } catch (error) {
      console.error('Erro no login:', error);
      Alert.alert('Erro', 'Não foi possível conectar ao servidor');
    }
  };
  

  return (
    <LinearGradient colors={['#ffffff', '#7BBF8C']} style={styles.body}>
      <Image source={require('../assets/images/logo_login.png')} style={styles.logo} />

      <View style={styles.loginBox}>
        <Text style={styles.loginTitle}>LOGIN</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder=""
            placeholderTextColor="#ffffff"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Senha:</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder=""
            placeholderTextColor="#ffffff"
            value={senha}
            onChangeText={setSenha}
          />
        </View>
      </View>

      <View style={styles.pronto_cadastro}>
        <TouchableOpacity style={styles.linkBox} onPress={handleLogin}>
          <Text style={styles.buttonText}>Pronto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkBox} onPress={() => router.push('/quem')}>
          <Text style={styles.link}>Criar conta</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.linkBox} onPress={() => router.push('/nova_senha')}>
        <Text style={styles.link}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <Image source={require('../assets/images/icone_reciclagem.png')} style={styles.recicleIcon} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  // ... mantém o CSS exatamente como está, sem mudanças ...
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 40,
  },
  logo: {
    width: 240,
    height: 65,
    resizeMode: 'contain',
    marginTop: 20,
  },
  logoUnderline: {
    textDecorationLine: 'underline',
    textDecorationColor: '#1C4E2A',
    textDecorationStyle: 'solid',
  },
  loginBox: {
    backgroundColor: '#B9E4C4',
    borderWidth: 1.5,
    borderColor: '#4C8F5C',
    borderRadius: 10,
    padding: 20,
    width: 270,
    alignItems: 'flex-start',
    marginTop: 10,
  },
  loginTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C4E2A',
    alignSelf: 'center',
    marginBottom: 14,
  },
  inputGroup: {
    marginBottom: 14,
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: '#1C4E2A',
    marginBottom: 4,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    fontSize: 16,
    paddingVertical: 2,
    color: '#ffffff',
  },
  linkBox: {
    backgroundColor: '#CDE7D6',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
  },
  link: {
    color: '#1C4E2A',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    borderWidth: 1.5,
    borderColor: '#1C4E2A',
    borderRadius: 6,
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderStyle: 'dotted',
  },
  buttonText: {
    color: '#1C4E2A',
    fontWeight: 'bold',
    fontSize: 16,
  },
  recicleIcon: {
    width: 30,
    height: 30,
    tintColor: '#ffffff',
    marginBottom: 5,
  },

  pronto_cadastro: {
  flexDirection: 'row',
  gap: 10, 
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10,
},

});
