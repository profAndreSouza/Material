# Modelagem de Casos de Uso

A modelagem de **Casos de Uso** é uma técnica da Engenharia de Software utilizada para capturar e descrever os **requisitos funcionais** de um sistema de forma centrada nas interações entre os **atores** (usuários ou sistemas externos) e o sistema em desenvolvimento. Essa modelagem favorece o entendimento claro das funcionalidades esperadas, sendo amplamente empregada em metodologias orientadas a objetos.

**Referência às aulas:** Aulas 8 e 9.

---

## 1. Elementos Básicos de um Caso de Uso

Os elementos principais de um caso de uso são:

* **Ator**: Pessoa ou sistema externo que interage com o sistema.
* **Caso de Uso**: Descrição textual de uma funcionalidade que traz valor para o ator.
* **Sistema**: Componente em desenvolvimento que será modelado.
* **Relacionamentos**: Podem incluir associações entre atores e casos de uso, além de dependências como «include» (inclusão obrigatória) e «extend» (extensões opcionais).

---

## 2. Elaboração Textual e Identificação de Atores

A **descrição textual** de um caso de uso fornece uma visão clara do comportamento esperado do sistema. A estrutura típica inclui:

* **Nome do Caso de Uso**
* **Atores Envolvidos (Primários e Secundários)**
* **Objetivo do Ator Principal**
* **Pré-condições**: Estado necessário antes da execução do caso de uso.
* **Fluxo Principal de Eventos**
* **Fluxos Alternativos e de Exceção**
* **Pós-condições**: Estado do sistema após a conclusão do caso de uso.

---

## 3. Exemplo Detalhado: Caso de Uso – Realizar Pedido

**Nome:** Realizar Pedido
**Ator Principal:** Cliente
**Objetivo:** Permitir ao cliente realizar um pedido de maneira simples e rápida utilizando o totem digital.
**Pré-condições:** O cliente deve estar na interface inicial do totem.
**Pós-condições:** Pedido registrado e enviado para a cozinha, com pagamento confirmado.

### Fluxo Principal de Eventos

1. O cliente visualiza o cardápio no totem.
2. O cliente seleciona os itens desejados.
3. O cliente personaliza o pedido, se necessário (ex: retirar cebola).
4. O cliente visualiza o valor total do pedido.
5. O cliente confirma o pedido.
6. O cliente escolhe o método de pagamento (Pix ou cartão).
7. O sistema processa o pagamento.
8. O sistema exibe a confirmação do pedido e o envia à cozinha.

### Fluxos de Exceção

* **Pagamento falhou:**

  * O sistema exibe uma mensagem de erro.
  * O cliente é solicitado a tentar novamente ou escolher outro método.

* **Item indisponível:**

  * O sistema informa a falta do item.
  * O cliente pode remover o item ou escolher uma alternativa.

---

## 4. Diagrama de Casos de Uso (UML)

O **Diagrama de Casos de Uso**, conforme a UML (Unified Modeling Language), é a representação gráfica das interações entre os atores e os casos de uso do sistema. Ele fornece uma visão macro e de fácil entendimento das funcionalidades do sistema.

### Elementos gráficos típicos:

* Atores representados por bonecos stickman.
* Casos de uso representados por elipses nomeadas.
* O sistema é representado por um retângulo que contém os casos de uso.
* As setas indicam os relacionamentos (comunicação, inclusão, extensão).

> Exemplo (representado em texto):
>
> * **Ator:** Cliente
> * **Casos de Uso:** Realizar Pedido, Personalizar Pedido, Efetuar Pagamento
> * **Relações:** Cliente → Realizar Pedido; Realizar Pedido → «include» Efetuar Pagamento; Realizar Pedido → «extend» Personalizar Pedido

---

## 5. Aplicações Práticas

A modelagem de casos de uso é útil nas seguintes situações:

* Comunicação entre equipe técnica e stakeholders.
* Definição clara de funcionalidades para o backlog de desenvolvimento.
* Base para especificação de testes funcionais.
* Suporte para validação de requisitos junto ao cliente.

---

## Referências Bibliográficas

* PRESSMAN, Roger S. *Engenharia de Software*. 8. ed. São Paulo: McGraw-Hill, 2016.
* SOMMERVILLE, Ian. *Engenharia de Software*. 10. ed. São Paulo: Pearson, 2019.
* BOOCH, Grady; RUMBAUGH, James; JACOBSON, Ivar. *UML – Guia do Usuário*. 2. ed. Rio de Janeiro: Elsevier, 2006.
* LARMAN, Craig. *Utilizando UML e Padrões*. 3. ed. Porto Alegre: Bookman, 2007.
* JACOBSON, Ivar et al. *Object-Oriented Software Engineering: A Use Case Driven Approach*. Addison-Wesley, 1992.
