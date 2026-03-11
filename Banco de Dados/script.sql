CREATE DATABASE smartcampus;

CREATE TABLE local (
    codigo SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tipo VARCHAR(100) NOT NULL,
    bloco VARCHAR(100),
    descricao VARCHAR(500)
);

CREATE TABLE responsavel (
    codigo SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(100) NOT NULL
);


CREATE TABLE sensor (
    codigo SERIAL PRIMARY KEY,
    cod_local INTEGER,
    cod_responsavel INTEGER,
    nome VARCHAR(100) NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    estado INTEGER NOT NULL,
    FOREIGN KEY(cod_local) REFERENCES local(codigo)
);

ALTER TABLE sensor ADD FOREIGN KEY (cod_responsavel) 
                       REFERENCES responsavel(codigo);

ALTER TABLE sensor ALTER COLUMN estado TYPE INTEGER USING estado::integer;


CREATE TABLE leitura (
    codigo SERIAL PRIMARY KEY,
    cod_sensor INTEGER,
    valor DECIMAL(10,2) NOT NULL,
    horario TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(cod_sensor) REFERENCES sensor(codigo)
);


ALTER TABLE nome_tabela ADD PRIMARY KEY (coluna);

ALTER TABLE nome_tabela ADD FOREIGN KEY (coluna) REFERENCES nome_tabela2(coluna);