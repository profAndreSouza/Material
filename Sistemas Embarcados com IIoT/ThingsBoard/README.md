# ThingsBoard + ESP32 via Docker e MQTT

Este guia ensina a instalar o **ThingsBoard** usando Docker no Windows e conectar um **ESP32** à plataforma via MQTT, assumindo que ambos estão na mesma rede local.


## 1. Instalação do ThingsBoard (Docker Windows)

### 1.1 Pré-requisitos

- [Docker Toolbox para Windows](https://docs.docker.com/toolbox/overview/)
- Servidor com pelo menos **4GB de RAM** (8GB recomendado)
- Baixa carga (poucas mensagens por segundo)

### 1.2 Opções de fila (Queue Service)

O ThingsBoard suporta diferentes brokers de mensagens:

| Tipo de fila      | Descrição                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **In-Memory**    | Integrado e padrão. Ideal para desenvolvimento/PoC. Não recomendado para produção ou clusters. |
| **Kafka**        | Recomendado para produção e on-prem. Permite independência do provedor de nuvem. |
| **Confluent Cloud** | Plataforma de streaming gerenciada baseada em Kafka. Útil para deploys agnósticos à nuvem. |

> Padrão: fila In-Memory.

### 1.3 Configuração do Docker Compose

Crie um arquivo `docker-compose.yml`:

```yaml
services:
  postgres:
    restart: always
    image: "postgres:16"
    ports:
      - "5432"
    environment:
      POSTGRES_DB: thingsboard
      POSTGRES_PASSWORD: postgres
    volumes:
      - postgres-data:/var/lib/postgresql/data

  thingsboard-ce:
    restart: always
    image: "thingsboard/tb-node:4.2.1"
    ports:
      - "8080:8080"       # HTTP
      - "7070:7070"       # Edge RPC
      - "1883:1883"       # MQTT
      - "8883:8883"       # MQTT via SSL
      - "5683-5688:5683-5688/udp" # COAP/LwM2M
    logging:
      driver: "json-file"
      options:
        max-size: "100m"
        max-file: "10"
    environment:
      TB_SERVICE_ID: tb-ce-node
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/thingsboard
    depends_on:
      - postgres

volumes:
  postgres-data:
    name: tb-postgres-data
    driver: local
````

**Observações sobre portas e volumes:**

* `8080:8080` → Acesso HTTP local
* `1883:1883` → Acesso MQTT local
* `8883:8883` → MQTT via SSL
* `7070:7070` → Edge RPC local
* `5683-5688:5683-5688/udp` → COAP/LwM2M
* `tb-postgres-data` → Volume Docker para persistência do PostgreSQL

### 1.4 Inicializar banco e carregar demo

Antes de iniciar o ThingsBoard:

```powershell
docker compose run --rm -e INSTALL_TB=true -e LOAD_DEMO=true thingsboard-ce
```

**Variáveis de ambiente:**

* `INSTALL_TB=true` → Cria o esquema do banco e recursos do sistema
* `LOAD_DEMO=true` → Carrega contas de exemplo, dashboards e dispositivos

### 1.5 Iniciar plataforma e acompanhar logs

```powershell
docker compose up -d; docker compose logs -f thingsboard-ce
```

Acesse: `http://localhost:8080`

**Credenciais padrão:**

| Papel                    | Usuário                                                     | Senha    |
| ------------------------ | ----------------------------------------------------------- | -------- |
| Administrador do Sistema | [sysadmin@thingsboard.org](mailto:sysadmin@thingsboard.org) | sysadmin |
| Administrador do Tenant  | [tenant@thingsboard.org](mailto:tenant@thingsboard.org)     | tenant   |
| Usuário Cliente          | [customer@thingsboard.org](mailto:customer@thingsboard.org) | customer |


## 2. Conectando ESP32 ao ThingsBoard via MQTT

### 2.1 Pré-requisitos

* ThingsBoard rodando na mesma rede local (ex: `http://192.168.1.100:8080`)
* ESP32 com Arduino IDE configurado
* Bibliotecas:

  * `WiFi.h`
  * `PubSubClient.h` (MQTT)


### 2.2 Criar dispositivo no ThingsBoard

1. Acesse `http://{IP_DO_SERVIDOR}:8080`
2. Faça login como **Tenant Administrator** (`tenant@thingsboard.org` / `tenant`)
3. Vá em **Devices → + Add new device**

   * Nome: `ESP32-Teste`
4. Clique no dispositivo e vá em **Credentials**

   * Copie o **Access Token** (ex: `N0k3yV3r1f1c0`)
   * Será usado para autenticação MQTT


### 2.3 Código de exemplo ESP32 (MQTT)

```cpp
#include <WiFi.h>
#include <PubSubClient.h>

// Configuração WiFi
const char* ssid = "NOME_DA_REDE";
const char* password = "SENHA_DA_REDE";

// Configuração ThingsBoard
const char* mqtt_server = "192.168.1.100"; // IP do servidor
const int mqtt_port = 1883;
const char* access_token = "SEU_ACCESS_TOKEN"; 

WiFiClient wifiClient;
PubSubClient client(wifiClient);

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi conectado!");

  client.setServer(mqtt_server, mqtt_port);
  connectToMQTT();
}

void loop() {
  if (!client.connected()) connectToMQTT();
  client.loop();

  float temperature = random(20, 30);
  String payload = "{\"temperature\":" + String(temperature) + "}";
  client.publish("v1/devices/me/telemetry", payload.c_str());
  Serial.println("Enviado: " + payload);

  delay(5000);
}

void connectToMQTT() {
  while (!client.connected()) {
    Serial.print("Conectando ao MQTT...");
    if (client.connect("ESP32Client", access_token, NULL)) {
      Serial.println("Conectado!");
    } else {
      Serial.print("Falha, rc=");
      Serial.print(client.state());
      Serial.println(" tentando novamente em 5s");
      delay(5000);
    }
  }
}
```


### 2.4 Explicação do código

* `WiFi.begin()` → conecta ESP32 à rede local
* `PubSubClient` → biblioteca MQTT para enviar dados
* `client.publish("v1/devices/me/telemetry", payload)` → envia telemetria
* Loop principal envia dados a cada 5 segundos


### 2.5 Visualizando dados no ThingsBoard

1. Vá em **Dashboard → + Add new dashboard**
2. Crie widget (`Chart` ou `Gauges`)
3. Configure fonte de dados apontando para o dispositivo ESP32
4. Dados serão exibidos em tempo real


### 2.6 Dicas importantes

* Certifique-se de que **ESP32 e ThingsBoard estão na mesma rede**
* Porta **1883** deve estar liberada no firewall
* Para sensores reais, substitua `random()` pelos dados do sensor

