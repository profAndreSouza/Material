# Introdução ao SQL com PostgreSQL

## Modelagem das Entidades Categoria e Produto

Este material tem como objetivo apresentar os **conceitos iniciais da linguagem SQL**, utilizando como exemplo as entidades **Categoria** e **Produto**, já definidas anteriormente no modelo conceitual.

Partiremos da classificação dos comandos SQL (DDL, DML, DQL, DCL e DTL) e aplicaremos esses conceitos utilizando o banco de dados **PostgreSQL**.

# 1. O que é SQL?

SQL (*Structured Query Language*) é a linguagem padrão utilizada para:

* Criar estruturas de banco de dados;
* Manipular dados;
* Consultar informações;
* Controlar acessos;
* Gerenciar transações.

No PostgreSQL, o SQL segue o padrão internacional, com algumas extensões próprias da ferramenta.

# 2. Classificação dos Comandos SQL

A linguagem SQL é dividida em categorias, conforme sua finalidade.

## 2.1 DDL — Data Definition Language

A **DDL** é utilizada para **definir e modificar a estrutura do banco de dados**.

Ela trabalha com objetos como:

* Tabelas
* Índices
* Visões
* Esquemas
* Restrições

Principais comandos:

* `CREATE`
* `ALTER`
* `DROP`

No nosso exemplo, quando criamos as tabelas *categoria* e *produto*, estamos utilizando DDL.

### Exemplo (DDL)

```sql
CREATE TABLE categoria (
    codigo SERIAL PRIMARY KEY,
    nome varchar(20)
);
```

Aqui estamos:

* Criando uma tabela chamada `categoria`;
* Definindo a coluna `codigo` como chave primária;
* Utilizando `SERIAL`, que no PostgreSQL cria um número auto-incremento;
* Definindo a coluna `nome` como texto com até 20 caracteres.

Agora criamos a tabela de produtos:

```sql
CREATE TABLE produto (
    codigo SERIAL PRIMARY KEY,
    cod_categoria INTEGER,
    cod_sku INTEGER,
    nome VARCHAR(200),
    preco NUMERIC(10,2),
    quant_minima INTEGER,
    dt_cadastro TIMESTAMP
);
```

Observe que:

* `NUMERIC(10,2)` permite até 10 dígitos, com 2 casas decimais;
* `TIMESTAMP` armazena data e hora;
* `cod_categoria` será usada para relacionar o produto à categoria.

Adicionando a chave estrangeira:

```sql
ALTER TABLE produto
    ADD FOREIGN KEY (cod_categoria)
    REFERENCES categoria(codigo)
    ON DELETE CASCADE
    ON UPDATE CASCADE;
```

Aqui estamos:

* Alterando a estrutura da tabela (DDL);
* Criando uma **chave estrangeira**;
* Garantindo integridade referencial;
* Definindo que, ao excluir ou atualizar uma categoria, os produtos relacionados serão automaticamente afetados.

## 2.2 DML — Data Manipulation Language

A **DML** é utilizada para **manipular os dados dentro das tabelas**.

Principais comandos:

* `INSERT`
* `UPDATE`
* `DELETE`

Exemplo de inserção:

```sql
INSERT INTO categoria (nome)
VALUES ('Eletrônicos');
```

Inserindo um produto:

```sql
INSERT INTO produto 
(cod_categoria, cod_sku, nome, preco, quant_minima, dt_cadastro)
VALUES 
(1, 1001, 'Notebook', 3500.00, 5, NOW());
```

Atualizando um valor:

```sql
UPDATE produto
SET preco = 3299.90
WHERE codigo = 1;
```

Removendo um registro:

```sql
DELETE FROM produto
WHERE codigo = 1;
```

## 2.3 DQL — Data Query Language

A **DQL** é responsável pelas consultas.

Seu principal comando é:

* `SELECT`

Exemplo:

```sql
SELECT * FROM categoria;
```

Consultando produtos com suas categorias:

```sql
SELECT p.nome, p.preco, c.nome AS categoria
FROM produto p
JOIN categoria c ON p.cod_categoria = c.codigo;
```

Aqui estamos:

* Utilizando `JOIN` para relacionar tabelas;
* Retornando dados combinados;
* Aplicando o conceito de chave estrangeira na prática.

## 2.4 DCL — Data Control Language

A **DCL** controla permissões e segurança.

Principais comandos:

* `GRANT`
* `REVOKE`

Exemplo:

```sql
GRANT SELECT ON produto TO usuario_leitura;
```

Esse comando concede permissão de leitura para um usuário específico.

## 2.5 DTL — Data Transaction Language

Também chamada de **TCL (Transaction Control Language)**, é responsável pelo controle de transações.

Principais comandos:

* `BEGIN`
* `COMMIT`
* `ROLLBACK`

Exemplo:

```sql
BEGIN;

UPDATE produto
SET preco = 3000
WHERE codigo = 2;

ROLLBACK;
```

O `ROLLBACK` desfaz a operação.

Se utilizarmos `COMMIT`, a alteração será confirmada permanentemente.

# 3. Relação entre Modelagem e SQL

Relembrando o enunciado inicial:

## Entidade Categoria

* Identificador da categoria
* Nome
* Descrição

## Entidade Produto

* Identificador
* SKU
* Nome
* Preço
* Quantidade mínima
* Data de cadastro
* Categoria

Cada atributo do modelo conceitual torna-se:

* Uma **coluna** na tabela;
* Com um **tipo de dado adequado**;
* Podendo possuir **restrições** (PRIMARY KEY, FOREIGN KEY, NOT NULL, etc.).

O SQL é a materialização física do modelo lógico.

# 4. Conceitos Fundamentais Observados

Ao longo dos exemplos, trabalhamos com conceitos essenciais:

* Tabela → Representa uma entidade;
* Coluna → Representa um atributo;
* Linha (registro) → Representa uma instância da entidade;
* Chave Primária → Identifica unicamente um registro;
* Chave Estrangeira → Garante relacionamento entre tabelas;
* Integridade Referencial → Mantém consistência dos dados.

# 5. Conclusão

O SQL não é apenas uma linguagem de consulta. Ele é dividido em categorias que permitem:

* Criar estruturas (DDL);
* Manipular dados (DML);
* Consultar informações (DQL);
* Controlar acessos (DCL);
* Gerenciar transações (DTL/TCL).

No PostgreSQL, esses conceitos seguem o padrão da linguagem SQL e formam a base para qualquer sistema que utilize banco de dados relacional.

O domínio desses fundamentos é essencial para evoluir para tópicos mais avançados como:

* Normalização;
* Índices;
* Procedures e Functions;
* Views;
* Otimização de consultas.

Este é o primeiro passo na construção de sistemas persistentes e estruturados.
