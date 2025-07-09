import { View, Image, StyleSheet, Text, TextInput, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function SecondTab() {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#80BC82']}
      style={styles.body}
    >

        <Image
          source={require('../assets/images/logo_login.png')}
          style={styles.logo}
        />

        <View style={styles.loginBox}>
        <ScrollView >

            <FormField label="Nome:" />
            <FormField label="Email:" keyboardType="email-address" />
            <FormField label="Senha:" secureTextEntry />
            <FormField label="CEP:" keyboardType="numeric" />
            <FormField label="País:" />
            <FormField label="Estado:" />
            <FormField label="Cidade:" />
            <FormField label="Bairro:" />

          </ScrollView>
        </View>

    </LinearGradient>
  );
}

function FormField({ label, ...props }) { //label vai ser label: pessoa (depois de criar o arquivo type com as variaveis do bd)
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder=" " {...props} />
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
    marginTop: 100,
    width: 320,
    backgroundColor: '#80bc82dd', // verde mais escuro com transparência
    borderRadius: 12,
    padding: 20,
    borderWidth: 1.5,
    borderColor: '#3b6d42', // contorno escuro sutil
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
});