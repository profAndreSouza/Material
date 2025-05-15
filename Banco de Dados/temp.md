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

```