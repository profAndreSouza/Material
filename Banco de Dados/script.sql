CREATE TABLE categoria (
    codigo SERIAL PRIMARY KEY,
    nome varchar(20)
);

CREATE TABLE produto (
    codigo SERIAL PRIMARY KEY,
    cod_categoria INTEGER,
    cod_sku INTEGER,
    nome VARCHAR(200),
    preco NUMERIC(10,2),
    quant_minima INTEGER,
    dt_cadastro TIMESTAMP
);

ALTER TABLE produto
    ADD FOREIGN KEY (cod_categoria)
    REFERENCES categoria(codigo)
    ON DELETE CASCADE
    ON UPDATE CASCADE;






ALTER TABLE categori 
    RENAME TO categoria;

ALTER TABLE produto 
    RENAME prco TO preco;

DROP TABLE produto;