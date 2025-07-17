

// import { Tabs } from 'expo-router';

// export default function Layout() {
//   return <Tabs />;
// }

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // sem cabeçario
      }}>

      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="principal" />
      <Stack.Screen name="dadosLixeira" />
      <Stack.Screen name="quem" />
      <Stack.Screen name="cadastroUser" />
      <Stack.Screen name="nova_senha" />
      <Stack.Screen name="senha_email" />
    </Stack>
  );
}


