import { Text, View, Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Image source={require('../assets/images/reciclando.png')} style={[styles.img]} />

      <Text>Começando do zero</Text>
    </View>
  );
}



const styles = StyleSheet.create({

  cabecalho: {

    flexDirection: 'row', // esse e a linha de baixo deicharam o label e input no lugar certo
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  MaisInfor: {
    position: 'absolute',
    zIndex: 2,
    borderBottomWidth: 2,
    borderRadius: 20,
    padding: 10,
    width: "98%",
    maxWidth: "100%",
    marginTop: "60%",
    margin: "1%"

  },
  juntoImagem: {
    flexDirection: 'row', // esse e a linha de baixo deicharam o label e input no lugar certo
    alignItems: 'center',
  },
  img: {

    width: 100,
    height: 100,
    margin: 5,

  },

});


