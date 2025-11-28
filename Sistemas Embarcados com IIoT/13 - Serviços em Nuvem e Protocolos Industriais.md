# Serviços em Nuvem e Protocolos Industriais

## ThingSpeak, Firebase, Modbus e CoAP

Este material apresenta duas frentes importantes no desenvolvimento de sistemas embarcados modernos:

1. Envio de dados para serviços em nuvem, utilizando plataformas como ThingSpeak e Firebase.
2. Comunicação em protocolos industriais, como Modbus e CoAP, simulados em ambientes como Wokwi e Tinkercad.


# 1. Serviços em Nuvem para IoT

## ThingSpeak e Firebase

Sistemas embarcados conectados frequentemente enviam dados para dashboards na nuvem, onde podem ser armazenados, visualizados ou usados por outras aplicações. Plataformas como ThingSpeak e Firebase permitem que um ESP32 ou Arduino registre leituras de sensores em tempo real.


## 1.1. ThingSpeak

ThingSpeak é um serviço voltado especificamente para IoT. Ele permite:

* Criar canais para registro de dados.
* Enviar informações por HTTP ou MQTT.
* Gerar gráficos automáticos sem necessidade de desenvolver dashboards complexos.
* Integrar com MATLAB para análises mais avançadas.

### Funcionamento básico:

1. Criar uma conta no ThingSpeak.
2. Criar um canal com campos (Field1, Field2 etc.).
3. Obter a API Key de escrita.
4. Programar o ESP32 para enviar os dados usando HTTP GET ou MQTT.

### Exemplo de aplicação:

Um sensor DHT22 conectado a um ESP32 envia temperatura e umidade para um canal no ThingSpeak.
O alunos podem observar em tempo real os gráficos de evolução da leitura.


## 1.2. Firebase

Ao contrário do ThingSpeak, o Firebase é uma plataforma mais ampla, que oferece banco de dados em tempo real, autenticação, hospedagem e integração com aplicativos mobile.

Para IoT, o mais comum é o uso do Realtime Database ou do Firestore.

### Vantagens:

* Sincronização em tempo real com aplicativos.
* Pode armazenar não apenas números, mas objetos JSON completos.
* Recebe dados via HTTPS.

### Fluxo típico:

1. Criar projeto no Firebase Console.
2. Liberar escrita pública (em ambiente de testes).
3. Gerar a URL do banco de dados.
4. ESP32 envia dados via requisição HTTP.
5. Dashboard pode ser criado usando HTML/JS ou ferramentas de terceiros.

### Exemplo:

Um ESP32 coleta dados de luminosidade e envia para o Firebase Realtime Database.
Um dashboard web simples lê o banco de dados e atualiza gráficos automaticamente.


# 2. Protocolos Industriais

## Modbus e CoAP

Além dos serviços em nuvem, é importante entender como dispositivos se comunicam em ambientes de automação industrial. Dois protocolos relevantes são Modbus e CoAP.


# 2.1. Modbus

Modbus é um protocolo industrial muito usado em CLPs, sensores e sistemas SCADA.

### Variações:

* Modbus RTU (via RS-485)
* Modbus TCP (via Ethernet/WiFi)

### Como funciona:

Dispositivos se organizam como Mestre (Master) e Escravos (Slaves).
O mestre solicita leituras ou escreve valores.
Os escravos respondem com os dados do registrador.

### Simulação com Arduino/ESP32:

No Wokwi é possível simular Modbus TCP com duas placas ESP32:

* Um ESP32 atua como servidor Modbus TCP.
* Outro atua como cliente e lê registradores (holding registers, coils etc.).

No Tinkercad, é possível simular Modbus RTU usando Arduino + RS-485 virtual.

### Exemplo:

ESP32 A disponibiliza um registrador Modbus TCP contendo a temperatura medida por um sensor.
ESP32 B lê o registrador a cada segundo e imprime no monitor serial.


# 2.2. CoAP

CoAP (Constrained Application Protocol) é um protocolo otimizado para IoT, baseado no modelo REST, semelhante ao HTTP, porém mais leve e eficiente.

### Características:

* Utiliza UDP em vez de TCP.
* Funciona em modo request/response.
* Permite modos assíncronos como observe/notify.

### Uso típico:

Um microcontrolador (ESP32) expõe recursos como:

* /temp
* /umidade
* /luminosidade

Clientes CoAP podem solicitar esses valores ou assinar para receber notificações.

### Simulação:

No Wokwi, é possível implementar um servidor CoAP em ESP32 usando bibliotecas específicas.
Um segundo ESP32 pode atuar como cliente e solicitar os dados.


# Atividades Práticas

## Atividade 1 — Envio de dados de sensor para ThingSpeak

Objetivo

* Ler um sensor DHT (temperatura e umidade) com ESP32 e enviar leituras periódicas para um canal ThingSpeak. O ThingSpeak cria automaticamente gráficos do histórico.

Requisitos / componentes

* ESP32 (ou NodeMCU ESP32 no Wokwi)
* Sensor DHT (DHT11 ou DHT22). Para DHT22 ajuste o tipo no código.
* Biblioteca DHT (Adafruit) e HTTPClient (já incluída com ESP32)

Descrição

* A cada `interval` segundos o ESP32 lê temperatura e umidade e envia via HTTP GET para a API do ThingSpeak usando a chave de escrita do canal.

Código (ESP32 + DHT → ThingSpeak)

```cpp
// ThingSpeak_DHT.ino
#include <WiFi.h>
#include <HTTPClient.h>
#include "DHT.h"

// --- CONFIGURAÇÕES DE REDE ---
const char* ssid = "Wokwi-GUEST";    // substitua pela sua rede
const char* password = "";

// --- CONFIGURAÇÕES DO THINGSPEAK ---
const char* THINGSPEAK_API_KEY = "YOUR_THINGSPEAK_WRITE_KEY"; // substitua
const char* THINGSPEAK_SERVER = "api.thingspeak.com";
const unsigned long interval = 20000; // 20s entre envios

// --- SENSOR DHT ---
#define DHTPIN 15     // pino conectado ao sensor (alterar conforme montagem)
#define DHTTYPE DHT22 // DHT11 ou DHT22
DHT dht(DHTPIN, DHTTYPE);

unsigned long lastSend = 0;

void setup() {
  Serial.begin(115200);
  delay(500);
  Serial.println("Inicializando sensor DHT -> ThingSpeak");

  dht.begin();

  WiFi.begin(ssid, password);
  Serial.print("Conectando ao Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.print("Conectado! IP: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  if (millis() - lastSend >= interval) {
    float t = dht.readTemperature(); // Celsius
    float h = dht.readHumidity();

    if (isnan(t) || isnan(h)) {
      Serial.println("Erro leitura DHT");
    } else {
      Serial.print("Temperatura: ");
      Serial.print(t);
      Serial.print(" C  Umidade: ");
      Serial.print(h);
      Serial.println(" %");

      // Monta URL GET para ThingSpeak
      String url = String("http://") + THINGSPEAK_SERVER + "/update?api_key=" + THINGSPEAK_API_KEY
                   + "&field1=" + String(t)
                   + "&field2=" + String(h);

      HTTPClient http;
      http.begin(url);
      int httpCode = http.GET();
      if (httpCode > 0) {
        Serial.print("ThingSpeak resposta: ");
        Serial.println(httpCode);
      } else {
        Serial.print("Erro HTTP: ");
        Serial.println(httpCode);
      }
      http.end();
    }
    lastSend = millis();
  }
}
```

Observações de execução 

* Crie o canal no ThingSpeak, obtenha a API Key de escrita e use-a no código.
* No ThingSpeak, configure o campo 1 = temperatura, campo 2 = umidade.
* Execute o ESP32 e abra o gráfico do ThingSpeak para visualizar os dados chegando.


## Atividade 2 — Envio de dados para Firebase Realtime Database (via REST)

Objetivo

* Enviar leituras (ex.: luminosidade e timestamp) para o Firebase Realtime Database através da API REST, para que um dashboard (web/app) possa ler em tempo real.

Requisitos / componentes

* ESP32
* Sensor LDR (divisor resistivo) para medir luminosidade no pino ADC
* Projeto Firebase com Realtime Database (modo teste / regras abertas para facilitar aula) ou token de autenticação

Descrição

* O ESP32 faz requisições HTTP POST/PUT ao endpoint do Firebase para gravar um objeto JSON (e.g., `{ "lux": 123, "ts": 1600000000 }`).

Código (ESP32 → Firebase Realtime Database)

```cpp
// Firebase_REST.ino
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

// --- CONFIGURAÇÕES DE REDE ---
const char* ssid = "Wokwi-GUEST";
const char* password = "";

// --- CONFIGURAÇÕES DO FIREBASE ---
const char* FIREBASE_DB_URL = "https://YOUR_PROJECT_ID.firebaseio.com"; // sem barra final
// Se seu DB exigir auth, anexe ?auth=YOUR_DATABASE_SECRET ou configure regras públicas para teste

const unsigned long interval = 15000; // 15s
unsigned long lastSend = 0;

// --- SENSOR LDR ---
#define LDR_PIN 34 // ADC1_6 (GPIO34) no ESP32

void setup() {
  Serial.begin(115200);
  delay(500);
  Serial.println("Inicializando ESP32 -> Firebase");

  WiFi.begin(ssid, password);
  Serial.print("Conectando Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500); Serial.print(".");
  }
  Serial.println();
  Serial.print("IP: "); Serial.println(WiFi.localIP());
}

void loop() {
  if (millis() - lastSend >= interval) {
    int raw = analogRead(LDR_PIN);
    float voltage = (raw / 4095.0) * 3.3;
    // conversão simplificada para "lux" estimado (apenas para demonstração)
    float lux = map(raw, 0, 4095, 0, 1000);

    Serial.print("LDR raw: ");
    Serial.print(raw);
    Serial.print("  Lux (estim): ");
    Serial.println(lux);

    // Monta JSON
    StaticJsonDocument<200> doc;
    doc["lux"] = lux;
    doc["raw"] = raw;
    doc["ts"] = millis() / 1000;

    String payload;
    serializeJson(doc, payload);

    // Faz PUT para um nó único (gerando um novo nó com push)
    String url = String(FIREBASE_DB_URL) + "/sensor_readings.json"; // .json obrigatório na REST API
    HTTPClient http;
    http.begin(url);
    http.addHeader("Content-Type", "application/json");
    int httpCode = http.POST(payload);
    if (httpCode > 0) {
      Serial.print("Firebase HTTP code: ");
      Serial.println(httpCode);
      String resp = http.getString();
      Serial.print("Resposta Firebase: ");
      Serial.println(resp);
    } else {
      Serial.print("Erro conexão Firebase: ");
      Serial.println(httpCode);
    }
    http.end();

    lastSend = millis();
  }
}
```

Observações de execução 

* No Firebase Console, crie um Realtime Database e, para testes, ajuste as regras para leitura/gravação públicas (apenas em ambiente de ensino).
* A URL final deve ser `https://<PROJECT_ID>.firebaseio.com/`.
* Você pode criar um dashboard simples em HTML/JS que escute o banco em tempo real (usando SDK do Firebase) ou usar a própria visão do Realtime Database no console para ver os nós sendo criados.


## Atividade 3 — Simulação Modbus TCP (servidor e cliente simples)

Objetivo

* Simular uma pequena rede Modbus TCP no Wokwi (dois ESP32) para demonstrar leitura de registradores (holding registers). Um ESP32 atua como servidor (slave) e mantém registradores com valores (ex.: temperatura), outro atua como cliente (master) e lê esses registradores periodicamente.

Observações

* Implementação didática: código implementa o subset necessário do Modbus TCP (função 0x03 — Read Holding Registers). Serve para fins de ensino e simulação. Porta Modbus TCP padrão: 502.

Parte A — Modbus TCP Server (ESP32) — disponibiliza registradores

```cpp
// ModbusTCP_Server.ino (ESP32 - servidor)
#include <WiFi.h>

// Rede
const char* ssid = "Wokwi-GUEST";
const char* password = "";

// Porta Modbus TCP
const uint16_t MODBUS_TCP_PORT = 502;

// Registradores (exemplo)
uint16_t holdingRegs[10] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0};

WiFiServer server(MODBUS_TCP_PORT);

void setup() {
  Serial.begin(115200);
  delay(200);
  Serial.println("Modbus TCP Server - ESP32");
  WiFi.begin(ssid, password);
  Serial.print("Conectando WiFi");
  while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("."); }
  Serial.println();
  Serial.print("IP: "); Serial.println(WiFi.localIP());

  // Inicializa valores de exemplo
  holdingRegs[0] = 250; // ex: temperatura * 10 => 25.0°C
  holdingRegs[1] = 600; // ex: algum outro sensor

  server.begin();
  Serial.print("Servidor Modbus TCP ouvindo na porta ");
  Serial.println(MODBUS_TCP_PORT);
}

void loop() {
  WiFiClient client = server.available();
  if (client) {
    Serial.println("Cliente Modbus conectado");
    // aguarda requisição
    while (client.connected()) {
      if (client.available() >= 8) {
        // Ler cabeçalho MBAP (7 bytes) + pelo menos 1 byte do PDU
        uint8_t mbap[7];
        client.read(mbap, 7);
        uint16_t transId = (mbap[0] << 8) | mbap[1];
        // protocolo id mbap[2..3], normalmente 0
        uint16_t length = (mbap[4] << 8) | mbap[5];
        uint8_t unitId = mbap[6];

        // lê PDU (length-1 bytes)
        int pduLen = length - 1;
        uint8_t pdu[256];
        if (pduLen > 0) {
          int readBytes = client.read(pdu, pduLen);
          if (readBytes != pduLen) {
            Serial.println("Erro leitura PDU");
            client.stop();
            break;
          }
        }

        uint8_t function = pdu[0];
        if (function == 0x03 && pduLen >= 5) {
          // Read Holding Registers
          uint16_t startAddr = (pdu[1] << 8) | pdu[2];
          uint16_t qty = (pdu[3] << 8) | pdu[4];

          Serial.print("Read holding regs start=");
          Serial.print(startAddr);
          Serial.print(" qty=");
          Serial.println(qty);

          if (startAddr + qty <= 10 && qty > 0 && qty <= 125) {
            uint8_t responsePDU[255];
            responsePDU[0] = 0x03;
            responsePDU[1] = qty * 2; // byte count
            int idx = 2;
            for (int i = 0; i < qty; i++) {
              uint16_t val = holdingRegs[startAddr + i];
              responsePDU[idx++] = (val >> 8) & 0xFF;
              responsePDU[idx++] = val & 0xFF;
            }
            uint16_t respPduLen = idx;

            // MBAP header for response
            uint8_t respMbap[7];
            respMbap[0] = (transId >> 8) & 0xFF;
            respMbap[1] = transId & 0xFF;
            respMbap[2] = 0;
            respMbap[3] = 0;
            uint16_t respLen = respPduLen + 1; // unit id included
            respMbap[4] = (respLen >> 8) & 0xFF;
            respMbap[5] = respLen & 0xFF;
            respMbap[6] = unitId;

            client.write(respMbap, 7);
            client.write(responsePDU, respPduLen);
            Serial.println("Resposta enviada");
          } else {
            // erro: endereço fora do range -> retornar exceção Modbus (simplificado)
            Serial.println("Endereço inválido, fechando conexão");
            client.stop();
          }
        } else {
          Serial.println("Função não implementada ou PDU inválida");
          client.stop();
        }
      }
      delay(10);
    }
    Serial.println("Cliente desconectado");
    client.stop();
  }
}
```

Parte B — Modbus TCP Client (ESP32) — lê registradores do servidor

```cpp
// ModbusTCP_Client.ino (ESP32 - cliente)
#include <WiFi.h>

// Rede
const char* ssid = "Wokwi-GUEST";
const char* password = "";

// IP do servidor Modbus (alterar para IP do ESP servidor na simulação)
const char* serverIP = "192.168.4.2"; // ajuste conforme IP do servidor no Wokwi
const uint16_t serverPort = 502;

WiFiClient client;

uint16_t transIdCounter = 1;

void setup() {
  Serial.begin(115200);
  delay(200);
  Serial.println("Modbus TCP Client - ESP32");
  WiFi.begin(ssid, password);
  Serial.print("Conectando WiFi");
  while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("."); }
  Serial.println();
  Serial.print("IP: "); Serial.println(WiFi.localIP());
}

void loop() {
  if (!client.connected()) {
    Serial.print("Conectando ao servidor Modbus ");
    Serial.print(serverIP);
    Serial.print(":");
    Serial.println(serverPort);
    if (!client.connect(serverIP, serverPort)) {
      Serial.println("Falha conexão TCP, tentando novamente em 3s");
      delay(3000);
      return;
    }
    Serial.println("Conectado ao servidor Modbus");
  }

  // Monta requisição Modbus TCP read holding registers (func 0x03)
  uint16_t transId = transIdCounter++;
  uint8_t mbap[7];
  mbap[0] = (transId >> 8) & 0xFF;
  mbap[1] = transId & 0xFF;
  mbap[2] = 0;
  mbap[3] = 0;
  uint16_t length = 6; // 1 unit id + 1 func + 2 start + 2 qty = 6
  mbap[4] = (length >> 8) & 0xFF;
  mbap[5] = length & 0xFF;
  mbap[6] = 1; // unit id

  uint8_t pdu[5];
  pdu[0] = 0x03; // função
  uint16_t startAddr = 0;
  uint16_t qty = 2;
  pdu[1] = (startAddr >> 8) & 0xFF;
  pdu[2] = startAddr & 0xFF;
  pdu[3] = (qty >> 8) & 0xFF;
  pdu[4] = qty & 0xFF;

  client.write(mbap, 7);
  client.write(pdu, 5);

  // lendo resposta MBAP (7 bytes) + PDU
  unsigned long start = millis();
  while (client.available() < 7 && millis() - start < 2000) delay(10);
  if (client.available() < 7) {
    Serial.println("Timeout aguardando resposta MBAP");
    client.stop();
    delay(1000);
    return;
  }
  uint8_t respMbap[7];
  client.read(respMbap, 7);
  uint16_t respLen = (respMbap[4] << 8) | respMbap[5];
  int pduLen = respLen - 1;
  uint8_t respPdu[256];
  start = millis();
  while (client.available() < pduLen && millis() - start < 2000) delay(10);
  if (client.available() < pduLen) {
    Serial.println("Timeout aguardando PDU");
    client.stop();
    delay(1000);
    return;
  }
  client.read(respPdu, pduLen);

  if (respPdu[0] == 0x03) {
    uint8_t byteCount = respPdu[1];
    Serial.print("Recebido byteCount: ");
    Serial.println(byteCount);
    for (int i = 0; i < byteCount / 2; i++) {
      uint16_t val = (respPdu[2 + i*2] << 8) | respPdu[2 + i*2 + 1];
      Serial.print("Reg ");
      Serial.print(i);
      Serial.print(" = ");
      Serial.println(val);
    }
  } else {
    Serial.println("Função de resposta diferente ou exceção");
  }

  delay(3000); // espera antes da próxima leitura
}
```

Observações de execução 

* Em Wokwi execute os dois ESP32; verifique os IPs atribuídos (ex.: 192.168.4.2 e .3) e atualize `serverIP` no cliente.
* Explique o cabeçalho MBAP e como a função 0x03 funciona; mostre tráfego TCP no simulador (se possível).
* Discuta limitações (não implementamos exceções Modbus conformes ao padrão para simplificar).


## Atividade 4 — Simulação CoAP (servidor e cliente simples)

Objetivo

* Demonstrar CoAP (Constrained Application Protocol) mínimo: um ESP32 atua como servidor CoAP expondo um recurso `/sensor`, o outro pede esse recurso via CoAP (UDP) e exibe a resposta.

Observações

* Implementação didática, mínima: cria/parseia mensagens CoAP básicas (Confirmable GET e ACK com payload). Útil para entender diferenças entre HTTP e CoAP (UDP, leve, códigos digitais).

Parte A — CoAP Server (ESP32)

```cpp
// CoAP_Server.ino (ESP32)
#include <WiFi.h>
#include <WiFiUdp.h>

// Rede
const char* ssid = "Wokwi-GUEST";
const char* password = "";

// CoAP
WiFiUDP udp;
const int COAP_PORT = 5683;

void setup() {
  Serial.begin(115200);
  delay(200);
  Serial.println("CoAP Server - ESP32");
  WiFi.begin(ssid, password);
  Serial.print("Conectando WiFi");
  while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("."); }
  Serial.println();
  Serial.print("IP: "); Serial.println(WiFi.localIP());

  udp.begin(COAP_PORT);
  Serial.print("Servidor CoAP ouvindo na porta ");
  Serial.println(COAP_PORT);
}

uint16_t buildResponseId(uint8_t *req, int len) {
  // message id está em bytes 2 e 3 do header CoAP
  return (req[2] << 8) | req[3];
}

void loop() {
  int packetSize = udp.parsePacket();
  if (packetSize) {
    IPAddress remote = udp.remoteIP();
    int remotePort = udp.remotePort();
    Serial.print("Pacote CoAP recebido de ");
    Serial.print(remote);
    Serial.print(":");
    Serial.println(remotePort);

    uint8_t buf[256];
    int len = udp.read(buf, 256);
    if (len < 4) continue;

    // header: 0: ver/type/tkl, 1: code, 2..3: message id
    uint8_t ver = (buf[0] >> 6) & 0x03;
    uint8_t type = (buf[0] >> 4) & 0x03;
    uint8_t tkl = buf[0] & 0x0F;
    uint8_t code = buf[1];
    uint16_t msgid = (buf[2] << 8) | buf[3];

    Serial.print("CoAP header ver=");
    Serial.print(ver);
    Serial.print(" type=");
    Serial.print(type);
    Serial.print(" code=");
    Serial.print(code);
    Serial.print(" msgid=");
    Serial.println(msgid);

    // Para simplicidade, assumimos GET sem token
    // Responder com ACK (type=2) e código 2.05 (69 decimal -> 0x45)
    uint8_t resp[256];
    // header: ver=1,type=2 (ACK), tkl=0
    resp[0] = (1 << 6) | (2 << 4) | 0;
    resp[1] = 0x45; // 2.05 Content
    resp[2] = buf[2]; // same msg id
    resp[3] = buf[3];

    // payload marker 0xFF seguido do texto
    const char* payload = "Sensor: 23.5 C";
    int payloadLen = strlen(payload);
    int headerLen = 4;
    resp[headerLen] = 0xFF;
    memcpy(&resp[headerLen + 1], payload, payloadLen);

    int respLen = headerLen + 1 + payloadLen;
    udp.beginPacket(remote, remotePort);
    udp.write(resp, respLen);
    udp.endPacket();
    Serial.println("Resposta CoAP enviada");
  }
  delay(10);
}
```

Parte B — CoAP Client (ESP32)

```cpp
// CoAP_Client.ino (ESP32)
#include <WiFi.h>
#include <WiFiUdp.h>

// Rede
const char* ssid = "Wokwi-GUEST";
const char* password = "";

// info do servidor
const char* serverIP = "192.168.4.2"; // ajuste para IP do servidor CoAP na simulação
const uint16_t serverPort = 5683;

WiFiUDP udp;
uint16_t messageId = 1;

void setup() {
  Serial.begin(115200);
  delay(200);
  Serial.println("CoAP Client - ESP32");
  WiFi.begin(ssid, password);
  Serial.print("Conectando WiFi");
  while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("."); }
  Serial.println();
  Serial.print("IP: "); Serial.println(WiFi.localIP());

  udp.begin(0); // porta local dinâmica
}

void sendCoapGet() {
  uint8_t buf[256];
  // header: ver=1, type=0 (CON), tkl=0
  buf[0] = (1 << 6) | (0 << 4) | 0;
  buf[1] = 0x01; // 0.01 GET
  buf[2] = (messageId >> 8) & 0xFF;
  buf[3] = messageId & 0xFF;
  int len = 4;

  udp.beginPacket(serverIP, serverPort);
  udp.write(buf, len);
  udp.endPacket();
  Serial.print("CoAP GET enviado msgid=");
  Serial.println(messageId);
  messageId++;
}

void loop() {
  sendCoapGet();

  unsigned long start = millis();
  while (millis() - start < 2000) {
    int packetSize = udp.parsePacket();
    if (packetSize) {
      uint8_t resp[256];
      int len = udp.read(resp, 256);
      if (len >= 4) {
        // payload começa após header e possível token/options; aqui assumimos tkl=0 e sem options
        // procura payload marker 0xFF
        int payloadIndex = -1;
        for (int i = 4; i < len; i++) {
          if (resp[i] == 0xFF) { payloadIndex = i + 1; break; }
        }
        if (payloadIndex > 0 && payloadIndex < len) {
          String payload = "";
          for (int i = payloadIndex; i < len; i++) payload += (char)resp[i];
          Serial.print("Resposta CoAP payload: ");
          Serial.println(payload);
        } else {
          Serial.println("Resposta CoAP recebida mas sem payload");
        }
      }
      break;
    }
    delay(10);
  }
  delay(5000);
}
```

Observações de execução 

* Ajuste `serverIP` no cliente para o IP do servidor no ambiente (Wokwi).
* Explique diferenças com HTTP: CoAP usa UDP (não há handshake TCP), mensagens são menores e códigos numéricos compactos.
* Mostre o formato simples do header CoAP e onde está o payload (marca 0xFF).
