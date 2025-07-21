import { Text, View, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
import LottieView from 'lottie-react-native';

import animacao from '../assets/images/Loading animation for Client book.json'

export default function Index() {


  return (



    <View style={[styles.main]}>

        <LottieView 
            source={animacao}
            autoPlay
            resizeMode='contain'
            loop
        />

    </View>


// git clone https://github.com/fcbergmann/rn-my-app.git

  );
}



const styles = StyleSheet.create({

  
  main: {
    flex: 1,
  },


});


