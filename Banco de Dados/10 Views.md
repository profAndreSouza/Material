# Aula 10 – Views, Controle de Fluxo e Procedimentos

## O que são Views, Controle de Fluxo e Procedimentos?

* **Views**: São tabelas virtuais que resultam de consultas SQL. Elas facilitam a abstração e reutilização de consultas complexas.
* **Controle de Fluxo**: São estruturas que controlam a execução do código dentro de funções ou blocos de código, como condicionais e loops.
* **Procedimentos e Funções**: São blocos de código reutilizáveis que realizam tarefas específicas no banco de dados. Funções podem retornar valores, enquanto procedimentos geralmente não retornam.

---

## `CREATE VIEW`, `ALTER VIEW`

### `CREATE VIEW`

O comando **`CREATE VIEW`** é usado para criar uma **view** no banco de dados, que pode ser tratada como uma tabela. Ela armazena uma consulta SQL e pode ser consultada como se fosse uma tabela comum.

#### Exemplo:

Criar uma view para exibir os nomes de clientes e o total de seus pedidos:

```sql
CREATE VIEW vw_cliente_pedido AS
SELECT c.nome, SUM(p.valor_total) AS total_pedidos
FROM cliente c
JOIN pedido p ON c.cliente_id = p.cliente_id
GROUP BY c.nome;
```

Neste exemplo, a view `vw_cliente_pedido` combina as tabelas `cliente` e `pedido`, retornando o nome do cliente e o total dos seus pedidos.

### `ALTER VIEW`

O comando **`ALTER VIEW`** permite modificar uma view existente, como atualizar sua consulta SQL.

#### Exemplo:

Alterar a view `vw_cliente_pedido` para incluir a data do último pedido de cada cliente:

```sql
ALTER VIEW vw_cliente_pedido AS
SELECT c.nome, SUM(p.valor_total) AS total_pedidos, MAX(p.data) AS ultima_compra
FROM cliente c
JOIN pedido p ON c.cliente_id = p.cliente_id
GROUP BY c.nome;
```

Neste exemplo, adicionamos a coluna `ultima_compra` à view, que representa a data do último pedido de cada cliente.

---

## Controle de Fluxo

### `CASE`

O comando **`CASE`** é uma estrutura condicional usada para realizar decisões dentro de uma consulta SQL, funcionando como um `IF` dentro de um SELECT.

#### Exemplo:

Usar `CASE` para classificar os pedidos com base no valor:

```sql
SELECT nome, valor_total,
       CASE 
           WHEN valor_total < 100 THEN 'Pequeno'
           WHEN valor_total BETWEEN 100 AND 500 THEN 'Médio'
           ELSE 'Grande'
       END AS categoria
FROM pedido;
```

Neste exemplo, a coluna `categoria` é determinada com base no valor total do pedido.

### `IF`

O comando **`IF`** é usado para controle de fluxo dentro de funções ou blocos PL/pgSQL. Ele permite executar um bloco de código condicionalmente.

#### Exemplo:

Usar `IF` para verificar a existência de um cliente antes de realizar uma ação:

```sql
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM cliente WHERE cliente_id = 1) THEN
        UPDATE cliente SET nome = 'Novo Nome' WHERE cliente_id = 1;
    ELSE
        RAISE NOTICE 'Cliente não encontrado';
    END IF;
END $$;
```

Neste exemplo, antes de atualizar o nome do cliente, verificamos se o cliente existe no banco de dados.

### `LOOP` e `WHILE`

O **`LOOP`** é usado para criar loops infinitos, e o **`WHILE`** é utilizado para criar loops que executam enquanto uma condição for verdadeira.

#### Exemplo de `LOOP`:

```sql
DO $$
DECLARE
    i INT := 0;
BEGIN
    LOOP
        EXIT WHEN i > 10;
        RAISE NOTICE 'Valor de i: %', i;
        i := i + 1;
    END LOOP;
END $$;
```

Neste exemplo, o loop imprime os valores de `i` de 0 a 10.

#### Exemplo de `WHILE`:

```sql
DO $$
DECLARE
    i INT := 0;
BEGIN
    WHILE i <= 10 LOOP
        RAISE NOTICE 'Valor de i: %', i;
        i := i + 1;
    END LOOP;
END $$;
```

Neste exemplo, o loop `WHILE` imprime os valores de `i` de 0 a 10 de maneira semelhante ao `LOOP`.

---

## Introdução a `FUNCTION` e `PROCEDURE`

### `FUNCTION`

Uma **`FUNCTION`** no PostgreSQL é um bloco de código que pode ser chamado para executar uma tarefa e retornar um valor. As funções são comumente usadas para encapsular lógica e podem ser usadas em consultas SQL.

#### Exemplo de `FUNCTION`:

Criar uma função para calcular o total de pedidos de um cliente:

```sql
CREATE FUNCTION calcular_total_pedidos(cliente_id INT) 
RETURNS DECIMAL AS $$
DECLARE
    total DECIMAL;
BEGIN
    SELECT SUM(valor_total) INTO total
    FROM pedido
    WHERE cliente_id = calcular_total_pedidos.cliente_id;
    RETURN total;
END;
$$ LANGUAGE plpgsql;
```

Neste exemplo, a função `calcular_total_pedidos` recebe um `cliente_id` e retorna a soma de todos os pedidos do cliente.

### `PROCEDURE`

Um **`PROCEDURE`** é semelhante a uma função, mas não retorna valores. Ele é usado para realizar operações no banco de dados.

#### Exemplo de `PROCEDURE`:

Criar um procedimento para adicionar um novo cliente:

```sql
CREATE PROCEDURE adicionar_cliente(nome VARCHAR, email VARCHAR) 
LANGUAGE plpgsql AS $$
BEGIN
    INSERT INTO cliente (nome, email) VALUES (nome, email);
END;
$$;
```

Neste exemplo, o procedimento `adicionar_cliente` recebe `nome` e `email` como parâmetros e insere esses dados na tabela `cliente`.

---
## Script Exemplo
```sql

CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    preco NUMERIC(10, 2)
);

CREATE TABLE vendas (
    id SERIAL PRIMARY KEY,
    cliente_id INT REFERENCES clientes(id),
    produto_id INT REFERENCES produtos(id),
    quantidade INT,
    data_venda TIMESTAMP DEFAULT NOW()
);

-- View: Resumo de vendas com total por cliente
CREATE VIEW resumo_vendas AS
SELECT 
    c.id AS cliente_id,
    c.nome AS cliente_nome,
    SUM(p.preco * v.quantidade) AS total_gasto
FROM vendas v
JOIN clientes c ON v.cliente_id = c.id
JOIN produtos p ON v.produto_id = p.id
GROUP BY c.id, c.nome;


-- Dados
INSERT INTO clientes (nome, email) VALUES
('Ana Souza', 'ana.souza@email.com'),
('Bruno Lima', 'bruno.lima@email.com'),
('Carla Mendes', 'carla.mendes@email.com'),
('Diego Rocha', 'diego.rocha@email.com'),
('Eduarda Martins', 'eduarda.martins@email.com');


INSERT INTO produtos (nome, preco) VALUES
('Teclado Mecânico', 250.00),
('Mouse Gamer', 150.00),
('Monitor 24"', 899.90),
('Headset Bluetooth', 320.50),
('Webcam Full HD', 199.99);


INSERT INTO vendas (cliente_id, produto_id, quantidade, data_venda) VALUES
(1, 2, 1, '2025-05-01 10:00:00'),
(2, 3, 2, '2025-05-01 11:30:00'),
(3, 1, 1, '2025-05-02 09:15:00'),
(4, 5, 3, '2025-05-02 14:45:00'),
(5, 4, 2, '2025-05-03 16:00:00'),
(1, 1, 1, '2025-05-03 17:10:00'),
(2, 2, 2, '2025-05-04 12:00:00'),
(3, 3, 1, '2025-05-04 13:25:00'),
(4, 4, 1, '2025-05-05 15:40:00'),
(5, 5, 1, '2025-05-05 18:10:00'),
(1, 3, 1, '2025-05-06 08:00:00'),
(2, 5, 2, '2025-05-06 10:20:00'),
(3, 2, 3, '2025-05-07 11:15:00'),
(4, 1, 2, '2025-05-07 14:30:00'),
(5, 2, 1, '2025-05-08 16:50:00'),
(1, 4, 1, '2025-05-08 17:45:00'),
(2, 1, 1, '2025-05-09 09:30:00'),
(3, 5, 2, '2025-05-09 12:15:00'),
(4, 2, 1, '2025-05-10 13:00:00'),
(5, 3, 1, '2025-05-10 15:00:00');



-- FUNCTION: Calcula total de vendas de um cliente
CREATE OR REPLACE FUNCTION calcular_total_vendas_cliente(cid INT)
RETURNS NUMERIC AS $$

DECLARE
	total NUMERIC; 
BEGIN
	SELECT COALESCE(SUM(p.preco * v.quantidade), 0)
	INTO total
	FROM vendas v
	INNER JOIN produtos p ON v.produto_id = p.id
	WHERE v.cliente_id = cid;

	RETURN total;
END;

$$ LANGUAGE plpgsql;



-- Ambas as consultas produzem a mesma saída
SELECT * 
FROM resumo_vendas
ORDER BY cliente_id;

SELECT id AS cliente_id, nome AS cliente_nome, calcular_total_vendas_cliente(id) AS total_gasto
FROM clientes
ORDER BY id;


-- PROCEDURE
CREATE OR REPLACE PROCEDURE registrar_venda (
	pid_cliente INT,
	pid_produto INT,
	pquantidade INT
)
LANGUAGE plpgsql
AS $$
BEGIN
	IF pquantidade <= 0 THEN
		RAISE EXCEPTION 'Quantidade inválida!';
	END IF;
	
	INSERT INTO vendas (cliente_id, produto_id, quantidade)
	VALUES (pid_cliente, pid_produto, pquantidade);
END;
$$;




-- DCL: Criação de usuário e permissões
CREATE USER vendedor WITH PASSWORD 'senha123';

GRANT CONNECT ON DATABASE ecommerce TO vendedor;
GRANT USAGE ON SCHEMA public TO vendedor;
GRANT SELECT, INSERT ON clientes, produtos, vendas TO vendedor;
GRANT EXECUTE ON FUNCTION calcular_total_vendas_cliente(INT) TO vendedor;
GRANT EXECUTE ON PROCEDURE registrar_venda(INT, INT, INT) TO vendedor;

-- DTL: Exemplo de transação explícita
BEGIN;

-- Tentativa de venda com quantidade inválida (irá causar rollback)
CALL registrar_venda(1, 1, -5);

-- Este COMMIT não será atingido se houver erro
COMMIT;

```

## Referências

* PostgreSQL Official Docs – Views: [https://www.postgresql.org/docs/current/sql-createview.html](https://www.postgresql.org/docs/current/sql-createview.html)
* PostgreSQL Official Docs – Control Structures (CASE, IF, LOOP, WHILE): [https://www.postgresql.org/docs/current/plpgsql-control-structures.html](https://www.postgresql.org/docs/current/plpgsql-control-structures.html)
* PostgreSQL Official Docs – Functions and Procedures: [https://www.postgresql.org/docs/current/plpgsql-control-structures.html](https://www.postgresql.org/docs/current/plpgsql-control-structures.html)
* SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S. *Sistemas de Banco de Dados*. McGraw-Hill.
* HEUSER, Carlos A. *Projeto de Banco de Dados*. Bookman.
