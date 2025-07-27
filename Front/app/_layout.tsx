import { Stack } from "expo-router";
import ConnectionWrapper from "../components/ConnectionWrapper";
import { Provider as PaperProvider } from 'react-native-paper';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import * as Notifications from 'expo-notifications';

// Configuração inicial das notificações
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    // Solicita permissões ao iniciar o app
    const setupNotifications = async () => {
      await Notifications.requestPermissionsAsync();
      
      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.HIGH,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
    };

    setupNotifications();

    // Listener para notificações recebidas com o app em primeiro plano
    const notificationListener = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notificação recebida:', notification);
      
      // Você pode adicionar lógica adicional aqui
      const data = notification.request.content.data;
      if (data.simulada) {
        console.log('Notificação simulada recebida');
      }
    });

    // Listener para quando o usuário toca na notificação
    const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
      const data = response.notification.request.content.data;
      
      // Redireciona para a tela de dados da lixeira quando a notificação é clicada
      if (data.tipo === 'status_lixeira') {
        router.push('/dadosLixeira');
      }
    });

    return () => {
      // Limpa os listeners quando o componente é desmontado
      notificationListener.remove();
      responseListener.remove();
    };
  }, []);

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
          <Stack.Screen name="simular" />
          <Stack.Screen name="ConectarDispositivo" />
        </Stack>
      </ConnectionWrapper>
    </PaperProvider>
  );
}
