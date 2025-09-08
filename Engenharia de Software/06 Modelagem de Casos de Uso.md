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

| **Passo** | **Ator Principal (Cliente)**                | **Sistema**                            |
| --------- | ------------------------------------------- | -------------------------------------- |
| 1         | Visualiza o cardápio                        | Exibe o cardápio disponível            |
| 2         | Seleciona itens desejados                   | Registra itens escolhidos              |
| 3         | Personaliza o pedido (opcional)             | Ajusta o pedido conforme escolha       |
| 4         | Solicita visualizar valor total             | Calcula e apresenta o valor total      |
| 5         | Confirma o pedido                           | Solicita método de pagamento           |
| 6         | Escolhe método de pagamento (Pix ou Cartão) | Processa o pagamento                   |
| 7         | Confirma pagamento                          | Emite nota fiscal (quando aplicável)   |
| 8         | —                                           | Confirma pedido e envia para a cozinha |


### Fluxos Alternativos

#### A1 – Pagamento Falhou

| **Passo** | **Ator Principal (Cliente)**        | **Sistema**                                |
| --------- | ----------------------------------- | ------------------------------------------ |
| 6a        | Escolhe método de pagamento         | Processa pagamento                         |
| 7a        | —                                   | Exibe mensagem de erro                     |
| 8a        | Seleciona outro método de pagamento | Reinicia processamento a partir do passo 6 |


#### A2 – Item Indisponível

| **Passo** | **Ator Principal (Cliente)**   | **Sistema**                        |
| --------- | ------------------------------ | ---------------------------------- |
| 2a        | Seleciona item fora de estoque | Identifica indisponibilidade       |
| 3a        | Remove ou substitui o item     | Atualiza pedido conforme alteração |



## 6.4. Diagrama de Casos de Uso (UML)

<img src="06 Diagrama Caso de Uso.png" alt="Diagrama de Caso de Uso" />

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

Dentro do **framework SCRUM**, os **Casos de Uso** podem servir como base para a criação de **User Stories** que irão compor o **Product Backlog**.

A hierarquia em Scrum é:

**Épico → Feature → User Story → Tasks**

* **Épico**: uma iniciativa estratégica ou objetivo de negócio amplo.
* **Feature**: uma funcionalidade relevante do sistema (um Caso de Uso pode ser tratado como uma Feature).
* **User Story**: descreve uma necessidade específica do usuário final, geralmente derivada de fluxos principais ou alternativos de um Caso de Uso.
* **Tasks**: atividades técnicas necessárias para implementar cada User Story.

### Relação entre Caso de Uso e User Story

* **Um Caso de Uso pode originar várias User Stories**.
* **Cada User Story representa uma fatia de valor** (um cenário ou variação), em vez de descrever todo o caso de uso completo.
* Assim, o Caso de Uso funciona como um **guarda-chuva de entendimento**, enquanto as User Stories são as **unidades de trabalho ágil** que entram no backlog.


### Exemplo prático

* **Épico:** Gestão de Pedidos Digitais
* **Feature (Caso de Uso):** Realizar Pedido no Totem

#### User Stories derivadas do Caso de Uso “Realizar Pedido”:

1. *Como cliente, quero visualizar o cardápio digital, para escolher meus itens sem ajuda do garçom.*
2. *Como cliente, quero personalizar meu pedido, para adaptá-lo às minhas preferências.*
3. *Como cliente, quero pagar com Pix, para concluir rapidamente minha compra.*
4. *Como cliente, quero ser notificado quando um item estiver indisponível, para substituí-lo antes do pagamento.*
5. *Como cliente, quero acompanhar o status do meu pedido, para saber quando ele estará pronto.*

#### Exemplo de Tasks da User Story “Pagar com Pix”:

* Criar integração com API de pagamentos via Pix.
* Desenvolver tela de confirmação do pagamento.
* Implementar fallback para outro meio de pagamento em caso de falha.
* Testar fluxo de pagamento bem-sucedido e com erro.


Dessa forma, o **Caso de Uso dá contexto e completude**, enquanto as **User Stories** permitem que a entrega seja **incremental e ágil**.


## 6.7. Aplicações Práticas

* Facilita **comunicação entre equipe e stakeholders**.
* Define funcionalidades claras para o **backlog do projeto**.
* Serve como base para **criação de User Stories em SCRUM**.
* Ajuda na **validação dos requisitos** junto ao cliente.
* Permite rastrear **do Caso de Uso → User Story → Tarefas**, garantindo cobertura.
