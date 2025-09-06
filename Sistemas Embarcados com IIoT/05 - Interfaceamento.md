# Semáforo Inteligente com Botão de Prioridade e Controle de Portão (Servo)

Neste projeto no **Wokwi (ESP32-S3)**, você implementará um **semáforo inteligente para pedestres**, integrando **LEDs, botão e motor de portão (servo)**.



## Conceitos trabalhados

* **GPIO** (entrada e saída digital)
* **Interrupções em hardware (botão com `attachInterrupt`)**
* **Mapeamento de periféricos internos/externos**
* **Interfaceamento eletrônico (LEDs, botão e servo motor)**
* **Controle de tempo com `delay()`**



## Requisitos do Projeto

1. **LEDs (saída digital):**

   * **Carros:** Verde → Amarelo → Vermelho
   * **Pedestres:** Vermelho ↔ Verde

2. **Botão de Pedestre (entrada digital com interrupção):**

   * Conectado ao **GPIO 38**
   * Quando pressionado, deve **solicitar prioridade** para os pedestres

3. **Servo Motor (portão):**

   * Conectado ao **GPIO 20**
   * Posição **0° (fechado)** durante ciclo de carros
   * Posição **90° (aberto)** durante travessia dos pedestres

4. **Temporização do Ciclo:**

   * **Carros verdes por 2s**
   * Se o botão for pressionado:

     * **Carros amarelos por 0,5s**
     * **Carros vermelhos + pedestres verdes por 2s**
     * **Portão abre (servo 90°)** durante a travessia



## Mapeamento de GPIOs

| Função                | Cor | GPIO |
| --------------------- | --- | ---- |
| LED Verde Carro       | 🟢  | 1    |
| LED Amarelo Carro     | 🟡  | 2    |
| LED Vermelho Carro    | 🔴  | 42   |
| LED Verde Pedestre    | 🟢  | 41   |
| LED Vermelho Pedestre | 🔴  | 40   |
| Botão Pedestre        | ⚫   | 38   |
| Servo Motor (portão)  | ⚙️  | 20   |


## Código Exemplo (`sketch.ino`)


Disponível no Wokwi[https://wokwi.com/projects/441298346724503553]

```cpp
#include <ESP32Servo.h>

#define LED_VERDE_CARRO 1
#define LED_AMARELO_CARRO 2
#define LED_VERMELHO_CARRO 42
#define LED_VERDE_PEDESTRE 41
#define LED_VERMELHO_PEDESTRE 40
#define BOTAO_PEDESTRE 38
#define SERVO_PINO 20

Servo servo;
bool pedestre = false;

void IRAM_ATTR acionar() {
  pedestre = true;
}

void setup() {
  pinMode(LED_VERDE_CARRO, OUTPUT);
  pinMode(LED_AMARELO_CARRO, OUTPUT);
  pinMode(LED_VERMELHO_CARRO, OUTPUT);
  pinMode(LED_VERDE_PEDESTRE, OUTPUT);
  pinMode(LED_VERMELHO_PEDESTRE, OUTPUT);
  
  pinMode(BOTAO_PEDESTRE, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(BOTAO_PEDESTRE), acionar, FALLING);
  
  servo.attach(SERVO_PINO);
  servo.write(0);
}

void loop() {
  controlar(1);
  servo.write(0);
  delay(2000);

  if (pedestre) {
    controlar(2);
    delay(500);

    controlar(3);
    servo.write(90);
    delay(2000);
    pedestre = false;
  }
}

void controlar(int sequencia) {
  if (sequencia == 1) {
    digitalWrite(LED_VERMELHO_CARRO, LOW);
    digitalWrite(LED_VERDE_CARRO, HIGH);
    digitalWrite(LED_VERDE_PEDESTRE, LOW);
    digitalWrite(LED_VERMELHO_PEDESTRE, HIGH);
  } else if (sequencia == 2) {
    digitalWrite(LED_VERDE_CARRO, LOW);
    digitalWrite(LED_AMARELO_CARRO, HIGH);
  } else {
    digitalWrite(LED_AMARELO_CARRO, LOW);
    digitalWrite(LED_VERMELHO_CARRO, HIGH);
    digitalWrite(LED_VERMELHO_PEDESTRE, LOW);
    digitalWrite(LED_VERDE_PEDESTRE, HIGH);
  }
}
```

### Configuração do Wokwi (diagram.json)

```json
{
  "version": 1,
  "author": "André Souza",
  "editor": "wokwi",
  "parts": [
    {
      "type": "board-esp32-s3-devkitc-1",
      "id": "esp",
      "top": -57.78,
      "left": -379.43,
      "attrs": {}
    },
    {
      "type": "wokwi-led",
      "id": "led1",
      "top": -61.2,
      "left": -82.6,
      "attrs": { "color": "red" }
    },
    {
      "type": "wokwi-led",
      "id": "led2",
      "top": -80.4,
      "left": -121,
      "attrs": { "color": "yellow" }
    },
    {
      "type": "wokwi-led",
      "id": "led3",
      "top": -99.6,
      "left": -149.8,
      "attrs": { "color": "green" }
    },
    { "type": "wokwi-led", "id": "led4", "top": 6, "left": 3.8, "attrs": { "color": "red" } },
    {
      "type": "wokwi-led",
      "id": "led5",
      "top": -13.2,
      "left": -34.6,
      "attrs": { "color": "green" }
    },
    {
      "type": "wokwi-pushbutton-6mm",
      "id": "btn1",
      "top": 122.6,
      "left": -182.4,
      "attrs": { "color": "black", "xray": "1" }
    },
    { "type": "wokwi-servo", "id": "servo1", "top": 161.2, "left": -153.6, "attrs": {} },
    {
      "type": "wokwi-resistor",
      "id": "r1",
      "top": -53.35,
      "left": -222.2,
      "rotate": 180,
      "attrs": { "value": "65" }
    },
    {
      "type": "wokwi-resistor",
      "id": "r2",
      "top": -34.15,
      "left": -222.2,
      "rotate": 180,
      "attrs": { "value": "65" }
    },
    {
      "type": "wokwi-resistor",
      "id": "r3",
      "top": -14.95,
      "left": -222.2,
      "rotate": 180,
      "attrs": { "value": "65" }
    },
    {
      "type": "wokwi-resistor",
      "id": "r4",
      "top": 52.25,
      "left": -222.2,
      "rotate": 180,
      "attrs": { "value": "65" }
    },
    {
      "type": "wokwi-resistor",
      "id": "r5",
      "top": 33.05,
      "left": -222.2,
      "rotate": 180,
      "attrs": { "value": "65" }
    }
  ],
  "connections": [
    [ "esp:TX", "$serialMonitor:RX", "", [] ],
    [ "esp:RX", "$serialMonitor:TX", "", [] ],
    [ "esp:GND.2", "r3:2", "black", [ "v0" ] ],
    [ "r3:1", "led1:C", "black", [ "h0" ] ],
    [ "esp:GND.2", "r2:2", "black", [ "v0" ] ],
    [ "r2:1", "led2:C", "black", [ "h0" ] ],
    [ "r1:1", "led3:C", "black", [ "h0" ] ],
    [ "r1:2", "esp:GND.2", "black", [ "h0" ] ],
    [ "r5:1", "led5:C", "black", [ "v0", "h28.8" ] ],
    [ "r4:1", "led4:C", "black", [ "v0", "h67.2" ] ],
    [ "esp:GND.2", "r5:2", "black", [ "h19.2", "v48" ] ],
    [ "esp:GND.2", "r4:2", "black", [ "v0", "h19.2", "v19.2" ] ],
    [ "led3:A", "esp:1", "green", [ "v0" ] ],
    [ "led2:A", "esp:2", "green", [ "v48", "h-192" ] ],
    [ "led1:A", "esp:42", "green", [ "v38.4", "h-230.4" ] ],
    [ "led5:A", "esp:41", "green", [ "v0" ] ],
    [ "led4:A", "esp:40", "green", [ "v19.2", "h-316.8" ] ],
    [ "esp:GND.3", "btn1:2.l", "black", [ "h28.8", "v-86.8" ] ],
    [ "esp:38", "btn1:1.l", "green", [ "v19.2", "h105.6" ] ],
    [ "esp:5V", "servo1:V+", "red", [ "h-19.25", "v57.6", "h172.8", "v-67.2", "h28.8" ] ],
    [ "servo1:GND", "esp:GND.4", "black", [ "h-38.4", "v28.8" ] ],
    [ "esp:20", "servo1:PWM", "green", [ "h19.2", "v38.4", "h57.6", "v-19.2" ] ]
  ],
  "dependencies": {}
}
```

## Componentes no Wokwi

* ESP32-S3
* 5 LEDs (Carros: vermelho, amarelo, verde; Pedestres: vermelho, verde)
* 1 botão (pedestre)
* 1 servo motor (portão simbólico)
* Resistores de 220 Ω em série com cada LED


# Exercício: Semáforo de Duas Ruas com Travessia de Pedestres Sob Demanda

Implemente um sistema de semáforo para **duas ruas que se cruzam** e **pedestres**, obedecendo às seguintes regras:

1. A **rua principal** possui ciclo automático: verde → amarelo → vermelho.
2. A **rua secundária** só fica verde quando a rua principal está vermelha, e retorna a vermelho após seu ciclo.
3. Os **pedestres só atravessam quando pressionarem um botão**. Durante a travessia, os carros devem estar com o semáforo vermelho.
4. Ao final da travessia ou se o botão não for pressionado, o sistema retorna ao ciclo normal das ruas.

**Objetivo:** Coordenar corretamente os semáforos das ruas e a travessia de pedestres usando lógica de controle e interrupções para o botão.
