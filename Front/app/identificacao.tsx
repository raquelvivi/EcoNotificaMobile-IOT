import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { router } from "expo-router";

export default function Identificacao() {
  return (
    <LinearGradient colors={['#ffffff', '#80BC82']} style={styles.container}>
      <Image source={require('../assets/images/logo_login.png')} style={styles.logo} />

      <TouchableOpacity style={styles.card} onPress={() => router.push("/quem")}>
        <Image source={require('../assets/images/criar.png')} style={styles.icone} />
        <Text style={styles.texto}>Criar Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push("/senha_email")}>
        <Image source={require('../assets/images/login.png')} style={styles.icone} />
        <Text style={styles.texto}>Fazer Login</Text>
      </TouchableOpacity>
      <Image source={require('../assets/images/icone_reciclagem.png')} style={styles.reciclagem} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2D6B3A',
    marginBottom: 30,
    textShadowColor: '#A0C3A8',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  card: {
    width: 300,
    height: 120,
    backgroundColor: "#E6F3E8",
    borderRadius: 20,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    marginVertical: 10,
  },
  icone: {
    width: 50,
    height: 50,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  reciclagem: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  texto: {
    fontSize: 18,
    fontWeight: "500",
    color: "#1F4F2B",
  },
});
