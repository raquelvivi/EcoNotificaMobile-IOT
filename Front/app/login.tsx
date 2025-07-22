import { View, Image, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Cadastro() {
  const router = useRouter();

  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    pais: '',
    estado: '',
    cidade: '',
    bairro: ''
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleCadastro = async () => {
    try {
      const response = await fetch('https://econotifica-api.onrender.com/api/user/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const err = await response.json();
        Alert.alert('Erro', err?.mensagem || 'Erro ao cadastrar usuário');
        return;
      }

      const data = await response.json();
      console.log('Usuário cadastrado:', data);
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      router.push('/senha_email'); 
    } catch (error) {
      console.error('Erro no cadastro:', error);
      Alert.alert('Erro', 'Falha ao conectar com o servidor');
    }
  };

  return (
    <LinearGradient colors={['#FFFFFF', '#80BC82']} style={styles.body}>
      <Image source={require('../assets/images/logo_login.png')} style={styles.logo} />

      <View style={styles.loginBox}>
        <ScrollView contentContainerStyle={styles.formContainer}>

          <FormField label="Nome:" value={form.nome} onChangeText={text => handleChange('nome', text)} />
          <FormField label="Email:" keyboardType="email-address" value={form.email} onChangeText={text => handleChange('email', text)} />
          <FormField label="Senha:" secureTextEntry value={form.senha} onChangeText={text => handleChange('senha', text)} />
          <FormField label="CEP:" keyboardType="numeric" value={form.cep} onChangeText={text => handleChange('cep', text)} />
          <FormField label="País:" value={form.pais} onChangeText={text => handleChange('pais', text)} />
          <FormField label="Estado:" value={form.estado} onChangeText={text => handleChange('estado', text)} />
          <FormField label="Cidade:" value={form.cidade} onChangeText={text => handleChange('cidade', text)} />
          <FormField label="Bairro:" value={form.bairro} onChangeText={text => handleChange('bairro', text)} />

          <TouchableOpacity style={styles.button} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Cadastrar</Text>
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
      <TextInput style={styles.input} placeholder=" " placeholderTextColor="#ffffffaa" {...props} />
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
    width: 320,
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
  button: {
    marginTop: 20,
    backgroundColor: '#CDE7D6',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
  },
  buttonText: {
    color: '#1C4E2A',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
