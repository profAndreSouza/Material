# Views, Functions e Procedures no PostgreSQL

## 1. Conceitos Fundamentais

### Views

Uma **VIEW** é uma “tabela virtual” baseada em uma consulta SQL.

Serve para:

* simplificar consultas complexas;
* aumentar segurança;
* reutilizar consultas;
* abstrair regras de negócio.

### Functions

Uma **FUNCTION**:

* recebe parâmetros;
* executa lógica;
* retorna um valor ou tabela;
* pode ser usada dentro de SELECT.

### Procedures

Uma **PROCEDURE**:

* executa rotinas completas;
* pode realizar transações;
* normalmente usada para automações e processos.

No PostgreSQL:

* FUNCTION → retorna algo;
* PROCEDURE → executa ações.

---

# Cenário da Aula

Vamos criar um mini sistema de vendas.

Teremos:

* clientes;
* produtos;
* pedidos;
* itens do pedido.

---

# 2. DDL — Estrutura do Banco

```sql
-- =========================
-- CRIAÇÃO DAS TABELAS
-- =========================

CREATE TABLE clientes (
    id_cliente SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    cidade VARCHAR(80)
);

CREATE TABLE produtos (
    id_produto SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco NUMERIC(10,2) NOT NULL,
    estoque INTEGER NOT NULL
);

CREATE TABLE pedidos (
    id_pedido SERIAL PRIMARY KEY,
    id_cliente INTEGER REFERENCES clientes(id_cliente),
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE itens_pedido (
    id_item SERIAL PRIMARY KEY,
    id_pedido INTEGER REFERENCES pedidos(id_pedido),
    id_produto INTEGER REFERENCES produtos(id_produto),
    quantidade INTEGER NOT NULL,
    valor_unitario NUMERIC(10,2) NOT NULL
);
```

---

# 3. DML — Carga Inicial (LOAD)

```sql
-- =========================
-- CLIENTES
-- =========================

INSERT INTO clientes (nome, email, cidade) VALUES
('Ana Souza', 'ana@email.com', 'Sorocaba'),
('Carlos Lima', 'carlos@email.com', 'Votorantim'),
('Fernanda Alves', 'fernanda@email.com', 'Itu');

-- =========================
-- PRODUTOS
-- =========================

INSERT INTO produtos (nome, preco, estoque) VALUES
('Notebook', 3500.00, 10),
('Mouse Gamer', 150.00, 50),
('Teclado Mecânico', 320.00, 30),
('Monitor 24', 900.00, 15);

-- =========================
-- PEDIDOS
-- =========================

INSERT INTO pedidos (id_cliente) VALUES
(1),
(2),
(1);

-- =========================
-- ITENS DOS PEDIDOS
-- =========================

INSERT INTO itens_pedido
(id_pedido, id_produto, quantidade, valor_unitario)
VALUES
(1, 1, 1, 3500.00),
(1, 2, 2, 150.00),
(2, 3, 1, 320.00),
(3, 4, 2, 900.00);
```

---

# 4. Trabalhando com VIEW

## Criando uma VIEW

Objetivo:
Visualizar pedidos com nome do cliente e valor total.

```sql
CREATE VIEW vw_pedidos AS
SELECT cli.nome, ped.id_pedido AS num_pedido, 
	   SUM(item.quantidade * item.valor_unitario) AS valor_total
FROM clientes cli 
INNER JOIN pedidos ped ON cli.id_cliente = ped.id_cliente
INNER JOIN itens_pedido item ON ped.id_pedido = item.id_pedido
GROUP BY cli.nome, ped.id_pedido
```

## Consultando a VIEW

```sql
SELECT * FROM vw_pedidos;
```

---

# 5. Trabalhando com FUNCTION

## Function para calcular total de um pedido

```sql
CREATE OR REPLACE FUNCTION fn_total_pedido(
	p_id_pedido NUMERIC
)
RETURNS NUMERIC
LANGUAGE plpgsql
AS
$$
	DECLARE
	    valor_total NUMERIC;
	BEGIN
		SELECT 
		    SUM(quantidade * valor_unitario) INTO valor_total
		FROM itens_pedido
		WHERE id_pedido = p_id_pedido;

		RETURN valor_total;
	END;
$$;
```

## Executando a Function

```sql
SELECT cli.nome, ped.id_pedido AS num_pedido, 
	   fn_total_pedido(ped.id_pedido) AS valor_total
FROM clientes cli 
INNER JOIN pedidos ped ON cli.id_cliente = ped.id_cliente
```

---

# 6. Trabalhando com PROCEDURE

## Procedure para atualizar estoque

```sql
CREATE OR REPLACE PROCEDURE pr_baixar_estoque(
    p_id_produto INTEGER,
    p_quantidade INTEGER
)
LANGUAGE plpgsql
AS
$$
BEGIN
	IF (
        SELECT estoque
        FROM produtos
        WHERE id_produto = p_id_produto
    ) < p_quantidade THEN

        RAISE EXCEPTION 'Estoque insuficiente para o produto %', p_id_produto;

    END IF;
	
    UPDATE produtos
    SET estoque = estoque - p_quantidade
    WHERE id_produto = p_id_produto;

END;
$$;
```

## Executando a Procedure

```sql
CALL pr_baixar_estoque(1, 2);
```

## Conferindo resultado

```sql
SELECT * FROM produtos ORDER BY id_produto;
```

---

# 7. Diferença Prática

| Recurso   | Objetivo         | Retorna valor?  | Pode usar em SELECT? |
| --------- | ---------------- | --------------- | -------------------- |
| VIEW      | Consulta virtual | Sim             | Sim                  |
| FUNCTION  | Regra/cálculo    | Sim             | Sim                  |
| PROCEDURE | Processo/rotina  | Não obrigatório | Não                  |

---

# 8. Exercícios

---

## Exercício 1 — VIEW

Crie uma VIEW chamada:

```sql
vw_produtos_estoque
```

Mostrando:

* nome do produto;
* preço;
* estoque.

---

## Exercício 2 — FUNCTION

Crie uma FUNCTION que receba:

* preço;
* quantidade.

E retorne:

* valor total.

Nome:

```sql
fn_calcular_total
```

Teste:

```sql
SELECT fn_calcular_total(100, 3);
```

---

## Exercício 3 — PROCEDURE

Crie uma PROCEDURE chamada:

```sql
pr_repor_estoque
```

Que:

* receba id do produto;
* quantidade;
* aumente o estoque.

---

## Exercício 4 — Desafio

Crie uma VIEW que mostre:

* cliente;
* quantidade de pedidos realizados;
* valor total gasto.

---

# 9. Respostas dos Exercícios

## Exercício 1

```sql

```

---

## Exercício 2

```sql

```

---

## Exercício 3

```sql

```

---

## Exercício 4

```sql

```
