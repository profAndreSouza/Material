# Gerador de Dados Industriais para Sistema IIoT via MQTT

## Construção Guiada do Simulador ESP32 no Wokwi


## Objetivo

Implementar, passo a passo em aula, um simulador industrial utilizando um ESP32 virtual no Wokwi, capaz de representar uma máquina de uma montadora de veículos, gerar dados operacionais simulados e publicar essas informações em um broker MQTT.

O dispositivo funcionará como a fonte de dados do chão de fábrica, alimentando a arquitetura IIoT do projeto.


## Contexto da Simulação

Durante a construção guiada em aula, o ESP32 será configurado para representar um:

motor industrial de uma linha de montagem

Esse motor será monitorado continuamente para avaliar condições de operação, desempenho e possíveis falhas.


## Dispositivos que Serão Conectados no Wokwi

O simulador será montado conectando ao ESP32 os seguintes componentes virtuais:

### Sensor de Temperatura e Umidade — DHT22

Responsável por representar a temperatura do equipamento ou do ambiente industrial.

### Sensor de Vibração / Movimento — MPU6050

Responsável por representar vibração mecânica do motor, utilizada como indicador de desgaste ou falha.

### LED Indicador de Status da Máquina

Representa o estado operacional do equipamento:

* ligado → máquina em funcionamento
* desligado → máquina parada

### Botão de Produção (contador de peças)

Cada acionamento representa uma peça produzida no processo industrial.


## Variáveis Industriais Monitoradas

O ESP32 deverá gerar e publicar:

* temperatura do equipamento
* nível de vibração do motor
* estado da máquina (RUN ou STOP)
* contador de peças produzidas


## Construção do Simulador — Passo a Passo em Aula

A implementação será realizada de forma guiada, seguindo as etapas abaixo.


### Etapa 1 — Criar o Projeto no Wokwi

* iniciar novo projeto com ESP32
* organizar a área de montagem


### Etapa 2 — Conectar os Componentes

Adicionar e ligar ao ESP32:

1. sensor DHT22
2. sensor MPU6050 (via comunicação I2C)
3. LED indicador de status
4. botão de contagem de produção

Testar a leitura individual de cada dispositivo.


### Etapa 3 — Leitura dos Sensores

Programar o ESP32 para:

* ler temperatura do DHT22
* ler vibração do MPU6050
* ler acionamento do botão
* controlar o LED de status


### Etapa 4 — Simulação de Comportamento Industrial

Implementar:

* variação contínua dos valores monitorados
* estado de operação da máquina
* possibilidade de parada
* incremento do contador de produção


### Etapa 5 — Conexão de Rede

Configurar:

* conexão Wi-Fi
* identificação do dispositivo


### Etapa 6 — Integração MQTT

Implementar:

* conexão com broker MQTT
* definição do tópico industrial
* reconexão automática


### Etapa 7 — Estruturação da Mensagem

Montar payload JSON contendo:

* identificação do equipamento
* timestamp da leitura
* todas as variáveis industriais monitoradas


### Etapa 8 — Publicação Periódica

Configurar envio automático:

* intervalo de 5 segundos
* envio contínuo
* operação ininterrupta


## Estrutura do Tópico MQTT

Padrão utilizado em aula:

```
montadora/linha_montagem/motor_01/telemetry
```


## Funcionamento Final Esperado

Após concluída a montagem, o sistema deverá executar continuamente:

1. ler sensores
2. atualizar variáveis
3. montar mensagem JSON
4. publicar no MQTT
5. aguardar intervalo
6. repetir indefinidamente


## Requisitos de Funcionamento

O simulador deverá demonstrar:

* leitura real dos dispositivos conectados
* valores variando ao longo do tempo
* contagem de produção por botão
* estado operacional da máquina
* envio periódico ao MQTT
* identificação do equipamento
* payload estruturado em JSON


## Resultado Esperado

Ao executar o projeto no Wokwi, o ESP32 deverá se comportar como um motor industrial conectado, transmitindo continuamente dados operacionais do processo produtivo para o sistema IIoT da montadora.

Esses dados alimentarão os sistemas de processamento, armazenamento e monitoramento da arquitetura do projeto.
