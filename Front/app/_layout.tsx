import { Stack } from "expo-router";
import ConnectionWrapper from "../components/ConnectionWrapper";
import { Provider as PaperProvider } from 'react-native-paper';

export default function RootLayout() {
  return (
    <PaperProvider>
      <ConnectionWrapper>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="login" />
          <Stack.Screen name="dadosLixeira" />
          <Stack.Screen name="quem" />
          <Stack.Screen name="cadastroUser" />
          <Stack.Screen name="nova_senha" />
          <Stack.Screen name="senha_email" />
          <Stack.Screen name="dispositivos" />
          <Stack.Screen name="identificacao" />
          <Stack.Screen name="ConectarDispositivo" />
        </Stack>
      </ConnectionWrapper>
    </PaperProvider>
  );
}
