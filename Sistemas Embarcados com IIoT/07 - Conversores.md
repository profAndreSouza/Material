# Aula 7 – Conversores AD/DA, PWM, PCM e Controle de Velocidade de Motor DC (Wokwi)

## 1. Introdução

Os microcontroladores trabalham apenas com sinais digitais (0 e 1). Mas no mundo real, os sensores e atuadores geralmente usam sinais **analógicos**.
Por isso, precisamos de mecanismos para converter entre analógico e digital:

* **ADC (Conversor Analógico-Digital)** → usado para ler sinais analógicos.
* **DAC (Conversor Digital-Analógico)** → usado para gerar sinais analógicos a partir de valores digitais.

Além disso, técnicas como **PWM (Pulse Width Modulation)** e **PCM (Pulse Code Modulation)** permitem representar e manipular sinais contínuos de forma digital.


## 2. Conceitos Fundamentais

### 2.1 Conversor Analógico-Digital (ADC)

* Converte uma tensão contínua em um valor digital.
* No Arduino UNO, o ADC tem 10 bits, fornecendo valores entre 0 e 1023.
* Fórmula aproximada:

  $$
  V_{in} = \frac{ADC}{1023} \times V_{ref}
  $$

Exemplo: Se o Arduino ler 512 com referência de 5V, a tensão no pino é:

$$
V_{in} \approx \frac{512}{1023} \times 5 \approx 2,5V
$$


### 2.2 Conversor Digital-Analógico (DAC)

* Faz o caminho inverso: converte números digitais em tensões contínuas.
* Alguns microcontroladores possuem DACs reais.
* O Arduino UNO não possui DAC, mas pode gerar sinais "equivalentes" usando **PWM**.


### 2.3 PWM (Pulse Width Modulation)

* Modulação por largura de pulso.
* O sinal é digital (alto ou baixo), mas variamos o **tempo em que permanece em nível alto** (duty cycle).
* A tensão média percebida pelo circuito depende do duty cycle:

  * 0% → saída sempre em 0V.
  * 50% → saída com metade da tensão média.
  * 100% → saída sempre em 5V.

Aplicações: controle de brilho de LEDs, velocidade de motores, posição de servomotores.


### 2.4 PCM (Pulse Code Modulation)

* Modulação por código de pulsos.
* Converte sinais analógicos em sequências de valores digitais discretos.
* Usado principalmente em áudio digital, telefonia e transmissão de dados.
* Diferença para o PWM:

  * **PCM** representa os valores do sinal.
  * **PWM** representa a proporção de tempo ativo.


## 3. Estudo de Caso: Controle de Motor DC via PWM

No simulador Wokwi vamos montar um circuito onde:

* Um potenciômetro define a velocidade desejada.
* O Arduino lê o potenciômetro via ADC.
* A saída PWM do Arduino controla o brilho de um LED, representando a velocidade de um motor DC.


### 3.1 Componentes usados

* Arduino UNO
* Potenciômetro de 10kΩ
* LED vermelho
* Resistor 220Ω
* Fios de conexão


### 3.2 Esquema de ligação

* **Potenciômetro**

  * Terminal 1 → GND
  * Terminal 2 (cursor) → A0 do Arduino
  * Terminal 3 → 5V

* **LED**

  * Ânodo → Pino 9 (PWM) do Arduino
  * Cátodo → Resistor de 220Ω → GND


### 3.3 Código Arduino (Wokwi)

```cpp
// Controle de velocidade de motor DC (simulado com LED) via PWM

int potPin = A0;      // Potenciômetro no A0
int pwmPin = 9;       // Saída PWM no pino 9
int potValue = 0;     // Valor lido do potenciômetro (0-1023)
int pwmValue = 0;     // Valor convertido para PWM (0-255)

void setup() {
  pinMode(pwmPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // Leitura analógica (ADC)
  potValue = analogRead(potPin);

  // Conversão para faixa do PWM (0-255)
  pwmValue = map(potValue, 0, 1023, 0, 255);

  // Geração do sinal PWM
  analogWrite(pwmPin, pwmValue);

  // Exibição no monitor serial
  Serial.print("Potenciometro: ");
  Serial.print(potValue);
  Serial.print("  | PWM: ");
  Serial.println(pwmValue);

  delay(100);
}
```


## 4. Experimentos sugeridos

1. Girar o potenciômetro e observar como o brilho do LED varia.
2. Calcular a tensão aproximada no cursor do potenciômetro para diferentes posições.
3. Alterar o pino PWM e observar o resultado.
4. Modificar o código para inverter a lógica: potenciômetro em 0 → LED aceso, potenciômetro no máximo → LED apagado.


## 5. Conclusão

* O **ADC** permite que o Arduino leia sinais analógicos.
* O **PWM** possibilita simular sinais analógicos para controlar atuadores.
* O **PCM** é usado para representar sinais analógicos em sistemas de áudio e comunicação.
* No projeto prático, o Arduino leu o potenciômetro com ADC e controlou a velocidade (simulada por LED) com PWM.
