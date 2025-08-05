import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import * as Location from 'expo-location';
import { LineChart, ProgressChart } from 'react-native-chart-kit';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import Feather from 'react-native-vector-icons/Feather';
import AnimatedLoader from 'react-native-animated-loader';

import Bola from '../../components/bolaGrafico'
import { Lixeira } from '../../type'

const screenWidth = Dimensions.get("window").width;


export default function TelaComLocalizacaoEGrafico() {




  return (
    <View style={styles.outro}>
        <View style={styles.overlay}>
          <AnimatedLoader
            visible={true}
            overlayColor="rgba(4, 109, 0, 1)"
            source={require('../assets/images/404 error page with cat.json')}
            animationStyle={{ width: screenWidth, height: 300, marginTop: -150 }}
            speed={1}
            loop={false}
          />

        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  linha: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  gradient: {
    flex: 1,
    backgroundColor: "#D8FDD9"
  },
  scrollContainer: {
    padding: 20,
    paddingTop: 100,
  },

  outro: {

    position: 'relative',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,

    // backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
