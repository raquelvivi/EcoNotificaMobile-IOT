
# 🌱 EcoNotifica

#### **EcoNotifica** é um sistema inteligente de gerenciamento de resíduos sólidos, voltado para empresas, instituições e prefeituras. Utiliza sensores IoT (Raspberry Pi Zero W + ultrassônico) integrados a uma plataforma web/mobile, permitindo o monitoramento de lixeiras em tempo real, envio de notificações automáticas e visualização em mapa com dashboards interativos.

Tecnologias envolvidas:
- **Frontend**: React Native (Expo), React Navigation, React Native Maps
- **Backend**: Node.js, Express, PostgreSQL, MQTT
- **IoT**: MicroPython em Raspberry Pi Zero W com sensores ultrassônicos
- **Outros**: Geolocalização, notificações de status, autenticação JWT

> 📱 O aplicativo já está disponível na **Play Store** como teste fechado.

---

## Instruções para iniciar o projeto

### Estrutura do projeto
```
EcoNotifica/
├── backend/        # Servidor Node.js + banco de dados
├── frontend/       # Aplicativo mobile com Expo
├── .env            # Variáveis de ambiente
├── package.json    # Scripts e dependências principais
```

### Requisitos
- Node.js instalado (versão 18+ recomendada)
- Expo CLI (`npm install -g expo-cli`)
- Banco de dados PostgreSQL (configurado via `.env`)
- MQTT Broker (local ou hospedado)

---

## Comandos principais

### Iniciar o sistema completo (backend + frontend):
```bash
npm start
```
> Esse comando executa backend e frontend simultaneamente com o `concurrently`.

### Iniciar apenas o backend:
```bash
npm run dev
```

### Iniciar apenas o frontend:
```bash
cd frontend
npx expo start
```
> **Observação**: sempre entre na pasta correspondente (`backend` ou `frontend`) caso deseje rodar um módulo isoladamente.

---

## Instalação de dependências

### No diretório raiz:
```bash
npm install concurrently dotenv
```

### No diretório `frontend`:
```bash
npx expo install @react-native-community/netinfo
npx expo install react-native-paper react-native-safe-area-context
npx expo install expo-linear-gradient
npm install @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated react-native-screens
```
> Os últimos 5 pacotes são essenciais para a navegação entre telas (inclusive navegação horizontal). Em geral, o Expo já instala eles automaticamente, mas é bom garantir.

---

## ⚠️ Observações

- Para visualizar o **modal de conexão com a internet** em qualquer tela, é necessário ter instalado:
  ```bash
  npx expo install @react-native-community/netinfo react-native-paper react-native-safe-area-context
  ```

- Para testar o **alerta de Wi-Fi desconectado**, desligue a conexão no celular ou emule isso no simulador.

- Certifique-se de que o `.env` está corretamente configurado tanto no backend quanto no frontend.

</br></br>
## 🖼️ Imagens

<img width="150" height="1043" alt="image" src="https://github.com/user-attachments/assets/e229a485-6e20-4977-b774-5b0ed762b361" />
<img width="150" height="1043" alt="image" src="https://github.com/user-attachments/assets/01abaca9-36cd-4df5-bc07-725fa3e271cd" />
<img width="150" height="1043" alt="image" src="https://github.com/user-attachments/assets/e48058b5-078c-466f-bd0f-ee009cd2967b" />
<img width="150" height="1043" alt="image" src="https://github.com/user-attachments/assets/dd3101d0-4d5b-4048-be6d-72ce29944256" />
<img width="150" height="1043" alt="image" src="https://github.com/user-attachments/assets/f78a9b93-b731-42bd-b7d1-97dda466cf3a" />
<img width="150" height="1043" alt="image" src="https://github.com/user-attachments/assets/fa83682e-ded2-4c1b-a7e8-50edcb400b40" />
<img width="150" height="1043" alt="image" src="https://github.com/user-attachments/assets/4a11ad8e-e47d-44a4-9136-48b106447efc" />
<img width="150" height="1043" alt="image" src="https://github.com/user-attachments/assets/50207e84-374d-44c7-a86a-a31b35826218" />
<img width="150" height="1043" alt="image" src="https://github.com/user-attachments/assets/6e96fa75-b7c7-4108-8658-58ae3180532a" />
<img width="150" height="1043" alt="image" src="https://github.com/user-attachments/assets/83e1fbd9-95b2-4ae3-a881-33b3f23dc668" />
<img width="150" height="1043" alt="image" src="https://github.com/user-attachments/assets/1f344759-f4bd-4454-a748-3d5f632038de" />
<!--<img width="300" height="1043" alt="image" src="" />
<img width="300" height="1043" alt="image" src="" />
<img width="300" height="1043" alt="image" src="" />-->





