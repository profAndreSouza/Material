# ROTEIRO DE AULA EXPANDIDO — AULA 08

**Componente Curricular:** Banco de Dados I  
**Data Calendário:** 25/09/2026 &nbsp;|&nbsp; **Data Programada:** 30/10/2026  
**Modalidade:** Presencial em Laboratório de Informática  
**Tema:** Consultas a Dados em SQL (DQL) — Fundamentos, Projeções, Filtros Condicionais e Ordenação  
**Ambiente de Software:** SGBD Relacional (PostgreSQL / MySQL) e DBeaver Community  
**Articulação com o PPC:** Competência 1 e 2 — Recuperar e transformar dados armazenados em relatórios estruturados para tomada de decisão  

---

## 1. OBJETIVOS DE APRENDIZAGEM

Ao final desta aula prática em laboratório, você será capaz de:
1. Compreender a anatomia da instrução **`SELECT`** e diferenciar a **ordem sintática de escrita** da **ordem lógica de processamento** do motor do SGBD.
2. Utilizar projeções de colunas, expressões calculadas, eliminação de tuplas duplicadas (**`DISTINCT`**) e criação de apelidos semânticos (**`AS`**).
3. Construir filtros condicionais robustos na cláusula **`WHERE`** utilizando operadores relacionais e lógicos (**`AND`**, **`OR`**, **`NOT`**) com controle de precedência por parênteses.
4. Aplicar com maestria operadores especiais de seleção: intervalos (**`BETWEEN`**), conjuntos (**`IN`**), busca por padrões de strings (**`LIKE`** com curingas `%` e `_`).
5. Dominar o tratamento de dados ausentes utilizando **`IS NULL`** e **`IS NOT NULL`**, compreendendo a **lógica trivalente (Three-Valued Logic)** do SQL.
6. Ordenar resultados com **`ORDER BY`** (`ASC`/`DESC`) e implementar paginação de dados com **`LIMIT`** e **`OFFSET`**.

---

## 2. FUNDAMENTAÇÃO TEÓRICA

### 2.1 Ordem de Escrita vs. Ordem Lógica de Execução

Um dos erros conceituais mais comuns em iniciantes decorre do fato de que o SQL **não é executado de cima para baixo**:

```
ORDEM DE ESCRITA NO CÓDIGO SQL:          ORDEM REAL DE PROCESSAMENTO NO SGBD:
1. SELECT colunas                         1. FROM (Localiza e carrega a tabela)
2. FROM tabela                            2. WHERE (Filtra linha a linha as tuplas)
3. WHERE condições                        3. SELECT (Projeta as colunas e calcula apelidos)
4. ORDER BY colunas                       4. ORDER BY (Ordena o conjunto resultante)
5. LIMIT n OFFSET m                       5. LIMIT / OFFSET (Corta as linhas excedentes)
```

> [!IMPORTANT]
> **Consequência Prática:** Você **não pode** utilizar no `WHERE` um apelido (*alias*) definido no `SELECT` (ex.: `SELECT preco * 1.10 AS preco_novo FROM produtos WHERE preco_novo > 100` falhará no PostgreSQL/Oracle), pois no momento em que o `WHERE` é processado, o `SELECT` ainda não calculou os apelidos!

---

### 2.2 Lógica Trivalente e o Tratamento de `NULL`

Em bancos de dados relacionais, o valor `NULL` não é zero nem uma string vazia; representa a **ausência de valor** ou um valor **desconhecido/inaplicável**.
* Por isso, operações de comparação direta com operadores comuns retornam `UNKNOWN` (desconhecido):
  * `salario = NULL` $\implies$ **UNKNOWN** (nunca avalia como `TRUE`!).
  * `salario <> NULL` $\implies$ **UNKNOWN**.
* **Forma Obrigatória:**
  * `WHERE salario IS NULL;` (retorna tuplas sem valor preenchido).
  * `WHERE salario IS NOT NULL;` (retorna tuplas com valor válido preenchido).

---

### 2.3 Operadores Especiais de Busca

#### A. Operador de Intervalo (`BETWEEN ... AND ...`)
Filtra valores contínuos dentro de um intervalo fechado (inclui os limites superior e inferior):
```sql
-- Equivalente a: preco >= 100.00 AND preco <= 500.00
WHERE preco_unitario BETWEEN 100.00 AND 500.00;
```

#### B. Operador de Lista / Pertencimento (`IN`)
Verifica se o valor de uma coluna pertence a um conjunto explícito de valores:
```sql
-- Equivalente a: uf = 'SP' OR uf = 'RJ' OR uf = 'MG'
WHERE uf IN ('SP', 'RJ', 'MG');
```

#### C. Operador de Correspondência de Padrões (`LIKE` / `ILIKE`)
Permite buscas textuais utilizando caracteres curingas:
* `%` (Percentual): Substitui qualquer sequência de zero ou mais caracteres.
  * `'Eng%'`: Inicia com "Eng" (ex.: "Engenharia", "Eng.", "Engenheiro").
  * `'%Sorocaba%'`: Contém "Sorocaba" em qualquer posição.
* `_` (Sublinhado / Underscore): Substitui **exatamente um** caractere.
  * `'SP___'`: Inicia com "SP" seguido de exatamente 3 caracteres quaisquer.

---

## 3. PRÁTICA EM LABORATÓRIO (BATERIA DE CONSULTAS)

Utilizando a base de dados populada da distribuidora (tabela `produtos` e `clientes`), resolva em sala:

```sql
-- 1. Projeção com DISTINCT e ordenação decrescente
SELECT DISTINCT cidade, uf
FROM clientes
ORDER BY uf ASC, cidade ASC;

-- 2. Expressão Aritmética com Apelido (Cálculo de Margem Bruta)
SELECT nome_produto, 
       preco_unitario, 
       estoque_atual,
       (preco_unitario * estoque_atual) AS valor_patrimonial_estoque
FROM produtos
ORDER BY valor_patrimonial_estoque DESC;

-- 3. Combinação de AND, OR e Parênteses (Precedência Lógica)
-- Meta: Clientes de SP ou RJ que tenham limite de crédito >= 15.000
SELECT nome_razao, uf, limite_credito
FROM clientes
WHERE (uf = 'SP' OR uf = 'RJ') 
  AND limite_credito >= 15000.00;

-- 4. Paginação de Resultados (Top 5 mais caros, pulando os 2 primeiros)
SELECT nome_produto, preco_unitario
FROM produtos
ORDER BY preco_unitario DESC
LIMIT 5 OFFSET 2;
```

---

## 4. EXERCÍCIOS DE FIXAÇÃO

1. Um analista escreveu a seguinte consulta para encontrar peças que não possuem lote informado: `SELECT * FROM pecas WHERE lote = NULL;`. A consulta não retornou nenhuma linha, embora existam peças sem lote no banco. Explique por que isso ocorreu com base na **lógica trivalente** e corrija o código.
2. Explique a diferença entre `WHERE nome LIKE 'A%'` e `WHERE nome LIKE 'A_'`. Dê exemplos de strings aceitas por cada um.
3. Demonstre com um exemplo prático como a omissão de parênteses em uma cláusula combinando operadores `AND` e `OR` pode distorcer completamente o resultado de um relatório financeiro.

---

## 5. REFERÊNCIAS BIBLIOGRÁFICAS UTILIZADAS

1. **ELMASRI, Ramez; NAVATHE, Shamkant B.** *Sistemas de Banco de Dados: Fundamentos e Aplicações.* 7. ed. São Paulo: Pearson, 2019.  
   - **Capítulo 7:** *Consultas SQL Básicas: A Instrução SELECT, Especificação de Critérios de Seleção (WHERE) e Operadores Lógicos* (p. 175–194).
2. **NIELD, Thomas.** *Introdução à Linguagem SQL: Abordagem Prática Para Iniciantes.* 1. ed. São Paulo: Novatec Editora, 2016.  
   - **Capítulo 2:** *Filtragem de Dados: Cláusula WHERE, Operadores Lógicos e Operadores Especiais (IN, BETWEEN, LIKE)* (p. 29–52).  
   - **Capítulo 3:** *Ordenação e Paginação: ORDER BY, LIMIT e OFFSET* (p. 53–76).
3. **SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S.** *Sistema de Banco de Dados.* 7. ed. Rio de Janeiro: GEN LTC, 2020.  
   - **Capítulo 3:** *Introdução ao SQL: Estrutura Básica de Consultas, Operações com Strings e Valores Nulos* (p. 61–74).
4. **MARTELLI, Rubens; FILHO, Oswaldo V. S.; CABRAL, Almir L.** *Modelagem e banco de dados.* 2. ed. São Paulo: Senac, 2018.  
   - **Capítulo 5:** *Recuperação de Dados em SQL: Cláusulas SELECT, WHERE e Filtros Relacionais* (p. 145–158).
