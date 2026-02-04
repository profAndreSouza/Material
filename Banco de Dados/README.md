# Unidade Curricular: Banco de Dados


## Descrição

Esta unidade curricular tem como finalidade capacitar o estudante a **projetar, implementar, integrar e documentar bancos de dados**, considerando **cenários reais de aplicação em ambientes industriais e corporativos**. O componente aborda fundamentos teóricos e práticos de **modelagem de dados**, **bancos de dados relacionais**, **bancos de dados não-relacionais (NoSQL)**, além de aspectos de **integração com aplicações** e **documentação técnica**, com ênfase em **boas práticas de mercado**.

## Objetivo Geral

Desenvolver competências técnicas e socioemocionais para a **programação e gestão de bancos de dados**, possibilitando ao estudante analisar problemas complexos, propor soluções eficientes e tomar decisões tecnológicas adequadas às demandas de ambientes produtivos.

## Competências Desenvolvidas

### Competências Técnicas

* Analisar requisitos informacionais e definir a **modelagem de dados** mais adequada ao contexto organizacional.
* Avaliar e selecionar **Sistemas Gerenciadores de Bancos de Dados (SGBD)** conforme critérios técnicos, operacionais e estratégicos.
* Configurar ambientes de banco de dados em conformidade com padrões de segurança, desempenho e escalabilidade.
* Aplicar **linguagens de definição, manipulação e consulta de dados (SQL)** em ambientes relacionais.
* Avaliar o **consumo de recursos e desempenho** dos SGBDs.
* Integrar bancos de dados com aplicações computacionais.
* Elaborar **documentação técnica** de bancos de dados, incluindo estruturas, relacionamentos e dicionário de dados.

### Competências Socioemocionais

**Ética e responsabilidade profissional**

* Atuar de forma ética, responsável e sustentável, respeitando princípios legais, sociais e ambientais no tratamento da informação.

**Inteligência emocional — Autoconhecimento e autorregulação**

* Demonstrar autocontrole, previsibilidade e consistência nas ações profissionais, reconhecendo limites, emoções e impactos no trabalho em equipe.

**Inteligência emocional — Percepção social e relacionamento interpessoal**

* Exercitar empatia, escuta ativa, comunicação assertiva e colaboração em contextos acadêmicos e profissionais.

## Conteúdos Programáticos

### 1. Fundamentação de Banco de Dados

* Conceitos básicos: registros, campos, chaves e índices
* Sistemas Gerenciadores de Bancos de Dados (SGBD)
* Entidades e relacionamentos
* Integração de bancos de dados com aplicações

### 2. Modelagem de Dados

* Conceitos e objetivos da modelagem
* Modelos de dados
* Modelo Lógico de Dados (MLD)

  * Diagrama Entidade-Relacionamento
  * Cardinalidade e restrições
  * Normalização
* Modelo Físico de Dados (MFD)

  * Tipos de dados

### 3. Bancos de Dados Relacionais

* Esquema de banco de dados
* Estruturas: bases de dados e tabelas
* Linguagem SQL

  * DQL, DML e DDL
* Views
* Functions e Procedures
* Operações CRUD

### 4. Bancos de Dados Não-Relacionais e NoSQL

* Arquitetura e fundamentos NoSQL
* Diferenças entre bancos relacionais e NoSQL
* Manipulação de dados
* Operações CRUD

## Bibliografia

### Referências Básicas

* DATE, C. J. *Introdução a sistemas de bancos de dados*. São Paulo: Elsevier, 2016.
* ELMASRI, R.; NAVATHE, S. B. *Sistemas de banco de dados*. 7. ed. São Paulo: Pearson, 2018.
* CARVALHO, V. *MySQL: comece com o principal banco de dados open source do mercado*. São Paulo: Casa do Código, 2015.

### Referências Complementares

* AMADEU, C. V. (org.). *Banco de dados*. São Paulo: Pearson, 2014.
* BASSO, D. E. *Big data*. Curitiba: Contentus, 2020.
* FAVERO, L. P.; BELFIORE, P. *Manual de análise de dados*. São Paulo: Elsevier, 2017.
* LEAL, G. C. L. *Linguagem, programação e banco de dados*. Curitiba: InterSaberes, 2015.
* ZHAO, A. *SQL – Guia Prático*. 4. ed. São Paulo: Novatec, 2023.


# Cronograma — Metodologia PBL 


### Bloco 1: Infraestrutura e Modelagem Relacional

* **Aula 1: Apresentação do componente curricular e do problema PBL**
* Contextualização do cenário industrial/corporativo
* Análise inicial do problema e levantamento de requisitos
* Ideação e Requisitos

* **Aula 2: Containerização e DDL Inicial**
* Configuração de ambiente: `docker-compose.yml` para PostgreSQL.
* Comandos de definição de dados: `CREATE DATABASE` e `CREATE TABLE`.
* Aplicação: Criação da estrutura básica da tabela de `produtos` (tipos de dados, `NOT NULL`).


* **Aula 3: Modelagem Conceitual e Lógica**
* Levantamento de Requisitos Informacionais.
* Construção do Diagrama Entidade-Relacionamento (DER).
* Definição de atributos e tipos (Integer, Varchar, Decimal, Timestamp).


* **Aula 4: Integridade Referencial e Constraints**
* Implementação de `PRIMARY KEY` e `FOREIGN KEY`.
* Restrições de integridade: `UNIQUE`, `CHECK` e `DEFAULT`.
* Aplicação: Relacionar `estoque` com `categorias` e `fornecedores`.


* **Aula 5: Manipulação de Dados (DML)**
* Operações CRUD: `INSERT INTO`, `UPDATE` e `DELETE`.
* Carga inicial de dados para testes de consistência.
* Uso do `RETURNING` no Postgres para captura de IDs gerados.



### Bloco 2: Linguagem de Consulta e Normalização

* **Aula 6: Data Query Language (DQL) — Filtros**
* Consultas com `SELECT`, `WHERE`.
* Operadores lógicos, aritméticos e de comparação.
* Filtragem de strings com `LIKE` e `ILIKE`.


* **Aula 7: Álgebra Relacional — Joins**
* Junções de tabelas: `INNER JOIN`, `LEFT/RIGHT JOIN` e `FULL OUTER JOIN`.
* Resolução de ambiguidades e uso de Aliases.
* Consultas multi-tabelas no cenário de movimentação de estoque.


* **Aula 8: Agregação e Sumarização de Dados**
* Funções: `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`.
* Cláusulas `GROUP BY` e `HAVING`.
* Extração de métricas técnicas (ex: saldo total por armazém).


* **Aula 9: Teoria da Normalização**
* Aplicação da 1ª, 2ª e 3ª Formas Normais (FN).
* Identificação e correção de dependências parciais e transitivas.
* Refatoração do esquema físico (Script de migração/alteração).



### Bloco 3: Objetos de Banco de Dados e Desempenho

* **Aula 10: Estruturas de Otimização (Views e Índices)**
* Criação de `VIEWS` para abstração de consultas complexas.
* Arquitetura de Índices: `B-Tree`, `Hash` e `Unique`.
* Análise de impacto na performance de leitura vs escrita.


* **Aula 11: Programação em Banco de Dados (Stored Procedures)**
* Introdução à linguagem PL/pgSQL.
* Criação de `FUNCTIONS` e `PROCEDURES`.
* Lógica de transação e tratamento de erros.


* **Aula 12: Triggers e Automação de Integridade**
* Implementação de Gatilhos (`TRIGGERS`).
* Automação de logs de auditoria ou atualização automática de saldo de estoque.
* Diferença entre triggers `BEFORE` e `AFTER`.



### Bloco 4: Integração, NoSQL e Governança

* **Aula 13: Integração com Camada de Aplicação**
* Drivers de conexão (JDBC, psycopg2, PDO).
* Mapeamento de tipos de dados entre banco e linguagem de programação.
* Prevenção de SQL Injection (Prepared Statements).


* **Aula 14: Extensões e Alternativas (JSONB e NoSQL)**
* Armazenamento de dados semi-estruturados no Postgres com `JSONB`.
* Diferenças arquiteturais entre RDBMS e NoSQL (Documento/Chave-Valor).
* Operações CRUD em campos JSON.


* **Aula 15: Administração, Segurança e Entrega Final**
* Gestão de Roles e Permissions (`GRANT`/`REVOKE`).
* Rotinas de Backup e Restore via `pg_dump` em ambiente Docker.
* Apresentação técnica da documentação final (Dicionário de Dados e MER atualizado).

