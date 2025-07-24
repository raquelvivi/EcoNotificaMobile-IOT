

// import { Tabs } from 'expo-router';

// export default function Layout() {
//   return <Tabs />;
// }

import { Stack } from "expo-router";
import ConnectionWrapper from "../components/ConnectionWrapper";

export default function RootLayout() {
  return (
    <ConnectionWrapper>
      <Stack
        screenOptions={{
          headerShown: false, // sem cabeçario
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
      </Stack>
    </ConnectionWrapper>
  );
}


