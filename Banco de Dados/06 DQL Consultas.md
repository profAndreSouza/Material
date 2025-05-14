# Aula 6 – Consultas com SQL (DQL)

## O que é DQL?

**DQL (Data Query Language)** é a parte da linguagem SQL utilizada para **consultar** dados em tabelas. O comando principal dessa categoria é o **`SELECT`**, que permite extrair dados de uma ou mais tabelas de um banco de dados.

---

## `SELECT` Básico, `WHERE`, `ORDER BY`, `LIMIT`

### `SELECT`

O comando **`SELECT`** é utilizado para recuperar dados de uma ou mais tabelas.

#### Exemplo básico:

```sql
SELECT nome, email FROM cliente;
```

Isso seleciona as colunas `nome` e `email` da tabela `cliente`.

### `WHERE`

O **`WHERE`** permite filtrar os registros com base em uma condição.

#### Exemplo:

```sql
SELECT nome, email 
FROM cliente
WHERE ativo = TRUE;
```

Isso retorna os clientes cujo status é ativo.

### `ORDER BY`

O **`ORDER BY`** permite ordenar os resultados com base em uma ou mais colunas. A ordenação pode ser crescente (`ASC`) ou decrescente (`DESC`).

#### Exemplo:

```sql
SELECT nome, email
FROM cliente
ORDER BY nome ASC;  -- Ordenando por nome de forma crescente
```

### `LIMIT`

O **`LIMIT`** define o número máximo de registros a serem retornados.

#### Exemplo:

```sql
SELECT nome, email
FROM cliente
LIMIT 10;  -- Retorna apenas os 10 primeiros resultados
```

---

## Filtros com Operadores Lógicos

### `AND`, `OR`, `NOT`

Os operadores lógicos permitem combinar múltiplas condições.

#### Exemplo com `AND`:

```sql
SELECT nome, email
FROM cliente
WHERE ativo = TRUE AND data_nascimento > '1990-01-01';
```

#### Exemplo com `OR`:

```sql
SELECT nome, email
FROM cliente
WHERE cidade = 'São Paulo' OR cidade = 'Rio de Janeiro';
```

#### Exemplo com `NOT`:

```sql
SELECT nome, email
FROM cliente
WHERE NOT ativo = FALSE;
```

---

## `IN`, `BETWEEN`, `LIKE`

### `IN`

O operador **`IN`** permite verificar se um valor pertence a um conjunto de valores.

#### Exemplo:

```sql
SELECT nome, email
FROM cliente
WHERE cidade IN ('São Paulo', 'Rio de Janeiro');
```

Isso retorna clientes localizados em São Paulo ou Rio de Janeiro.

### `BETWEEN`

O operador **`BETWEEN`** permite selecionar registros dentro de um intervalo.

#### Exemplo:

```sql
SELECT nome, data_nascimento
FROM cliente
WHERE data_nascimento BETWEEN '1980-01-01' AND '1995-12-31';
```

Isso retorna clientes nascidos entre 1980 e 1995.

### `LIKE`

O operador **`LIKE`** é utilizado para realizar buscas com **padrões de correspondência**. Ele utiliza os caracteres coringa `%` (qualquer sequência de caracteres) e `_` (um único caractere).

#### Exemplos:

```sql
SELECT nome, email
FROM cliente
WHERE nome LIKE 'Ana%';  -- Busca nomes que começam com "Ana"
```

```sql
SELECT nome, email
FROM cliente
WHERE email LIKE '%@gmail.com';  -- Busca emails que terminam com "@gmail.com"
```

---

## Referências

* PostgreSQL Official Docs – SQL SELECT: [https://www.postgresql.org/docs/current/sql-select.html](https://www.postgresql.org/docs/current/sql-select.html)
* W3Schools PostgreSQL SELECT Tutorial: [https://www.w3schools.com/sql/sql\_select.asp](https://www.w3schools.com/sql/sql_select.asp)
* SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S. *Sistemas de Banco de Dados*. McGraw-Hill.
* HEUSER, Carlos A. *Projeto de Banco de Dados*. Bookman.

