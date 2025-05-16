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

```