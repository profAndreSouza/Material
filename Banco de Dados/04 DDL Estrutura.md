# Aula 4 – Definição de Estruturas com SQL (DDL)

## O que é DDL?

**DDL (Data Definition Language)** é a parte da linguagem SQL utilizada para **definir, alterar ou remover** estruturas no banco de dados, como **tabelas**, **visões (views)**, **índices**, **esquemas**, entre outros.

---

## Principais Comandos DDL

### `CREATE`

Cria objetos no banco de dados (tabelas, índices, esquemas etc.).

```sql
CREATE TABLE cliente (
    cliente_id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    telefone VARCHAR(20)
);
```

---

### `ALTER`

Modifica a estrutura de uma tabela existente.

```sql
-- Adiciona uma nova coluna
ALTER TABLE cliente ADD COLUMN data_nascimento DATE;

-- Modifica o tipo de uma coluna
ALTER TABLE cliente ALTER COLUMN telefone TYPE VARCHAR(30);

-- Remove uma coluna
ALTER TABLE cliente DROP COLUMN telefone;
```

---

### `DROP`

Remove um objeto do banco de dados.

```sql
-- Remove a tabela cliente
DROP TABLE cliente;

-- Remove somente se existir
DROP TABLE IF EXISTS cliente;
```

---

### `TRUNCATE`

Remove **todos os dados** de uma tabela rapidamente, mas **mantém sua estrutura**.

```sql
TRUNCATE TABLE cliente;

-- Truncate com reinício das sequências
TRUNCATE TABLE cliente RESTART IDENTITY;
```

> ⚠️ `TRUNCATE` é irreversível e mais rápido que `DELETE`, mas não aciona triggers no PostgreSQL.

---

## Tipos de Dados e Criação de Tabelas

### Tipos comuns no PostgreSQL:

| Tipo           | Descrição                            |
| -------------- | ------------------------------------ |
| `INTEGER`      | Número inteiro (4 bytes)             |
| `SERIAL`       | Inteiro com auto incremento          |
| `VARCHAR(n)`   | Texto com limite de caracteres       |
| `TEXT`         | Texto de tamanho ilimitado           |
| `BOOLEAN`      | Verdadeiro ou falso                  |
| `DATE`         | Data (YYYY-MM-DD)                    |
| `TIMESTAMP`    | Data e hora                          |
| `NUMERIC(p,s)` | Número decimal com precisão e escala |

### Exemplo completo:

```sql
CREATE TABLE produto (
    produto_id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco NUMERIC(10, 2) NOT NULL,
    estoque INTEGER DEFAULT 0,
    ativo BOOLEAN DEFAULT TRUE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Chaves Primárias, Estrangeiras e Restrições

### Chave Primária (`PRIMARY KEY`)

Garante unicidade e não permite valores nulos.

```sql
CREATE TABLE categoria (
    categoria_id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);
```

### Chave Estrangeira (`FOREIGN KEY`)

Estabelece relacionamento com outra tabela.

```sql
CREATE TABLE produto (
    produto_id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria_id INTEGER REFERENCES categoria(categoria_id)
);
```

### Restrições adicionais:

| Restrição  | Descrição                   |
| ---------- | --------------------------- |
| `NOT NULL` | Valor obrigatório           |
| `UNIQUE`   | Valor exclusivo             |
| `DEFAULT`  | Valor padrão                |
| `CHECK`    | Validação de regras lógicas |

```sql
CREATE TABLE pedido (
    pedido_id SERIAL PRIMARY KEY,
    cliente_id INTEGER NOT NULL,
    valor_total NUMERIC(10,2) CHECK (valor_total > 0)
);
```

---

## Referências

* PostgreSQL Official Docs – SQL Commands: [https://www.postgresql.org/docs/current/sql-commands.html](https://www.postgresql.org/docs/current/sql-commands.html)
* PostgreSQL Data Types: [https://www.postgresql.org/docs/current/datatype.html](https://www.postgresql.org/docs/current/datatype.html)
* HEUSER, Carlos A. *Projeto de Banco de Dados*. Bookman.
* SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S. *Sistemas de Banco de Dados*. McGraw-Hill.
* W3Schools PostgreSQL DDL Tutorial: [https://www.w3schools.com/sql/sql\_create.asp](https://www.w3schools.com/sql/sql_create.asp)
