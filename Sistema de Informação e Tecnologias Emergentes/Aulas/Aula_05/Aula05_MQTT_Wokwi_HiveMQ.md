# Aula 05 — MQTT, LoRaWAN e comunicação IoT

**Disciplina:** Sistemas de Informação e Tecnologias Emergentes (ISI022)  
**Duração:** 1h40min  
**Módulo:** 4 — Smart Cities e IoT  
**Formato:** exposição teórica seguida de programação individual

## Objetivos de aprendizagem

Ao final da aula, o aluno deverá ser capaz de:

- explicar por que MQTT costuma ser adequado a dispositivos com restrições de banda e energia, comparando-o com HTTP/REST;
- descrever o modelo *Publish/Subscribe*, os papéis de broker, publisher e subscriber e os níveis QoS do MQTT;
- explicar a arquitetura básica e os usos de LoRaWAN;
- programar um ESP32 simulado no Wokwi para receber e enviar mensagens MQTT usando o Monitor Serial.

## Roteiro dos 100 minutos

| Tempo | Etapa |
|---|---|
| 0–5 min | Situação-problema: como sensores urbanos trocam dados quando têm pouca energia ou conectividade limitada? |
| 5–15 min | HTTP/REST e restrições de dispositivos IoT |
| 15–25 min | MQTT: modelo, broker, tópicos e QoS |
| 25–35 min | LoRaWAN: arquitetura, alcance, consumo e limites |
| 35–40 min | Apresentação do desafio e escolha dos tópicos individuais |
| 40–95 min | Programação individual no Wokwi, depuração e troca de mensagens entre alunos |
| 95–100 min | Síntese e registro da evidência |

## 1. HTTP/REST e dispositivos IoT restritos

HTTP/REST organiza a comunicação em requisições e respostas. O dispositivo cliente solicita um recurso ao servidor e recebe uma resposta. Esse modelo é familiar, interoperável e funciona bem em muitos projetos de IoT.

Em dispositivos com pouca memória, energia ou banda, o custo de estabelecer e manter conexões e transmitir cabeçalhos pode ser relevante, especialmente quando pequenas leituras são enviadas com frequência. Também é necessário que o cliente conheça o endereço do serviço e inicie a comunicação.

MQTT atende bem a cenários em que mensagens pequenas precisam circular por conexões persistentes. O broker recebe publicações e as encaminha aos clientes inscritos nos tópicos correspondentes. O dispositivo não precisa conhecer diretamente todos os destinatários. A escolha depende dos requisitos: HTTP continua sendo adequado para consultas ocasionais, configuração e integrações baseadas em APIs.

| Aspecto | HTTP/REST | MQTT |
|---|---|---|
| Modelo comum | Requisição e resposta | Publicação e assinatura |
| Destinatário | Serviço/endereço conhecido pelo cliente | Tópico administrado pelo broker |
| Comunicação | Cliente inicia uma requisição | Clientes mantêm conexão com o broker |
| Uso típico | Consultar ou atualizar um recurso | Telemetria e mensagens assíncronas |

## 2. MQTT: publicação, assinatura e QoS

MQTT é um protocolo de mensageria que opera sobre uma conexão de rede. Na aula, o ESP32 será um cliente MQTT e o HiveMQ será o broker.

- **Publisher:** publica uma mensagem em um tópico.
- **Subscriber:** assina um tópico e recebe as mensagens publicadas nele.
- **Broker:** recebe publicações e encaminha cada mensagem aos clientes inscritos no tópico.
- **Tópico:** caminho textual que organiza as mensagens, por exemplo `fatec/ams5/ana_silva`.

O tópico não precisa ser cadastrado previamente no broker. No exercício, cada aluno anuncia seu tópico para os colegas. Quem publicar nele entrega uma mensagem ao dispositivo que estiver inscrito.

### Níveis de entrega QoS

- **QoS 0 — no máximo uma vez:** envio sem confirmação MQTT. Pode haver perda.
- **QoS 1 — ao menos uma vez:** o protocolo confirma a entrega, mas uma repetição pode ocorrer. A aplicação deve tolerar duplicatas se isso for importante.
- **QoS 2 — uma vez no protocolo:** usa mais etapas para evitar duplicação na entrega MQTT. Isso não significa que a aplicação ou o destinatário processará a mensagem exatamente uma vez em qualquer falha.

O exercício usa QoS 0 para manter o primeiro programa simples. A turma pode alterar o nível e observar a diferença conceitual, sem tratar QoS como garantia de que o usuário leu ou processou a mensagem.

## 3. LoRaWAN

LoRaWAN define a comunicação e o gerenciamento de dispositivos em redes de longo alcance e baixo consumo. LoRa é a tecnologia de rádio usada na camada física; LoRaWAN organiza o acesso e a comunicação da rede.

Na arquitetura estrela de estrelas, dispositivos finais enviam mensagens por rádio a um ou mais gateways. Os gateways encaminham os pacotes a um servidor de rede, que gerencia a comunicação e integra os dados a aplicações. Os dispositivos não formam, em geral, uma cadeia de repetidores entre si.

LoRaWAN é útil para pequenas mensagens esparsas de sensores distribuídos por áreas extensas. A taxa de dados é baixa e há limites de transmissão e de tempo no ar. As bandas sub-GHz e suas regras dependem da região. Wi-Fi com MQTT é mais adequado ao laboratório desta aula e a cenários com maior volume ou troca interativa; LoRaWAN pode ser adequado à telemetria de campo com baixa frequência de envio.

## 4. Exercício individual: mensagens MQTT entre alunos

### Desafio

Cada aluno cria um projeto próprio no Wokwi com um ESP32. O dispositivo assina o tópico de recebimento divulgado pelo aluno, como:

```text
fatec/ams5/ana_silva
```

Para enviar uma mensagem, o aluno digita no Monitor Serial o identificador do destinatário e o texto, neste formato:

```text
bruno_santos|Olá, Bruno! Esta mensagem veio pelo MQTT.
```

O programa publica em `fatec/ams5/bruno_santos`. Se o ESP32 de Bruno estiver conectado e inscrito nesse tópico, ele exibe o remetente e a mensagem no Monitor Serial.

### Passo a passo no Wokwi

1. Acesse [wokwi.com](https://wokwi.com/) e entre na sua conta para salvar o projeto.
2. Crie um projeto **ESP32** com o template Arduino. O diagrama não precisa de sensores: usaremos somente comunicação Wi-Fi e serial.
3. Abra `sketch.ino` e substitua o exemplo pelo código-base desta seção.
4. Crie o arquivo `libraries.txt` no projeto e inclua `PubSubClient` para que o Wokwi instale a biblioteca MQTT.
5. Escolha um identificador único, em letras minúsculas, sem espaços ou acentos. Exemplo: `ana_silva`. Não use matrícula, telefone ou outro dado pessoal.
6. No código, altere `ALUNO_ID` para seu identificador. Compile e inicie a simulação pelo botão verde **Start the simulation**.
7. O Wi-Fi simulado usa o SSID `Wokwi-GUEST` sem senha. O código conecta ao broker público HiveMQ em `broker.hivemq.com`, porta `1883`; não é necessário criar conta ou canal no HiveMQ.
8. Abra o painel **Serial Monitor** abaixo da simulação. Aguarde as mensagens `Wi-Fi conectado` e `MQTT conectado`. O programa exibirá o tópico que você deve divulgar.
9. Combine com um colega: digite no Monitor Serial `identificador_do_colega|mensagem` e envie a linha. A quebra de linha padrão do Monitor Serial finaliza o comando.
10. Peça ao colega que confirme a chegada da mensagem no próprio Monitor Serial. Depois, troquem os papéis.
11. Salve o projeto e copie o link compartilhável do Wokwi para a entrega.

### Etapas de implementação

Implemente e confira uma etapa de cada vez. O código completo abaixo serve para consulta quando necessário.

1. **Serial:** inicialize `Serial` e imprima uma mensagem de boas-vindas. Confirme que o Monitor Serial mostra a saída.
2. **Wi-Fi:** conecte ao `Wokwi-GUEST` e só avance quando o programa indicar que recebeu um endereço de rede.
3. **Broker:** configure `broker.hivemq.com:1883` e conecte o cliente MQTT com um identificador único.
4. **Recebimento:** monte o tópico `fatec/ams5/SEU_ID`, assine-o e imprima no serial o tópico e o conteúdo recebidos.
5. **Envio:** leia uma linha do serial, separe o destinatário do texto pelo caractere `|` e publique no tópico do destinatário.
6. **Teste entre alunos:** cada pessoa divulga seu tópico, envia uma mensagem e confirma a chegada no serial do destinatário.

Após cada etapa, registre no código ou no caderno o que foi acrescentado e qual saída confirmou o funcionamento.

### Código de referência (ESP32, Arduino e PubSubClient)

```cpp
#include <WiFi.h>
#include <PubSubClient.h>
#include <esp_system.h>

const char* WIFI_SSID = "Wokwi-GUEST";
const char* WIFI_PASSWORD = "";
const char* MQTT_HOST = "broker.hivemq.com";
const int MQTT_PORT = 1883;
const char* ALUNO_ID = "ana_silva"; // troque pelo seu identificador

WiFiClient wifiClient;
PubSubClient mqtt(wifiClient);
String meuTopico;
String clientId;

void aoReceber(char* topic, byte* payload, unsigned int length) {
  Serial.print("\nMensagem recebida em ");
  Serial.println(topic);
  Serial.print("Conteúdo: ");
  for (unsigned int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println("\nDigite destinatario|mensagem para responder.");
}

void conectarWiFi() {
  Serial.print("Conectando ao Wi-Fi");
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD, 6);
  while (WiFi.status() != WL_CONNECTED) {
    delay(250);
    Serial.print(".");
  }
  Serial.println("\nWi-Fi conectado");
}

void conectarMQTT() {
  while (!mqtt.connected()) {
    Serial.print("Conectando ao HiveMQ... ");
    if (mqtt.connect(clientId.c_str())) {
      Serial.println("conectado");
      if (mqtt.subscribe(meuTopico.c_str())) {
        Serial.print("Inscrito em: ");
        Serial.println(meuTopico);
      } else {
        Serial.println("Falha ao assinar o tópico");
      }
    } else {
      Serial.print("falha, estado MQTT = ");
      Serial.println(mqtt.state());
      delay(2000);
    }
  }
}

void setup() {
  Serial.begin(115200);
  Serial.setTimeout(100);
  meuTopico = String("fatec/ams5/") + ALUNO_ID;
  clientId = String("siet-") + ALUNO_ID + "-" + String(esp_random(), HEX);

  Serial.println("Aula 05: mensagens MQTT pelo Monitor Serial");
  conectarWiFi();
  mqtt.setServer(MQTT_HOST, MQTT_PORT);
  mqtt.setCallback(aoReceber);
  conectarMQTT();
  Serial.println("Envie: identificador|mensagem");
}

void loop() {
  if (!mqtt.connected()) {
    conectarMQTT();
  }
  mqtt.loop();

  if (Serial.available()) {
    String linha = Serial.readStringUntil('\n');
    linha.trim();
    int separador = linha.indexOf('|');

    if (separador <= 0 || separador == linha.length() - 1) {
      Serial.println("Formato inválido. Use identificador|mensagem");
      return;
    }

    String destinatario = linha.substring(0, separador);
    String mensagem = linha.substring(separador + 1);
    String topicoDestino = String("fatec/ams5/") + destinatario;
    String payload = String(ALUNO_ID) + ": " + mensagem;

    if (mqtt.publish(topicoDestino.c_str(), payload.c_str())) {
      Serial.print("Mensagem publicada em ");
      Serial.println(topicoDestino);
    } else {
      Serial.println("Não foi possível publicar. Verifique a conexão MQTT.");
    }
  }
}
```

O `clientId` inclui um sufixo aleatório para reduzir colisões de conexão. O tópico de recebimento continua sendo controlado por `ALUNO_ID`, que precisa ser único para cada aluno.

### Uso do Monitor Serial

- O programa usa `Serial.begin(115200)` para exibir instruções e mensagens.
- O Monitor Serial do Wokwi recebe texto digitado e o envia ao ESP32 quando o aluno pressiona Enter.
- Digite `destinatario|mensagem`, sem espaços antes do identificador. Exemplo: `ana_silva|Teste de recebimento`.
- Mensagens recebidas aparecem automaticamente na saída serial, junto com o tópico.

### Entrega

Cada aluno entrega o link do projeto Wokwi e registra:

1. seu identificador e tópico de recebimento;
2. o identificador de um colega para quem enviou;
3. uma evidência textual da publicação e da recepção da mensagem;
4. uma frase explicando o papel do broker na troca.

### Solução de problemas

| Sintoma | Verificação |
|---|---|
| O Wi-Fi não conecta | Confirme `Wokwi-GUEST`, senha vazia e se a simulação está rodando. |
| Erro de compilação em `PubSubClient.h` | Confirme que `libraries.txt` contém exatamente `PubSubClient` e reinicie a compilação. |
| Cliente não conecta ao broker | Confira host e porta. O broker público pode ficar temporariamente indisponível; tente novamente após alguns segundos. |
| Publica, mas o colega não recebe | Confirme o identificador, o tópico assinado e se a simulação do colega continua ativa. Tópicos diferenciam maiúsculas de minúsculas. |
| Mensagens se misturam ou chegam de outro projeto | Use identificadores exclusivos e tópicos exclusivos da turma. O broker é público. |

## Cuidados com o broker público

O broker público HiveMQ dispensa conta e configuração de cluster, o que simplifica a atividade. Ele não deve ser usado para dados pessoais, segredos ou mensagens privadas. Outros clientes podem publicar ou assinar tópicos; nomes iguais podem causar interferência. Use apenas mensagens fictícias e identificadores acadêmicos simples. O serviço público também pode sofrer indisponibilidade ou perder mensagens.

## Perguntas para discussão

1. O que o publisher precisa saber para enviar uma mensagem a um colega?
2. Qual é a responsabilidade do broker?
3. O que muda entre QoS 0 e QoS 1 para uma mensagem que pode ser repetida?
4. Em que cenário LoRaWAN seria mais apropriado que Wi-Fi?
5. O broker público seria adequado para mensagens privadas de uma organização? Por quê?

## Glossário

| Termo | Significado nesta aula |
|---|---|
| Broker | Serviço que recebe publicações e as encaminha aos assinantes dos tópicos. |
| Publisher | Cliente que publica uma mensagem em um tópico MQTT. |
| Subscriber | Cliente que assina um tópico para receber suas mensagens. |
| Tópico | Caminho textual usado para organizar e encaminhar mensagens. |
| QoS | Nível de serviço de entrega definido pelo protocolo MQTT. |
| LoRaWAN | Protocolo de rede para dispositivos de longo alcance e baixo consumo. |

## Referências e documentação

- Wokwi. [ESP32 Wi-Fi Networking](https://docs.wokwi.com/guides/esp32-wifi).
- Wokwi. [The Serial Monitor](https://docs.wokwi.com/guides/serial-monitor).
- HiveMQ. [Public MQTT Broker](https://www.hivemq.com/mqtt/public-mqtt-broker/).
- OASIS. [MQTT Version 3.1.1](https://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html).
