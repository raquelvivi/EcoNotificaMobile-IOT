import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { router } from "expo-router";

export default function Identificacao() {
  return (
    <LinearGradient colors={['#ffffff', '#80BC82']} style={styles.container}>
      <Image source={require('../assets/images/logo_login.png')} style={styles.logo} />

      <Text style={styles.subtitulo}>Bem-vindo ao EcoNotifica</Text>

      <View style={styles.cardContainer}>
        
        <TouchableOpacity style={styles.card} onPress={() => router.push("/senha_email")}>
          <Image source={require('../assets/images/login.png')} style={styles.icone} />
          <Text style={styles.texto}>Fazer Login</Text>
        </TouchableOpacity>

        {/* Linha divisória */}
        <View style={styles.divisor}></View>

        <TouchableOpacity style={styles.card} onPress={() => router.push("/quem")}>
          <Image source={require('../assets/images/criar.png')} style={styles.icone} />
          <Text style={styles.texto}>Criar Conta</Text>
        </TouchableOpacity>
      </View>

      {/* Ícone de reciclagem no rodapé */}
      <Image source={require('../assets/images/icone_reciclagem.png')} style={styles.reciclagem} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  logo: {
    width: 220,
    height: 70,
    resizeMode: 'contain',
  },
  subtitulo: {
    fontSize: 20,
    color: '#2D6B3A',
    fontWeight: '600',
    marginTop: 20,
  },
  cardContainer: {
    alignItems: 'center',
    gap: 20,
  },
  card: {
    width: 240,
    height: 120,
    backgroundColor: "#EAF8EC",
    borderRadius: 30,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#3b6d42",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },
  divisor: {
    width: 180,
    height: 1,
    backgroundColor: "#ffffff",

  },
  icone: {
    width: 50,
    height: 50,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  reciclagem: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    opacity: 0.7,
  },
  texto: {
    fontSize: 18,
    fontWeight: "500",
    color: "#1F4F2B",
  },
});