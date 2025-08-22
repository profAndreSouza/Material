# Aula 3 – Revisão de GPIO + Mapeamento de Periféricos

## Objetivos da Aula

* Reforçar os conceitos de **GPIO** (entrada, saída, protocolos).
* Introduzir o conceito de **mapeamento de periféricos** internos e externos no ESP32.
* Realizar o **levantamento prático** dos periféricos da empilhadeira 3D (motores, sensores, atuadores) e planejar o uso das GPIOs.

## 1. Revisão Rápida de GPIO

* **Entrada** → sensores, botões, sinais digitais.
* **Saída** → LEDs, motores, relés.
* **Funções especiais** → PWM, ADC, comunicação (I2C, UART, SPI).

**Dica:** nem todos os pinos do ESP32 suportam todas as funções. Sempre verificar o **datasheet**.

## 2. Mapeamento de Periféricos

### 2.1 **Periféricos Internos do ESP32**

#### 2.1.1 **Timers**

* **O que são:**
  Contadores internos que permitem executar ações em intervalos de tempo precisos.

* **Exemplo prático:** Acionar um LED piscando a cada 1 segundo sem bloquear o resto do programa.

```cpp
hw_timer_t *timer = NULL;

void IRAM_ATTR onTimer(){
  digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN));
}

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  timer = timerBegin(0, 80, true);
  timerAttachInterrupt(timer, &onTimer, true);
  timerAlarmWrite(timer, 1000000, true);
  timerAlarmEnable(timer);
}

void loop() {}
```


#### 2.1.2 **ADC (Conversor Analógico-Digital)**

* **O que é:**
  Converte sinais analógicos (0-3,3V) em valores digitais (0-4095 no ADC de 12 bits).

* **Exemplo prático:** Ler a tensão de um sensor de temperatura analógico.

```cpp
int sensorPin = 34;
int valor;

void setup() {
  Serial.begin(115200);
}

void loop() {
  valor = analogRead(sensorPin);
  Serial.println(valor);
  delay(500);
}
```


#### 2.1.3 **DAC (Conversor Digital-Analógico)**

* **O que é:**
  Converte valores digitais em sinais analógicos.

* **Exemplo prático:** Gerar um sinal de tensão variável entre 0 e 3,3V.

```cpp
int dacPin = 25;
void setup() {}
void loop() {
  for (int i=0; i<256; i++){
    dacWrite(dacPin, i);
    delay(10);
  }
}
```

#### 2.1.4 **PWM (Pulse Width Modulation)**

* **O que é:**
  Simula saída analógica usando sinais digitais, variando o duty cycle. Muito usado para LEDs e motores.

* **Exemplo prático:** Controlar o brilho de um LED.

```cpp
int ledPin = 2;
int canal = 0;
int freq = 5000;
int resolucao = 8;

void setup() {
  ledcSetup(canal, freq, resolucao);
  ledcAttachPin(ledPin, canal);
}

void loop() {
  for(int i=0; i<256; i++){
    ledcWrite(canal, i);
    delay(10);
  }
}
```


#### 2.1.5 **UART (Universal Asynchronous Receiver/Transmitter)**

* **O que é:**
  Comunicação serial entre dispositivos. O ESP32 possui múltiplas UARTs (UART0, UART1, UART2).

* **Exemplo prático:** Enviar dados para outro microcontrolador.

```cpp
void setup() {
  Serial.begin(115200); 
  Serial1.begin(9600, SERIAL_8N1, 16, 17);
}

void loop() {
  Serial1.println("Olá do ESP32!");
  delay(1000);
}
```


#### 2.1.6 **I2C (Inter-Integrated Circuit)**

* **O que é:**
  Comunicação serial síncrona para múltiplos dispositivos usando 2 fios (SDA e SCL).

* **Exemplo prático:** Ler dados de um sensor de temperatura (ex.: BME280).

```cpp
#include <Wire.h>
void setup() {
  Wire.begin(21, 22);
}
void loop() {
  Wire.beginTransmission(0x76);
  Wire.endTransmission();
  delay(1000);
}
```

#### 2.1.7 **SPI (Serial Peripheral Interface)**

* **O que é:**
  Comunicação serial rápida usando 4 fios (MISO, MOSI, SCK, CS), geralmente para displays ou memórias.

* **Exemplo prático:** Enviar dados para um display OLED.

```cpp
#include <SPI.h>
#define CS 5
#define MOSI 23
#define SCK 18

void setup() {
  SPI.begin(SCK, -1, MOSI, CS);
}

void loop() {
  digitalWrite(CS, LOW);
  SPI.transfer(0xAA);
  digitalWrite(CS, HIGH);
  delay(1000);
}
```

### 2.2 **Periféricos Externos**

* Motores, sensores, displays, módulos de comunicação, etc.
* Precisam ser conectados via GPIO.

### 2.3 **Passos para mapear periféricos:**

1. Identificar cada componente usado (motor DC, motor de passo, sensor ultrassônico, sensor de fim de curso, etc).
2. Verificar requisitos de cada um:

   * Alimentação (3.3V ou 5V)
   * Comunicação (digital/analógico ou protocolo)
   * Quantidade de GPIOs necessários
3. Reservar os pinos no ESP32 e registrar em uma **tabela de pinagem**.


### 2.4 **Exemplo de tabela de mapeamento:**

| Componente          | Tipo                  | GPIO(s) no ESP32    | Observações           |
| ------------------- | --------------------- | ------------------- | --------------------- |
| Motor de passo (x)  | Saída (PWM)           | GPIO 18, 19, 21, 22 | Controlado por driver |
| Sensor ultrassônico | Entrada/saída digital | GPIO 4, 5           | Trigger e Echo        |
| Botão de emergência | Entrada digital       | GPIO 15             | Interrupção externa   |
| LED indicador       | Saída digital         | GPIO 2              | Status do sistema     |


## Atividade: Levantamento dos periféricos da empilhadeira

1. **Dividir em duplas** (mesmas do projeto).
2. **Observar a empilhadeira física** e identificar:

   * Motores usados (de passo, DC, servo?).
   * Sensores (ultrassônico, fim de curso, encoder, etc).
   * Atuadores adicionais (LEDs, buzzer, relés?).
3. **Anotar em planilha/tabela** todos os componentes e características (tensão, tipo de sinal, comunicação).
4. **Criar um primeiro esboço da tabela de mapeamento** (GPIO vs Componente).


## Entregável da Aula

* Cada dupla deve entregar **uma tabela inicial de mapeamento de periféricos** da empilhadeira.
* Esta tabela será **base para o planejamento do código** e evolução do projeto.


## Atividade Extra

* Pesquisar no **datasheet do ESP32** quais GPIOs **não devem ser usados** (pinos reservados para boot e funções críticas).
* Reorganizar a tabela de acordo com essas restrições.
