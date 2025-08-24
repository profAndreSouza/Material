# 6. Modelagem de Casos de Uso

A modelagem de **Casos de Uso** é uma técnica da Engenharia de Software utilizada para capturar e descrever os **requisitos funcionais** de um sistema de forma centrada nas interações entre os **atores** (usuários ou sistemas externos) e o sistema em desenvolvimento.
Essa abordagem favorece o entendimento claro das funcionalidades esperadas e é amplamente utilizada em projetos orientados a objetos.

---

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
    actor "Sistema de Pagamento" as Pagamento
    actor "Cozinha" as Cozinha

    rectangle Sistema {
        (Realizar Pedido) as UC1
        (Efetuar Pagamento) as UC2
        (Personalizar Pedido) as UC3
        (Enviar Pedido à Cozinha) as UC4
    }

    Cliente --> UC1
    UC1 --> UC2 : <<include>>
    UC1 --> UC3 : <<extend>>
    UC1 --> UC4 : <<include>>

    UC2 --> Pagamento
    UC4 --> Cozinha
```

Neste exemplo:

* **Cliente** é o ator principal.
* O **caso de uso Realizar Pedido** inclui obrigatoriamente o **Efetuar Pagamento** e o **Enviar Pedido à Cozinha**.
* Ele pode opcionalmente **estender** para **Personalizar Pedido**.



## 6.5. Aplicações Práticas

* Facilita **comunicação entre equipe e stakeholders**.
* Define funcionalidades claras para o **backlog do projeto**.
* Serve como base para **testes funcionais**.
* Ajuda na **validação dos requisitos** junto ao cliente.

