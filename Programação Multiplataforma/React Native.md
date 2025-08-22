# Tutorial: Criando um Aplicativo React Native com Expo

Este tutorial ensina como criar um aplicativo simples de lista de tarefas (to-do list) usando **React Native** com **Expo**. Vamos configurar o ambiente, criar o projeto e desenvolver um app funcional.


## Pré-requisitos

Antes de começar, você precisa ter instalado:

1. **Node.js** (versão 16 ou superior): Baixe e instale em [nodejs.org](https://nodejs.org).
2. **Expo CLI**: Ferramenta para gerenciar projetos Expo.
3. **Expo Go**: Aplicativo móvel para testar o app em dispositivos iOS ou Android.
4. Um editor de código como **Visual Studio Code**.


## Passo 1: Configurando o Ambiente

1. **Instale o Expo CLI**:
   Abra o terminal e execute:
   ```bash
   npm install -g expo-cli
   ```

2. **Verifique a instalação**:
   ```bash
   expo --version
   ```
   Isso deve exibir a versão do Expo CLI instalada.

3. **Instale o Expo Go**:
   - Baixe o aplicativo **Expo Go** na App Store (iOS) ou Google Play Store (Android).


## Passo 2: Criando o Projeto

1. **Inicie um novo projeto**:
   No terminal, execute:
   ```bash
   expo init mobile
   ```
   - Escolha a opção **"blank"** (um projeto vazio com JavaScript).
   - Isso criará uma pasta chamada `mobile`.

2. **Acesse o diretório do projeto**:
   ```bash
   cd mobile
   ```

3. **Instale as dependências**:
   ```bash
   npx expo install react-dom react-native-web @expo/metro-runtime
   ```

4. **Inicie o servidor de desenvolvimento**:
   ```bash
   npx expo start
   ```
   Isso abrirá o **Expo DevTools** no seu navegador. Escaneie o QR code com o aplicativo **Expo Go** no seu dispositivo móvel para visualizar o app.



