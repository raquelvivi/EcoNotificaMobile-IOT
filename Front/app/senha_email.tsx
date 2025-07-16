import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function SenhaEmail() {
  const router = useRouter();

  return (
    <LinearGradient colors={['#ffffff', '#7BBF8C']} style={styles.body}>
      <Image source={require('../assets/images/logo_login.png')} style={styles.logo} />

      <View style={styles.loginBox}>
        <Text style={styles.loginTitle}>LOGIN</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} keyboardType="email-address" placeholder="" placeholderTextColor="#ffffff" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Senha:</Text>
          <TextInput style={styles.input} secureTextEntry placeholder="" placeholderTextColor="#ffffff" />
        </View>
      </View>

      <TouchableOpacity style={styles.linkBox} onPress={() => router.push('/nova_senha')}>
        <Text style={styles.link}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkBox} onPress={() => router.push('/quem')}>
        <Text style={styles.buttonText}>Pronto</Text>
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
    fontSize: 14,
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
    width: 50,
    height: 50,
    tintColor: '#ffffff',
    marginBottom: 5,
  },
});
