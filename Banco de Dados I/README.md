# PLANO DE ENSINO E CRONOGRAMA DETALHADO — BANCO DE DADOS I

## 1. DADOS DE IDENTIFICAÇÃO

| Item | Especificação |
| :--- | :--- |
| **Instituição / PPC** | Fatec Sorocaba — Faculdade de Tecnologia de Sorocaba |
| **Curso** | Curso Superior de Tecnologia (CST) em Análise e Desenvolvimento de Sistemas (TADS) |
| **Matriz Curricular** | **1º Semestre** (Componente da Matriz R-11) |
| **Componente Curricular** | **Banco de Dados I** |
| **Carga Horária Total** | 80 Aulas (20 Semanas \| 4 Aulas por Semana) |
| **Modalidade** | Presencial em Laboratório de Informática & Encontros Remotos (Online) |
| **Ambiente de Software** | SGBD Relacional (PostgreSQL / MySQL), DBeaver / pgAdmin e brModelo |
| **Período Letivo** | 07/08/2026 a 11/12/2026 |
| **Docente Responsável** | Prof. André Souza |
| **Perfil da Turma e Metodologia** | A disciplina é orientada ao desenvolvimento prático de competências de modelagem conceitual, lógica e física de bancos de dados relacionais. As aulas presenciais em laboratório focam na resolução assistida de problemas reais de modelagem, normalização e escrita de scripts SQL, enquanto as aulas online aprofundam a fundamentação teórica, álgebra relacional e baterias de exercícios autoguiados de fixação em ambientes sandbox. |

---

## 2. OBJETIVOS DE APRENDIZAGEM

1. Compreender os conceitos fundamentais de Bancos de Dados e Sistemas de Gerenciamento de Bancos de Dados (SGBD), sua arquitetura em 3 níveis (ANSI/SPARC) e independência de dados.
2. Dominar a **Modelagem Conceitual de Dados** através da abordagem Entidade-Relacionamento (DER), identificando entidades, atributos, relacionamentos, cardinalidades ($1:1$, $1:N$, $N:N$), especializações e entidades associativas.
3. Realizar o **Mapeamento Conceitual para o Modelo Lógico Relacional**, definindo tabelas, chaves primárias (PK), chaves estrangeiras (FK) e restrições de integridade referencial.
4. Aplicar rigorosamente a **Teoria da Normalização de Dados** (1FN, 2FN e 3FN) para eliminar redundâncias e evitar anomalias de inserção, atualização e exclusão.
5. Implementar a estrutura física do banco de dados por meio da linguagem **SQL — DDL** (`CREATE`, `ALTER`, `DROP`, tipos de dados e *constraints*).
6. Manipular e manter dados relacionais utilizando **SQL — DML** (`INSERT`, `UPDATE`, `DELETE`, `TRUNCATE`) com noções de transações e propriedades ACID.
7. Construir relatórios analíticos e extrair informações estratégicas utilizando **SQL — DQL** básico, intermediário e avançado (filtros `WHERE`, ordenação `ORDER BY`, funções de agregação, agrupamentos `GROUP BY` / `HAVING`, junções multi-tabelas `INNER/LEFT/RIGHT JOIN`, subconsultas e visões `Views`).

---

## 3. SISTEMA DE AVALIAÇÃO

A avaliação é formativa e contínua, valorizando o trabalho prático semana a semana e a consolidação final dos conhecimentos em modelagem relacional e comandos SQL.

| Instrumento de Avaliação | Peso na Média Final | Data / Aplicação | Descrição do Instrumento |
| :--- | :---: | :---: | :--- |
| **Exercícios Práticos Contínuos** | **50%** (5,0 pts) | Ao longo das aulas | Conjunto de atividades práticas, diagramas conceituais (DER), esquemas relacionais normalizados e scripts SQL entregues ao longo do semestre (atividades presenciais e online). |
| **Prova Prática Final de Banco de Dados** | **50%** (5,0 pts) | **27/11/2026** (Sexta) | Avaliação individual prática em laboratório cobrindo modelagem relacional, normalização até a 3FN e elaboração de consultas SQL completas (DDL, DML, DQL e JOINs). |

> [!IMPORTANT]
> **Fórmula da Média Final (MF):**
> $$\text{MF} = (\text{Média dos Exercícios} \times 0{,}5) + (\text{Prova Final} \times 0{,}5)$$
> - **Aprovação direta:** $\text{MF} \ge 6{,}0$ e Frequência $\ge 75\%$.
> - **Prova de Recuperação (Reavaliação):** **04/12/2026** para alunos com frequência regimental e média entre $2{,}0$ e $5{,}9$.

---

## 4. CRONOGRAMA DE AULAS E ATIVIDADES

| Data Calendário | Data Programada | Aula | Modalidade | Conteúdo / Atividades Práticas em Laboratório | Arquivo de Apoio |
| :---: | :---: | :---: | :---: | :--- | :---: |
| **07/ago** | **25/set** | **Aula 1** | **Presencial** | **Introdução aos Bancos de Dados & Arquitetura SGBD:** Conceito de dados, informação, metadados e SGBD. Arquitetura ANSI/SPARC em 3 níveis (Conceitual, Lógico, Físico) e independência de dados. Panorama dos modelos de dados (Hierárquico, Redes e Relacional). Instalação e configuração do ambiente de desenvolvimento (brModelo, DBeaver e SGBD relacional). | [`Aula_01.md`](Aula_01.md) |
| **14/ago** | **02/out** | **Aula 2** | **Presencial** | **Modelagem Conceitual de Dados I (DER Básico):** Abordagem Entidade-Relacionamento (notação Peter Chen e Crow's Foot). Entidades fortes e fracas. Atributos (simples, compostos, multivalorados, derivados e identificadores). Relacionamentos e cardinalidades mínimas e máximas ($1:1$, $1:N$, $N:N$). Oficina de modelagem prática de um sistema comercial simples no brModelo. | [`Aula_02.md`](Aula_02.md) |
| **21/ago** | — | **Aula 3** | **Online** | **Modelagem Conceitual de Dados II (DER Avançado):** Auto-relacionamentos (unários) e relacionamentos ternários. Especialização e Generalização (total/parcial, disjunta/sobreposta). Entidades associativas para resolução de cardinalidades $N:N$ com atributos próprios. Estudo de caso guiado de modelagem para E-commerce e Gestão Hospitalar. | [`Aula_03.md`](Aula_03.md) |
| **28/ago** | **16/out** | **Aula 4** | **Presencial** | **Mapeamento Conceitual para o Modelo Lógico Relacional:** Regras formais de conversão de DER para tabelas relacionais. Chaves Primárias (PK), Chaves Estrangeiras (FK), Candidatas e Alternativas. Mapeamento de relacionamentos $1:1$, $1:N$, $N:N$ e especializações. Restrições de integridade referencial e de domínio. Prática em laboratório de transposição de modelos conceituais para esquemas relacionais tabulares. | [`Aula_04.md`](Aula_04.md) |
| **04/set** | **23/out** | **Aula 5** | **Presencial** | **Teoria Relacional e Normalização de Dados (1FN, 2FN e 3FN):** Conceito de dependências funcionais (total, parcial e transitiva). Anomalias de inserção, alteração e exclusão. Primeira Forma Normal (1FN - atomicidade). Segunda Forma Normal (2FN - eliminação de dependências parciais). Terceira Forma Normal (3FN - eliminação de dependências transitivas). Exercício prático de decomposição e normalização de documentos não estruturados (Notas Fiscais/Pedidos) na lousa e no software. | [`Aula_05.md`](Aula_05.md) |
| **11/set** | — | **Aula 6** | **Online** | **Implementação Física & SQL DDL (Data Definition Language):** Tipos de dados SQL padrão ANSI (numéricos, texto, data/hora e booleanos). Comandos DDL: `CREATE DATABASE`, `DROP DATABASE`, `CREATE TABLE`, `ALTER TABLE` e `DROP TABLE`. Definição de restrições de integridade (*Constraints*): `PRIMARY KEY`, `FOREIGN KEY`, `NOT NULL`, `UNIQUE`, `CHECK`, `DEFAULT` e ações referenciais (`ON DELETE CASCADE`, `ON UPDATE CASCADE`). Criação física do banco de dados projetado nas aulas anteriores. | [`Aula_06.md`](Aula_06.md) |
| **18/set** | — | **Aula 7** | **Online** | **Manipulação de Dados (SQL DML) & Transações Básicas:** Comandos DML: `INSERT INTO` (inserção unitária e em lote). Comando `UPDATE` com filtragem criteriosa via cláusula `WHERE`. Comando `DELETE` vs `TRUNCATE TABLE`. Introdução a transações relacionais e propriedades ACID. Comandos `BEGIN TRANSACTION`, `COMMIT` e `ROLLBACK` para controle de consistência operacional. | [`Aula_07.md`](Aula_07.md) |
| **25/set** | **30/out** | **Aula 8** | **Presencial** | **Consultas a Dados (SQL DQL — Fundamentos):** Estrutura essencial: `SELECT ... FROM ... WHERE`. Projeção de atributos, apelidos de colunas/tabelas (`AS`) e expressões calculadas. Operadores lógicos (`AND`, `OR`, `NOT`) e de comparação. Operadores especiais: `BETWEEN`, `IN`, `LIKE` com caracteres curinga (`%`, `_`), `IS NULL` / `IS NOT NULL`. Ordenação com `ORDER BY (ASC/DESC)` e paginação de resultados (`LIMIT`/`OFFSET`). Bateria prática de consultas em laboratório. | [`Aula_08.md`](Aula_08.md) |
| **02/out** | **06/nov** | **Aula 9** | **Presencial** | **Funções de Agregação, Agrupamentos e Junções (`JOIN`):** Funções agregadas de resumo: `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`. Agrupamento de registros com `GROUP BY` e filtragem agregada com `HAVING` (diferença conceitual para o `WHERE`). Junção de tabelas: Produto Cartesiano vs `INNER JOIN`. Junções externas (`LEFT JOIN`, `RIGHT JOIN`, `FULL JOIN`) e tratamento de registros nulos. Cruzamento de 3 ou mais tabelas relacionais para geração de relatórios industriais e gerenciais. | [`Aula_09.md`](Aula_09.md) |
| **09/out** | — | *SETEC* | — | **Semana de Tecnologia — Palestras, workshops e atividades temáticas.** | — |
| **16/out** | **13/nov** | **Aula 10** | **Presencial** | **Subconsultas, Visões (`Views`) & Revisão Integrada:** Subconsultas escalares, de linha e de tabela (`IN`, `EXISTS`). Criação e gerenciamento de Visões (`CREATE VIEW`, `DROP VIEW`) para segurança e simplificação de relatórios complexos. Revisão integrada conectando Modelagem Conceitual $\to$ Esquema Lógico Normalizado $\to$ Script DDL $\to$ Consultas DQL avançadas. | [`Aula_10.md`](Aula_10.md) |
| **23/out** | — | *Oficina 1* | **Online** | **Oficina de Exercícios & Nivelamento SQL:** Bateria autoguiada de resolução de exercícios de fixação cobrindo DDL, DML e consultas DQL com filtros lógicos em ambiente sandbox (*DB-Fiddle*). | [`Oficina_01.md`](Oficina_01.md) |
| **30/out** | — | *Oficina 2* | **Online** | **Laboratório Prático de Junções & Relatórios:** Resolução de consultas analíticas complexas combinando múltiplos `JOINs`, `GROUP BY` e `HAVING`. | [`Oficina_02.md`](Oficina_02.md) |
| **06/nov** | — | *Oficina 3* | **Online** | **Estudo de Caso Prático Integrado:** Resolução assíncrona de estudo de caso completo com modelagem DER, normalização até 3FN e elaboração de script físico comentado. | [`Oficina_03.md`](Oficina_03.md) |
| **13/nov** | — | *Oficina 4* | **Online** | **Revisão Geral Prática & Simulado:** Resolução assíncrona de simulado preparatório completo com padrão de resposta nos mesmos moldes da avaliação regimental. | [`Simulado.md`](Simulado.md) |
| **20/nov** | — | *Feriado* | — | *Feriado Nacional — Dia da Consciência Negra.* | — |
| **27/nov** | **27/nov** | **Avaliação Final** | **Presencial** | **PROVA PRÁTICA FINAL DE BANCO DE DADOS (50% da Média Final):** Avaliação individual prática em laboratório de informática cobrindo modelagem relacional, normalização e escrita de scripts e consultas SQL. | [`Avaliacao_Final.md`](Avaliacao_Final.md) |
| **04/dez** | **04/dez** | **Reavaliação** | **Presencial** | **PROVA DE RECUPERAÇÃO SOMATIVA & FEEDBACK (REAVALIAÇÃO):** Devolutiva e aplicação de prova prática de reavaliação para estudantes com direito regimental. | [`Reava.md`](Reava.md) |
| **11/dez** | **11/dez** | **Encerramento** | **Presencial** | **Encerramento do Semestre Letivo:** Lançamento de notas finais, conferência de frequências e fechamento do diário de classe. | — |

---

## 5. BIBLIOGRAFIA

### Bibliografia Básica
1. **ELMASRI, R.; NAVATHE, S. B.** *Sistemas de Banco de Dados: Fundamentos e Aplicações.* 7. ed. São Paulo: Pearson, 2019.
2. **MARTELLI, R.; FILHO, O. V. S.; CABRAL, A. L.** *Modelagem e banco de dados.* 2. ed. São Paulo: Senac, 2018.
3. **DATE, C. J.** *Projeto de Banco de Dados e Teoria Relacional: Formas Normais e Tudo o Mais.* São Paulo: Novatec Editora, 2015.

### Bibliografia Complementar
1. **NIELD, T.** *Introdução à Linguagem SQL: Abordagem Prática Para Iniciantes.* 1. ed. São Paulo: Novatec Editora, 2016.
2. **SILBERSCHATZ, A.; KORTH, H. F.; SUDARSHAN, S.** *Sistema de Banco de Dados.* 7. ed. Rio de Janeiro: GEN LTC, 2020.
3. **BEIGHLEY, L.** *Use a Cabeça! SQL.* 2. ed. Rio de Janeiro: Alta Books, 2010.
