
# 🌱 EcoNotifica

**EcoNotifica** é um sistema inteligente de gerenciamento de resíduos sólidos, voltado para empresas, instituições e prefeituras. Utiliza sensores IoT (ESP32 + ultrassônico) integrados a uma plataforma web/mobile, permitindo o monitoramento de lixeiras em tempo real, envio de notificações automáticas e visualização em mapa com dashboards interativos.

Tecnologias envolvidas:
- **Frontend**: React Native (Expo), React Navigation, React Native Maps
- **Backend**: Node.js, Express, PostgreSQL, MQTT
- **IoT**: MicroPython em ESP32 com sensores ultrassônicos
- **Outros**: Geolocalização, notificações de status, autenticação JWT

> 📱 O aplicativo já está disponível na **Play Store** como teste fechado.

---

## 🚀 Instruções para iniciar o projeto

### 📁 Estrutura do projeto
```
EcoNotifica/
├── backend/        # Servidor Node.js + banco de dados
├── frontend/       # Aplicativo mobile com Expo
├── .env            # Variáveis de ambiente
├── package.json    # Scripts e dependências principais
```

### ✅ Requisitos
- Node.js instalado (versão 18+ recomendada)
- Expo CLI (`npm install -g expo-cli`)
- Banco de dados PostgreSQL (configurado via `.env`)
- MQTT Broker (local ou hospedado)

---

## 🧭 Comandos principais

### ▶️ Iniciar o sistema completo (backend + frontend):
```bash
npm start
```
> Esse comando executa backend e frontend simultaneamente com o `concurrently`.

### ▶️ Iniciar apenas o backend:
```bash
npm run dev
```

### ▶️ Iniciar apenas o frontend:
```bash
cd frontend
npx expo start
```
> **Observação**: sempre entre na pasta correspondente (`backend` ou `frontend`) caso deseje rodar um módulo isoladamente.

---

## 📦 Instalação de dependências

### 🔁 No diretório raiz:
```bash
npm install concurrently dotenv
```

### 📱 No diretório `frontend`:
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
