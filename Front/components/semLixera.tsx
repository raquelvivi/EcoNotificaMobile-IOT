import { Text, View, Image, StyleSheet } from "react-native";

export default function Index() {
  return (

      <View style={[styles.main]}>


        <Image source={require('../assets/images/reciclando.png')} style={[styles.img]} />


        <Text style={[styles.texto]}>Você Ainda Não Começou a Reciclar</Text>


        <Text style={[styles.botao]}>Vamos Reciclar?</Text>



      </View >


  );
}



const styles = StyleSheet.create({

  body: {
    flex: 1,
    
  },
  main: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  img: {
    top: 0,
    width: 250,
    height: 250,
    marginTop: 10,
  },
  img2: {
    position: "absolute",
    top: 0,
    padding: 10,
    height: 65,
    width: 240,

  },
  texto: {
    marginTop: 50,
    fontSize: 20,
    marginLeft: 50,
    marginRight: 50,
  },
  botao: {
    marginTop: 30,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    padding: 10,
    fontSize: 15

  },
  icone:{
    position: "absolute",
    bottom: 0,
    marginBottom: 10,
    width: 40,
    height: 40,
  }

});


