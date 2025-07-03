import { Text, View, Image, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  return (
    //dando cor de fundo
    <LinearGradient
        colors={['#FFFFFF', '#80BC82']} // branco para verde 
        style={styles.body}
      >


    <View style={[styles.main]}>

      <Image source={require('../assets/images/logo_login 2.png')} style={[styles.img2]} />
      

        <Image source={require('../assets/images/reciclando.png')} style={[styles.img]} />


        <Text style={[styles.texto]}>Você Ainda Não Começou a Reciclar</Text>
      



    </View >
    </LinearGradient>

    
  );
}



const styles = StyleSheet.create({

  body: {
    flex: 1
  },
  main: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    top: 0,
    width: 250,
    height: 250,
    marginTop: 150,
  },
  img2: {
    padding: 10,
    height: 65,
    width: 240,
   
  },
  texto:{
    marginTop: 100,
    fontSize: 20,
  }

});


