# 6. Modelagem de Casos de Uso

A modelagem de **Casos de Uso** é uma técnica da Engenharia de Software utilizada para capturar e descrever os **requisitos funcionais** de um sistema de forma centrada nas interações entre os **atores** (usuários ou sistemas externos) e o sistema em desenvolvimento.
Essa abordagem favorece o entendimento claro das funcionalidades esperadas e é amplamente utilizada em projetos orientados a objetos, mas também pode ser **mapeada diretamente para User Stories** dentro do **framework SCRUM**, permitindo a integração entre requisitos e backlog ágil.


## 6.1. Elementos Básicos de um Caso de Uso

* **Ator**: Pessoa ou sistema externo que interage com o sistema.
* **Caso de Uso**: Funcionalidade que traz valor ao ator.
* **Sistema**: Limite dentro do qual os casos de uso acontecem.
* **Relacionamentos**:

  * **Associação** (ligação ator ↔ caso de uso).
  * **«include»**: Inclusão obrigatória de outro caso de uso.
  * **«extend»**: Extensão opcional que ocorre em certas condições.


## 6.2. Estrutura Textual do Caso de Uso

| **Campo**               | **Descrição**                                        |
| ----------------------- | ---------------------------------------------------- |
| **Nome do Caso de Uso** | Identificação da funcionalidade.                     |
| **Atores Envolvidos**   | Primários e secundários que interagem com o sistema. |
| **Objetivo**            | Resultado de valor esperado pelo ator principal.     |
| **Pré-condições**       | O que deve estar válido antes do início.             |
| **Fluxo Principal**     | Passos sequenciais do cenário ideal.                 |
| **Fluxos Alternativos** | Exceções ou caminhos opcionais.                      |
| **Pós-condições**       | Estado final do sistema após execução.               |


## 6.3. Exemplo de Caso de Uso – Realizar Pedido

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

### Fluxos Alternativos

* **Pagamento falhou:** sistema exibe erro → cliente escolhe outro método.
* **Item indisponível:** sistema alerta → cliente remove ou substitui.


## 6.4. Diagrama de Casos de Uso (UML)

```mermaid
usecase
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

  Cliente --> UC1
  Cliente --> UC2
  Cliente --> UC7
  Cliente --> UC8

  Garçom --> UC2
  Garçom --> UC9

  UC2 --> UC4 : <<include>>
  UC2 --> UC6 : <<include>>
  UC2 --> UC3 : <<extend>>

  UC4 --> UC5 : <<include>>
  UC6 --> Cozinha
  UC4 --> Pagamento

```


## 6.5. Tabela Descritiva do Caso de Uso – Realizar Pedido

| **Campo**               | **Descrição**                                                                                                                                                                                                                                                                      |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nome do Caso de Uso** | Realizar Pedido                                                                                                                                                                                                                                                                    |
| **Atores Principais**   | Cliente, Garçom                                                                                                                                                                                                                                                                    |
| **Ator Secundário**     | Sistema de Pagamento, Cozinha                                                                                                                                                                                                                                                      |
| **Objetivo**            | Permitir que o cliente ou o garçom registre um pedido, efetue o pagamento e envie-o para a cozinha.                                                                                                                                                                                |
| **Pré-condições**       | - O cliente deve estar na interface inicial do sistema (totem ou atendimento com o garçom). <br> - O sistema deve estar em funcionamento.                                                                                                                                          |
| **Pós-condições**       | - Pedido registrado e enviado à cozinha. <br> - Pagamento confirmado. <br> - Nota fiscal emitida (quando aplicável).                                                                                                                                                               |
| **Fluxo Principal**     | 1. Cliente/Garçom inicia pedido.<br>2. Seleciona itens.<br>3. Opção de personalização (*extend*).<br>4. Sistema calcula valor.<br>5. Confirma pedido.<br>6. Inclui **Efetuar Pagamento**.<br>7. Pagamento inclui **Emitir Nota Fiscal**.<br>8. Inclui **Enviar Pedido à Cozinha**. |
| **Fluxos Alternativos** | **A1 – Item Indisponível:** Sistema alerta → cliente substitui. <br> **A2 – Pagamento Falhou:** Sistema exibe erro → cliente escolhe outro método.                                                                                                                                 |

### Fluxo em Tabela – 2 Colunas (Ator Principal x Sistema)

| **Passo** | **Ator Principal (Cliente/Garçom)** | **Sistema**                           |
| --------- | ----------------------------------- | ------------------------------------- |
| 1         | Solicita iniciar pedido             | Exibe cardápio disponível             |
| 2         | Seleciona itens desejados           | Registra seleção                      |
| 3         | Personaliza item (opcional)         | Ajusta pedido conforme personalização |
| 4         | Solicita visualizar valor           | Calcula e apresenta valor total       |
| 5         | Confirma pedido                     | Exibe opções de pagamento             |
| 6         | Escolhe método de pagamento         | Processa pagamento                    |
| 7         | Confirma pagamento                  | Emite nota fiscal (quando aplicável)  |
| 8         | —                                   | Envia pedido para a cozinha           |


### Fluxo em Tabela – 3 Colunas (Ator Principal x Sistema x Ator Secundário)

| **Passo** | **Ator Principal (Cliente/Garçom)** | **Sistema**                           | **Ator Secundário (Ex.: Pagamento / Cozinha)** |
| --------- | ----------------------------------- | ------------------------------------- | ---------------------------------------------- |
| 1         | Solicita iniciar pedido             | Exibe cardápio                        | —                                              |
| 2         | Seleciona itens desejados           | Registra seleção                      | —                                              |
| 3         | Personaliza item (opcional)         | Ajusta pedido                         | —                                              |
| 4         | Solicita visualizar valor           | Calcula e apresenta total             | —                                              |
| 5         | Confirma pedido                     | Solicita método de pagamento          | —                                              |
| 6         | Escolhe pagamento (Pix/Cartão)      | Envia dados da transação              | Sistema de Pagamento processa a operação       |
| 7         | Confirma pagamento                  | Registra aprovação e gera nota fiscal | Sistema de Pagamento confirma operação         |
| 8         | —                                   | Envia pedido                          | Cozinha recebe pedido para preparação          |


## 6.6. Conexão com User Story no SCRUM

Dentro do **framework SCRUM**, cada **Caso de Uso** pode ser decomposto em **User Stories** que alimentarão o **Product Backlog**.
A hierarquia é:

**Épico → Feature → User Story → Tasks**

### Exemplo:

* **Épico:** Gestão de Pedidos Digitais
* **Feature:** Realizar Pedido no Totem
* **User Story:**
  *Como cliente, quero registrar meu pedido no totem digital, para que eu possa comprar de forma rápida sem precisar de atendimento humano.*
* **Tasks:**

  * Criar interface de seleção de itens.
  * Implementar personalização de produtos.
  * Desenvolver integração com sistema de pagamento.
  * Gerar nota fiscal eletrônica.
  * Enviar pedido para cozinha.


## 6.7. Aplicações Práticas

* Facilita **comunicação entre equipe e stakeholders**.
* Define funcionalidades claras para o **backlog do projeto**.
* Serve como base para **criação de User Stories em SCRUM**.
* Ajuda na **validação dos requisitos** junto ao cliente.
* Permite rastrear **do Caso de Uso → User Story → Tarefas**, garantindo cobertura.
