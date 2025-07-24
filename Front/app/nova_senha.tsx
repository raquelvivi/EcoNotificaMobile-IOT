import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function NovaSenha() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleTrocarSenha = async () => {
    // Validações básicas
    if (!email) {
      Alert.alert("Erro", "Por favor, insira seu email cadastrado");
      return;
    }

    if (novaSenha.length < 6) {
      Alert.alert("Erro", "A senha deve ter no mínimo 6 caracteres");
      return;
    }

    if (novaSenha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }

    setIsLoading(true);

    try {
      // 1. Verifica se o email existe
      const checkResponse = await fetch('https://econotifica-api.onrender.com/api/user/check-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const checkData = await checkResponse.json();

      if (!checkResponse.ok) {
        throw new Error(checkData.message || "Email não encontrado");
      }

      // 2. Atualiza a senha
      const updateResponse = await fetch('https://econotifica-api.onrender.com/api/user/senha', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          novaSenha 
        }),
      });

      const updateData = await updateResponse.json();

      if (!updateResponse.ok) {
        throw new Error(updateData.message || "Erro ao atualizar senha");
      }

      // 3. Verificação extra - tenta fazer login com a nova senha
      const loginResponse = await fetch('https://econotifica-api.onrender.com/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          senha: novaSenha 
        }),
      });

      if (!loginResponse.ok) {
        throw new Error("Senha atualizada, mas falha ao verificar login. Tente fazer login manualmente.");
      }

      Alert.alert("Sucesso", "Senha atualizada com sucesso! Você já pode fazer login com a nova senha.");
      router.push('/senha_email');
    } catch (error) {
      console.error("Erro completo:", error);
      Alert.alert("Erro", error.message || "Ocorreu um erro ao atualizar a senha");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LinearGradient colors={['#ffffff', '#7BBF8C']} style={styles.body}>
      <Image source={require('../assets/images/logo_login.png')} style={styles.logo} />

      <View style={styles.loginBox}>
        <Text style={styles.loginTitle}>Nova senha</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={!isLoading}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nova senha (mín. 6 caracteres):</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={novaSenha}
            onChangeText={setNovaSenha}
            editable={!isLoading}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Confirme a senha:</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            editable={!isLoading}
          />
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, isLoading && styles.disabledButton]}
        onPress={handleTrocarSenha}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? "Atualizando..." : "Atualizar Senha"}
        </Text>
      </TouchableOpacity>

      <Image source={require('../assets/images/icone_reciclagem.png')} style={styles.recicleIcon} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
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
});
