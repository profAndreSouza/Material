# PLANO DE ENSINO E CRONOGRAMA DETALHADO — BANCO DE DADOS I

## 1. DADOS DE IDENTIFICAÇÃO

| Item | Especificação |
| :--- | :--- |
| **Instituição / PPC** | Fatec Sorocaba — Faculdade de Tecnologia de Sorocaba |
| **Curso** | Curso Superior de Tecnologia (CST) em Análise e Desenvolvimento de Sistemas (TADS) |
| **Matriz Curricular** | **1º Semestre** (Componente Curricular da Matriz R-11) |
| **Componente Curricular** | **Banco de Dados I** (Sigla: IBD053) |
| **Carga Horária Total** | 80 Aulas (20 Semanas \| 4 Aulas Semanais) |
| **Modalidade** | Presencial em Laboratório de Informática, Encontros Síncronos e Atividades Práticas Assíncronas |
| **Ambiente de Software** | SGBD Relacional **Oracle Database** (Oracle Live SQL / Oracle SQL Developer / SQL*Plus) e **brModelo** |
| **Período Letivo** | 2º Semestre Letivo de 2026 (07/08/2026 a 11/12/2026) |
| **Docente Responsável** | Prof. André Souza |
| **Perfil da Turma e Metodologia** | A disciplina desenvolve competências em modelagem conceitual, projeto lógico relacional e implementação física em banco de dados relacional com **Oracle Database**. Os conteúdos teóricos e estruturantes novos são ministrados de forma presencial em laboratório de informática ou síncrona. As **10 aulas de compensação** são divididas estrategicamente entre **exercícios estritamente assíncronos** (baterias de modelagem, listas de exercícios SQL no Oracle e simulados com feedback) e **conteúdos síncronos de reposição** de alta complexidade conceitual. |

---

## 2. OBJETIVOS DE APRENDIZAGEM

1. Compreender os fundamentos de Bancos de Dados e SGBDs, níveis de abstração (ANSI/SPARC) e independência de dados.
2. Dominar a **Modelagem Conceitual de Dados** (MER/DER) utilizando a notação Peter Chen e Crow's Foot: entidades fortes e fracas, atributos (simples, compostos, multivalorados, derivados e identificadores) e cardinalidades ($1:1$, $1:N$, $N:N$).
3. Aplicar técnicas avançadas de DER: especialização/generalização, auto-relacionamento e entidades associativas.
4. Realizar o **Mapeamento Conceitual para o Modelo Lógico Relacional**, definindo esquemas de tabelas, chaves primárias (PK), chaves estrangeiras (FK) e integridade referencial.
5. Aplicar rigorosamente a **Teoria da Normalização de Dados** (1FN, 2FN e 3FN) para eliminação de redundâncias e prevenção de anomalias operacionais.
6. Implementar a estrutura física do banco no **Oracle Database** via **SQL — DDL** (`CREATE`, `ALTER`, `DROP`, tipos de dados Oracle como `VARCHAR2`, `NUMBER`, `DATE` e *constraints*).
7. Manipular dados no ambiente Oracle com **SQL — DML** (`INSERT`, `UPDATE`, `DELETE`, `TRUNCATE`) e controle de transações ACID (`COMMIT`, `ROLLBACK`).
8. Extrair relatórios gerenciais e analíticos através de **SQL — DQL** no Oracle: operadores de filtragem (`WHERE`, `LIKE`, `IN`, `BETWEEN`), ordenação (`ORDER BY`), funções nativas (`TO_CHAR`, `NVL`, `SUBSTR`, `ROUND`), funções de agregação e agrupamentos (`GROUP BY`, `HAVING`), junções multi-tabelas (`INNER JOIN`, `LEFT/RIGHT/FULL OUTER JOIN`), auto-relacionamento e visões (`Views`).

---

## 3. SISTEMA DE AVALIAÇÃO

A avaliação é formativa e contínua, combinando a prática contínua semana a semana com a avaliação individual final em laboratório:

| Instrumento de Avaliação | Peso na Média Final | Data / Aplicação | Descrição do Instrumento |
| :--- | :---: | :---: | :--- |
| **Exercícios Práticos Contínuos (AT)** | **50%** (5,0 pts) | Ao longo do semestre | Conjunto de listas de exercícios, diagramas DER, esquemas relacionais normalizados, scripts DDL/DML e consultas SQL entregues nas aulas e oficinas assíncronas. |
| **Prova Prática Final de Banco de Dados (P)** | **50%** (5,0 pts) | **27/11/2026** (Aula 18 \| Letivo 8) | Avaliação individual prática em laboratório de informática cobrindo modelagem relacional, normalização até 3FN e consultas SQL no Oracle (DDL, DML, DQL e JOINs). |

> [!IMPORTANT]
> **Fórmula da Média Final (MF):**
> $$\text{MF} = (\text{Média dos Exercícios} \times 0{,}5) + (\text{Prova Final} \times 0{,}5)$$
> - **Aprovação direta:** $\text{MF} \ge 6{,}0$ e Frequência $\ge 75\%$.
> - **Prova de Recuperação (Reavaliação):** **04/12/2026** (Aula 19 \| Letivo 9) para estudantes com direito regimental e média entre $2{,}0$ e $5{,}9$.

---

## 4. ANÁLISE METODOLÓGICA DAS 10 AULAS A COMPENSAR: SÍNCRONO VS. ASSÍNCRONO

Para cumprir rigorosamente as **20 aulas regimentais (80 horas)** considerando os **10 dias letivos de calendário (Letivo 1 a 10)** e o recesso no feriado de 30/out, as **10 aulas a compensar** foram classificadas pedagogicamente:

### A. Aulas a Compensar que EXIGEM Conteúdo Síncrono / Reposição (3 a 4 Aulas)
Tópicos conceituais estruturantes em que o aprendizado puramente assíncrono causa bloqueios e abandono:
1. **DER Avançado (Aula 03 \| Sábado Letivo 2 — 17/out):** Especialização/generalização, auto-relacionamento conceitual e entidades associativas para resolver relacionamentos $N:N$ com atributos próprios.
2. **Teoria da Normalização de Dados (Aula 07 \| ref. 21/ago):** Identificação formal de dependências funcionais (total, parcial e transitiva) e processo de decomposição em 1FN, 2FN e 3FN.
3. **Implementação Física & SQL DDL no Oracle (Aula 10 \| ref. 04/set):** Sintaxe nativa do Oracle (`VARCHAR2`, `NUMBER(p,s)`, `DATE`), tipos de *constraints* com nomenclatura padronizada e manipulação de erros do compilador (`ORA-02264`).
4. **Consultas SQL DQL & Funções Nativas Oracle (Aula 13 \| ref. 18/set):** Estrutura do comando `SELECT`, expressões calculadas, operadores especiais e funções nativas de tratamento (`TO_CHAR`, `NVL`).

### B. Aulas a Compensar ESTRITAMENTE ASSÍNCRONAS com Foco em Exercícios (6 a 7 Aulas)
Tópicos práticos de fixação e desenvolvimento de fluência técnica, onde a autonomia na resolução no computador traz o maior ganho de aprendizado:
1. **Oficina Prática de DER (Aula 04 \| ref. 07/ago):** Modelagem prática autoguiada de estudos de caso reais no brModelo (Hospital, E-commerce) com entrega e gabarito comentado.
2. **Prática de Mapeamento Relacional Tabular (Aula 06 \| ref. 14/ago):** Transposição de modelos conceituais para esquemas relacionais tabulares $T(\underline{PK}, FK, ...)$ e validação de chaves.
3. **Oficina de Decomposição e Normalização (Aula 08 \| ref. 28/ago):** Aplicação de 1FN, 2FN e 3FN a partir de documentos do mundo real (Notas Fiscais e Faturas comerciais).
4. **Laboratório Prático de DDL & DML no Oracle (Aula 12 \| ref. 11/set):** Execução do script `CriaPes_ora.sql` (Cargos, Deptos, Funcionários) e carga da base Biblioteca, testando restrições de integridade e transações (`COMMIT`/`ROLLBACK`).
5. **Bateria de Consultas Analíticas com Agrupamentos (Aula 15 \| ref. 25/set):** Resolução autoguiada de consultas gerenciais combinando `SELECT`, `WHERE`, `GROUP BY`, `HAVING` e junções internas.
6. **Estudo de Caso Prático Integrado (Aula 16 \| Sábado Letivo 1 — 10/out):** Resolução de caso prático completo de modelagem e scripting SQL.
7. **Revisão Geral & Simulado Oficial (Aula 17 \| 20/nov — Feriado Letivo 7):** Resolução assíncrona do simulado preparatório oficial para a Prova Prática Final.

---

## 5. CRONOGRAMA INTEGRADO DAS 20 AULAS

| Aula | Data Calendário | Data Efetiva / Aplicação | Caráter Metodológico | Modalidade | Tópico Programático e Atividades Práticas | Referência / Material de Apoio |
| :---: | :---: | :---: | :---: | :---: | :--- | :---: |
| **01** | 02/out | 02/out | Conteúdo Síncrono | Remota Síncrona *(Teams)* | **Fundamentos de Banco de Dados & Ciclo de Modelagem:** Dado, informação, metadado; SGBD vs. arquivos; Arquitetura ANSI/SPARC; Ciclo conceitual, lógico e físico; Casos *Loja Conecta* e *PetCare*; Prática desplugada (*Biblioteca Saber*). | [`aulas/Aula_01.md`](aulas/Aula_01.md) |
| **02** | 16/out | 16/out | Conteúdo Síncrono | **Presencial** *(Laboratório)* | **Modelagem Conceitual I (DER Básico):** Abordagem Entidade-Relacionamento; Entidades fortes/fracas; Atributos (simples, compostos, multivalorados, derivados, identificadores); Cardinalidades ($1:1$, $1:N$, $N:N$); Prática no **brModelo**. | [`aulas/Aula_02.md`](aulas/Aula_02.md) |
| **03** | 17/out | 17/out | **Conteúdo Síncrono** *(Compensação 10)* | **Presencial / Síncrona** *(Sábado Letivo 2)* | **Modelagem Conceitual II (DER Avançado):** Especialização e generalização (total/parcial, disjunta/sobreposta); Auto-relacionamentos (unários); Relacionamentos ternários; Entidades associativas para resolução de $N:N$ com atributos próprios. | [`aulas/Aula_03.md`](aulas/Aula_03.md) |
| **04** | 07/ago | 19/out a 24/out | **Exercício Assíncrono** *(Compensação 1)* | **Online Assíncrona** *(AVA / Teams)* | **Oficina de Exercícios — Modelagem Conceitual:** Resolução prática autoguiada de estudos de caso completos no brModelo (Hospital, Vendas, E-commerce); Entrega de diagramas conceituais com padrão de resposta. | [`oficinas/Oficina_01.md`](oficinas/Oficina_01.md) |
| **05** | 23/out | 23/out | Conteúdo Síncrono | **Presencial** *(Laboratório)* | **Mapeamento Conceitual para o Modelo Lógico Relacional:** Regras formais de conversão de DER para tabelas; Chaves Primárias (PK), Chaves Estrangeiras (FK), Candidatas e Alternativas; Mapeamento de relacionamentos e especializações; Integridade referencial. | [`aulas/Aula_04.md`](aulas/Aula_04.md) |
| **06** | 14/ago | 26/out a 29/out | **Exercício Assíncrono** *(Compensação 2)* | **Online Assíncrona** *(AVA / Teams)* | **Oficina Prática de Mapeamento Relacional:** Exercícios de transposição de modelos conceituais para esquemas relacionais tabulares em notação relacional $T(\underline{PK}, FK, ...)$; Resolução de anomalias de representação e validação de chaves. | [`aulas/Aula_04.md`](aulas/Aula_04.md) |
| — | 30/out | — | Recesso / Feriado | — | *Feriado — Sem atividade letiva regimental.* | — |
| **07** | 21/ago | 31/out | **Conteúdo Síncrono** *(Compensação 3)* | **Síncrona / Reposição** *(Teams)* | **Teoria Relacional e Normalização de Dados (1FN, 2FN e 3FN):** Conceito de dependências funcionais (total, parcial e transitiva); Anomalias de inserção, alteração e exclusão; 1FN, 2FN e 3FN; Decomposição sem perda de informação. | [`aulas/Aula_05.md`](aulas/Aula_05.md) |
| **08** | 28/ago | 02/nov a 05/nov | **Exercício Assíncrono** *(Compensação 4)* | **Online Assíncrona** *(AVA / Teams)* | **Oficina Prática de Normalização de Dados:** Bateria de exercícios práticos de normalização a partir de documentos reais não estruturados (Notas Fiscais, Faturas de Serviços, Ordens de Produção) aplicando 1FN, 2FN e 3FN. | [`aulas/Aula_05.md`](aulas/Aula_05.md) |
| **09** | 09/out | 09/out | Atividade Temática *(Letivo 2)* | **SETEC** *(Evento / Assíncrona)* | **Semana de Tecnologia (SETEC) & Panorama Tecnológico de SGBDs:** Participação nas atividades da Semana de Tecnologia; Análise da arquitetura e recursos do **Oracle Database**. | SIGA / Fatec |
| **10** | 04/set | 04/nov | **Conteúdo Síncrono** *(Compensação 5)* | **Síncrona / Reposição** *(Teams)* | **Implementação Física & SQL DDL no Oracle Database:** Introdução ao Oracle (Oracle Live SQL / SQL Developer / SQL*Plus); Tipos nativos (`VARCHAR2`, `NUMBER(p,s)`, `DATE`); `CREATE/ALTER/DROP TABLE`; *Constraints* (`PRIMARY KEY`, `FOREIGN KEY`, `NOT NULL`, `UNIQUE`, `CHECK`). | Apostila Munari (p. 130-142) & [`aulas/Aula_06.md`](aulas/Aula_06.md) |
| **11** | 06/nov | 06/nov | Conteúdo Síncrono *(Letivo 5)* | **Presencial** *(Laboratório)* | **Manipulação de Dados (SQL DML) & Transações no Oracle:** Comandos `INSERT INTO` (unitário e com subquery); Comando `UPDATE` com cláusula `WHERE`; Comando `DELETE` vs `TRUNCATE TABLE`; Propriedades ACID, `COMMIT` e `ROLLBACK`; Tratamento de erros de integridade (`ORA-02291`, `ORA-02292`). | Apostila Munari (p. 11-12) & [`aulas/Aula_07.md`](aulas/Aula_07.md) |
| **12** | 11/set | 07/nov a 10/nov | **Exercício Assíncrono** *(Compensação 6)* | **Online Assíncrona** *(AVA / Teams)* | **Laboratório Prático de DDL & DML no Oracle:** Criação física e carga das bases de estudo: *BD Biblioteca* e *Controle de Funcionários / Departamentos / Cargos* (Script `CriaPes_ora.sql` da apostila do Prof. Munari); Teste de restrições de integridade. | Apostila Munari (p. 5-7) & [`oficinas/Oficina_02.md`](oficinas/Oficina_02.md) |
| **13** | 18/set | 11/nov | **Conteúdo Síncrono** *(Compensação 7)* | **Síncrona / Reposição** *(Teams)* | **Consultas a Dados (SQL DQL no Oracle — Fundamentos):** Estrutura `SELECT ... FROM ... WHERE`; Projeção e apelidos (`AS`); Operadores lógicos e relacionais; `BETWEEN`, `IN`, `LIKE`, `IS NULL`; Ordenação com `ORDER BY`; Funções nativas Oracle: caractere (`UPPER`, `SUBSTR`), data (`SYSDATE`, `TO_CHAR`) e `NVL`. | Apostila Munari (p. 12-31, 70-129) & [`aulas/Aula_08.md`](aulas/Aula_08.md) |
| **14** | 13/nov | 13/nov | Conteúdo Síncrono *(Letivo 6)* | **Presencial** *(Laboratório)* | **Funções de Agregação, Agrupamentos e Junções (`INNER JOIN`):** Funções agregadas (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`); Agrupamento com `GROUP BY` e filtragem com `HAVING` (diferença estrutural para `WHERE`); Junção interna: sintaxe ANSI (`INNER JOIN ... ON`) vs tradicional Oracle (`FROM tab1, tab2 WHERE ...`). | Apostila Munari (p. 32-44) & [`aulas/Aula_09.md`](aulas/Aula_09.md) |
| **15** | 25/set | 14/nov a 18/nov | **Exercício Assíncrono** *(Compensação 8)* | **Online Assíncrona** *(AVA / Teams)* | **Bateria de Exercícios Analíticos — DQL, Agrupamentos e Junções:** Resolução de consultas analíticas sobre o esquema da apostila Oracle; Cruzamento de múltiplas tabelas para relatórios gerenciais com `GROUP BY` e `INNER JOIN`. | Apostila Munari (p. 45-56) & [`oficinas/Oficina_03.md`](oficinas/Oficina_03.md) |
| **16** | 10/out | 10/out | **Exercício Assíncrono** *(Compensação 9)* | **Online Assíncrona** *(Sábado Letivo 1)* | **Estudo de Caso Prático Integrado de Modelagem e SQL:** Elaboração completa de modelo conceitual, esquema lógico relacional e script de consultas analíticas para um cenário corporativo integrado. | [`oficinas/Oficina_04.md`](oficinas/Oficina_04.md) |
| **17** | 20/nov | 20/nov | **Exercício Assíncrono / Estudo Dirigido** *(Letivo 7)* | **Online / Estudo Dirigido** *(Feriado Letivo 7)* | **Junções Externas, Views & Simulado Preparatório:** `LEFT`, `RIGHT` e `FULL OUTER JOIN`; Auto-relacionamento (`CdSuperv = NrMatric`); `CREATE OR REPLACE VIEW`; Resolução assíncrona do **Simulado Oficial** preparatório para a Avaliação Final. | Apostila Munari (p. 57-69, 136-138) & [`avaliações/Simulado.md`](avaliações/Simulado.md) |
| **18** | 27/nov | 27/nov | **Avaliação Somativa** *(Letivo 8)* | **Presencial** *(Laboratório)* | **PROVA PRÁTICA FINAL DE BANCO DE DADOS (50% da Média Final):** Avaliação individual prática em laboratório de informática cobrindo modelagem relacional, normalização até 3FN e implementação/consultas SQL em **Oracle Database**. | [`avaliações/Avaliacao_Final.md`](avaliações/Avaliacao_Final.md) |
| **19** | 04/dez | 04/dez | **Avaliação Somativa** *(Letivo 9)* | **Presencial** *(Laboratório)* | **PROVA DE RECUPERAÇÃO SOMATIVA & FEEDBACK (REAVALIAÇÃO):** Devolutiva comentada da avaliação final e aplicação da prova prática de reavaliação para discentes com direito regimental. | [`avaliações/Reava.md`](avaliações/Reava.md) |
| **20** | 11/dez | 11/dez | **Fechamento** *(Letivo 10)* | **Presencial** *(Laboratório / Sala)* | **Encerramento do Semestre Letivo:** Devolutiva final de notas, conferência de frequências e fechamento do diário de classe no SIGA. | — |

---

## 6. SÍNTESE DA DISTRIBUIÇÃO DAS 20 AULAS

```
┌─────────────────────────────────────────────────────────────────────────────┐
│               DISTRIBUIÇÃO DA CARGA HORÁRIA (20 AULAS)                      │
├────────────────────────────────┬───────────────┬────────────────────────────┤
│ Categoria Metodológica         │ Total Aulas   │ Aulas Correspondentes      │
├────────────────────────────────┼───────────────┼────────────────────────────┤
│ Presencial em Laboratório      │ 07 Aulas      │ 02, 05, 11, 14, 18, 19, 20 | 
│ Remota / Síncrona              │ 05 Aulas      │ 01, 03, 07, 10, 13         │
│ Atividade Temática (SETEC)     │ 01 Aula       │ 09                         │
│ Exercício Assíncrono           │ 07 Aulas      │ 04, 06, 08, 12, 15, 16, 17 | 
├────────────────────────────────┼───────────────┼────────────────────────────┤
│ TOTAL REGIMENTAL               │ 20 AULAS (80h)│ Aulas 01 a 20              │
└────────────────────────────────┴───────────────┴────────────────────────────┘
```

---

## 7. AMBIENTE TECNOLÓGICO DA DISCIPLINA — ORACLE DATABASE

A partir da transição para a implementação física e manipulação de dados, a disciplina adota oficialmente o ecossistema **Oracle**:

1. **Ferramentas de Modelagem Conceitual:**
   - **brModelo (v3.0 Desktop ou brModelo Web):** Construção de DERs com notações Peter Chen e Crow's Foot.
2. **Ambiente SGBD Oracle:**
   - **Oracle Live SQL (Web):** Ambiente oficial em nuvem, gratuito, acessível diretamente pelo navegador sem necessidade de instalação local — ideal para as oficinas e exercícios assíncronos.
   - **Oracle SQL Developer / SQL*Plus:** Ferramentas clientes para execução em laboratório e estações locais.
   - **Oracle Database Express Edition (XE) / Container Docker:** Opção de instalação local para execução autônoma.
3. **Esquema de Dados Padrão das Aulas:**
   - Esquema clássico da apostila do Prof. Munari: tabelas `DEPTOS`, `CARGOS` e `FUNCIONARIOS` (Script `CriaPes_ora.sql`), contemplando chave primária, chave estrangeira e auto-relacionamento supervisor/funcionário.
   - Esquema prático complementar: *BD Biblioteca* (previsto no Plano de Ensino institucional).

---

## 8. BIBLIOGRAFIA

### Bibliografia Específica do Ambiente Oracle
1. **MUNARI, Antonio Cesar de Barros.** *SQL em ambiente Oracle.* São Paulo, 2007. Apostila técnica institucional contendo fundamentos de SQL ANSI e dialeto Oracle, operadores, funções nativas, junções, DDL e DML.

### Bibliografia Básica
1. **ELMASRI, Ramez; NAVATHE, Shamkant B.** *Sistemas de Banco de Dados: Fundamentos e Aplicações.* 7. ed. São Paulo: Pearson, 2019.
2. **MARTELLI, Rubens; FILHO, Oswaldo V. S.; CABRAL, Almir L.** *Modelagem e banco de dados.* 2. ed. São Paulo: Senac, 2018.
3. **DATE, C. J.** *Projeto de Banco de Dados e Teoria Relacional: Formas Normais e Tudo o Mais.* São Paulo: Novatec Editora, 2015.

### Bibliografia Complementar
1. **SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S.** *Sistema de Banco de Dados.* 7. ed. Rio de Janeiro: GEN LTC, 2020.
2. **NIELD, Thomas.** *Introdução à Linguagem SQL: Abordagem Prática Para Iniciantes.* 1. ed. São Paulo: Novatec Editora, 2016.
3. **HEUSER, Carlos Alberto.** *Projeto de Banco de Dados.* 6. ed. Porto Alegre: Sagra Luzzatto / Bookman, 2009.
4. **BEIGHLEY, Lynn.** *Use a Cabeça! SQL.* 2. ed. Rio de Janeiro: Alta Books, 2010.