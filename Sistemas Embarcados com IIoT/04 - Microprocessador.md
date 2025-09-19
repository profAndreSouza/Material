# Microprocessador, Oscilador e Memória / Planejamento da Pinagem no ESP32

## 1. Microprocessador

* O **microprocessador** é o cérebro do microcontrolador, responsável por executar instruções de programas armazenados na memória.
* No **ESP32**, o microprocessador é um **dual-core Tensilica Xtensa LX6**, capaz de operar até 240 MHz.
* Funções principais:

  * Processamento de dados digitais.
  * Controle de periféricos internos e externos.
  * Comunicação com memória, sensores e atuadores.


## 2. Oscilador

* O **oscilador** define a frequência de operação do microprocessador, garantindo que todas as instruções sejam executadas no tempo correto.
* Tipos de osciladores no ESP32:

  * **Cristal externo (XTAL)** → normalmente 40 MHz.
  * **Oscilador interno** → menos preciso, usado para economia de energia.
* A frequência do oscilador influencia:

  * Velocidade do processamento.
  * Precisão de temporizadores e PWM.
  * Comunicação serial e periféricos.


## 3. Memória

O ESP32 possui vários tipos de memória:

| Tipo de Memória      | Capacidade típica | Função                                                  |
| -------------------- | ----------------- | ------------------------------------------------------- |
| **Flash**            | 4–16 MB           | Armazena programas e dados permanentes.                 |
| **SRAM**             | 520 KB            | Memória volátil para variáveis e execução de programas. |
| **RTC Memory**       | 8 KB              | Memória de baixo consumo, usada em deep sleep.          |
| **EEPROM (emulada)** | Variável          | Armazena pequenos dados permanentes (configurações).    |


## 4. Planejamento da Pinagem no ESP32

* Antes de conectar sensores, atuadores ou LEDs, é importante **planejar a pinagem** do ESP32.
* Alguns pinos têm funções especiais (ADC, DAC, PWM, I2C, SPI, UART) e alguns **não devem ser usados** para entradas/saídas genéricas.

### 4.1 Tipos de pinos

| Função            | Pinos comuns no ESP32                 | Observações                                                |
| ----------------- | ------------------------------------- | ---------------------------------------------------------- |
| **GPIO**          | 0–39                                  | Pinos digitais; alguns têm restrições de boot (ex: GPIO0). |
| **ADC**           | 32–39, 0–15                           | Conversores analógico-digital; 12 bits.                    |
| **DAC**           | 25, 26                                | Conversor digital-analógico real.                          |
| **PWM (ledc)**    | 0–19, 21–23, 25–27, 32–33             | Saída PWM para LEDs ou motores.                            |
| **UART**          | 1 (TX), 3 (RX) + outros configuráveis | Comunicação serial.                                        |
| **I2C**           | SDA: 21, SCL: 22 (configurável)       | Barramento I2C para sensores e displays.                   |
| **SPI**           | MISO: 19, MOSI: 23, SCK: 18, CS: 5    | Comunicação SPI.                                           |
| **Touch Sensor**  | 0, 2, 4, 12–15, 27–32                 | Sensores capacitivos integrados.                           |
| **Tensão máxima** | 3.3V                                  | Não conectar pinos diretamente a 5V.                       |


### 4.2 Planejamento de pinagem em planilha

| Periférico / Função     | Pino ESP32 sugerido                | Observação                       |
| ----------------------- | ---------------------------------- | -------------------------------- |
| LED PWM                 | 2, 4, 15                           | Evitar GPIO0 no boot             |
| Motor DC (PWM)          | 25, 26                             | DAC disponível                   |
| Potenciômetro (ADC)     | 32, 33                             | 12-bit ADC                       |
| LCD I2C                 | SDA: 21, SCL: 22                   | Configurável via software        |
| Botão                   | 34, 35                             | Entrada digital, pull-up interno |
| Sensor Touch            | 12, 13, 14                         | Sensor capacitivo integrado      |
| Comunicação Serial UART | TX: 1, RX: 3                       | Serial console                   |
| Comunicação SPI         | SCK: 18, MOSI: 23, MISO: 19, CS: 5 | Padrão SPI                       |


### 4.3 Observações importantes

* Alguns pinos têm **resistores de pull-up internos** ou **função de boot**, cuidado ao usá-los.
* Sempre planejar a pinagem antes de montar o circuito físico para evitar conflitos.
* O ESP32 permite remapeamento de muitas funções (PWM, UART, I2C, SPI) via software, mas **periféricos críticos devem manter pinos recomendados**.
