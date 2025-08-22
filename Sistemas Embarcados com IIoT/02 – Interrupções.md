# Aula 2 – Interrupções

## 1. Conceitos Fundamentais

* Uma **interrupção** é um evento que pausa temporariamente a execução normal de um programa para executar uma rotina específica (ISR – *Interrupt Service Routine*).

* Serve para reagir rapidamente a eventos externos (botão pressionado, sensor ativado, recebimento de dados etc).

* **Tipos**

  * **Internas:** geradas por eventos do próprio microcontrolador (ex.: overflow de timer).
  * **Externas:** geradas por periféricos externos (ex.: botão em um pino GPIO).


## 2. Exemplo Prático (ESP32 – Interrupção Externa)

```cpp
const int botaoPin = 15;
volatile bool estadoBotao = false;

void IRAM_ATTR trataInterrupcao() {
  estadoBotao = !estadoBotao;  // alterna estado ao pressionar
}

void setup() {
  pinMode(botaoPin, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(botaoPin), trataInterrupcao, FALLING);
  Serial.begin(115200);
}

void loop() {
  if (estadoBotao) {
    Serial.println("Botão pressionado!");
    delay(500);
  }
}
```


## 3. Exercícios de Fixação

1. Explique com suas palavras a diferença entre **interrupção interna** e **externa**.
2. Cite uma aplicação prática em que **usar interrupção** é melhor que um **loop de leitura contínua** (*polling*).
3. Escreva um fluxograma simples de como funciona o atendimento a uma interrupção.

