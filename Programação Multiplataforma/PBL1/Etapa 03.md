# Wokwi


## diagram.json
```json
{
  "version": 1,
  "author": "André Souza",
  "editor": "wokwi",
  "parts": [
    { "type": "wokwi-breadboard-half", "id": "bb1", "top": -214.2, "left": 156.4, "attrs": {} },
    { "type": "board-esp32-devkit-c-v4", "id": "esp", "top": 28.8, "left": -52.76, "attrs": {} },
    { "type": "wokwi-dht22", "id": "dht1", "top": -210.9, "left": 186.6, "attrs": {} }
  ],
  "connections": [
    [ "esp:TX", "$serialMonitor:RX", "", [] ],
    [ "esp:RX", "$serialMonitor:TX", "", [] ],
    [ "esp:GND.2", "bb1:bn.1", "black", [ "v0", "h86.4", "v-76.8" ] ],
    [ "bb1:bp.1", "esp:3V3", "red", [ "v-0.9", "h-257.6", "v86.4" ] ],
    [ "bb1:3b.j", "bb1:bp.2", "red", [ "v0" ] ],
    [ "bb1:6b.j", "bb1:bn.5", "black", [ "v0" ] ],
    [ "dht1:VCC", "bb1:3b.f", "", [ "$bb" ] ],
    [ "dht1:SDA", "bb1:4b.f", "", [ "$bb" ] ],
    [ "dht1:NC", "bb1:5b.f", "", [ "$bb" ] ],
    [ "dht1:GND", "bb1:6b.f", "", [ "$bb" ] ],
    [ "bb1:4b.j", "esp:15", "green", [ "v0" ] ]
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

DHTesp dhtSensor;

void setup() {
  Serial.begin(115200);

  dhtSensor.setup(DHT_PIN, DHTesp::DHT22);
  
  Serial.println("Sistema de Monitoramento Iniciado");
}

void loop() {

  TempAndHumidity data = dhtSensor.getTempAndHumidity();

  if (isnan(data.temperature) || isnan(data.humidity)) {
    Serial.println("Erro ao ler o sensor DHT22");
  } else {
    Serial.println("Temperatura: " + String(data.temperature, 2) + "°C");
    Serial.println("Umidade: " + String(data.humidity, 2) + "%");
  }

  delay(1000);
}

```