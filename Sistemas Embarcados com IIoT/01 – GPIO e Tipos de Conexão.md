# Aula 1 – GPIO e Tipos de Conexão (I2C como exemplo)

## 1. Conceitos Fundamentais

* **GPIO (General Purpose Input/Output)**
  São pinos de uso geral dos microcontroladores/microprocessadores que podem ser configurados como **entrada** (input) ou **saída** (output).

  * **Entrada** → ler sinais de sensores ou botões.
  * **Saída** → enviar sinais para LEDs, motores, relés etc.

* **Modos de Operação**

  * Digital (0 ou 1, HIGH ou LOW).
  * Analógico (quando suportado, via ADC/DAC).

* **Protocolos de Conexão**
  GPIOs podem ser usados para protocolos seriais, como:

  * **I2C (Inter-Integrated Circuit):** barramento de 2 fios (SDA e SCL) para comunicação entre dispositivos.
  * **SPI:** comunicação mais rápida, 4 fios.
  * **UART:** comunicação serial tradicional (TX/RX).


## 2. Exemplo Prático (ESP32 – I2C)

```cpp
#include <Wire.h>

void setup() {
  Wire.begin(); // Inicializa I2C (padrão: SDA=21, SCL=22 no ESP32)
  Serial.begin(115200);
  Serial.println("I2C iniciado!");
}

void loop() {
  // Exemplo: varredura de endereços I2C
  byte error, address;
  int nDevices;

  Serial.println("Escaneando...");
  nDevices = 0;
  for(address = 1; address < 127; address++ ) {
    Wire.beginTransmission(address);
    error = Wire.endTransmission();

    if (error == 0) {
      Serial.print("Dispositivo I2C encontrado no endereço 0x");
      Serial.println(address, HEX);
      nDevices++;
    }
  }
  delay(2000);
}
```

## 3. Exercícios de Fixação

1. Explique a diferença entre GPIO como **entrada** e **saída**.
2. Qual a principal vantagem do protocolo **I2C** em relação ao **UART**?
3. Pesquise e cite **dois exemplos de sensores** que usam I2C.
