# **IIoT e Comunicação no ESP32**

## **1. O que é IIoT (Industrial Internet of Things)**

O **Industrial Internet of Things (IIoT)** é a aplicação dos conceitos de Internet das Coisas (IoT) no contexto industrial.
Enquanto a IoT tradicional conecta dispositivos do cotidiano (como lâmpadas, relógios ou assistentes virtuais), o IIoT conecta **máquinas, sensores, robôs e sistemas de controle industrial** a redes digitais capazes de **coletar, transmitir e analisar dados em tempo real**.

O principal objetivo do IIoT é **integrar o mundo físico e o digital** dentro de processos produtivos, criando **ambientes industriais inteligentes**.
Essa integração permite que empresas tomem decisões baseadas em dados concretos — por exemplo, prevendo falhas antes que aconteçam, ajustando automaticamente linhas de produção ou reduzindo o consumo de energia em períodos de baixa demanda.

O IIoT é um dos pilares da **Indústria 4.0**, pois envolve tecnologias como:

* **Sensoriamento remoto** (sensores e atuadores conectados);
* **Computação em nuvem** (armazenamento e análise de dados);
* **Inteligência Artificial** (interpretação e previsão de eventos);
* **Comunicação máquina-a-máquina (M2M)**.

A combinação dessas tecnologias transforma as fábricas tradicionais em **sistemas ciberfísicos**, onde cada máquina se torna parte de uma rede interligada.


## **2. Aplicações do IIoT**

O IIoT tem aplicação direta em diversos setores da economia.
Alguns exemplos ilustram como essa integração transforma processos industriais:

### **a) Monitoramento de máquinas**

Sensores instalados em motores, bombas ou compressores medem parâmetros como **temperatura, vibração e corrente elétrica**.
Esses dados são enviados a uma plataforma central que acompanha o desempenho em tempo real, permitindo identificar **anomalias precoces** e evitar falhas inesperadas.

### **b) Manutenção preditiva**

Com base em dados coletados continuamente, **algoritmos de aprendizado de máquina** detectam padrões que indicam desgaste de componentes.
Assim, a manutenção é feita **antes da quebra**, reduzindo custos e paradas de produção.

### **c) Controle de produção**

Linhas de montagem conectadas comunicam-se entre si e com o sistema de gestão (ERP).
Informações sobre **velocidade de produção, estoque de insumos e qualidade dos produtos** são atualizadas automaticamente, facilitando o controle de desempenho e a tomada de decisão.

### **d) Logística e rastreabilidade**

Sensores RFID, QR codes e GPS acompanham **a localização de matérias-primas e produtos acabados**.
O rastreamento garante segurança no transporte e permite identificar rapidamente gargalos na cadeia de suprimentos.

### **e) Eficiência energética**

Sensores de consumo e sistemas de automação ajustam o uso de energia conforme a demanda de produção.
Isso reduz custos operacionais e contribui para metas de sustentabilidade.

Em todos esses casos, o dado é o elemento central. O valor do IIoT não está apenas na coleta, mas em **como as informações são integradas, interpretadas e utilizadas** para gerar ações inteligentes.


## **3. Comunicação em sistemas IIoT**

Para que o IIoT funcione, é essencial que os dispositivos se comuniquem de forma confiável.
A comunicação pode ocorrer **por cabos ou por conexões sem fio**, dependendo do ambiente e da aplicação.

### **a) Comunicações cabeadas**

São comuns em ambientes industriais por oferecerem **baixa latência e alta confiabilidade**.
Entre os protocolos mais utilizados estão:

* **Serial (UART, RS-232, RS-485)** – comunicação ponto a ponto entre dispositivos;
* **Modbus RTU** – protocolo amplamente usado para comunicação entre CLPs e sensores;
* **Ethernet Industrial (Profinet, EtherCAT, Modbus TCP)** – integra máquinas em rede local;
* **CAN Bus** – comum em automação automotiva e robótica.

### **b) Comunicações sem fio**

Em situações onde cabos são inviáveis ou onde há necessidade de mobilidade, utiliza-se comunicação sem fio:

* **WiFi** – ideal para ambientes laboratoriais e industriais leves;
* **LoRa e ZigBee** – usadas em redes de sensores de longo alcance e baixo consumo;
* **4G/5G** – aplicadas em grandes plantas industriais e sistemas remotos.

A escolha do meio depende de fatores como **distância, interferência, velocidade, consumo de energia e segurança**.
O **ESP32**, por integrar WiFi e Bluetooth nativamente, oferece uma base prática para explorar esses conceitos.


## **4. Comunicação Serial e WiFi no ESP32**

O **ESP32** é um microcontrolador versátil que combina **alto desempenho de processamento**, **conectividade sem fio** e **interfaces de comunicação tradicionais**.
Isso o torna uma ferramenta poderosa para projetos de IIoT de pequeno e médio porte.

### **a) Comunicação Serial**

A interface **Serial (UART)** é usada para **troca direta de dados** entre o ESP32 e outros dispositivos, como:

* Sensores de medição (ex: sensores de gás ou temperatura);
* Módulos de comunicação (ex: GPS, GSM);
* Outros microcontroladores (ex: Arduino ou PIC).

A comunicação ocorre em formato digital, transmitindo bits de dados por linhas de transmissão (TX) e recepção (RX).
No contexto do IIoT, a Serial é útil para **coleta de dados local**, antes que sejam enviados à rede.

### **b) Comunicação via WiFi**

Com o **WiFi embutido**, o ESP32 pode conectar-se a redes locais ou à internet, publicando dados em **servidores ou serviços em nuvem**.
Uma das formas mais comuns de transmissão é através do **protocolo MQTT (Message Queuing Telemetry Transport)**, usado amplamente em aplicações IoT.

Nesse modelo:

* O **ESP32 atua como cliente** e envia informações a um **broker MQTT**;
* O **broker** é o servidor que recebe e redistribui as mensagens para outros clientes (como dashboards, bancos de dados ou outros dispositivos).

Assim, o ESP32 atua como **ponte de integração entre o mundo físico (sensores) e o mundo digital (nuvem)**, conectando dados industriais a sistemas de supervisão e análise.


## **5. Simulação com Wokwi e Broker Online**

O **Wokwi** é uma plataforma de simulação online que permite testar circuitos com ESP32 e sensores virtuais, sem necessidade de hardware físico.
Com ele, é possível **visualizar o comportamento de sistemas IIoT** e compreender o caminho percorrido pelos dados.

Durante a simulação, o ESP32:

1. **Recebe dados pela porta Serial** (como leitura de sensores simulados);
2. **Processa e formata** essas informações localmente;
3. **Envia os dados pela rede WiFi** para um **broker MQTT online**, como o **HiveMQ Cloud**, que funciona como servidor central;
4. **Distribui as informações** para painéis de visualização (dashboards) ou outras aplicações conectadas.

Essa arquitetura ilustra um fluxo típico de um sistema IIoT: **coleta → transmissão → processamento → visualização**.


## **6. Projeto IIoT Distribuído com ESP32 e MQTT (Wokwi + HiveMQ)**

Desenvolver um sistema distribuído de Internet das Coisas (IIoT) utilizando o ESP32 e o protocolo MQTT em um broker público (HiveMQ).
O projeto será dividido entre três alunos: dois responsáveis por publicar dados e um responsável por receber e exibir informações em um display LCD I2C.

A proposta integra conceitos de comunicação entre dispositivos IoT, sensoriamento e atuação, protocolos de rede e integração em nuvem.


### Contexto

O projeto representa um ambiente inteligente no qual diferentes dispositivos monitoram variáveis e enviam dados para um servidor MQTT.
Outro dispositivo central coleta e exibe as informações recebidas, podendo ainda reagir a determinados valores ou enviar comandos de controle.


### Estrutura do Projeto

#### Aluno 1 – Aplicação Publicadora A (Sensores Ambientais)

Função: medir e publicar dados ambientais.

Sugestões de componentes:

* Sensor de umidade e temperatura (DHT22 ou DHT11)
* Sensor de luminosidade (LDR com divisor resistivo)
* Conversor ADC para leitura dos sinais analógicos
* PWM para controlar a intensidade de um LED conforme a luminosidade

Publicação MQTT:

* Tópico: `iiot/sala1/sensores`
* Exemplo de mensagem JSON:

  ```json
  {
    "temperatura": 25.4,
    "umidade": 61,
    "luminosidade": 480
  }
  ```


#### Aluno 2 – Aplicação Publicadora B (Controle e Movimento)

Função: representar um sistema de controle mecânico ou industrial.

Sugestões de componentes:

* Motor de passo (28BYJ-48) ou servo motor
* Conversor DAC/PCM (ou PWM) para controle de intensidade
* Simular parâmetros como velocidade, posição ou nível de tensão de saída

Publicação MQTT:

* Tópico: `iiot/sala2/atuadores`
* Exemplo de mensagem JSON:

  ```json
  {
    "motor_posicao": 180,
    "velocidade": 120,
    "tensao_saida": 3.3
  }
  ```


#### Aluno 3 – Aplicação Receptora (Central de Monitoramento)

Função: receber e exibir as informações publicadas pelos outros ESP32.

Componentes:

* LCD I2C 16x2
* Conexão Wi-Fi e cliente MQTT
* Pode incluir buzzer ou LED indicador para alertas

Assinaturas MQTT:

* `iiot/sala1/sensores`
* `iiot/sala2/atuadores`

Exemplo de exibição no LCD:

```
Temp:25°C  Umid:61%
Luz:480  Vel:120
```


### Conexão com o Broker MQTT (HiveMQ)

* Broker: `broker.hivemq.com`
* Porta: `1883`
* Tópicos conforme definidos acima
* Clientes MQTT: `PubSala1`, `PubSala2`, `CentralLCD`


### Desafios e Extensões

* Inserir alertas visuais ou sonoros quando alguma variável ultrapassar limites.
* Fazer com que a central envie comandos MQTT de volta aos publicadores.
* Registrar os dados recebidos no Serial Monitor ou enviar para um serviço web.


### Conceitos Envolvidos

* Protocolo MQTT (publish/subscribe)
* IIoT e comunicação M2M (Machine-to-Machine)
* Wi-Fi, ADC, DAC, PWM e I2C no ESP32
* Integração de sensores e atuadores
* Estrutura e troca de dados em JSON

