// app/ConectarDispositivo.tsx

import { View, Text, StyleSheet } from 'react-native';

export default function ConectarDispositivo() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Conexão do Dispositivo</Text>
      {/* Aqui você pode adicionar o formulário de conexão futuramente */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2fdf4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#1f552a',
    fontWeight: 'bold',
  },
});
