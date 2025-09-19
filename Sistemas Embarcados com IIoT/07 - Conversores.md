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


## 3. Estudo de Caso: Controle de Motor DC via PWM com LCD e LEDs Indicativos

No simulador Wokwi, o circuito terá:

* Um **potenciômetro** que define a velocidade desejada do motor.
* O Arduino lê o potenciômetro via **ADC**.
* A saída PWM do Arduino controla a velocidade do **motor DC**.
* **4 LEDs** indicam a velocidade em escala (0 a 4).
* Um **LCD I2C 16x2** mostra a rotação atual do motor.


### 3.1 Componentes usados

* Arduino UNO
* Potenciômetro de 10kΩ
* Motor DC (simulado no Wokwi)
* Driver de motor (ex: L298N ou ponte H simulada)
* 4 LEDs (cores variadas para indicar velocidade)
* 4 resistores de 220Ω
* LCD I2C 16x2
* Fios de conexão


### 3.2 Esquema de ligação

**Potenciômetro**

* Terminal 1 → GND
* Terminal 2 (cursor) → A0 do Arduino
* Terminal 3 → 5V

**Motor DC**

* Conectado a saída PWM do driver (IN1/IN2 ou EN do L298N)
* Alimentação do motor conforme Wokwi

**LEDs de indicação de velocidade**

* LED1 → Pino 3 → Resistor 220Ω → GND
* LED2 → Pino 4 → Resistor 220Ω → GND
* LED3 → Pino 5 → Resistor 220Ω → GND
* LED4 → Pino 6 → Resistor 220Ω → GND

**LCD I2C**

* SDA → A4 do Arduino
* SCL → A5 do Arduino
* VCC → 5V
* GND → GND


### 3.3 Código Arduino (Wokwi)

```cpp



```


### 3.4 Funcionamento do Circuito

1. O **potenciômetro** define a velocidade desejada do motor.
2. O Arduino lê o valor do potenciômetro via ADC (0–1023).
3. A saída PWM controla o motor, variando sua velocidade.
4. O **LCD** exibe a rotação do motor em porcentagem (0–100%).
5. Os **4 LEDs** mostram a velocidade de forma visual:

   * 0–25% → LED1 aceso
   * 26–50% → LED1 e LED2 acesos
   * 51–75% → LED1, LED2 e LED3 acesos
   * 76–100% → todos os LEDs acesos


## 4. Experimentos sugeridos

1. Girar o potenciômetro e observar a velocidade do motor no LCD e nos LEDs.
2. Testar diferentes escalas de LEDs, alterando a quantidade de LEDs acesos por faixa.
3. Modificar o código para exibir no LCD a tensão lida pelo potenciômetro.
4. Adicionar um botão para ligar/desligar o motor e observar a reação do LCD e LEDs.


## 5. Conclusão

* O **ADC** permite que o Arduino leia sinais analógicos.
* O **PWM** possibilita simular sinais analógicos para controlar atuadores.
* O **PCM** é usado para representar sinais analógicos em sistemas de áudio e comunicação.
* No projeto prático, o Arduino leu o potenciômetro com ADC e controlou a velocidade (simulada por LED) com PWM.
