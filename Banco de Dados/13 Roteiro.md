# Roteiro de Estudos: Banco de Dados

## 1. Fundamentação de Banco de Dados

* **Conceitos Básicos:** Entenda profundamente o que são **registros (linhas)**, **campos (colunas)**, **chaves primárias (PK)** e **chaves estrangeiras (FK)**. Saiba como os **índices** melhoram a performance de consultas.
* **SGBD (Sistema Gerenciador de Banco de Dados):** Compreenda o papel de sistemas como MySQL e PostgreSQL: gerenciar armazenamento, segurança, integridade e acesso aos dados.
* **Entidades e Relacionamentos:** Entidades representam objetos do mundo real (Cliente, Produto), enquanto relacionamentos definem como esses objetos se conectam.
* **Integração com Aplicações:** Bancos de dados não funcionam isolados — são acessados por sistemas (web, mobile, APIs), geralmente via SQL ou ORMs.

---

## 2. Modelagem de Dados

* **Objetivo da Modelagem:** Organizar os dados de forma eficiente, evitando redundância e inconsistência.
* **Modelos de Dados:** Conheça os níveis:

  * Conceitual (visão de negócio)
  * Lógico (estrutura detalhada)
  * Físico (implementação no SGBD)
* **Diagrama Entidade-Relacionamento (DER):** Base da modelagem. Saiba identificar:

  * Entidades
  * Atributos
  * Relacionamentos
* **Cardinalidade:** Entenda os tipos:

  * 1:1 (um para um)
  * 1:N (um para muitos)
  * N:N (muitos para muitos)
* **Normalização:** Processo essencial para evitar redundância:

  * 1FN: eliminar grupos repetitivos
  * 2FN: eliminar dependência parcial
  * 3FN: eliminar dependência transitiva

---

## 3. Modelo Físico de Dados (MFD)

* **Transformação do Modelo Lógico:** Converter o DER em tabelas reais no banco.
* **Tipos de Dados:** Saber quando usar:

  * INT (números inteiros)
  * VARCHAR (textos)
  * DATE/DATETIME (datas)
  * FLOAT/DECIMAL (valores numéricos com precisão)
* **Criação de Estruturas:** Definição de tabelas, chaves, constraints e índices.

---

## 4. Bancos de Dados Relacionais

* **Esquema de Banco de Dados:** Estrutura organizada de tabelas e seus relacionamentos.
* **Tabelas:** Unidade principal de armazenamento, compostas por linhas e colunas.
* **Integridade Referencial:** Garantia de consistência entre tabelas através de chaves estrangeiras.

---

## 5. Linguagem SQL (Structured Query Language)

* **DDL (Data Definition Language):** Manipula estrutura do banco:

  * CREATE (criar tabelas)
  * ALTER (alterar estrutura)
  * DROP (remover objetos)
* **DML (Data Manipulation Language):** Manipula dados:

  * INSERT (inserir)
  * UPDATE (atualizar)
  * DELETE (remover)
* **DQL (Data Query Language):** Consulta dados:

  * SELECT (principal comando)
  * WHERE (filtros)
  * ORDER BY (ordenação)
  * GROUP BY (agrupamento)
* **JOINs (Essencial para prova):**

  * INNER JOIN (interseção)
  * LEFT JOIN (todos da esquerda + correspondências)
  * RIGHT JOIN (todos da direita)

---