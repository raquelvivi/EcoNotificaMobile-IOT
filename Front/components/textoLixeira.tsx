import { Text, View, Image, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function TextoLixeira({nome = ''}) {
  return (
    <Link href={"/dadosLixeira"}>
      <Text style={styles.text}>{nome}</Text>
    </Link>
      


  );
}



const styles = StyleSheet.create({

  text: {
    color: '#434343',
    fontSize: 16,
    margin: 5,
  },

});


