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
   expo init TodoApp
   ```
   - Escolha a opção **"blank"** (um projeto vazio com JavaScript).
   - Isso criará uma pasta chamada `TodoApp`.

2. **Acesse o diretório do projeto**:
   ```bash
   cd TodoApp
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   expo start
   ```
   Isso abrirá o **Expo DevTools** no seu navegador. Escaneie o QR code com o aplicativo **Expo Go** no seu dispositivo móvel para visualizar o app.


## Passo 3: Estrutura do Aplicativo

Vamos criar um aplicativo de lista de tarefas com as seguintes funcionalidades:
- Adicionar uma tarefa.
- Exibir a lista de tarefas.
- Remover tarefas.

### Arquivo Principal: `App.js`

Substitua o conteúdo do arquivo `App.js` pelo código abaixo:

```javascript
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Math.random().toString(), text: task }]);
      setTask('');
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Adicionar" onPress={addTask} />
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => removeTask(item.id)}>
            <View style={styles.task}>
              <Text>{item.text}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
  },
  task: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});
```


## Passo 4: Explicação do Código

1. **Componentes Importados**:
   - `React` e `useState` para gerenciar o estado.
   - Componentes do `react-native`: `Text`, `View`, `TextInput`, `Button`, `FlatList`, `TouchableOpacity`.

2. **Estado**:
   - `task`: Armazena o texto digitado no input.
   - `tasks`: Lista de tarefas (array de objetos com `id` e `text`).

3. **Funcionalidades**:
   - `addTask`: Adiciona uma nova tarefa à lista e limpa o input.
   - `removeTask`: Remove uma tarefa com base no seu `id`.
   - `FlatList`: Exibe a lista de tarefas de forma eficiente.

4. **Estilização**:
   - Usamos `StyleSheet` para criar estilos consistentes e responsivos.


## Passo 5: Testando o Aplicativo

1. **Execute o projeto**:
   Se o servidor ainda não estiver rodando, execute:
   ```bash
   expo start
   ```

2. **Visualize no dispositivo**:
   - Use o aplicativo **Expo Go** para escanear o QR code exibido no terminal ou no navegador.
   - O app será carregado no seu dispositivo móvel.

3. **Interaja com o app**:
   - Digite uma tarefa no campo de texto.
   - Clique em "Adicionar" para incluir a tarefa na lista.
   - Toque em uma tarefa para removê-la.


## Passo 6: Personalizando o Aplicativo

Você pode adicionar mais funcionalidades, como:
- **Marcar tarefas como concluídas**: Adicione um estado `completed` ao objeto da tarefa.
- **Persistência de dados**: Use o `AsyncStorage` para salvar as tarefas localmente.
- **Estilização avançada**: Adicione cores, ícones ou animações.

Exemplo de como importar o `AsyncStorage`:
```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';
```


## Passo 7: Publicando o Aplicativo

1. **Teste em dispositivos reais**:
   Use o Expo Go para testar em iOS e Android.

2. **Gere o build do aplicativo**:
   Para criar um APK (Android) ou IPA (iOS), use:
   ```bash
   expo build:android
   ```
   ou
   ```bash
   expo build:ios
   ```

3. **Publique na loja**:
   Siga as instruções da [documentação do Expo](https://docs.expo.dev/distribution/app-stores/) para enviar o app para a Google Play Store ou Apple App Store.


## Conclusão

Você criou um aplicativo de lista de tarefas com React Native e Expo! Este é um ponto de partida para desenvolver apps mais complexos. Explore a [documentação do Expo](https://docs.expo.dev) e a [documentação do React Native](https://reactnative.dev) para aprender mais sobre componentes, APIs e personalizações.
