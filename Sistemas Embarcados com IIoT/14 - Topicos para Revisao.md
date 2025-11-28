# Tópicos Essenciais para a Revisão de Sistemas Microprocessados e IIoT


# 1. Arquitetura Fundamental do Sistema Embarcado

Esta seção cobre os componentes básicos de qualquer sistema microprocessado.

## 1.1. Componentes Chave
* **Microprocessador (CPU):** Função do processador (ex: Tensilica Xtensa LX6 no ESP32) na execução de instruções e controle de periféricos.
* **Oscilador:** Sua função na definição da **frequência de operação** e sua importância para a precisão de tempo.
* **Memória:** Distinção entre os tipos de memória e suas funções:
    * **Flash:** Armazenamento de programas e dados permanentes.
    * **SRAM:** Memória volátil para variáveis e execução de programas.
    * **RTC Memory:** Memória de baixo consumo.
* **Registradores:** Entender o conceito de registradores (mencionado na Ementa).


# 2. Controle de Hardware e Periféricos (GPIO, Mapeamento, Interfaceamento)

Foco na interação do software com o mundo físico.

## 2.1. GPIO e Mapeamento
* **GPIO:** Diferença entre pino como **Entrada** (ler sensor/botão) e **Saída** (acionar LED/motor).
* **Mapeamento de Periféricos:** A importância de planejar a pinagem, identificar as funções especiais dos pinos (ADC, DAC, PWM) e as restrições (ex: 3.3V no ESP32, pinos de *boot*).

## 2.2. Conversores e Modulação de Sinais
* **ADC (Conversor Analógico-Digital):** Função, resolução típica (ex: 12 bits no ESP32) e a fórmula para converter o valor lido em tensão ($V_{in} = \frac{ADC}{1023} \times V_{ref}$ ).
* **DAC (Conversor Digital-Analógico):** Geração de tensão analógica real (pinos 25 e 26 no ESP32) e suas aplicações (áudio, controle preciso).
* **PWM (Pulse Width Modulation):** O que é *duty cycle* e como o PWM simula tensões analógicas para controle de atuadores (LEDs, motores). 
* **PCM (Pulse Code Modulation):** Comparação com PWM e uso em áudio digital.

## 2.3. Interfaceamento Eletrônico
* **Interfaceamento:** Conceitos básicos de interfaces para conectar o microcontrolador a atuadores, como o uso de **transistorizadas** e **optoacopladas** (mencionado na Ementa).


# 3. Controle de Tempo e Eventos

Foco em tornar o sistema responsivo e multitarefa.

## 3.1. Interrupções
* **Conceito:** Um evento que pausa a execução principal para rodar uma **ISR** (*Interrupt Service Routine*).
* **Tipos e Vantagens:** Diferença entre **Interrupções Internas** (ex: *timer overflow*) e **Externas** (ex: botão). A vantagem de usar interrupções em vez de **polling** (loop contínuo).

## 3.2. Temporizadores e Contadores
* **Timers (Temporizadores):** Uso de *hardware timers* (ex: `hw_timer_t` no ESP32) para executar tarefas em intervalos precisos.
    * Saber a diferença crucial entre usar **Timers** (assíncrono) e a função bloqueante `delay()`.
* **Contadores:** Função de contar **pulsos externos** (ex: de um encoder de motor) para medir velocidade ou eventos.


# 4. Comunicação de Dados e Protocolos

Protocolos usados localmente e para conexão em rede.

## 4.1. Comunicação Serial Local
* **I2C (Inter-Integrated Circuit):** Comunicação síncrona de 2 fios (**SDA** e **SCL**) para múltiplos dispositivos, usada com sensores e displays (ex: LCD I2C).
* **SPI (Serial Peripheral Interface):** Comunicação síncrona mais rápida, 4 fios.
* **UART (Serial):** Comunicação assíncrona tradicional (TX/RX).

## 4.2. IIoT e Comunicação em Rede
* **IIoT (Industrial Internet of Things):** Definição e objetivos da aplicação da IoT em ambientes industriais, como **manutenção preditiva** e **eficiência energética**.
* **Protocolos de Comunicação IIoT:**
    * **MQTT (Message Queuing Telemetry Transport):** O modelo **Publish/Subscribe** usado para envio de dados em rede (ESP32 → Broker → Dashboard).
    * **Comunicação sem fio:** Uso de **WiFi** e **Bluetooth** (mencionado na Ementa) no ESP32 para conectividade.
    * **Protocolos Industriais:** Noções básicas de **Modbus/TCP** (mencionado na Ementa).

## 4.3. Serviços em Nuvem
* **Integração com Nuvem:** A necessidade de configurar serviços em nuvem (ex: ThingSpeak, Firebase, HiveMQ) para **armazenar e disponibilizar dados**.
* **Segurança:** Adoção de medidas básicas de segurança (autenticação/criptografia).


# 5. Prática e Ferramentas

* **Plataforma de Desenvolvimento e Simulação:** Compreensão da metodologia de trabalho (Edição, Compilação, Depuração, Gravação) e o uso de ferramentas como **Wokwi**.
* **Projeto Integrador:** Conhecer os requisitos mínimos do Projeto Integrador que demonstram a aplicação prática dos conceitos (hardware, interrupções, temporizadores, comunicação IIoT).
