# Aula 2: Introdução a Banco de Dados Relacional (do problema ao SQL)

Este material foi elaborado para **acompanhar a explicação do professor em sala**. Utilize-o como um **guia passo a passo**, fazendo anotações e observando os exemplos apresentados na lousa.

O objetivo desta aula **não é decorar comandos SQL**, mas entender como um **problema real** se transforma em um **banco de dados organizado**.


## 1. Por que usar Banco de Dados?

Em sistemas reais, precisamos armazenar informações de forma:

* Organizada
* Segura
* Consistente
* Fácil de consultar

Um **banco de dados relacional** organiza essas informações em **tabelas**, que se relacionam entre si.

Pense em uma tabela como uma **planilha**, onde:

* Cada linha é um registro
* Cada coluna é uma informação específica


## 2. Enunciado do Problema (Ponto de Partida)

> Uma empresa precisa de um sistema simples de controle de estoque.
>
> Ela deseja:
>
> * Cadastrar categorias de produtos
> * Cadastrar produtos
> * Cada produto pertence a uma única categoria
> * Registrar nome, código (SKU), preço, quantidade mínima e data de cadastro

**Tudo em banco de dados começa com um problema real.**


## 3. Identificando Entidades

A primeira pergunta que fazemos é:

**Quais são as coisas principais que precisam ser armazenadas?**

Normalmente, elas aparecem como **substantivos** no texto.

### Entidades encontradas:

* Categoria
* Produto

Essas entidades futuramente se tornarão **tabelas** no banco de dados.


## 4. Definindo Atributos das Entidades

Agora listamos as informações que cada entidade precisa guardar.

### Entidade: Categoria

* Identificador da categoria
* Nome da categoria
* Descrição

### Entidade: Produto

* Identificador do produto
* Código (SKU)
* Nome do produto
* Preço
* Quantidade mínima
* Data de cadastro
* Categoria do produto

Cada item dessa lista se tornará uma **coluna** na tabela.


## 5. Relacionamento entre Entidades

Perguntas importantes:

* Uma categoria pode ter vários produtos? → **Sim**
* Um produto pode pertencer a várias categorias? → **Não**

### Tipo de relacionamento:

* **1 para N (1:N)**

```
CATEGORIA (1) ──────── (N) PRODUTO
```

Isso significa que:

* Uma categoria pode estar ligada a vários produtos
* Cada produto pertence a apenas uma categoria


## 6. Conceitos Essenciais

### Chave Primária (Primary Key – PK)

* Identifica um registro de forma única
* Não pode se repetir
* Exemplo: id_categoria, id_produto

### Chave Estrangeira (Foreign Key – FK)

* Cria o relacionamento entre tabelas
* Aponta para a chave primária de outra tabela

No nosso caso, o produto guarda o **id da categoria**.


## 7. Tipos de Dados Mais Usados

| Tipo      | Uso                 |
| --------- | ------------------- |
| INT       | Números inteiros    |
| VARCHAR   | Textos curtos       |
| DECIMAL   | Valores monetários  |
| TIMESTAMP | Data e hora         |
| BOOLEAN   | Verdadeiro ou falso |

O tipo de dado deve representar corretamente a informação armazenada.


## 8. Preparando o Ambiente com Docker

Para garantir que todos utilizem o mesmo banco de dados, usaremos **Docker com PostgreSQL 15**.

### Arquivo: docker-compose.yml

```yaml
services:
  db-estoque:
    image: postgres:15
    container_name: postgres_pbl
    restart: always
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: senha_segura_123
      POSTGRES_DB: sistema_estoque
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```


### Comandos Básicos

Subir o banco de dados:

```bash
docker-compose up -d
```

Acessar o banco:

```bash
docker exec -it postgres_pbl psql -U admin -d sistema_estoque
```


## 9. Criando as Tabelas (DDL)

DDL (Data Definition Language) é usada para **criar a estrutura** do banco.

### Tabela Categorias

```sql
CREATE TABLE categorias (
    id_categoria SERIAL PRIMARY KEY,
    nome_categoria VARCHAR(50) NOT NULL UNIQUE,
    descricao TEXT
);
```

### Tabela Produtos

```sql
CREATE TABLE produtos (
    id_produto SERIAL PRIMARY KEY,
    sku VARCHAR(20) NOT NULL UNIQUE,
    nome_produto VARCHAR(100) NOT NULL,
    quantidade_minima INT DEFAULT 0,
    preco_unitario DECIMAL(10,2),
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fk_categoria INT,

    CONSTRAINT fk_categoria_prod
      FOREIGN KEY (fk_categoria)
      REFERENCES categorias(id_categoria)
);
```


## 10. Inserindo Dados (INSERT)

```sql
INSERT INTO categorias (nome_categoria, descricao)
VALUES ('Informática', 'Produtos de tecnologia');
```

```sql
INSERT INTO produtos (sku, nome_produto, preco_unitario, fk_categoria)
VALUES ('NOTE001', 'Notebook Dell', 4500.00, 1);
```

Primeiro insira a categoria, depois o produto.


## 11. Consultando Dados (SELECT)

```sql
SELECT * FROM categorias;
```

```sql
SELECT nome_produto, preco_unitario
FROM produtos;
```

Esses comandos permitem visualizar os dados armazenados.


## 12. Exercício Proposto

Utilizando o cenário do seu grupo:

1. Escreva o enunciado do problema
2. Identifique pelo menos duas entidades
3. Liste os atributos de cada entidade
4. Defina um relacionamento 1:N
5. Crie as tabelas no banco de dados
6. Insira pelo menos um registro em cada tabela
7. Faça uma consulta simples com SELECT

Este exercício será a base para as próximas aulas.


## 13. Dica Final

Se algo não fizer sentido agora, **não se preocupe**.
Banco de dados é aprendizado por repetição e prática.

Use este material para acompanhar a explicação e testar os comandos com calma.
