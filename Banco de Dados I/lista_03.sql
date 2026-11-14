CREATE TABLE pessoa (
    codigo NUMBER(5, 0) PRIMARY KEY,
    nome VARCHAR2(100) NOT NULL,
    documento VARCHAR2(20),
    logradouro VARCHAR2(100),
    numero VARCHAR2(10),
    complemento VARCHAR2(50),
    bairro VARCHAR2(50),
    cidade VARCHAR2(50),
    estado CHAR(2),
    cep VARCHAR2(8)
);

CREATE SEQUENCE pessoa_seq
    START WITH 1
    INCREMENT BY 1
    MAXVALUE 99999
    NOCACHE;

CREATE OR REPLACE TRIGGER pessoa_seq_trigger
    BEFORE INSERT ON pessoa
    FOR EACH ROW
BEGIN
    :NEW.codigo := pessoa_seq.NEXTVAL;
END;

INSERT INTO pessoa (nome, documento, logradouro, numero, 
    complemento, bairro, cidade, estado, cep)
VALUES ('João Silva', '12345678900', 'Rua A', '123', 
    'Apto 101', 'Centro', 'São Paulo', 'SP', '01000000');


CREATE TABLE estudante (
    codigo NUMBER(5, 0),
    matricula VARCHAR2(20) NOT NULL,
    curso VARCHAR2(50) NOT NULL,

    CONSTRAINT pk_estudante PRIMARY KEY (codigo),
    CONSTRAINT fk_estudante_pessoa FOREIGN KEY (codigo)
        REFERENCES pessoa(codigo),
    CONSTRAINT uq_estudante_matricula UNIQUE (matricula)
);

INSERT INTO estudante (codigo, matricula, curso)
VALUES (1, '2026001', 'ADS');


TAREFA
CRIE O RESTANTE DO BANCO DE DADOS, INCLUINDO AS TABELAS, SEQUÊNCIAS, TRIGGERS E INSERÇÕES NECESSÁRIAS PARA REPRESENTAR UM SISTEMA DE GESTÃO ESCOLAR, CONSIDERANDO AS RELAÇÕES ENTRE PESSOAS, ESTUDANTES, PROFESSORES E DISCIPLINAS.