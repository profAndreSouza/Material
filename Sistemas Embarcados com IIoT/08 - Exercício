# **Atividade – Controle de Motor de Passo com Botões Multifuncionais**

## **Objetivo**

Controlar um motor de passo que simula a **abertura e fechamento de um mecanismo**, com controle de **modo de operação** e **direção manual**, utilizando dois botões com `INPUT_PULLUP`.


## **Descrição do Sistema**

Você deve implementar um sistema com:

* Um **motor de passo** controlado via `stepPin` (pino 2) e `dirPin` (pino 3);
* Dois **botões** conectados aos pinos 4 e 5:

  * **botaoModo (pino 4):** alterna entre 3 modos de operação;
  * **botaoDirecao (pino 5):** alterna manualmente entre **abrir** e **fechar**;
* Um **contador de pulsos** via `attachInterrupt()` no `stepPin`;
* Um **timer com `millis()`** para medir o tempo da operação;
* Envio de informações via **Serial Monitor** ao final de cada ciclo de movimento.


## **Modos de Operação (botaoModo - pino 4)**

Cada toque no botão de modo avança para o modo seguinte:

1. **Modo 1 – Ligado Contínuo**
   Executa abertura e fechamento continuamente, sem pausas.

2. **Modo 2 – Automático com Intervalo**
   Alterna entre abertura e fechamento com pausa de 2 segundos entre os ciclos.

3. **Modo 3 – Desligado**
   Motor parado. Nenhuma ação ocorre.

Após o terceiro toque, volta ao modo 1 (modo cíclico: 1 → 2 → 3 → 1...).

---

## **Botão de Direção (botaoDirecao - pino 5)**

A cada toque, o botão alterna manualmente entre os sentidos de rotação:

* Direção atual: **abertura** → botão pressionado → muda para **fechamento**
* Direção atual: **fechamento** → botão pressionado → muda para **abertura**

Esse botão afeta qual será o **próximo movimento** realizado pelo motor.


## **Requisitos**

* Defina os pinos conforme abaixo:

  ```cpp
  const int stepPin = 2;
  const int dirPin = 3;
  const int botaoModo = 4;
  const int botaoDirecao = 5;
  ```

* A cada ciclo de movimento:

  * Execute 200 passos;
  * Meça o tempo com `millis()` (inicio ao fim dos passos);
  * Conte os pulsos com `attachInterrupt()` no `stepPin`;
  * Exiba via Serial Monitor:

    ```
    Operação: Abertura/Fechamento
    Pulsos: 200
    Tempo: XXX ms
    ```


## **Dicas**

* Use variáveis `modoAtual` (0, 1, 2) e `direcaoAtual` (true/false) para controlar os estados.
* Use `millis()` para fazer debounce dos botões e para temporizar o modo automático com intervalo.
* Direção pode ser definida com:

  ```cpp
  digitalWrite(dirPin, direcaoAtual ? HIGH : LOW);
  ```
* Use `delayMicroseconds()` para gerar os pulsos do motor.
* Lembre-se de que `INPUT_PULLUP` inverte a lógica do botão: pressionado = LOW.
