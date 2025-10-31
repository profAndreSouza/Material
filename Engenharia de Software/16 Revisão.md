# Guia de Estudo — Engenharia de Software

* **Contexto Aplicado:** Sistema de E-commerce desenvolvido em aula
* **Data:** 03/11
* **Horário:** 14h30
* **Consulta:** Permitido material próprio **manuscrito** (quantas folhas forem necessárias)


## 1. Fundamentos da Engenharia de Software

### 1.1 Conceitos Essenciais

* Definição de **Engenharia de Software**
* Diferença entre **software** e **programa de computador**
* Características principais: **intangibilidade**, **manutenção contínua**, **evolução constante**
* Importância da **documentação**, **padronização** e **qualidade do processo**

### 1.2 Ciclo de Vida e Modelos de Processo

* Fases do ciclo de vida: **levantamento, análise, projeto, implementação, testes e manutenção**
* **Modelos Tradicionais:** Cascata, Incremental, Espiral e Prototipagem
* **Modelos Ágeis:** Scrum e Extreme Programming (XP)
* Comparação: abordagem sequencial vs. iterativa
* **Gestão de mudanças e riscos** como parte do processo


## 2. Engenharia de Requisitos

### 2.1 Tipos de Requisitos

* **Funcionais:** descrevem **o que** o sistema faz
  *Ex.: cadastrar produtos, realizar login, processar pagamento*
* **Não Funcionais:** especificam **como** o sistema se comporta
  *Ex.: desempenho, segurança, disponibilidade, usabilidade*

### 2.2 Processo de Engenharia de Requisitos

* Etapas: **levantamento, análise, especificação, validação, gerenciamento**
* Técnicas de elicitação: entrevistas, observação, brainstorming, prototipagem
* Importância da **rastreabilidade** e da **documentação clara**

### 2.3 Aplicação no E-commerce

* Funcionalidades: catálogo, carrinho, checkout, pagamento, relatórios
* Critérios de qualidade: tempo de resposta, segurança, escalabilidade


## 3. Metodologias Ágeis e SCRUM

### 3.1 Fundamentos do Ágil

* Valores e princípios do **Manifesto Ágil**
* Benefícios: entregas rápidas, feedback contínuo e adaptação a mudanças

### 3.2 Estrutura do Scrum

* **Papéis:** Product Owner, Scrum Master, Time de Desenvolvimento
* **Artefatos:** Product Backlog, Sprint Backlog, Incremento
* **Eventos:** Sprint Planning, Daily Scrum, Sprint Review, Retrospective
* Conceitos-chave: **time-boxing**, **incremento de valor**, **transparência**

### 3.3 Aplicação ao E-commerce

* Organização e priorização do **backlog**
* Planejamento de **sprints** com entregas parciais
* Integração de **user stories** ao processo de desenvolvimento


## 4. User Stories e Modelagem de Requisitos

### 4.1 Estrutura de uma User Story

* Formato: *Como [ator], quero [funcionalidade] para [benefício]*
* Critérios de aceitação e **Definition of Done**

### 4.2 Hierarquia no Scrum

* **Épico → Feature → User Story → Task**
* Relação entre user stories e requisitos funcionais

### 4.3 Conexão com a UML

* User Story ↔ Caso de Uso: visões complementares do mesmo comportamento
* Como user stories originam **casos de uso** e **diagramas de atividades**


## 5. Modelagem de Casos de Uso (UML)

### 5.1 Conceitos

* Representa interações entre **usuários (atores)** e o **sistema**
* Elementos: atores, casos de uso, relacionamentos

### 5.2 Relacionamentos

* **Include:** funcionalidade obrigatória compartilhada
* **Extend:** funcionalidade opcional/condicional
* **Generalization:** herança entre atores ou casos

### 5.3 Aplicação no E-commerce

* Casos de uso: pesquisar produto, adicionar ao carrinho, finalizar pedido, rastrear entrega
* Atores: cliente, administrador, sistema de pagamento


## 6. Modelagem de Processos — Diagrama de Atividades

### 6.1 Função e Elementos

* Representa **fluxos de ações e decisões**
* Elementos: início/fim, atividades, decisões, sincronizações

### 6.2 Aplicação ao E-commerce

* Fluxo de **compra e pagamento**
* **Fluxos alternativos:** pagamento negado, estoque insuficiente
* **Atividades paralelas:** envio de e-mail, atualização de estoque


## 7. Modelagem Estrutural — Diagrama de Classes e Modelo de Dados

### 7.1 Diagrama de Classes

* Estrutura estática do sistema: **classes, atributos, métodos e relacionamentos**
* **Cardinalidade e multiplicidade**
* Relações principais: Cliente, Pedido, Produto, Pagamento

### 7.2 Modelo de Dados

* **DER Conceitual:** entidades e relacionamentos
* **Modelo Lógico:** tabelas, chaves primárias e estrangeiras
* Coerência entre **diagrama de classes** e **modelo de banco**


## 8. Modelagem Comportamental — Diagrama de Sequência

### 8.1 Conceitos

* Mostra **interações ao longo do tempo**
* Elementos: **lifelines, mensagens síncronas e assíncronas, retornos**

### 8.2 Aplicação ao E-commerce

* Sequência de eventos: cliente → sistema → carrinho → pagamento → confirmação
* Análise do fluxo “**Finalizar Pedido**”


## 9. Modelagem Arquitetural


* Mostra **módulos e dependências**
* Exemplos: frontend, backend, API, banco de dados, gateways externos


## 10. Integração e Qualidade de Software

* Relação entre **requisitos**, **casos de uso**, **classes** e **código**
* Garantia de rastreabilidade entre artefatos

## 11. Revisão Integrada

* Fluxo completo: **Requisitos → Modelagem → Implementação → Testes → Entrega**
* **UML** como suporte à comunicação e documentação técnica
* Integração entre **Scrum** (gestão ágil) e **UML** (modelagem formal)
* Visão global do **E-commerce** como sistema **modular, escalável e centrado no usuário**
