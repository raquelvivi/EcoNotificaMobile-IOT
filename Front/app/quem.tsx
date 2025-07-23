import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function SelecionarPerfil() {
  const router = useRouter();

  return (
    <LinearGradient colors={['#ffffff', '#7BBF8C']} style={styles.body}>

      <Image source={require('../assets/images/logo_login.png')} style={styles.logo} />

      <Text style={styles.subtitulo}>Quem é você?</Text>

      <View style={styles.grid}>
        <View style={styles.row}>
          <Card title="Empresa ou Prefeitura" img={require('../assets/images/fabrica.png')} onPress={() => router.push('/login?tipo=prefeitura')} />
          <Card title="Pessoa" img={require('../assets/images/comunidade.png')} onPress={() => router.push('/login?tipo=empresa')} />
        </View>
      </View>
      <Image source={require('../assets/images/icone_reciclagem.png')} style={styles.recicleIcon} />
    </LinearGradient>
  );
}

function Card({ title, img, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed
      ]}
    >
      <Image source={img} style={styles.icon} />
      <Text style={styles.cardText}>{title}</Text>
    </Pressable>
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
  subtitulo: {
    color: '#1C4E2A',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  grid: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#D6EFD9',
    borderWidth: 2,
    borderColor: '#4C8F5C',
    borderRadius: 16,
    width: 140,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  cardPressed: {
    backgroundColor: '#B2D8B4',
    transform: [{ scale: 0.97 }],
  },
  icon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C4E2A',
    textAlign: 'center',
  },
  recicleIcon: {
    width: 50,
    height: 50,
    tintColor: '#ffffff',
    marginBottom: 10,
  },
});
