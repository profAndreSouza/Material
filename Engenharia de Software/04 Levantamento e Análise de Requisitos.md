# 4. Levantamento e Análise de Requisitos

O levantamento e a análise de requisitos são etapas essenciais da Engenharia de Software, pois constituem a base sobre a qual o sistema será projetado, desenvolvido e validado.

Um requisito mal definido pode gerar falhas graves no sistema, custos adicionais e retrabalho. Por isso, o processo de levantamento, análise e validação deve ser conduzido com cuidado, envolvendo ativamente os **stakeholders** (clientes, usuários finais, gestores e especialistas do domínio).


## 4.1. Técnicas de Levantamento de Requisitos

As técnicas de levantamento permitem ao analista **compreender as necessidades do negócio**, **capturar expectativas dos usuários** e **documentar funcionalidades e restrições**.

### 4.1.1 Entrevistas

As entrevistas consistem em conversas estruturadas ou informais com os stakeholders, permitindo identificar problemas, necessidades e expectativas.

**Tipos de entrevistas:**

* **Estruturada:** perguntas fixas e pré-definidas.
* **Semiestruturada:** guia de perguntas, mas com flexibilidade.
* **Aberta:** sem roteiro definido, explorando livremente o tema.

**Exemplo prático:**
Em um sistema de pedidos para restaurante:

*Pergunta:* Quais os maiores problemas no processo atual de atendimento?
*Resposta:* Os clientes enfrentam filas longas nos horários de pico.

**Requisitos derivados:**

* O sistema deve permitir pedidos sem a intervenção do atendente.
* O sistema deve oferecer integração com pagamentos digitais.



### 4.1.2 Questionários

Questionários são formulários aplicados a um público maior, úteis quando há muitos usuários envolvidos.

**Vantagens:** baixo custo, rapidez na coleta, abrangência.
**Limitações:** pouca profundidade, dependência da clareza das perguntas.

**Exemplo:**
Um questionário aplicado a clientes pode incluir:

* Você gostaria de pagar via Pix?
* Você utilizaria totens de autoatendimento?



### 4.1.3 Observação

Consiste em acompanhar o usuário em seu ambiente de trabalho para **entender fluxos reais**, identificar gargalos e necessidades não verbalizadas.

**Exemplo prático:**
O analista acompanha o processo de pedidos no restaurante e percebe que:

* O atendente demora ao buscar itens no cardápio impresso.
* Há erros frequentes na digitação de pedidos.

**Requisitos derivados:**

* O sistema deve exibir o cardápio de forma organizada e pesquisável.
* O sistema deve evitar erros de digitação com opções pré-definidas.



### 4.1.4 Brainstorming

Reunião colaborativa em que os participantes sugerem ideias livremente, sem julgamentos.

**Exemplo de ideias levantadas:**

* O sistema deve informar o tempo estimado de preparo.
* O cliente deve poder escolher retirada ou consumo no local.
* O sistema deve permitir personalização do pedido (ex.: sem cebola, extra queijo).

**Requisitos derivados:**

* O sistema deve apresentar opções de retirada ou consumo local.
* O sistema deve informar o tempo de preparo antes da finalização.



## 4.2. Classificação de Requisitos

Após a coleta, os requisitos são organizados e categorizados para melhor entendimento e gestão.

### 4.2.1 Requisitos Funcionais

São funcionalidades que o sistema **deve executar**.

**Tabela de requisitos funcionais (exemplo – sistema de pedidos em restaurante):**

| ID    | Descrição                                                                         |
| ----- | --------------------------------------------------------------------------------- |
| RF-01 | O sistema deve permitir que os clientes visualizem o cardápio no totem.           |
| RF-02 | O sistema deve permitir adicionar itens ao carrinho de compras.                   |
| RF-03 | O sistema deve aceitar pagamentos via Pix e cartão.                               |
| RF-04 | O sistema deve exibir o tempo estimado de preparo antes da finalização do pedido. |
| RF-05 | O sistema deve enviar automaticamente o pedido para a cozinha.                    |



### 4.2.2 Requisitos Não Funcionais

Definem **restrições e qualidades** do sistema, como desempenho, segurança e usabilidade.

**Tabela de requisitos não funcionais:**

| ID     | Descrição                                                                                 |
| ------ | ----------------------------------------------------------------------------------------- |
| RNF-01 | O sistema deve ter tempo de resposta inferior a 2 segundos para qualquer ação do usuário. |
| RNF-02 | O sistema deve estar disponível 24 horas por dia, 7 dias por semana.                      |
| RNF-03 | Os dados de pagamento devem ser criptografados (padrão PCI-DSS).                          |
| RNF-04 | O sistema deve ser responsivo, funcionando em totens, tablets e celulares.                |
| RNF-05 | O sistema deve suportar até 100 pedidos simultâneos sem perda de desempenho.              |



## 4.3. Validação e Refinamento de Requisitos

A validação garante que os requisitos estejam **claros, completos e consistentes**. O refinamento detalha requisitos vagos em itens mais específicos.

### Técnicas de Validação e Refinamento:

* **Prototipagem:** criação de telas simuladas para validação com usuários.
* **Casos de Uso (UML):** modelagem de atores e interações para validar fluxos.
* **Revisões com stakeholders:** reuniões de alinhamento.
* **Modelagem de processos:** uso de diagramas para validar fluxos de negócio.



## 4.4. Exemplo Visual – Diagrama de Casos de Uso

```mermaid
usecaseDiagram
  actor Cliente
  actor Atendente
  actor Administrador

  Cliente --> (Realizar Pedido)
  Cliente --> (Personalizar Pedido)
  Cliente --> (Efetuar Pagamento)
  Cliente --> (Consultar Tempo de Preparo)

  Atendente --> (Auxiliar Pedido)
  Atendente --> (Confirmar Entrega)

  Administrador --> (Gerenciar Cardápio)
  Administrador --> (Gerar Relatórios)
```

**Interpretação:**

* O cliente pode realizar, personalizar e pagar o pedido.
* O atendente apoia quando necessário.
* O administrador mantém o cardápio e gera relatórios.
