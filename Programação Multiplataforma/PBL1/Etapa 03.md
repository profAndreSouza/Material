# Wokwi


## diagram.json
```json
{
  "version": 1,
  "author": "André Souza",
  "editor": "wokwi",
  "parts": [
    {
      "type": "wokwi-breadboard-half",
      "id": "bb1",
      "top": -214.2,
      "left": 156.4,
      "attrs": { "color": "#eeefed" }
    },
    { "type": "board-esp32-devkit-c-v4", "id": "esp", "top": 28.8, "left": -52.76, "attrs": {} },
    {
      "type": "wokwi-dht22",
      "id": "dht1",
      "top": -210.9,
      "left": 397.8,
      "attrs": { "temperature": "28.5", "humidity": "65.5" }
    },
    {
      "type": "wokwi-photoresistor-sensor",
      "id": "ldr1",
      "top": -211.5,
      "left": 272.9,
      "rotate": 90,
      "attrs": {}
    },
    { "type": "wokwi-pir-motion-sensor", "id": "pir1", "top": -188, "left": 165.42, "attrs": {} },
    {
      "type": "wokwi-gas-sensor",
      "id": "gas1",
      "top": -196,
      "left": 223.7,
      "rotate": 90,
      "attrs": {}
    }
  ],
  "connections": [
    [ "esp:TX", "$serialMonitor:RX", "", [] ],
    [ "esp:RX", "$serialMonitor:TX", "", [] ],
    [ "esp:GND.2", "bb1:bn.1", "black", [ "h19.2", "v-75.5" ] ],
    [ "bb1:bp.1", "esp:3V3", "red", [ "v-0.9", "h-257.6", "v86.4" ] ],
    [ "bb1:3b.j", "bb1:bp.2", "red", [ "v0" ] ],
    [ "bb1:12b.j", "bb1:bn.10", "black", [ "v0" ] ],
    [ "bb1:28b.j", "bb1:bn.23", "black", [ "v0" ] ],
    [ "bb1:4b.j", "esp:18", "purple", [ "v0" ] ],
    [ "bb1:18b.j", "esp:2", "yellow", [ "v0" ] ],
    [ "bb1:14b.j", "esp:4", "blue", [ "v0" ] ],
    [ "bb1:26b.j", "esp:15", "green", [ "v0" ] ],
    [ "bb1:5b.j", "bb1:bn.4", "black", [ "v0" ] ],
    [ "bb1:20b.j", "bb1:bn.16", "black", [ "v0" ] ],
    [ "bb1:25b.j", "bb1:bp.20", "red", [ "v0" ] ],
    [ "bb1:21b.j", "bb1:bp.17", "red", [ "v0" ] ],
    [ "dht1:VCC", "bb1:25b.f", "", [ "$bb" ] ],
    [ "dht1:SDA", "bb1:26b.f", "", [ "$bb" ] ],
    [ "dht1:NC", "bb1:27b.f", "", [ "$bb" ] ],
    [ "dht1:GND", "bb1:28b.f", "", [ "$bb" ] ],
    [ "pir1:VCC", "bb1:3b.f", "", [ "$bb" ] ],
    [ "pir1:OUT", "bb1:4b.f", "", [ "$bb" ] ],
    [ "pir1:GND", "bb1:5b.f", "", [ "$bb" ] ],
    [ "bb1:11b.j", "bb1:bp.9", "red", [ "v0" ] ],
    [ "gas1:AOUT", "bb1:14b.f", "", [ "$bb" ] ],
    [ "gas1:DOUT", "bb1:13b.f", "", [ "$bb" ] ],
    [ "gas1:GND", "bb1:12b.f", "", [ "$bb" ] ],
    [ "gas1:VCC", "bb1:11b.f", "", [ "$bb" ] ],
    [ "ldr1:VCC", "bb1:21b.f", "", [ "$bb" ] ],
    [ "ldr1:GND", "bb1:20b.f", "", [ "$bb" ] ],
    [ "ldr1:DO", "bb1:19b.f", "", [ "$bb" ] ],
    [ "ldr1:AO", "bb1:18b.f", "", [ "$bb" ] ]
  ],
  "dependencies": {}
}
```

## libraries.txt
```txt
# Wokwi Library List
# See https://docs.wokwi.com/guides/libraries

DHT sensor library for ESPx

```

## sketch.ino
```c
#include <DHTesp.h>

// mapeamento doa conexao dos dispositivos na GPIO (pinos)
const int DHT_PIN = 15;
const int PIR_PIN = 18;
const int LDR_PIN = 2;
const int GAS_PIN = 4;

DHTesp dhtSensor;

void setup() {
  Serial.begin(115200);

  dhtSensor.setup(DHT_PIN, DHTesp::DHT22);
  pinMode(PIR_PIN, INPUT);
  
  Serial.println("Sistema de Monitoramento Iniciado");
}

void loop() {

// DHT22
  TempAndHumidity data = dhtSensor.getTempAndHumidity();
  // ===== Outros sensores =====
  int presenca = digitalRead(PIR_PIN);
  int luminosidade = analogRead(LDR_PIN);
  int qualidadeAr = analogRead(GAS_PIN);

  Serial.println("-------- LEITURA DOS SENSORES --------");

  if (isnan(data.temperature) || isnan(data.humidity)) {
    Serial.println("Erro ao ler o sensor DHT22");
  } else {
    Serial.println("Temperatura: " + String(data.temperature, 2) + "°C");
    Serial.println("Umidade: " + String(data.humidity, 2) + "%");
  }

  Serial.println("Presenca: " + String(presenca ? "Detectada" : "Nao detectada"));
  Serial.println("Luminosidade (ADC): " + String(luminosidade));
  Serial.println("Qualidade do Ar (ADC): " + String(qualidadeAr));

  Serial.println("--------------------------------------\n");


  delay(1000);
}

```