import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import * as IntentLauncher from "expo-intent-launcher";
import * as Linking from "expo-linking";

export default function ConnectionWrapper({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected ?? false);
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

  if (!isConnected) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Sem conexão com a internet. Ative o Wi-Fi ou os dados móveis.
        </Text>
        <Button title="Abrir configurações de Wi-Fi" onPress={openWifiSettings} />
      </View>
    );
  }

  return <>{children}</>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginBottom: 12,
  },
});
