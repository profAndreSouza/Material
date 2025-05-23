# Projeto Final: Banco de Dados Relacional

## Objetivo

Este repositório contém o projeto final da disciplina de Banco de Dados Relacional. O objetivo é aplicar os conceitos estudados, incluindo modelagem, normalização e manipulação de dados utilizando DDL, DML, DQL — com bonificação para comandos DCL e DTL.

## Integrantes do Grupo

- Nome Completo 1
- Nome Completo 2
- Nome Completo 3
- Nome Completo 4

## Tema Escolhido

> _Exemplo: Sistema de Gerenciamento de Biblioteca_

Descreva brevemente o propósito do sistema e sua relevância para a prática dos conceitos de banco de dados relacionais.


## Modelagem de Dados

### Entidades, Atributos e Relacionamentos

Descrição geral das entidades envolvidas e seus relacionamentos.

### Diagrama Entidade-Relacionamento (DER)

> Inserir imagem ou link para o DER (use a pasta `/docs` ou uma imagem hospedada):

![DER](./docs/der.png)


## Normalização

O banco de dados foi normalizado até a **Terceira Forma Normal (3NF)**.

- Justificativas das formas normais aplicadas
- Exemplos de como a normalização foi implementada


## Scripts SQL

Todos os scripts estão localizados na pasta `/sql`.

### DDL (Data Definition Language)

- Criação de tabelas
- Definição de chaves primárias e estrangeiras
- Restrições de integridade

> Caminho: `sql/ddl.sql`

### DML (Data Manipulation Language)

- Inserção de dados
- Atualização de registros
- Exclusão de registros

> Caminho: `sql/dml.sql`

### DQL (Data Query Language)

- Consultas para recuperar dados relevantes

> Caminho: `sql/dql.sql`

### DCL (Data Control Language)

> Caminho: `sql/dcl.sql`

- Uso de `GRANT` e `REVOKE` para controle de acesso

### DTL (Data Transaction Language)

> Caminho: `sql/dtl.sql`

- Uso de `BEGIN`, `COMMIT`, `ROLLBACK`, `SAVEPOINT` para garantir a integridade transacional


## Documentação (ABNT)

A documentação completa está disponível na pasta `/documentacao`, estruturada conforme as normas da ABNT, contendo:

- Introdução
- Modelagem conceitual e lógica
- Scripts comentados
- Conclusão e referências

> Caminho: `documentacao/projeto-final.pdf`


## Requisitos Técnicos

- **SGBD utilizado**: PostgreSQL (ou outro, especificar)
- **Versão recomendada**: PostgreSQL 15+
- **Ferramentas utilizadas**:
  - PgAdmin, DBeaver, VSCode, etc.
