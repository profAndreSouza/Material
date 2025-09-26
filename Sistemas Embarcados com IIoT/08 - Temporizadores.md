# Aula 8 – Temporizadores e Contadores

**LED piscante e controle de motor usando Timers no ESP32**


## 1. Introdução

Os **temporizadores (timers)** e **contadores (counters)** são recursos essenciais em sistemas embarcados. Eles permitem:

* Executar tarefas em intervalos de tempo precisos.
* Contar eventos externos (pulsos de sensores, rotações de motores, cliques de botões).
* Medir períodos e frequências de sinais.
* Sincronizar processos em tempo real sem depender apenas do **loop principal** ou de funções bloqueantes como `delay()`.

No **ESP32**, temos timers de **64 bits**, independentes do processador, capazes de gerar interrupções com alta precisão. Isso significa que, mesmo se o código principal estiver ocupado, os timers continuam funcionando e podem disparar eventos.


## 2. Conceitos Fundamentais

### 2.1 Temporizadores (Timers)

Um **timer** é basicamente um **contador de tempo** controlado pelo clock do microcontrolador.

* Cada timer possui um **prescaler**, que divide a frequência do clock para obter resoluções diferentes.
* O ESP32 possui **4 timers por núcleo** (8 no total), permitindo rodar múltiplas tarefas periódicas em paralelo.
* O programador pode configurar:

  * **Período do timer** → em microssegundos ou milissegundos.
  * **Ação quando expira** → chamar uma **função de interrupção (ISR)**.
  * **Repetição automática** ou execução única.

**Benefícios:**

* Precisão muito maior que usar `delay()`.
* Permite tarefas assíncronas (ex.: monitoramento de sensores).
* Evita travar o programa em esperas longas.


### 2.2 Contadores (Counters)

Um contador é parecido com um timer, mas ao invés de contar ciclos de clock, ele conta **pulsos externos** em um pino.

Exemplos práticos:

* **Encoder de motor**: cada giro gera pulsos → contador mede RPM.
* **Sensor de fluxo de água**: cada gota/pulso aumenta o contador → mede vazão.
* **Sistemas industriais**: contagem de peças passando em uma esteira.

No ESP32, os timers também podem ser configurados como contadores externos, ampliando as possibilidades.


### 2.3 Diferença entre Timer e Delay

* `delay(1000)` → pausa o programa por 1 segundo, travando tudo.
* **Timer** → dispara uma ação a cada 1 segundo sem travar o restante do código.

Isso torna o sistema **multitarefa** e muito mais responsivo.


## 3. Estudo de Caso 1: LED Piscante com Timer

Nosso primeiro exemplo é o clássico **LED pisca-pisca**, mas sem usar `delay()`. O LED piscará em intervalos controlados pelo timer de hardware.

### 3.1 Componentes

* ESP32 DevKit
* LED
* Resistor 220Ω
* Protoboard e fios

### 3.2 Ligações

* LED (ânodo) → GPIO 2 (ESP32)
* LED (cátodo) → Resistor 220Ω → GND

### 3.3 Código – LED Piscante

```cpp
#define LED_PIN 2

hw_timer_t *timer = NULL;
volatile bool estadoLED = false;

void IRAM_ATTR aoDispararTimer() {
  estadoLED = !estadoLED;
  digitalWrite(LED_PIN, estadoLED);
}

void setup() {
  pinMode(LED_PIN, OUTPUT);

  // Configuração do timer
  timer = timerBegin(0, 80, true);       // Timer 0, prescaler 80 → 1 tick = 1 µs
  timerAttachInterrupt(timer, &aoDispararTimer, true);
  timerAlarmWrite(timer, 500000, true);  // 500.000 µs = 0,5s → pisca 1 Hz
  timerAlarmEnable(timer);
}

void loop() {
  // Nada aqui — o LED é controlado pelo timer
}
```

### 3.4 Funcionamento

* O LED pisca a cada **0,5 s** sem travar o programa.
* O `loop()` pode rodar outras tarefas (ex.: ler sensores, enviar dados) enquanto o timer cuida do LED.


## 4. Estudo de Caso 2: Controle de Motor com Timer

Agora, vamos aplicar o timer para controlar um **motor DC** usando uma **ponte H**. O objetivo é ligar e desligar o motor em intervalos regulares.

### 4.1 Componentes

* ESP32 DevKit
* Ponte H (L298N ou L293D)
* Motor DC
* Fonte externa 5–9V
* Protoboard e fios

### 4.2 Ligações

* **IN1 da ponte H** → GPIO 25 (ESP32)
* **IN2 da ponte H** → GPIO 26 (ESP32)
* **VCC motor** → Fonte 5–9V
* **GND** → comum entre ESP32 e fonte

### 4.3 Código – Motor Liga/Desliga

```cpp
#define MOTOR_IN1 25
#define MOTOR_IN2 26

hw_timer_t *timerMotor = NULL;
volatile bool motorLigado = false;

void IRAM_ATTR controleMotorTimer() {
  motorLigado = !motorLigado;
  if (motorLigado) {
    digitalWrite(MOTOR_IN1, HIGH);
    digitalWrite(MOTOR_IN2, LOW);   // Motor gira em um sentido
  } else {
    digitalWrite(MOTOR_IN1, LOW);
    digitalWrite(MOTOR_IN2, LOW);   // Motor desligado
  }
}

void setup() {
  pinMode(MOTOR_IN1, OUTPUT);
  pinMode(MOTOR_IN2, OUTPUT);

  timerMotor = timerBegin(1, 80, true);
  timerAttachInterrupt(timerMotor, &controleMotorTimer, true);
  timerAlarmWrite(timerMotor, 2000000, true); // 2 segundos
  timerAlarmEnable(timerMotor);
}

void loop() {
  // Motor é controlado automaticamente pelo timer
}
```

### 4.4 Funcionamento

* A cada 2 segundos, o motor liga e depois desliga.
* Isso simula um **ciclo de trabalho automático**, útil em robôs, ventiladores inteligentes e sistemas de irrigação.


## 5. Estudo de Caso 3: Contador de Pulsos (Encoder de Motor)

Um uso clássico dos contadores é medir a **velocidade de rotação (RPM)** de motores.

### 5.1 Componentes

* ESP32 DevKit
* Motor DC com encoder (saída de pulsos)
* Fonte externa
* Protoboard e fios

### 5.2 Ligações

* Saída de pulsos do encoder

### 5.3 Código – Contador de Pulsos

```cpp
const int stepPin = 2;   // pino que gera os pulsos
const int dirPin = 3;    // pino de direção
const int stepsPerRevolution = 200;

#define ENCODER_PIN 2    // no UNO, interrupções estão nos pinos 2 e 3

volatile unsigned long pulsos = 0;

void contarPulso() {
  pulsos++;
}

void setup() {
  pinMode(dirPin, OUTPUT);
  pinMode(stepPin, OUTPUT);

  pinMode(ENCODER_PIN, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(ENCODER_PIN), contarPulso, RISING);

  Serial.begin(9600);
}

void loop() {
  // faz o motor girar uma volta
  digitalWrite(dirPin, LOW);

  for (int x = 0; x < stepsPerRevolution; x++) {
    digitalWrite(stepPin, HIGH);
    delayMicroseconds(2000);
    digitalWrite(stepPin, LOW);
    delayMicroseconds(2000);
  }

  delay(1000);

  // mostra quantos pulsos foram detectados
  Serial.print("Pulsos contados: ");
  Serial.println(pulsos);
  pulsos = 0;
}

```

### 5.4 Funcionamento

* Cada pulso do encoder incrementa a variável `pulsos`.
* A cada segundo, exibimos a contagem no monitor serial.
* Multiplicando os pulsos por um fator conhecido (pulsos por volta), obtemos o **RPM**.


## 6. Experimentos sugeridos

1. Alterar a frequência do LED (piscar mais rápido ou mais lento).
2. Fazer o motor girar em um sentido por 5 s e no sentido oposto por 5 s.
3. Usar dois timers: um para o LED e outro para o motor.
4. Medir a rotação real do motor usando encoder + contador de pulsos.
5. Implementar um sistema que pisca LEDs em sequência usando timers independentes.


## 7. Conclusão

* O **ESP32** oferece timers poderosos que permitem controle preciso de eventos periódicos.
* Com **timers**, conseguimos liberar o processador de tarefas repetitivas, tornando o sistema mais eficiente.
* Os **contadores** são fundamentais para medir pulsos e frequências, essenciais em sistemas industriais, automação e robótica.
* Combinando timers e contadores, é possível construir sistemas embarcados **robustos, precisos e em tempo real**.


**Resumo:**

* **Timer** = controla eventos no tempo (LED piscando, motor cíclico).
* **Counter** = conta eventos externos (pulsos de encoder, sensores).
* Ambos são indispensáveis em projetos de **IoT, automação e robótica**.
