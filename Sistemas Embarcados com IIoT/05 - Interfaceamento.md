# Semáforo Inteligente com Botão de Prioridade e Controle de Motor

* **GPIO** (entrada e saída digital)
* **Registradores (conceito aplicado via código e mapeamento de pinos)**
* **Mapeamento de periféricos internos/externos**
* **Interfaceamento eletrônico (LED, botão e motor)**
* **Temporizador e contador (usando `millis()` para simular)**

Implemente no Wokwi (ESP32) um **semáforo de pedestres** com as seguintes características:

1. **LEDs:**

   * Vermelho, Amarelo e Verde (carros).
   * Vermelho e Verde (pedestres).

2. **Botão de Pedestre (GPIO entrada):**

   * Quando pressionado, deve solicitar prioridade para pedestres.

3. **Motor (simulado com LED ou Servo):**

   * Representa um portão que abre quando o pedestre pode atravessar.

4. **Temporizador (contador de tempo):**

   * Ciclo padrão do semáforo dura 10 segundos (verde → amarelo → vermelho).
   * Se o botão for pressionado, após o ciclo atual, deve ativar o semáforo de pedestre por 5 segundos.

5. **Interfaceamento:**

   * LED → saída digital simples.
   * Botão → entrada digital com `INPUT_PULLUP`.
   * Motor → pode ser substituído por um **servo motor** ou LED branco que liga quando pedestre atravessa.



## Código Exemplo (main.ino)

```cpp

```



## Componentes no Wokwi (diagram.json resumido)

* ESP32
* 5 LEDs (vermelho, amarelo, verde carros; vermelho, verde pedestres)
* 1 botão (pedestre)
* 1 servo motor (portão simbólico)
* Resistores de 220Ω para LEDs
