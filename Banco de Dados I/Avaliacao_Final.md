# GUIA DE AVALIAÇÃO — PROVA PRÁTICA FINAL DE BANCO DE DADOS

**Componente Curricular:** Banco de Dados I  
**Data de Aplicação:** 27/11/2026 (Sexta-feira)  
**Tema:** Prova Prática Final Individual em Laboratório — Modelagem Conceitual, Normalização e Implementação SQL  
**Ambiente:** Laboratório de Informática (SGBD PostgreSQL / MySQL, DBeaver e brModelo)  
**Duração:** 100 minutos  
**Peso na Média Final:** **50% da Média Final (5,0 Pontos)**  
**Docente Responsável:** Prof. André Souza  

---

## 1. ESCOPO DO CONTEÚDO AVALIADO

A Prova Prática Final é uma avaliação individual sem comunicação entre pares, realizada no laboratório, cobrindo as competências essenciais desenvolvidas ao longo de todo o semestre:

1. **Modelagem Conceitual de Dados (Aulas 1, 2 e 3):**
   - Elaboração de Diagrama Entidade-Relacionamento (DER) a partir de requisitos de negócio;
   - Definição correta de entidades fortes/fracas, atributos (simples, compostos, multivalorados, derivados) e chaves primárias conceituais;
   - Identificação e anotação precisa de cardinalidades mínimas e máximas ($1:1$, $1:N$, $N:N$).
2. **Mapeamento Lógico Relacional (Aula 4):**
   - Aplicação das 7 regras algorítmicas de conversão DER $\to$ Esquema Lógico Tabular;
   - Definição de Chaves Primárias ($\text{PK}$) e Chaves Estrangeiras ($\text{FK}$) com garantia de integridade referencial.
3. **Teoria da Normalização (Aula 5):**
   - Identificação de dependências funcionais (parciais e transitivas) e anomalias operacionais;
   - Decomposição formal de tabelas até a 1ª, 2ª e 3ª Formas Normais (1FN, 2FN e 3FN).
4. **Implementação Física SQL DDL (Aula 6):**
   - Escrita de scripts `CREATE TABLE` com tipos de dados ANSI adequados e restrições de integridade (`PRIMARY KEY`, `FOREIGN KEY`, `NOT NULL`, `UNIQUE`, `CHECK`, `DEFAULT` e ações referenciais `ON DELETE`).
5. **Manipulação DML e Consultas DQL Avançadas (Aulas 7 a 10):**
   - Povoamento e integridade com `INSERT`, `UPDATE` e `DELETE`;
   - Consultas com `SELECT`, filtros `WHERE` complexos (`AND`/`OR`/parênteses, `BETWEEN`, `IN`, `LIKE`, `IS NULL`);
   - Junções relacionais multitabelas (`INNER JOIN`, `LEFT JOIN`);
   - Agrupamentos com `GROUP BY`, funções de agregação (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) e filtros agregados com `HAVING`;
   - Subconsultas (`IN`, `EXISTS`) e criação de visões (`CREATE VIEW`).

---

## 2. INSTRUÇÕES GERAIS DE EXECUÇÃO

> [!IMPORTANT]
> **Normas de Aplicação:**
> 1. A avaliação é estritamente **individual**. Qualquer tentativa de comunicação síncrona ou compartilhamento de arquivos resultará na anulação da avaliação.
> 2. Crie uma pasta na Área de Trabalho com a nomenclatura: `C:\ProvaFinal_SeuNome_RA\`.
> 3. Salve periodicamente os scripts e diagramas desenvolvidos (`Ctrl + S` no DBeaver e brModelo).
> 4. Todas as consultas SQL devem ser testadas e comprovadamente executadas no SGBD antes do envio final.
> 5. Ao término, compacte a pasta em formato `.zip` e envie na plataforma virtual institucional (Teams / AVA) antes do encerramento do prazo.

---

## 3. CRITÉRIOS DE CORREÇÃO (TOTAL: 10,0 PONTOS)

| Questão / Bloco Avaliado | Pontuação | O que será avaliado pelo professor |
| :--- | :---: | :--- |
| **Bloco 1: Fundamentação e Normalização (3FN)** | 2,5 pts | Identificação correta de dependências funcionais e decomposição sem perdas até a 3FN. |
| **Bloco 2: Modelagem Conceitual e Mapeamento** | 2,5 pts | Diagrama DER no brModelo e esquema lógico com definição consistente de PKs e FKs. |
| **Bloco 3: Script Físico DDL e Constraints** | 2,0 pts | Executabilidade do script `CREATE TABLE`, tipos de dados bem calibrados e restrições de checagem. |
| **Bloco 4: Consultas DQL com JOINs, HAVING e VIEW** | 3,0 pts | Correção lógica e sintática das consultas, junções sem produto cartesiano e criação da View analítica. |
| **TOTAL DA AVALIAÇÃO** | **10,0 pts** | *(Peso de 50% na Média Final do componente)* |

---

## 4. REFERÊNCIAS BIBLIOGRÁFICAS UTILIZADAS

1. **ELMASRI, Ramez; NAVATHE, Shamkant B.** *Sistemas de Banco de Dados: Fundamentos e Aplicações.* 7. ed. São Paulo: Pearson, 2019.  
   - Capítulos 3, 4, 7, 8, 9 e 14.
2. **DATE, C. J.** *Projeto de Banco de Dados e Teoria Relacional: Formas Normais e Tudo o Mais.* 1. ed. São Paulo: Novatec Editora, 2015.  
   - Capítulos 2, 4, 5 e 6.
3. **MARTELLI, Rubens; FILHO, Oswaldo V. S.; CABRAL, Almir L.** *Modelagem e banco de dados.* 2. ed. São Paulo: Senac, 2018.  
   - Capítulos 2, 3, 4 e 5.
4. **NIELD, Thomas.** *Introdução à Linguagem SQL: Abordagem Prática Para Iniciantes.* 1. ed. São Paulo: Novatec Editora, 2016.  
   - Capítulos 1 a 6.
5. **SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S.** *Sistema de Banco de Dados.* 7. ed. Rio de Janeiro: GEN LTC, 2020.  
   - Capítulos 2, 3, 4, 6 e 7.
