import { Text, View, Image, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import Lixeiras from '../components/lixeira'

export default function Index() {

// comente todas as lixeiras para ver frame 8 do figma (pedido de cadastro)
  const listaLixeiras = [
    { nome: "Lixeira - DNER",  nivel: "Parcial"},
    { nome: "lixeira - Praça cristo Rei", nivel: "Cheia" },
    { nome: "lixeira - JK", nivel: "Vazia" },
    { nome: "lixeira - Dr. Jose Bezerra", nivel: "Parcial" }
    

  ]


  return (
    //dando cor de fundo
    <LinearGradient
      colors={['#FFFFFF', '#80BC82']} // branco para verde 
      style={styles.body}
    >


      <View style={[styles.main]}>

        {/* Tela com lixeiras */}

        <Image source={require('../assets/images/logo_login.png')} style={[styles.img2]} />



        


          {listaLixeiras.length == 0 ? (
          <View style={[styles.main]}>
              <Image source={require('../assets/images/reciclando.png')} style={[styles.img]} />

              <Text style={[styles.texto]}>Você Ainda Não Começou a Reciclar</Text>

              <Text style={[styles.botao]}>Vamos Reciclar?</Text>
            </View>
          ) : (listaLixeiras.map((item, index) => (

            <View key={index}>
              <Lixeiras dado={item}/>
            </View>
          ))
          )}


        


        <Image source={require('../assets/images/icone_reciclagem.png')} style={[styles.icone]} />




        {/* Tela sem lixeiras

        

         */}

      </View >
    </LinearGradient>


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
  icone: {
    position: "absolute",
    bottom: 0,
    marginBottom: 10,
    width: 40,
    height: 40,
  },
  
  lista: {

  },


});


