# Aula 8 – Relacionamentos e Joins

## O que são Relacionamentos e Joins?

* **Relacionamentos**: Definem como as tabelas se relacionam umas com as outras no banco de dados.
* **Joins**: São operações que permitem combinar dados de duas ou mais tabelas, utilizando relacionamentos entre elas.

---

## Relacionamentos 1:1, 1\:N e N\:M

### Relacionamento 1:1 (Um para Um)

Um relacionamento **1:1** ocorre quando cada registro de uma tabela está relacionado com no máximo um registro de outra tabela.

#### Exemplo:

Tabela `cliente` e tabela `endereco` (um cliente tem apenas um endereço):

```sql
CREATE TABLE cliente (
    cliente_id SERIAL PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE endereco (
    endereco_id SERIAL PRIMARY KEY,
    cliente_id INT UNIQUE,
    rua VARCHAR(100),
    FOREIGN KEY (cliente_id) REFERENCES cliente(cliente_id)
);
```

Neste exemplo, cada cliente tem um único endereço.

### Relacionamento 1\:N (Um para Muitos)

No relacionamento **1\:N**, um registro em uma tabela pode estar relacionado a vários registros em outra tabela.

#### Exemplo:

Tabela `cliente` e tabela `pedido` (um cliente pode ter vários pedidos):

```sql
CREATE TABLE cliente (
    cliente_id SERIAL PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE pedido (
    pedido_id SERIAL PRIMARY KEY,
    cliente_id INT,
    valor_total DECIMAL,
    FOREIGN KEY (cliente_id) REFERENCES cliente(cliente_id)
);
```

Neste exemplo, um cliente pode fazer vários pedidos, mas cada pedido pertence a um único cliente.

### Relacionamento N\:M (Muitos para Muitos)

No relacionamento **N\:M**, vários registros de uma tabela podem estar relacionados a vários registros de outra tabela. Para representar esse tipo de relacionamento, normalmente usamos uma tabela de junção.

#### Exemplo:

Tabela `produto` e tabela `pedido` (um pedido pode ter vários produtos e um produto pode ser vendido em vários pedidos):

```sql
CREATE TABLE produto (
    produto_id SERIAL PRIMARY KEY,
    nome VARCHAR(100)
);

CREATE TABLE pedido (
    pedido_id SERIAL PRIMARY KEY,
    data DATE
);

CREATE TABLE pedido_produto (
    pedido_id INT,
    produto_id INT,
    quantidade INT,
    FOREIGN KEY (pedido_id) REFERENCES pedido(pedido_id),
    FOREIGN KEY (produto_id) REFERENCES produto(produto_id),
    PRIMARY KEY (pedido_id, produto_id)
);
```

Neste exemplo, a tabela `pedido_produto` estabelece um relacionamento de muitos para muitos entre `pedido` e `produto`.

---

## `INNER`, `LEFT`, `RIGHT`, `FULL JOIN`

### `INNER JOIN`

O **`INNER JOIN`** retorna apenas os registros que têm correspondência em ambas as tabelas.

#### Exemplo:

```sql
SELECT cliente.nome, pedido.valor_total
FROM cliente
INNER JOIN pedido ON cliente.cliente_id = pedido.cliente_id;
```

Este exemplo retorna os clientes e seus respectivos pedidos, mas somente se o cliente tiver um pedido.

### `LEFT JOIN` (ou `LEFT OUTER JOIN`)

O **`LEFT JOIN`** retorna todos os registros da tabela à esquerda, e os registros correspondentes da tabela à direita. Se não houver correspondência, os valores da tabela à direita serão `NULL`.

#### Exemplo:

```sql
SELECT cliente.nome, pedido.valor_total
FROM cliente
LEFT JOIN pedido ON cliente.cliente_id = pedido.cliente_id;
```

Este exemplo retorna todos os clientes e seus pedidos, incluindo os clientes que não possuem pedidos (neste caso, `valor_total` será `NULL`).

### `RIGHT JOIN` (ou `RIGHT OUTER JOIN`)

O **`RIGHT JOIN`** retorna todos os registros da tabela à direita, e os registros correspondentes da tabela à esquerda. Se não houver correspondência, os valores da tabela à esquerda serão `NULL`.

#### Exemplo:

```sql
SELECT cliente.nome, pedido.valor_total
FROM cliente
RIGHT JOIN pedido ON cliente.cliente_id = pedido.cliente_id;
```

Este exemplo retorna todos os pedidos e seus respectivos clientes, incluindo pedidos que não têm clientes associados (neste caso, `nome` será `NULL`).

### `FULL JOIN` (ou `FULL OUTER JOIN`)

O **`FULL JOIN`** retorna todos os registros quando há uma correspondência em uma das tabelas. Se não houver correspondência, os valores da tabela sem correspondência serão `NULL`.

#### Exemplo:

```sql
SELECT cliente.nome, pedido.valor_total
FROM cliente
FULL JOIN pedido ON cliente.cliente_id = pedido.cliente_id;
```

Este exemplo retorna todos os clientes e pedidos, independentemente de haver correspondência entre eles. Se não houver correspondência, a coluna correspondente será `NULL`.

---

## Casos Práticos com Múltiplas Tabelas

### Exemplo 1: `INNER JOIN` com múltiplas tabelas

```sql
SELECT c.nome AS cliente_nome, p.nome AS produto_nome, pp.quantidade
FROM cliente c
INNER JOIN pedido ped ON c.cliente_id = ped.cliente_id
INNER JOIN pedido_produto pp ON ped.pedido_id = pp.pedido_id
INNER JOIN produto p ON pp.produto_id = p.produto_id;
```

Este exemplo retorna os nomes dos clientes, produtos e a quantidade de cada produto em um pedido, utilizando um `INNER JOIN` em várias tabelas.

### Exemplo 2: `LEFT JOIN` para listar todos os clientes e seus pedidos (incluindo clientes sem pedidos)

```sql
SELECT c.nome AS cliente_nome, p.data AS data_pedido
FROM cliente c
LEFT JOIN pedido p ON c.cliente_id = p.cliente_id;
```

Este exemplo retorna todos os clientes, incluindo aqueles que não têm pedidos. Se um cliente não tiver pedidos, a coluna `data_pedido` será `NULL`.

---

## Referências

* PostgreSQL Official Docs – JOINs: [https://www.postgresql.org/docs/current/queries-join.html](https://www.postgresql.org/docs/current/queries-join.html)
* W3Schools SQL JOINs Tutorial: [https://www.w3schools.com/sql/sql\_join.asp](https://www.w3schools.com/sql/sql_join.asp)
* SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S. *Sistemas de Banco de Dados*. McGraw-Hill.
* HEUSER, Carlos A. *Projeto de Banco de Dados*. Bookman.
