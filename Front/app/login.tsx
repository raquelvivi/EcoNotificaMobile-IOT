import { View, Image, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Picker } from '@react-native-picker/picker';
import * as Notifications from 'expo-notifications';


async function salvarTokenNoServidor(userId, expoToken) {
  try {
    const response = await fetch('https://econotifica-api.onrender.com/api/user/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, expoToken }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Erro ao salvar token no servidor');
    }
    console.log('Token salvo no servidor com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar token no servidor:', error);
  }
}


export default function Cadastro() {
  const router = useRouter();
  const { tipoUsuario } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    tipo: tipoUsuario || '',
    nome: '',
    email: '',
    senha: '',
    cep: '',
    pais: 'Brasil',
    estado: '',
    cidade: '',
    bairro: ''
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const buscarCEP = async (cep) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      
      if (!data.erro) {
        setForm(prev => ({
          ...prev,
          estado: data.uf,
          cidade: data.localidade,
          bairro: data.bairro
        }));
      }
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  };

  const handleCadastro = async () => {
    // Validações
    if (!form.tipo || !form.nome || !form.email || !form.senha || !form.cidade) {
      Alert.alert('Erro', 'Preencha todos os campos obrigatórios');
      return;
    }

    if (form.senha.length < 6) {
      Alert.alert('Erro', 'A senha deve ter no mínimo 6 caracteres');
      return;
    }

    if (!form.email.includes('@') || !form.email.includes('.')) {
      Alert.alert('Erro', 'Email inválido');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://econotifica-api.onrender.com/api/user', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tipo: form.tipo,
          nome: form.nome,
          email: form.email,
          senha: form.senha,
          bairro: form.bairro,
          cidade: parseInt(form.cidade)
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao cadastrar');
      }

      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      router.push('/senha_email');
    } catch (error) {
      console.error('Erro no cadastro:', error);
      Alert.alert('Erro', error.message || 'Falha ao cadastrar usuário');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient colors={['#FFFFFF', '#80BC82']} style={styles.body}>
      <Image source={require('../assets/images/logo_login.png')} style={styles.logo} />

      <View style={styles.loginBox}>
        <ScrollView contentContainerStyle={styles.formContainer}>
          {form.tipo && (
            <Text style={styles.tipoUsuario}>
              Cadastrando como: {form.tipo === 'organizacao' ? 'Empresa/Prefeitura' : 'Pessoa'}
            </Text>
          )}

          <FormField 
            label="Nome completo*:" 
            value={form.nome} 
            onChangeText={text => handleChange('nome', text)} 
          />
          
          <FormField 
            label="Email*:" 
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email} 
            onChangeText={text => handleChange('email', text)} 
          />
          
          <FormField 
            label="Senha (mín. 6 caracteres)*:" 
            secureTextEntry
            value={form.senha} 
            onChangeText={text => handleChange('senha', text)} 
          />
          
          <FormField 
            label="CEP:" 
            keyboardType="numeric"
            value={form.cep} 
            onChangeText={text => {
              handleChange('cep', text);
              if (text.length === 8) buscarCEP(text);
            }}
          />

          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Cidade*:</Text>
            <Picker
              selectedValue={form.cidade}
              onValueChange={(itemValue) => handleChange('cidade', itemValue)}
              style={styles.picker}
              dropdownIconColor="#fff"
            >
              <Picker.Item label="Selecione sua cidade" value="" />
              <Picker.Item label="São Paulo" value="1" />
              <Picker.Item label="Rio de Janeiro" value="2" />
              <Picker.Item label="Belo Horizonte" value="3" />
              <Picker.Item label="Salvador" value="4" />
              <Picker.Item label="Porto Alegre" value="5" />
              <Picker.Item label="Recife" value="6" />
              <Picker.Item label="Fortaleza" value="7" />
              <Picker.Item label="Brasília" value="8" />
              <Picker.Item label="Curitiba" value="9" />
              <Picker.Item label="Florianópolis" value="10" />
              <Picker.Item label="Currais Novos" value="11" />
            </Picker>
          </View>

          <FormField 
            label="Bairro:" 
            value={form.bairro} 
            onChangeText={text => handleChange('bairro', text)} 
          />

          <TouchableOpacity 
            style={[styles.button, loading && styles.buttonDisabled]} 
            onPress={handleCadastro}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? 'Cadastrando...' : 'Finalizar Cadastro'}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

function FormField({ label, ...props }) {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        style={styles.input} 
        placeholder=" " 
        placeholderTextColor="#ffffffaa" 
        {...props} 
      />
    </View>
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
  loginBox: {
    width: '85%',
    backgroundColor: '#80bc82dd',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1.5,
    borderColor: '#3b6d42',
    marginTop: 140,
    marginBottom: 20,
    maxHeight: '75%',
  },
  formContainer: {
    paddingBottom: 20,
  },
  tipoUsuario: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C4E2A',
    marginBottom: 20,
    textAlign: 'center'
  },
  fieldContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 4,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ffffff',
    fontSize: 16,
    paddingVertical: 4,
    color: '#fff',
  },
  picker: {
    backgroundColor: '#ffffff20',
    borderBottomWidth: 1,
    borderColor: '#ffffff',
    color: '#fff',
  },
  button: {
    marginTop: 25,
    backgroundColor: '#CDE7D6',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#1C4E2A',
    fontWeight: 'bold',
    fontSize: 16,
  },
});