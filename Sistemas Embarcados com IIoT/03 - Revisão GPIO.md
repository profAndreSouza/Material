# Aula 3 – Revisão de GPIO + Mapeamento de Periféricos

## Objetivos da Aula

* Reforçar os conceitos de **GPIO** (entrada, saída, protocolos).
* Introduzir o conceito de **mapeamento de periféricos** internos e externos no ESP32.
* Realizar o **levantamento prático** dos periféricos da empilhadeira 3D (motores, sensores, atuadores) e planejar o uso das GPIOs.

## 1. Revisão Rápida de GPIO

* **Entrada** → sensores, botões, sinais digitais.
* **Saída** → LEDs, motores, relés.
* **Funções especiais** → PWM, ADC, comunicação (I2C, UART, SPI).

**Dica para alunos:** nem todos os pinos do ESP32 suportam todas as funções. Sempre verificar o **datasheet**.


## 2. Mapeamento de Periféricos

* **Periféricos Internos**:

  * Timers, ADC (conversor analógico-digital), DAC, PWM, UART, I2C, SPI.
  * São recursos já embutidos no microcontrolador.

* **Periféricos Externos**:

  * Motores, sensores, displays, módulos de comunicação, etc.
  * Precisam ser conectados via GPIO.

**Passos para mapear periféricos:**

1. Identificar cada componente usado (motor DC, motor de passo, sensor ultrassônico, sensor de fim de curso, etc).
2. Verificar requisitos de cada um:

   * Alimentação (3.3V ou 5V).
   * Comunicação (digital/analógico ou protocolo).
   * Quantidade de GPIOs necessários.
3. Reservar os pinos no ESP32 e registrar em uma tabela de pinagem.

**Exemplo de tabela de mapeamento:**

| Componente          | Tipo                  | GPIO(s) no ESP32    | Observações           |
| ------------------- | --------------------- | ------------------- | --------------------- |
| Motor de passo (x)  | Saída (PWM)           | GPIO 18, 19, 21, 22 | Controlado por driver |
| Sensor ultrassônico | Entrada/saída digital | GPIO 4, 5           | Trigger e Echo        |
| Botão de emergência | Entrada digital       | GPIO 15             | Interrupção externa   |
| LED indicador       | Saída digital         | GPIO 2              | Status do sistema     |


## Atividade: Levantamento dos periféricos da empilhadeira

1. **Dividir em duplas** (mesmas do projeto).
2. **Observar a empilhadeira física** e identificar:

   * Motores usados (de passo, DC, servo?).
   * Sensores (ultrassônico, fim de curso, encoder, etc).
   * Atuadores adicionais (LEDs, buzzer, relés?).
3. **Anotar em planilha/tabela** todos os componentes e características (tensão, tipo de sinal, comunicação).
4. **Criar um primeiro esboço da tabela de mapeamento** (GPIO vs Componente).


## Entregável da Aula

* Cada dupla deve entregar **uma tabela inicial de mapeamento de periféricos** da empilhadeira.
* Esta tabela será **base para o planejamento do código** e evolução do projeto.


## Atividade Extra

* Pesquisar no **datasheet do ESP32** quais GPIOs **não devem ser usados** (pinos reservados para boot e funções críticas).
* Reorganizar a tabela de acordo com essas restrições.
