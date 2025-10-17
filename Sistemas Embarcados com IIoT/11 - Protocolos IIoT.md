# Protocolos de Comunicação IIoT: MQTT e HTTP

**Material de Apoio ao Aluno**


## 1. Introdução

Em aplicações industriais e de automação, os dispositivos embarcados precisam trocar informações com sistemas externos, como bancos de dados, dashboards e aplicações na nuvem.
Essa troca é feita por meio de **protocolos de comunicação**, que definem como as mensagens são estruturadas, transmitidas e interpretadas entre dispositivos e servidores.

Neste material estudaremos dois protocolos amplamente utilizados em sistemas IIoT:

* **HTTP (HyperText Transfer Protocol)**
* **MQTT (Message Queuing Telemetry Transport)**

Ambos permitem o envio e recebimento de dados por dispositivos como o **ESP32**, mas possuem características e aplicações diferentes.


## 2. Protocolo HTTP

### 2.1. Conceito

O **HTTP** é o protocolo tradicional de comunicação na web. Ele segue o modelo **Cliente–Servidor**, no qual um cliente envia uma **requisição (request)** e o servidor devolve uma **resposta (response)**.

O cliente (como o ESP32, por exemplo) sempre **inicia a comunicação**.
O servidor apenas responde — ele não envia dados por conta própria.

### 2.2. Estrutura de Comunicação

Cada interação HTTP envolve:

* Um **método** (GET, POST, PUT, DELETE)
* Um **cabeçalho (header)** com informações de controle
* Um **corpo (body)** opcional, com os dados transmitidos

Exemplo de requisição HTTP para enviar dados de um sensor:

```
POST /api/temperatura HTTP/1.1
Host: exemplo-servidor.com
Content-Type: application/json

{
  "sensor": "DHT22",
  "temperatura": 25.4,
  "umidade": 61.2
}
```

O servidor processa a mensagem e responde com um código de status (ex: 200 OK, 404 Not Found, 500 Internal Error).

### 2.3. Características Principais

| Aspecto               | HTTP                                              |
| --------------------- | ------------------------------------------------- |
| Modelo de comunicação | Cliente → Servidor                                |
| Tipo de conexão       | Pontual (abre e fecha a cada requisição)          |
| Eficiência de rede    | Média a baixa (mensagens grandes)                 |
| Segurança             | HTTPS (TLS) disponível                            |
| Facilidade de uso     | Alta (amplamente suportado)                       |
| Indicado para         | Aplicações baseadas em APIs REST e dashboards web |

### 2.4. Exemplo Prático (HTTP com ESP32)

Um ESP32 pode enviar medições para uma API web, como o **ThingSpeak**, **Firebase** ou um servidor **Flask**/Node.js.

Trecho simplificado:

```cpp
#include <WiFi.h>
#include <HTTPClient.h>

void loop() {
  if(WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin("http://api.exemplo.com/temperatura");
    http.addHeader("Content-Type", "application/json");

    String json = "{\"temperatura\": 26.5, \"umidade\": 58.0}";
    int codigo = http.POST(json);

    Serial.print("Status: ");
    Serial.println(codigo);
    http.end();
  }
  delay(5000);
}
```

Nesse caso, o ESP32 **envia os dados**, mas o servidor **nunca inicia comunicação** de volta.


## 3. Protocolo MQTT

### 3.1. Conceito

O **MQTT** é um protocolo leve de mensageria, desenvolvido especificamente para **telemetria** — ou seja, envio contínuo de dados de sensores para sistemas remotos.

Diferente do HTTP, ele segue o modelo **Publicador–Assinante (Publish/Subscribe)**, mediado por um **broker**.

### 3.2. Estrutura de Comunicação

A arquitetura envolve três entidades:

1. **Publisher (publicador)** – envia mensagens (ex: ESP32 enviando temperatura)
2. **Subscriber (assinante)** – recebe mensagens de um determinado tópico (ex: dashboard na nuvem)
3. **Broker** – servidor intermediário que gerencia os tópicos e encaminha as mensagens

Fluxo simplificado:

```
[ESP32] ---> (mensagem) ---> [Broker MQTT] ---> (repasse) ---> [Cliente/Dashboard]
```

### 3.3. Tópicos e Mensagens

Os dados são organizados em **tópicos**, que funcionam como “canais nomeados”.

Exemplo:

* Tópico: `industria/linha1/sensor1`
* Mensagem: `{"temperatura": 27.3, "umidade": 64}`

Um publicador pode enviar mensagens para vários tópicos, e os assinantes recebem apenas o que desejam monitorar.

### 3.4. Características Principais

| Aspecto               | MQTT                                                |
| --------------------- | --------------------------------------------------- |
| Modelo de comunicação | Publish/Subscribe                                   |
| Tipo de conexão       | Contínua (mantém sessão aberta)                     |
| Eficiência de rede    | Alta (mensagens pequenas)                           |
| Broker intermediário  | Necessário                                          |
| Segurança             | TLS/SSL opcional                                    |
| Indicado para         | Monitoramento em tempo real, IIoT, sensores remotos |

### 3.5. Qualidade de Serviço (QoS)

O MQTT permite definir **níveis de confiabilidade** no envio das mensagens:

| Nível | Descrição                                                 |
| ----- | --------------------------------------------------------- |
| QoS 0 | Envia uma vez, sem confirmação (“no máximo uma vez”)      |
| QoS 1 | Garante entrega, mas pode duplicar (“pelo menos uma vez”) |
| QoS 2 | Entrega única e garantida (“exatamente uma vez”)          |


## 4. Comparação entre HTTP e MQTT

| Critério                 | HTTP               | MQTT                           |
| ------------------------ | ------------------ | ------------------------------ |
| Arquitetura              | Cliente–Servidor   | Publish/Subscribe              |
| Eficiência de dados      | Média              | Alta                           |
| Conexão persistente      | Não                | Sim                            |
| Latência                 | Maior              | Menor                          |
| Complexidade do servidor | Simples            | Necessita Broker               |
| Ideal para               | APIs, sistemas web | Sensores e telemetria contínua |


## 5. Exemplo Prático no Wokwi: Enviando Dados via MQTT

Nesta atividade, simularemos um **ESP32 publicando dados de temperatura** em um **broker MQTT público**.

### 5.1. Ferramentas Necessárias

* **Wokwi** (simulador online) – [https://wokwi.com](https://wokwi.com)
* **Broker público MQTT:** `broker.hivemq.com`
* **Cliente MQTT para visualização:** [HiveMQ Web Client](https://www.hivemq.com/demos/websocket-client/)

### 5.2. Passos para Configuração

1. Acesse [https://wokwi.com/projects/new/esp32](https://wokwi.com/projects/new/esp32)
2. No editor, substitua o código padrão pelo exemplo abaixo.
3. Clique em “Play” (▶️) para iniciar a simulação.
4. Observe as mensagens publicadas no terminal serial.
5. Em outro navegador, abra o cliente da HiveMQ para **monitorar as mensagens**.

### 5.3. Código Completo

```cpp
#include <WiFi.h>
#include <PubSubClient.h>

const char* ssid = "Wokwi-GUEST";
const char* password = "";
const char* mqtt_server = "broker.hivemq.com";
const int mqtt_port = 1883;
const char* topic = "wokwi/industria/linha1";

WiFiClient espClient;
PubSubClient client(espClient);

void setup_wifi() {
  Serial.print("Conectando ao WiFi");
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi conectado!");
}

void reconnect() {
  while (!client.connected()) {
    Serial.print("Conectando ao broker MQTT...");
    if (client.connect("ESP32_Wokwi_Client")) {
      Serial.println("Conectado!");
    } else {
      Serial.print("Falha, rc=");
      Serial.println(client.state());
      delay(2000);
    }
  }
}

void setup() {
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, mqtt_port);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  // Simula leituras de sensor
  float temperatura = random(200, 300) / 10.0; 
  float umidade = random(400, 700) / 10.0;

  char payload[80];
  sprintf(payload, "{\"temperatura\": %.1f, \"umidade\": %.1f}", temperatura, umidade);

  client.publish(topic, payload);
  Serial.print("Publicado no tópico ");
  Serial.print(topic);
  Serial.print(": ");
  Serial.println(payload);

  delay(5000);
}
```

### 5.4. Teste da Publicação

1. Acesse [https://www.hivemq.com/demos/websocket-client/](https://www.hivemq.com/demos/websocket-client/)
2. Clique em **Connect** (mantendo o broker padrão)
3. Em **Topic to subscribe**, digite:

   ```
   wokwi/industria/linha1
   ```
4. Clique em **Subscribe**
5. Observe as mensagens publicadas pelo ESP32 simulador aparecendo em tempo real.



# 6. Exercício Integrado em Duplas — Comunicação IIoT com MQTT e HTTP

Cada dupla desenvolverá **dois projetos interligados** no **Wokwi**, simulando a comunicação entre **dispositivos embarcados** via **MQTT** e posteriormente comparando com **HTTP**.

* **Dispositivo A (Publicador/Sensor)**: envia dados de sensores para o broker.
* **Dispositivo B (Assinante/Atuador ou Supervisor)**: recebe os dados e executa ações com base nas mensagens.

Ambos devem se conectar ao **broker público `broker.hivemq.com`** e usar **tópicos exclusivos** por dupla.


## Parte 1 – Comunicação Sensor → Atuador

### Objetivo

Implementar uma comunicação unidirecional: o **Dispositivo A** publica dados de temperatura, e o **Dispositivo B** reage às mensagens recebidas.

### Passos

1. **Dispositivo A (Sensor):**

   * Crie um projeto no Wokwi com um ESP32 que simule leituras de temperatura usando `random()`.
   * Publique os dados a cada 5 segundos.
   * Use o tópico:

     ```
     wokwi/duplaX/temperatura
     ```
   * Payload JSON:

     ```json
     {"temperatura": 28.5}
     ```

2. **Dispositivo B (Atuador):**

   * Crie outro projeto com um ESP32 inscrito no mesmo tópico.
   * Ao receber a mensagem:

     * Se `temperatura > 28.0`, acenda o **LED** conectado à GPIO 2.
     * Caso contrário, mantenha o LED apagado.

3. Ambos os projetos devem usar o **mesmo broker MQTT** e o mesmo tópico.

### Dica

```cpp
if (temperatura > 28.0) digitalWrite(2, HIGH);
else digitalWrite(2, LOW);
```

### Desafio Extra

Crie um segundo tópico, por exemplo:

```
wokwi/duplaX/alerta
```

No qual o **atuador (Dispositivo B)** envie uma resposta:

```json
{"mensagem": "ALERTA: Temperatura alta!"}
```

E o **sensor (Dispositivo A)** exiba essa mensagem no monitor serial.


## Parte 2 – Comunicação Bidirecional (Comandos e Respostas)

### Objetivo

Estender a comunicação para que o **Dispositivo B** possa enviar **comandos** ao **Dispositivo A**, criando um ciclo completo de controle.

### Passos

1. O **Dispositivo A (Servidor de Sensores)** continua publicando os dados no tópico:

   ```
   wokwi/duplaX/dados
   ```

2. O **Dispositivo B (Supervisor)** deve:

   * Assinar o tópico `wokwi/duplaX/dados`
   * Enviar comandos de controle no tópico:

     ```
     wokwi/duplaX/comandos
     ```

3. Funcionamento esperado:

   * O Dispositivo B envia:

     ```json
     {"comando": "ligar"}
     ```

     → no tópico `wokwi/duplaX/comandos`

   * O Dispositivo A recebe o comando e responde publicando:

     ```json
     {"status": "dispositivo ligado"}
     ```

     → no tópico `wokwi/duplaX/status`

   * O Dispositivo B assina `wokwi/duplaX/status` e exibe a resposta no Serial.

### Critérios de Sucesso

* Comunicação visível no **HiveMQ Web Client**.
* Troca de mensagens MQTT funcional em tempo real.
* Lógica de envio e resposta corretamente implementada.


## Parte 3 – Monitoramento Distribuído (Rede de Sensores)

### Objetivo

Simular uma pequena rede IIoT com múltiplos sensores e um nó central de monitoramento.

### Estrutura Sugerida

* `wokwi/duplaX/sensor1`
* `wokwi/duplaX/sensor2`
* `wokwi/duplaX/central`

### Passos

1. Cada aluno da dupla cria um sensor independente (dois ESP32 diferentes no Wokwi).

   * Cada sensor publica temperatura e umidade a cada 5 segundos.
   * Payload exemplo:

     ```json
     {"temperatura": 27.2, "umidade": 60.5}
     ```

2. O **nó central (terceiro projeto)** deve:

   * Assinar os tópicos dos dois sensores.
   * Calcular a **média das temperaturas**.
   * Exibir no monitor serial:

     ```
     Média da Temperatura: 27.8°C
     ```

3. Se a média ultrapassar **29°C**, o nó central deve publicar no tópico `wokwi/duplaX/alerta` a mensagem:

   ```json
   {"alerta": "Temperatura média alta!"}
   ```

### Desafio Extra

Implemente uma resposta automática:
Quando o alerta for publicado, um dos sensores deve desligar (simular com `Serial.println("Sensor em modo standby")`).


## Parte 4 – Comparativo MQTT x HTTP

### Objetivo

Comparar a eficiência e latência entre **MQTT** e **HTTP** usando o mesmo conjunto de dados (temperatura e umidade).

### Tarefas

1. Adapte o código do **Dispositivo A (Sensor)** para enviar os mesmos dados via **HTTP POST** para um servidor público (ex: ThingSpeak, Flask local ou API simulada).
2. Envie os dados com a mesma frequência usada no MQTT.
3. Meça e registre:

   * Tempo médio de envio.
   * Tempo médio de resposta.
   * Volume de dados trafegado (tamanho das mensagens).
4. Compare os resultados e discuta as diferenças.

### Entregáveis

Elabore um breve relatório em formato `.md` ou `.pdf` contendo:

* Diferenças de desempenho observadas.
* Facilidade de implementação em cada protocolo.
* Cenários em que cada um seria mais indicado.


## Critérios de Avaliação

| Critério                                 | Peso          |
| ---------------------------------------- | ------------- |
| Conectividade correta com o broker       | 2 pts         |
| Comunicação bidirecional funcional       | 2 pts         |
| Estrutura JSON e tópicos organizados     | 2 pts         |
| Lógica de controle entre os dispositivos | 2 pts         |
| Clareza e legibilidade do código         | 2 pts         |
| **Total**                                | **10 pontos** |


## Sugestão de Nome de Tópico (para evitar conflito entre duplas)

Cada dupla deve personalizar seu identificador nos tópicos:

```
wokwi/dupla1/temperatura
wokwi/dupla2/temperatura
wokwi/dupla3/temperatura
```



## 7. Conclusão

* O **HTTP** é simples e ideal para **requisições pontuais** em sistemas baseados em APIs.
* O **MQTT** é mais eficiente para **transmissões contínuas**, típicas de aplicações industriais e de sensores.
* O uso do **broker MQTT público** permite testar rapidamente a publicação e o monitoramento de dados.
* A simulação no **Wokwi** é uma excelente forma de validar projetos IIoT antes de usar hardware real.


## 8. Referências

* MQTT.org – *Specification and Overview*
* HiveMQ – *MQTT Essentials Series*
* Arduino PubSubClient Library – *Documentation*
* Wokwi – *ESP32 Simulation Platform*
* IBM Developer – *Using MQTT for Telemetry Data Transfer*
