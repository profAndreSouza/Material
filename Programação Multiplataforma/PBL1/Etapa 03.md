# Documentação da Etapa de Simulação e Geração de Dados IoT

Esta etapa estabelece o ambiente de geração de dados ambientais por meio de dispositivos IoT simulados. O objetivo é produzir medições contínuas que representem o comportamento de sensores físicos e que possam ser posteriormente transmitidas ao sistema distribuído definido na arquitetura.

Aqui ocorre a criação da fonte de dados do sistema. Antes da transmissão para o broker MQTT, backend ou banco de dados, é necessário garantir que os sensores estão funcionando corretamente e que as leituras são produzidas de forma consistente.

Nesta etapa, os dados ainda são gerados e observados localmente via monitor serial.


## Objetivo da Etapa

* Configurar ambiente de simulação IoT
* Produzir leituras periódicas de sensores ambientais
* Validar funcionamento do microcontrolador
* Garantir consistência dos dados gerados
* Criar a base de dados que será transmitida nas próximas etapas


## Ambiente de Simulação

A simulação é realizada com um microcontrolador ESP32 conectado a sensores ambientais virtuais.

O conjunto de sensores simulados representa um sistema típico de monitoramento inteligente de ambiente e inclui:

* temperatura e umidade do ar
* detecção de presença
* nível de luminosidade
* qualidade do ar

Esses sensores produzem dados contínuos que simulam medições reais de um ambiente físico.

O microcontrolador executa leituras periódicas e envia os valores para o monitor serial, permitindo a validação do funcionamento do sistema.


## Estrutura do Projeto de Simulação

O ambiente de simulação é composto por três elementos principais:

### 1. Definição do circuito (`diagram.json`)

Define todos os componentes eletrônicos e suas conexões elétricas.

### 2. Bibliotecas (`libraries.txt`)

Define as bibliotecas necessárias para comunicação com os sensores.

### 3. Programa embarcado (`sketch.ino`)

Código executado no ESP32 responsável pela leitura dos sensores.


## Configuração do Circuito

O circuito virtual define um ESP32 conectado a quatro sensores:

| Sensor        | Função                | Tipo de sinal | Pino ESP32 |
| ------------- | --------------------- | ------------- | ---------- |
| DHT22         | Temperatura e umidade | Digital       | GPIO 15    |
| PIR           | Presença              | Digital       | GPIO 18    |
| LDR           | Luminosidade          | Analógico     | GPIO 2     |
| Sensor de gás | Qualidade do ar       | Analógico     | GPIO 4     |

Todos os sensores são alimentados por 3.3V e compartilham o mesmo terra.

O circuito também inclui comunicação serial para exibição das leituras.


## Código do Microcontrolador

O programa embarcado executa continuamente a leitura dos sensores conectados ao ESP32 e imprime os valores no monitor serial.

O comportamento do código pode ser descrito em três etapas principais:

### Inicialização do sistema

* inicia comunicação serial
* configura o sensor DHT22
* define o sensor de presença como entrada digital

### Coleta de dados

A cada ciclo de execução o sistema:

* lê temperatura e umidade do DHT22
* verifica presença detectada pelo PIR
* mede intensidade luminosa do LDR
* mede nível de gases do sensor de qualidade do ar

### Saída das informações

Todos os valores são exibidos no monitor serial em formato estruturado, permitindo leitura humana e validação do funcionamento do sistema.

Entre cada leitura há um intervalo de aproximadamente 2 segundos, respeitando o tempo mínimo de amostragem do sensor DHT22.


## Código Utilizado



### 1️ ESP32 Publisher (Sensores → MQTT)

> [https://wokwi.com/projects/456502684570619905](https://wokwi.com/projects/456502684570619905)

Responsável por:

* Ler sensores
* Montar JSON
* Publicar no broker MQTT


#### sketch.ino (Publisher)

```cpp
#include <DHTesp.h>
#include <WiFi.h>
#include <PubSubClient.h>
#include <time.h>

#define DHT_PIN 15
#define PIR_PIN 18
#define LDR_PIN 2
#define GAS_PIN 4

// WiFi
const char* ssid = "Wokwi-GUEST";
const char* password = "";

// MQTT
const char* mqtt_server = "broker.hivemq.com";
const int mqtt_port = 1883;
const char* mqtt_topic = "fatec/p11/lab2";

// NTP
const char* ntpServer = "pool.ntp.org";
const long gmtOffset_sec = -3 * 3600;
const int daylightOffset_sec = 0;

WiFiClient espClient;
PubSubClient client(espClient);
DHTesp dht;

void connectWiFi() {
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) delay(500);
}

void connectMQTT() {
  while (!client.connected()) {
    client.connect("ESP32_Publisher");
    delay(500);
  }
}

String getTimestamp() {
  struct tm timeinfo;
  if (!getLocalTime(&timeinfo)) return "0";
  char buffer[20];
  strftime(buffer, sizeof(buffer), "%Y%m%d%H%M%S", &timeinfo);
  return String(buffer);
}

float adcToLux(int adc) {
  return (adc / 4095.0) * 100000.0;
}

String buildJson(float t, float h, float lux, int gas) {
  String json = "{";
  json += "\"temperatura\":" + String(t,2) + ",";
  json += "\"umidade\":" + String(h,2) + ",";
  json += "\"luminosidade\":" + String(lux,2) + ",";
  json += "\"qualidade_ar\":" + String(gas) + ",";
  json += "\"timestamp\":\"" + getTimestamp() + "\"";
  json += "}";
  return json;
}

void publishData() {
  TempAndHumidity data = dht.getTempAndHumidity();

  float lux = adcToLux(analogRead(LDR_PIN));
  int gas = analogRead(GAS_PIN);

  String json = buildJson(data.temperature, data.humidity, lux, gas);
  client.publish(mqtt_topic, json.c_str());
  Serial.println(json);
}

void setup() {
  Serial.begin(115200);

  dht.setup(DHT_PIN, DHTesp::DHT22);
  pinMode(PIR_PIN, INPUT);

  connectWiFi();
  client.setServer(mqtt_server, mqtt_port);
  configTime(gmtOffset_sec, daylightOffset_sec, ntpServer);
}

void loop() {
  if (!client.connected()) connectMQTT();
  client.loop();

  publishData();
  delay(5000);
}
```


#### libraries.txt (Publisher)

```txt
# Wokwi Library List
# See https://docs.wokwi.com/guides/libraries

DHT sensor library for ESPx
PubSubClient

```


#### diagram.json (Publisher)

```json

{
  "version": 1,
  "author": "André Souza",
  "editor": "wokwi",
  "parts": [
    {
      "type": "wokwi-breadboard-half",
      "id": "bb1",
      "top": -214.2,
      "left": 156.4,
      "attrs": { "color": "#eeefed" }
    },
    { "type": "board-esp32-devkit-c-v4", "id": "esp", "top": 28.8, "left": -52.76, "attrs": {} },
    {
      "type": "wokwi-dht22",
      "id": "dht1",
      "top": -210.9,
      "left": 397.8,
      "attrs": { "temperature": "28.5", "humidity": "65.5" }
    },
    {
      "type": "wokwi-photoresistor-sensor",
      "id": "ldr1",
      "top": -211.5,
      "left": 272.9,
      "rotate": 90,
      "attrs": {}
    },
    { "type": "wokwi-pir-motion-sensor", "id": "pir1", "top": -188, "left": 165.42, "attrs": {} },
    {
      "type": "wokwi-gas-sensor",
      "id": "gas1",
      "top": -196,
      "left": 223.7,
      "rotate": 90,
      "attrs": {}
    }
  ],
  "connections": [
    [ "esp:TX", "$serialMonitor:RX", "", [] ],
    [ "esp:RX", "$serialMonitor:TX", "", [] ],
    [ "esp:GND.2", "bb1:bn.1", "black", [ "h19.2", "v-75.5" ] ],
    [ "bb1:bp.1", "esp:3V3", "red", [ "v-0.9", "h-257.6", "v86.4" ] ],
    [ "bb1:3b.j", "bb1:bp.2", "red", [ "v0" ] ],
    [ "bb1:12b.j", "bb1:bn.10", "black", [ "v0" ] ],
    [ "bb1:28b.j", "bb1:bn.23", "black", [ "v0" ] ],
    [ "bb1:4b.j", "esp:18", "purple", [ "v0" ] ],
    [ "bb1:18b.j", "esp:2", "yellow", [ "v0" ] ],
    [ "bb1:14b.j", "esp:4", "blue", [ "v0" ] ],
    [ "bb1:26b.j", "esp:15", "green", [ "v0" ] ],
    [ "bb1:5b.j", "bb1:bn.4", "black", [ "v0" ] ],
    [ "bb1:20b.j", "bb1:bn.16", "black", [ "v0" ] ],
    [ "bb1:25b.j", "bb1:bp.20", "red", [ "v0" ] ],
    [ "bb1:21b.j", "bb1:bp.17", "red", [ "v0" ] ],
    [ "bb1:11b.j", "bb1:bp.9", "red", [ "v0" ] ],
    [ "dht1:VCC", "bb1:25b.f", "", [ "$bb" ] ],
    [ "dht1:SDA", "bb1:26b.f", "", [ "$bb" ] ],
    [ "dht1:NC", "bb1:27b.f", "", [ "$bb" ] ],
    [ "dht1:GND", "bb1:28b.f", "", [ "$bb" ] ],
    [ "pir1:VCC", "bb1:3b.f", "", [ "$bb" ] ],
    [ "pir1:OUT", "bb1:4b.f", "", [ "$bb" ] ],
    [ "pir1:GND", "bb1:5b.f", "", [ "$bb" ] ],
    [ "gas1:AOUT", "bb1:14b.f", "", [ "$bb" ] ],
    [ "gas1:DOUT", "bb1:13b.f", "", [ "$bb" ] ],
    [ "gas1:GND", "bb1:12b.f", "", [ "$bb" ] ],
    [ "gas1:VCC", "bb1:11b.f", "", [ "$bb" ] ],
    [ "ldr1:VCC", "bb1:21b.f", "", [ "$bb" ] ],
    [ "ldr1:GND", "bb1:20b.f", "", [ "$bb" ] ],
    [ "ldr1:DO", "bb1:19b.f", "", [ "$bb" ] ],
    [ "ldr1:AO", "bb1:18b.f", "", [ "$bb" ] ]
  ],
  "dependencies": {}
}

```


### 2️ ESP32 Subscriber (MQTT → Monitor Serial)


> [https://wokwi.com/projects/457141698675045377](https://wokwi.com/projects/457141698675045377)

Responsável por:

* Conectar ao mesmo broker
* Inscrever-se no tópico
* Exibir o JSON recebido


#### sketch.ino (Subscriber)

```cpp
#include <WiFi.h>
#include <PubSubClient.h>

// WiFi
const char* ssid = "Wokwi-GUEST";
const char* password = "";

// MQTT
const char* mqtt_server = "broker.hivemq.com";
const int mqtt_port = 1883;
const char* mqtt_topic = "fatec/p11/lab2";

WiFiClient espClient;
PubSubClient client(espClient);

void connectWiFi() {
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) delay(500);
}

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Topico: ");
  Serial.println(topic);

  Serial.print("Mensagem: ");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
  }
  Serial.println("\n");
}

void connectMQTT() {
  while (!client.connected()) {
    if (client.connect("ESP32_Subscriber")) {
      client.subscribe(mqtt_topic);
    }
    delay(500);
  }
}

void setup() {
  Serial.begin(115200);

  connectWiFi();
  client.setServer(mqtt_server, mqtt_port);
  client.setCallback(callback);
}

void loop() {
  if (!client.connected()) connectMQTT();
  client.loop();
}
```


#### libraries.txt (Subscriber)

```txt
# Wokwi Library List
# See https://docs.wokwi.com/guides/libraries

PubSubClient
```


#### diagram.json (Subscriber)

```json

{
  "version": 1,
  "author": "André Souza",
  "editor": "wokwi",
  "parts": [ { "type": "board-esp32-devkit-c-v4", "id": "esp", "top": 0, "left": 0, "attrs": {} } ],
  "connections": [ [ "esp:TX", "$serialMonitor:RX", "", [] ], [ "esp:RX", "$serialMonitor:TX", "", [] ] ],
  "dependencies": {}
}

```


## Resultado Esperado

Após iniciar as simulações:

### No Publisher:

* Leitura contínua dos sensores
* Geração de JSON estruturado
* Publicação periódica no tópico MQTT

### No Subscriber:

* Recebimento automático das mensagens
* Exibição do JSON no monitor serial

Fluxo esperado:

```
Sensores → ESP32 Publisher → Broker MQTT → ESP32 Subscriber
```


## Papel da Etapa no Sistema Completo

Esta etapa representa a **camada de comunicação da arquitetura IoT**.

Ela conecta:

* Dispositivo físico (sensores)
* Middleware (broker MQTT)
* Consumidor de dados (subscriber)

Nas próximas etapas:

* O backend consumirá os dados MQTT
* As medições serão persistidas em banco (InfluxDB)
* O dashboard exibirá dados em tempo real


## Resultado Conceitual

Ao final desta etapa o sistema passa a ter:

* Um dispositivo IoT produtor de dados
* Comunicação assíncrona via MQTT
* Estrutura JSON padronizada
* Separação clara entre produtor e consumidor

Isso estabelece a base da arquitetura distribuída que será expandida nas próximas fases do projeto.
