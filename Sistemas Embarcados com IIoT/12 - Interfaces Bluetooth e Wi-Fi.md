# Interfaces Bluetooth e Wi-Fi em Sistemas Embarcados

## 1. Introdução às Interfaces de Comunicação Sem Fio

Nos sistemas embarcados modernos, a capacidade de comunicação é um dos fatores mais importantes para garantir integração, controle e monitoramento remoto. Diferentemente das conexões cabeadas (como UART, I2C e SPI), as interfaces sem fio permitem a troca de informações entre dispositivos de forma mais flexível, sem a necessidade de infraestrutura física entre os elementos do sistema.

As duas tecnologias mais difundidas nesse contexto são o **Bluetooth** e o **Wi-Fi**, amplamente aplicadas em dispositivos IoT, automação residencial, controle de sensores e comunicação entre placas embarcadas e smartphones.

De forma geral, ambas utilizam ondas de rádio na faixa de **2,4 GHz**, mas possuem objetivos e características distintas:

* O **Bluetooth** foi projetado para comunicação direta entre dispositivos próximos (comunicação ponto a ponto).
* O **Wi-Fi** foi projetado para integrar dispositivos a uma rede local ou à Internet.


## 2. Comunicação Bluetooth

### 2.1 Conceito

O Bluetooth é uma tecnologia de comunicação sem fio de curto alcance que permite a troca de dados entre dispositivos utilizando um protocolo padronizado e seguro. É amplamente utilizado em dispositivos móveis, sensores, módulos de automação e wearables.

A comunicação Bluetooth é estruturada em dois papéis principais:

* **Master (mestre):** dispositivo que inicia e controla a conexão.
* **Slave (escravo):** dispositivo que responde aos comandos e permanece à disposição para receber conexões.

Na prática, em um sistema embarcado, o microcontrolador (como o Arduino) costuma atuar como **slave**, recebendo comandos de um **master** (geralmente um smartphone ou computador).

### 2.2 Tipos de Bluetooth

Existem duas versões principais utilizadas em sistemas embarcados:

1. **Bluetooth Clássico:** voltado para transferência contínua de dados (ex.: áudio, comandos, textos). É o tipo utilizado nos módulos HC-05 e HC-06.
2. **Bluetooth Low Energy (BLE):** projetado para aplicações que exigem baixo consumo de energia e trocas esporádicas de dados, como sensores de IoT e dispositivos vestíveis. Essa versão é suportada nativamente pelo ESP32.


## 3. Módulos Bluetooth para Arduino

O Arduino, por si só, não possui interface Bluetooth integrada. Para implementar essa funcionalidade, utilizam-se **módulos externos** conectados via interface serial (UART). Os mais comuns são os módulos **HC-05** e **HC-06**.

### 3.1 Módulo HC-05

O HC-05 é um módulo Bluetooth clássico amplamente utilizado em protótipos e projetos didáticos. Ele pode ser configurado como **master** ou **slave**, tornando-o versátil para diversas aplicações. A comunicação com o Arduino ocorre através de pinos **TX** e **RX**, utilizando a interface serial.

**Pinos principais do HC-05:**

* VCC: alimentação (5 V)
* GND: terra
* TXD: transmite dados
* RXD: recebe dados
* EN ou KEY: entrada usada para modo de configuração (opcional)

**Exemplo de ligação com Arduino Uno:**

* VCC → 5V
* GND → GND
* TXD → pino 10 (RX via SoftwareSerial)
* RXD → pino 11 (TX via SoftwareSerial)

**Exemplo de código para comunicação serial via Bluetooth:**

```cpp
#include <SoftwareSerial.h>
SoftwareSerial BT(10, 11); // RX, TX

void setup() {
  Serial.begin(9600);
  BT.begin(9600);
  Serial.println("Módulo Bluetooth inicializado.");
}

void loop() {
  if (BT.available()) {
    char c = BT.read();
    Serial.print("Recebido via Bluetooth: ");
    Serial.println(c);
  }
}
```

### 3.2 Módulo HC-06

O HC-06 é semelhante ao HC-05, mas funciona **apenas como dispositivo slave**, ou seja, não pode iniciar conexões. É mais simples e econômico, sendo indicado para projetos em que o módulo apenas recebe comandos.


## 4. Comunicação Wi-Fi

### 4.1 Conceito

O Wi-Fi é uma tecnologia de comunicação sem fio que permite a conexão de dispositivos a redes locais e à Internet. Sua principal vantagem em sistemas embarcados é possibilitar o envio e o recebimento de dados de forma remota, sem a necessidade de cabos, permitindo a criação de sistemas de monitoramento e controle acessíveis via navegador web ou aplicativos.

O Wi-Fi utiliza protocolos da pilha **TCP/IP**, o que significa que os dispositivos embarcados podem atuar como **clientes** (enviando dados a um servidor) ou **servidores** (oferecendo serviços, como páginas web ou APIs).


## 5. Módulos e Shields Wi-Fi para Arduino

### 5.1 Arduino WiFi Shield

O **Arduino WiFi Shield** é um módulo que se conecta diretamente sobre a placa Arduino Uno ou Mega, fornecendo conectividade Wi-Fi através da biblioteca **WiFi.h**. Esse shield permite que o Arduino se conecte a redes sem fio, hospede servidores web e envie dados a plataformas online, como ThingSpeak ou Blynk.

A configuração é relativamente simples, bastando inicializar a biblioteca WiFi e fornecer as credenciais da rede.

**Exemplo básico:**

```cpp
#include <SPI.h>
#include <WiFi.h>

char ssid[] = "MinhaRede";
char pass[] = "SenhaRede";
WiFiServer server(80);

void setup() {
  WiFi.begin(ssid, pass);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
  }
  server.begin();
}

void loop() {
  WiFiClient client = server.available();
  if (client) {
    client.println("Conexão estabelecida com o Arduino via Wi-Fi!");
  }
}
```

### 5.2 Módulo ESP8266

O **ESP8266** é um microcontrolador com conectividade Wi-Fi integrada, fabricado pela Espressif. Ele pode ser usado de duas formas:

1. **Como módulo Wi-Fi externo do Arduino**, conectado via UART;
2. **De forma independente**, programado diretamente pela IDE do Arduino.

Esse módulo tornou-se popular devido ao seu baixo custo e compatibilidade com diversos protocolos de comunicação, incluindo **HTTP**, **MQTT** e **WebSocket**.


## 6. ESP32: Plataforma Integrada de Wi-Fi e Bluetooth

O **ESP32** é a evolução do ESP8266, também desenvolvido pela Espressif, e representa atualmente uma das plataformas mais completas e econômicas para projetos de sistemas embarcados com conectividade sem fio. Ele combina, em um único chip, **Wi-Fi**, **Bluetooth Clássico** e **Bluetooth Low Energy**, além de processador dual-core e recursos analógicos e digitais avançados.

### 6.1 Características principais

* Processador dual-core de até 240 MHz.
* Memória SRAM de aproximadamente 520 KB.
* Wi-Fi 802.11 b/g/n integrado.
* Bluetooth Clássico e BLE integrados.
* Vários GPIOs configuráveis como entradas, saídas, ADC, DAC, PWM e SPI.
* Custo acessível, sendo facilmente encontrado entre R$ 30 e R$ 50.


### 6.2 Exemplo de uso do Wi-Fi com ESP32

O exemplo abaixo demonstra a criação de um **servidor web local** que permite controlar um LED através de um navegador.

```cpp
#include <WiFi.h>

const char* ssid = "MinhaRede";
const char* password = "SenhaRede";
WiFiServer server(80);
int led = 2;

void setup() {
  pinMode(led, OUTPUT);
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Conectando à rede Wi-Fi...");
  }

  Serial.println("Conectado com sucesso!");
  Serial.println(WiFi.localIP());
  server.begin();
}

void loop() {
  WiFiClient client = server.available();
  if (!client) return;

  String request = client.readStringUntil('\r');
  client.flush();

  if (request.indexOf("/LED=ON") != -1) digitalWrite(led, HIGH);
  if (request.indexOf("/LED=OFF") != -1) digitalWrite(led, LOW);

  client.println("HTTP/1.1 200 OK");
  client.println("Content-type:text/html");
  client.println();
  client.println("<a href=\"/LED=ON\">Ligar LED</a><br>");
  client.println("<a href=\"/LED=OFF\">Desligar LED</a><br>");
  client.stop();
}
```


### 6.3 Exemplo de uso do Bluetooth no ESP32

O ESP32 também pode atuar como dispositivo Bluetooth, seja na versão clássica ou BLE. O exemplo a seguir mostra o uso de **Bluetooth Serial**, permitindo comunicação direta com um aplicativo de celular.

```cpp
#include "BluetoothSerial.h"
BluetoothSerial SerialBT;

void setup() {
  Serial.begin(115200);
  SerialBT.begin("ESP32_BT"); // nome do dispositivo visível no Bluetooth
  Serial.println("Bluetooth iniciado.");
}

void loop() {
  if (SerialBT.available()) {
    char c = SerialBT.read();
    Serial.write(c);
  }
}
```


## 7. Comparativo entre as plataformas

| Critério           | Arduino + Módulo (HC-05/WiFi Shield) | ESP32                               |
| ------------------ | ------------------------------------ | ----------------------------------- |
| Conectividade      | Necessita módulos externos           | Wi-Fi e Bluetooth integrados        |
| Desempenho         | 16 MHz                               | Até 240 MHz (dual-core)             |
| Consumo de energia | Maior (vários componentes)           | Otimizado                           |
| Facilidade de uso  | Alta para iniciantes                 | Requer maior configuração inicial   |
| Custo total        | Mais alto                            | Menor                               |
| Aplicações típicas | Projetos didáticos                   | IoT e sistemas embarcados avançados |


## 8. Aplicações Práticas

* Comunicação entre Arduino e smartphone via Bluetooth para controle de motores e relés.
* Monitoramento de sensores ambientais e envio de dados a servidores via Wi-Fi.
* Criação de dashboards locais para visualização em tempo real.
* Integração com plataformas de nuvem IoT como ThingSpeak, Blynk e Adafruit IO.
* Redes mesh utilizando ESP32 com BLE ou Wi-Fi.


## 9. Desafio Prático para o Aluno

Desenvolver um projeto utilizando o ESP32 que combine as duas interfaces:

1. A comunicação Bluetooth deve permitir que o usuário ligue ou desligue um LED a partir de um aplicativo móvel.
2. A comunicação Wi-Fi deve disponibilizar uma página web que exiba o estado atual do LED e permita seu controle remoto via navegador.

Esse exercício permitirá compreender a interação simultânea entre diferentes protocolos sem fio, bem como o gerenciamento de tarefas no ESP32.


## 10. Conclusão

As interfaces Bluetooth e Wi-Fi são fundamentais para a conectividade de sistemas embarcados modernos. Enquanto o Bluetooth é ideal para comunicações locais e simples, o Wi-Fi permite a integração com redes e serviços na Internet.
O ESP32 representa uma solução completa e acessível para o desenvolvimento de sistemas embarcados conectados, combinando as duas tecnologias em uma única plataforma, tornando-o indispensável em projetos IoT e de automação.

## 11. Exercício Prático: Comunicação Distribuída via MQTT e Telegram com ESP32

Neste exercício, desenvolveremos em conjunto um projeto composto por **dois ESP32** simulados no **Wokwi**, explorando **comunicação em rede via MQTT**, **integração com serviços externos (Telegram)** e **exibição de mensagens em um display OLED**.
Além disso, a **interface UART** será utilizada para depuração e acompanhamento das mensagens trocadas entre os dispositivos.


### Contexto

Imagine um sistema de notificação IoT, onde mensagens enviadas por um usuário no **Telegram** são automaticamente distribuídas a outros dispositivos conectados à rede.
Neste cenário, o **ESP32 nº 1** será responsável por receber a mensagem do Telegram e publicá-la em um **tópico MQTT** hospedado no **broker HiveMQ**.
O **ESP32 nº 2**, por sua vez, ficará inscrito (subscriber) nesse mesmo tópico e exibirá o conteúdo recebido em um **display OLED**.
A **UART** será usada para registrar logs de depuração, permitindo observar o fluxo completo de comunicação.


### Objetivos de Aprendizagem

Ao final do exercício, o aluno deverá ser capaz de:

* Configurar e conectar dois ESP32 ao mesmo **broker MQTT (HiveMQ)**.
* Utilizar a **biblioteca do Telegram Bot API** para receber mensagens em um microcontrolador.
* Publicar e assinar mensagens MQTT.
* Exibir dados recebidos em um **display OLED (I2C)**.
* Usar a **UART (Serial Monitor)** para depuração e visualização de logs.
* Compreender o fluxo de comunicação **Telegram → MQTT → ESP32 → OLED**.


### Arquitetura do Sistema

* **ESP32 #1 (Publicador)**

  * Conecta ao Wi-Fi.
  * Recebe mensagens de um **bot Telegram**.
  * Publica as mensagens recebidas no tópico MQTT `"iot/telegram"`.
  * Exibe logs de status e mensagens via **Serial Monitor (UART)**.

* **ESP32 #2 (Assinante)**

  * Conecta ao mesmo broker MQTT (HiveMQ).
  * Subscreve o tópico `"iot/telegram"`.
  * Exibe as mensagens recebidas no **display OLED (SSD1306)**.
  * Mostra logs de depuração no **Serial Monitor (UART)**.


### Componentes Simulados no Wokwi

* 2 × **ESP32 DevKit v1**
* 1 × **Display OLED 0.96” (I2C – SSD1306)**
* Conexão **Wi-Fi virtual** (Wokwi)
* Broker **HiveMQ Cloud**
* **Bot Telegram** (criado com BotFather)


### Observações para Execução

* O professor guiará a montagem e o código passo a passo.
* As credenciais de rede Wi-Fi, tokens do Telegram e informações do broker MQTT serão configuradas em tempo real.
* O monitor serial será usado para acompanhar o envio e recebimento de mensagens, permitindo observar eventuais erros de conexão ou autenticação.


## 12. Exercício Prático: Códigos

### Código do ESP32 #1 – Publicador (Telegram → MQTT)

Este código conecta o ESP32 a uma rede Wi-Fi, ao bot do Telegram e ao broker MQTT.
Quando o bot recebe uma mensagem no Telegram, o ESP publica essa mensagem no tópico MQTT “iot/telegram”, que será lido pelo segundo ESP.

#### Inclusão de bibliotecas

```cpp
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <PubSubClient.h>
#include <UniversalTelegramBot.h>
```

Essas bibliotecas permitem que o ESP32 conecte-se ao Wi-Fi, acesse conexões seguras (HTTPS), se comunique via MQTT e interaja com o bot do Telegram.


#### Configuração do Wi-Fi

```cpp
const char* ssid = "Wokwi-GUEST";
const char* password = "";
```

Define o nome e senha da rede Wi-Fi à qual o ESP32 irá se conectar.
No Wokwi, a rede “Wokwi-GUEST” é simulada automaticamente.


#### Configuração do Telegram

```cpp
#define BOT_TOKEN "SEU_TOKEN_AQUI"
#define CHAT_ID "SEU_CHAT_ID_AQUI"
```

O token é o código gerado pelo BotFather ao criar o bot.
O chat ID é o identificador do usuário ou grupo que se comunica com o bot.
Eles são usados para autenticar o acesso e identificar de onde vêm as mensagens.

```cpp
WiFiClientSecure secured_client;
UniversalTelegramBot bot(BOT_TOKEN, secured_client);
```

Cria um cliente seguro (HTTPS) para conectar-se à API do Telegram e inicializa o objeto do bot.


#### Configuração do MQTT (HiveMQ)

```cpp
const char* mqtt_server = "broker.hivemq.com";
const int mqtt_port = 1883;
const char* mqtt_topic = "iot/telegram";
```

Define o endereço do broker MQTT público (HiveMQ), a porta padrão (1883) e o nome do tópico no qual as mensagens serão publicadas.

```cpp
WiFiClient espClient;
PubSubClient client(espClient);
```

Cria o cliente MQTT responsável por enviar dados ao broker.


#### Conexão ao Wi-Fi

```cpp
void setupWiFi() {
  Serial.println("Conectando ao Wi-Fi...");
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWi-Fi conectado!");
  Serial.print("IP: ");
  Serial.println(WiFi.localIP());
}
```

Essa função tenta conectar o ESP32 à rede Wi-Fi, imprimindo pontos no terminal até obter sucesso.
Quando a conexão é estabelecida, o IP local é exibido no monitor serial.


#### Conexão ao broker MQTT

```cpp
void reconnectMQTT() {
  while (!client.connected()) {
    Serial.print("Conectando ao broker MQTT...");
    if (client.connect("ESP32_TelegramPublisher")) {
      Serial.println("conectado!");
    } else {
      Serial.print("falhou (rc=");
      Serial.print(client.state());
      Serial.println(") tentando novamente em 5s...");
      delay(5000);
    }
  }
}
```

Essa função tenta continuamente conectar o ESP32 ao broker MQTT.
Caso a conexão falhe, o programa espera 5 segundos antes de tentar novamente.


#### Recebimento e publicação de mensagens

```cpp
void handleNewMessages(int numNewMessages) {
  Serial.println("Nova mensagem recebida:");
  for (int i = 0; i < numNewMessages; i++) {
    String text = bot.messages[i].text;
    String sender = bot.messages[i].from_name;
```

O código percorre todas as mensagens recebidas pelo bot e extrai o texto e o nome do remetente.

```cpp
    Serial.print("De: ");
    Serial.println(sender);
    Serial.print("Mensagem: ");
    Serial.println(text);
```

Essas linhas exibem no monitor serial quem enviou a mensagem e qual foi o conteúdo.

```cpp
    if (client.connected()) {
      client.publish(mqtt_topic, text.c_str());
      Serial.println("Mensagem publicada no HiveMQ!");
    } else {
      Serial.println("Erro: não conectado ao broker MQTT.");
    }
```

Se o ESP estiver conectado ao broker, publica a mensagem recebida no tópico MQTT.
Caso contrário, informa que não conseguiu enviar.

```cpp
    String reply = "Mensagem publicada no MQTT: " + text;
    bot.sendMessage(bot.messages[i].chat_id, reply, "");
  }
}
```

O bot responde automaticamente ao usuário no Telegram, confirmando que a mensagem foi publicada com sucesso.


#### Função setup

```cpp
void setup() {
  Serial.begin(115200);
  delay(1000);
  Serial.println("Inicializando ESP32 Publicador...");
```

Inicializa a UART para exibir logs no monitor serial.

```cpp
  setupWiFi();
  secured_client.setInsecure();
```

Conecta ao Wi-Fi e desativa a verificação de certificado SSL (necessário no ambiente simulado).

```cpp
  client.setServer(mqtt_server, mqtt_port);
  reconnectMQTT();
}
```

Configura o endereço do broker MQTT e tenta a primeira conexão.


#### Função loop

```cpp
void loop() {
  client.loop();
  if (millis() - lastTimeBotRan > botRequestDelay) {
    int numNewMessages = bot.getUpdates(bot.last_message_received + 1);
```

A cada intervalo definido por `botRequestDelay`, o código consulta a API do Telegram em busca de novas mensagens.

```cpp
    while (numNewMessages) {
      handleNewMessages(numNewMessages);
      numNewMessages = bot.getUpdates(bot.last_message_received + 1);
    }
    lastTimeBotRan = millis();
  }
}
```

Caso existam mensagens novas, elas são processadas, publicadas no MQTT e confirmadas no Telegram.


### Código do ESP32 #2 – Assinante (MQTT → OLED)

Este código se conecta ao mesmo broker MQTT, escuta o tópico “iot/telegram” e mostra no display OLED a última mensagem publicada.

#### Inclusão de bibliotecas

```cpp
#include <WiFi.h>
#include <PubSubClient.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
```

Permitem conectar ao Wi-Fi, usar o protocolo MQTT, comunicar-se via barramento I2C e controlar o display OLED.


### Configuração de Wi-Fi e MQTT

```cpp
const char* ssid = "Wokwi-GUEST";
const char* password = "";
const char* mqtt_server = "broker.hivemq.com";
const int mqtt_port = 1883;
const char* mqtt_topic = "iot/telegram";
```

Mesmas definições usadas no primeiro ESP.
O tópico deve ser idêntico para que o assinante receba as mensagens publicadas pelo publicador.


#### Inicialização do display OLED

```cpp
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET -1
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);
```

Define a resolução do display e inicializa a comunicação I2C nas portas padrão (GPIO 21 e 22).


#### Conexão ao Wi-Fi

A função `setupWiFi()` é idêntica à usada no primeiro ESP.
Ela conecta o microcontrolador à rede e mostra o IP local.


#### Conexão ao broker MQTT

```cpp
void reconnectMQTT() {
  while (!client.connected()) {
    Serial.print("Conectando ao broker MQTT...");
    if (client.connect("ESP32_DisplaySubscriber")) {
      Serial.println("conectado!");
      client.subscribe(mqtt_topic);
      Serial.print("Inscrito no tópico: ");
      Serial.println(mqtt_topic);
    } else {
      Serial.print("falhou (rc=");
      Serial.print(client.state());
      Serial.println(") tentando novamente em 5s...");
      delay(5000);
    }
  }
}
```

Essa função garante que o ESP32 permaneça conectado ao broker.
Quando a conexão é bem-sucedida, o código se inscreve no tópico MQTT para começar a receber mensagens.


#### Callback de mensagens

```cpp
void callback(char* topic, byte* message, unsigned int length)
```

Essa função é chamada automaticamente sempre que chega uma mensagem no tópico inscrito.

```cpp
  String msg;
  for (int i = 0; i < length; i++) {
    msg += (char)message[i];
  }
```

O conteúdo da mensagem recebida é convertido de bytes para texto.

```cpp
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(0, 10);
  display.println("Mensagem MQTT:");
  display.setTextSize(2);
  display.setCursor(0, 30);
  display.println(msg);
  display.display();
```

O texto é exibido no display OLED, com o título “Mensagem MQTT:” seguido da mensagem recebida.


#### Função setup

```cpp
void setup() {
  Serial.begin(115200);
  Serial.println("Inicializando ESP32 Assinante...");
```

Inicializa a comunicação serial para logs de depuração.

```cpp
  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println("Falha ao inicializar o display OLED!");
    while (true);
  }
```

Inicia o display OLED e verifica se está funcionando corretamente.

```cpp
  setupWiFi();
  client.setServer(mqtt_server, mqtt_port);
  client.setCallback(callback);
  reconnectMQTT();
```

Conecta ao Wi-Fi, configura o broker MQTT e define a função de callback para tratar mensagens recebidas.


#### Função loop

```cpp
void loop() {
  if (!client.connected()) {
    reconnectMQTT();
  }
  client.loop();
}
```

Garante que a conexão MQTT permaneça ativa e processa as mensagens conforme chegam.
