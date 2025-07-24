import React, { useEffect, useState } from "react";
import { Text, StyleSheet, Button, Platform, View, Modal, TouchableOpacity } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import * as IntentLauncher from "expo-intent-launcher";
import * as Linking from "expo-linking";
import { LinearGradient } from 'expo-linear-gradient';

export default function ConnectionWrapper({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected ?? false);
      if (!(state.isConnected ?? false)) {
        setModalVisible(true);
      } else {
        setModalVisible(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const openWifiSettings = () => {
    if (Platform.OS === "android") {
      IntentLauncher.startActivityAsync(
        IntentLauncher.ActivityAction.WIFI_SETTINGS
      );
    } else if (Platform.OS === "ios") {
      Linking.openURL("App-Prefs:root=WIFI"); // pode funcionar em alguns iOS
    }
  };

  return (
    <>
      {children}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <LinearGradient
          colors={['#ffffff', '#80BC82']}
          style={styles.modalBackground}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.text}>
              Sem conexão com a internet. Ative o Wi-Fi ou os dados móveis.
            </Text>
            <TouchableOpacity style={styles.button} onPress={openWifiSettings}>
              <Text style={styles.buttonText}>Abrir configurações de Wi-Fi</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 24,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 30,
  },
  text: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#80BC82",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
