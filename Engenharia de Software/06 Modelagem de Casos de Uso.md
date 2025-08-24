# 6. Modelagem de Casos de Uso

A modelagem de **Casos de Uso** é uma técnica da Engenharia de Software utilizada para capturar e descrever os **requisitos funcionais** de um sistema de forma centrada nas interações entre os **atores** (usuários ou sistemas externos) e o sistema em desenvolvimento.
Essa abordagem favorece o entendimento claro das funcionalidades esperadas e é amplamente utilizada em projetos orientados a objetos.


## 6.1. Elementos Básicos de um Caso de Uso

* **Ator**: Pessoa ou sistema externo que interage com o sistema.
* **Caso de Uso**: Funcionalidade que traz valor ao ator.
* **Sistema**: Limite dentro do qual os casos de uso acontecem.
* **Relacionamentos**:

  * **Associação** (ligação ator ↔ caso de uso).
  * **«include»**: Inclusão obrigatória de outro caso de uso.
  * **«extend»**: Extensão opcional que ocorre em certas condições.



## 6.2. Estrutura Textual do Caso de Uso

Um caso de uso costuma conter:

* **Nome do Caso de Uso**
* **Atores Envolvidos (Primários e Secundários)**
* **Objetivo do Ator Principal**
* **Pré-condições**
* **Fluxo Principal de Eventos**
* **Fluxos Alternativos / de Exceção**
* **Pós-condições**



## 6.3. Exemplo: Caso de Uso – Realizar Pedido

**Nome:** Realizar Pedido
**Ator Principal:** Cliente
**Objetivo:** Permitir ao cliente realizar um pedido utilizando o totem digital.
**Pré-condições:** Cliente deve estar na interface inicial do totem.
**Pós-condições:** Pedido registrado, enviado para a cozinha e pagamento confirmado.

### Fluxo Principal

1. O cliente visualiza o cardápio.
2. Seleciona itens desejados.
3. Personaliza o pedido, se necessário.
4. Visualiza valor total.
5. Confirma o pedido.
6. Escolhe método de pagamento (Pix ou cartão).
7. Sistema processa o pagamento.
8. Sistema confirma e envia para cozinha.

### Fluxos de Exceção

* **Pagamento falhou:** sistema exibe erro → cliente escolhe outro método.
* **Item indisponível:** sistema alerta → cliente remove ou substitui.


## 6.4. Diagrama de Casos de Uso (UML)

```mermaid
usecaseDiagram
    actor Cliente
    actor Garçom
    actor "Sistema de Pagamento" as Pagamento
    actor "Cozinha" as Cozinha

    rectangle Sistema {
        (Consultar Cardápio) as UC1
        (Realizar Pedido) as UC2
        (Personalizar Pedido) as UC3
        (Efetuar Pagamento) as UC4
        (Emitir Nota Fiscal) as UC5
        (Enviar Pedido à Cozinha) as UC6
        (Acompanhar Status do Pedido) as UC7
        (Cancelar Pedido) as UC8
        (Solicitar Alteração do Pedido) as UC9
    }

    %% Atores iniciando casos de uso
    Cliente --> UC1
    Cliente --> UC2
    Cliente --> UC7
    Cliente --> UC8

    Garçom --> UC2
    Garçom --> UC9

    %% Relações include e extend
    UC2 --> UC4 : <<include>>
    UC2 --> UC6 : <<include>>
    UC2 --> UC3 : <<extend>>

    UC4 --> UC5 : <<include>>
    UC6 --> Cozinha
    UC4 --> Pagamento
```

### Explicação do mapa visual

* **Atores Principais**:

  * **Cliente** – pode consultar cardápio, realizar pedido, acompanhar status, cancelar pedido.
  * **Garçom** – pode realizar pedido e solicitar alterações em pedidos existentes.
* **Atores Secundários**:

  * **Sistema de Pagamento** – apoia o processo de pagamento.
  * **Cozinha** – recebe pedidos enviados para preparação.
* **Include**:

  * *Realizar Pedido* inclui obrigatoriamente *Efetuar Pagamento* e *Enviar Pedido à Cozinha*.
  * *Efetuar Pagamento* inclui *Emitir Nota Fiscal*.
* **Extend**:

  * *Realizar Pedido* pode estender para *Personalizar Pedido*.
* **Fluxos Alternativos / Exceções**:

  * Falha no pagamento → pedido não concluído.
  * Pedido cancelado → notifica cozinha e sistema de pagamento.
  * Alteração de pedido → opcional, permite reenvio à cozinha.


## Estrutura Textual do Caso de Uso – Realizar Pedido

| **Campo**               | **Descrição**                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nome do Caso de Uso** | Realizar Pedido                                                                                                                                                                                                                                                                                                                                                                                           |
| **Atores Principais**   | Cliente, Garçom                                                                                                                                                                                                                                                                                                                                                                                           |
| **Ator Secundário**     | Sistema de Pagamento                                                                                                                                                                                                                                                                                                                                                                                      |
| **Objetivo**            | Permitir que o cliente ou o garçom registre um pedido, efetue o pagamento e envie-o para a cozinha.                                                                                                                                                                                                                                                                                                       |
| **Pré-condições**       | - O cliente deve estar na interface inicial do sistema (totem ou atendimento com o garçom). <br> - O sistema deve estar em funcionamento.                                                                                                                                                                                                                                                                 |
| **Pós-condições**       | - Pedido registrado e enviado à cozinha. <br> - Pagamento confirmado. <br> - Nota fiscal emitida (quando aplicável).                                                                                                                                                                                                                                                                                      |
| **Fluxo Principal**     | 1. O Cliente ou Garçom inicia o pedido.<br>2. Os itens são selecionados.<br>3. O sistema oferece a opção de personalização (*extend*).<br>4. O sistema apresenta o valor total.<br>5. O Cliente/Garçom confirma o pedido.<br>6. O caso de uso inclui o **Efetuar Pagamento**.<br>7. O pagamento, se aprovado, inclui **Emitir Nota Fiscal**.<br>8. O caso de uso inclui o envio do pedido para a cozinha. |
| **Fluxos Alternativos** | **A1 – Item Indisponível:**<br>1. O sistema informa a falta do item.<br>2. O Cliente/Garçom remove ou substitui o item.<br><br>**A2 – Pagamento Falhou:**<br>1. O sistema exibe mensagem de erro.<br>2. O Cliente/Garçom escolhe outro método de pagamento.<br>3. Fluxo principal é retomado a partir do passo 6.                                                                                         |


## 6.5. Aplicações Práticas

* Facilita **comunicação entre equipe e stakeholders**.
* Define funcionalidades claras para o **backlog do projeto**.
* Serve como base para **testes funcionais**.
* Ajuda na **validação dos requisitos** junto ao cliente.

