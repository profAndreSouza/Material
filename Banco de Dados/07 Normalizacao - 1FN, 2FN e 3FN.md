# AULA: NORMALIZAÇÃO DE DADOS A PARTIR DE UM PROBLEMA REAL

## 1. Introdução

Em projetos reais de banco de dados, dificilmente começamos com uma modelagem perfeita.
Na prática, muitos sistemas nascem com tabelas mal estruturadas e, com o tempo, começam a apresentar problemas.

Nesta aula, vamos seguir um caminho diferente do tradicional:
em vez de começar pelas regras de normalização, vamos partir de um problema concreto enfrentado por uma empresa e, a partir dele, entender por que a normalização é necessária.


## 2. O Cenário

Uma empresa do setor de vendas armazena todas as informações em uma única tabela chamada `Vendas`, conforme o modelo abaixo:

| PedidoID | ClienteNome           | Email                             | Produto                          | Categoria              | Preço        | Quantidade |
|----------|----------------------|-----------------------------------|----------------------------------|------------------------|-------------|------------|
| 1        | João Silva           | joao@gmail.com                    | Notebook                         | Eletrônicos            | 3500        | 1          |
| 2        | Maria Souza          | maria@gmail.com                   | Celular                          | Eletrônicos            | 2000        | 1          |
| 3        | João Silva           | joao@gmail.com; joao@outlook.com  | Mouse; Teclado                   | Periféricos            | 50; 120     | 2; 1       |
| 4        | Ana Lima             | ana@gmail.com                     | Cadeira Gamer                    | Móveis                 | 900         | 1          |
| 5        | Carlos Pereira       | carlos@gmail.com                  | Mesa Escritório                  | Móveis                 | 700         | 1          |
| 6        | Maria Souza          | maria@gmail.com                   | Notebook                         | Eletrônicos            | 3500        | 1          |
| 7        | João Silva           | joao@gmail.com                    | Monitor                          | Eletrônicos            | 1200        | 2          |
| 8        | Fernanda Alves       | fernanda@gmail.com                | Impressora                       | Eletrônicos            | 800         | 1          |
| 9        | Lucas Rocha          | lucas@gmail.com                   | Mouse                            | Periféricos            | 50          | 3          |
| 10       | Ana Lima             | ana@gmail.com; ana@empresa.com    | Teclado; Mouse                   | Periféricos            | 120; 50     | 1; 2       |
| 11       | Bruno Costa          | bruno@gmail.com                   | Celular                          | Eletrônicos            | 2000        | 2          |
| 12       | Carla Mendes         | carla@gmail.com                   | Notebook                         | Eletrônicos            | 3500        | 1          |
| 13       | Carlos Pereira       | carlos@gmail.com                  | Monitor; Teclado                 | Eletrônicos; Periféricos | 1200; 120 | 1; 1       |
| 14       | João Silva           | joao@outlook.com                  | Mouse                            | Periféricos            | 50          | 1          |
| 15       | Fernanda Alves       | fernanda@gmail.com                | Cadeira Gamer                    | Móveis                 | 900         | 1          |
| 16       | Lucas Rocha          | lucas@gmail.com                   | Mesa Escritório                  | Móveis                 | 700         | 1          |
| 17       | Bruno Costa          | bruno@gmail.com                   | Impressora                       | Eletrônicos            | 800         | 1          |
| 18       | Carla Mendes         | carla@gmail.com                   | Teclado                          | Periféricos            | 120         | 2          |
| 19       | Ana Lima             | ana@gmail.com                     | Notebook; Mouse                  | Eletrônicos; Periféricos | 3500; 50 | 1; 1       |
| 20       | João Silva           | joao@gmail.com                    | Celular                          | Eletrônicos            | 2000        | 1          |

À primeira vista, essa estrutura parece simples e funcional. No entanto, ela mistura diferentes tipos de informação em um único lugar:

* dados do cliente
* dados do pedido
* dados do produto
* dados da categoria

Essa mistura é a origem dos problemas que veremos a seguir.

### SQL
```sql

CREATE DATABASE mercadinho_ribas;


CREATE TABLE dados (
	PedidoID SERIAL PRIMARY KEY,
	ClienteNome VARCHAR(200) NOT NULL,
	Email VARCHAR(100) NOT NULL,
	Produto VARCHAR(100) NOT NULL,
	Categoria VARCHAR(100) NOT NULL,
	Preco VARCHAR(100) NOT NULL,
	Quantidade VARCHAR(100) NOT NULL
);

INSERT INTO dados (ClienteNome, Email, Produto, Categoria, Preco, Quantidade) VALUES 
('João Silva','joao@gmail.com','Notebook','Eletrônicos','3500','1'),
('Maria Souza','maria@gmail.com','Celular','Eletrônicos','2000','1'),
('João Silva','joao@gmail.com; joao@outlook.com','Mouse; Teclado','Periféricos','50; 120','2; 1'),
('Ana Lima','ana@gmail.com','Cadeira Gamer','Móveis','900','1'),
('Carlos Pereira','carlos@gmail.com','Mesa Escritório','Móveis','700','1'),
('Maria Souza','maria@gmail.com','Notebook','Eletrônicos','3500','1'),
('João Silva','joao@gmail.com','Monitor','Eletrônicos','1200','2'),
('Fernanda Alves','fernanda@gmail.com','Impressora','Eletrônicos','800','1'),
('Lucas Rocha','lucas@gmail.com','Mouse','Periféricos','50','3'),
('Ana Lima','ana@gmail.com; ana@empresa.com','Teclado; Mouse','Periféricos','120; 50','1; 2'),
('Bruno Costa','bruno@gmail.com','Celular','Eletrônicos','2000','2'),
('Carla Mendes','carla@gmail.com','Notebook','Eletrônicos','3500','1'),
('Carlos Pereira','carlos@gmail.com','Monitor; Teclado','Eletrônicos; Periféricos','1200; 120','1; 1'),
('João Silva','joao@outlook.com','Mouse','Periféricos','50','1'),
('Fernanda Alves','fernanda@gmail.com','Cadeira Gamer','Móveis','900','1'),
('Lucas Rocha','lucas@gmail.com','Mesa Escritório','Móveis','700','1'),
('Bruno Costa','bruno@gmail.com','Impressora','Eletrônicos','800','1'),
('Carla Mendes','carla@gmail.com','Teclado','Periféricos','120','2'),
('Ana Lima','ana@gmail.com','Notebook; Mouse','Eletrônicos; Periféricos','3500; 50','1; 1'),
('João Silva','joao@gmail.com','Celular','Eletrônicos','2000','1');

```

## 3. A Dor do Negócio

A área de gestão solicita a seguinte análise:

> “Desejamos saber quanto cada cliente gastou em cada categoria de produto.”

> “Qual o valor total vendido em cada categoria de produto.”

Essas são perguntas comum em empresas, usada para tomada de decisão, como campanhas de marketing e análise de consumo.


## 4. A Consulta Inicial

Uma tentativa direta de responder a essa pergunta seria:

```sql

SELECT ClienteNome, Categoria, SUM(Preço * Quantidade) AS Total
FROM Vendas
GROUP BY ClienteNome, Categoria;

```

Do ponto de vista técnico, a consulta está correta e será executada pelo banco de dados.

No entanto, o grande problema aqui não é a consulta — é a qualidade dos dados.

## 5. Por que o Resultado Não é Confiável?

Mesmo com uma consulta correta, os resultados podem estar errados. Isso acontece porque a tabela possui problemas estruturais.

### 5.1 Redundância de Dados

Os dados do cliente se repetem em várias linhas.
Se um cliente fizer vários pedidos, seu nome e email aparecerão diversas vezes.

O mesmo ocorre com produtos e categorias.


### 5.2 Inconsistência


Como os dados são repetidos, podem surgir variações:

* “Ana Silva” vs “Ana S.”
* “Informática” vs “Informatica”
* preços diferentes para o mesmo produto

Essas pequenas diferenças quebram completamente análises agregadas.


### 5.3 Anomalias

A estrutura atual permite três tipos clássicos de problemas:

**Anomalia de inserção**
Não é possível cadastrar um produto sem vinculá-lo a um pedido.

**Anomalia de atualização**
Se o preço de um produto mudar, é necessário atualizar várias linhas.

**Anomalia de exclusão**
Ao remover um pedido, pode-se perder informações importantes, como o único registro de um cliente.



## 6. A Causa Raiz


O problema central é que a tabela não respeita princípios básicos de organização de dados.

Ela mistura diferentes entidades em um único lugar, quando o ideal seria separar:

* Cliente
* Pedido
* Produto
* Categoria

A normalização surge exatamente como uma forma sistemática de resolver esse tipo de problema.

Segue a reescrita com linguagem mais formal e com os conceitos técnicos explicitados.


## 7. Processo de Normalização

A normalização consiste em um processo sistemático de organização de dados em um banco relacional, fundamentado na teoria das dependências funcionais. Seu principal objetivo é minimizar redundâncias, eliminar anomalias (de inserção, atualização e exclusão) e garantir a integridade lógica dos dados.

Esse processo é conduzido por meio da aplicação sucessiva das formas normais. Nesta etapa, serão abordadas a Primeira, Segunda e Terceira Formas Normais (1FN, 2FN e 3FN), aplicadas progressivamente sobre a estrutura inicial.


## 7.1 Primeira Forma Normal (1FN)

A Primeira Forma Normal estabelece que uma relação deve atender aos seguintes requisitos:

* todos os atributos devem ser **atômicos**, ou seja, indivisíveis;
* não devem existir **atributos multivalorados** (um único campo contendo múltiplos valores);
* não devem existir **atributos compostos**, que possam ser decompostos em subatributos semanticamente independentes;
* não devem existir **grupos repetitivos** ou colunas que armazenem listas.

Embora a tabela original não apresente explicitamente atributos multivalorados (como listas em uma única célula), ela ainda viola princípios conceituais importantes. Observa-se que diferentes entidades (Cliente, Produto, Pedido e Categoria) estão representadas em uma única relação, o que caracteriza uma estrutura não normalizada do ponto de vista semântico.

Assim, a aplicação da 1FN neste contexto não se limita apenas à atomicidade dos atributos, mas também implica na reorganização da estrutura de dados, de modo a separar corretamente as entidades envolvidas.


## 7.2 Segunda Forma Normal (2FN)

A Segunda Forma Normal é aplicável a relações que possuem **chave primária composta** e estabelece que:

> todo atributo não-chave deve ser funcionalmente dependente da chave primária em sua totalidade, e não apenas de parte dela.

Considerando a tabela original, pode-se assumir uma chave composta formada por `(PedidoID, Produto)`, uma vez que um pedido pode conter múltiplos produtos.

Entretanto, ao analisar as dependências funcionais, observa-se a existência de **dependências parciais**, tais como:

* `PedidoID → ClienteNome, Email`
* `Produto → Preço, Categoria`

Isso evidencia que determinados atributos não dependem da totalidade da chave primária, mas apenas de parte dela, caracterizando uma violação da 2FN.

### Reorganização Estrutural

Para eliminar essas dependências parciais, a relação deve ser decomposta em múltiplas tabelas, cada uma representando uma entidade específica:

* **Cliente**: armazena atributos exclusivamente relacionados ao cliente
* **Pedido**: estabelece a associação entre cliente e pedido
* **Produto**: contém atributos próprios do produto
* **ItemPedido**: representa a relação entre pedidos e produtos, incluindo atributos como quantidade

Essa decomposição assegura que todos os atributos não-chave passem a depender integralmente de suas respectivas chaves primárias, eliminando redundâncias associadas às dependências parciais.


## 7.3 Terceira Forma Normal (3FN)

A Terceira Forma Normal tem como objetivo eliminar as chamadas **dependências transitivas**.

Uma dependência transitiva ocorre quando:

> um atributo não-chave depende funcionalmente de outro atributo não-chave, em vez de depender diretamente da chave primária.

Formalmente, se:

* A → B (chave determina atributo)
* B → C (atributo determina outro atributo)

então existe uma dependência transitiva A → C por meio de B.

No contexto analisado, observa-se que:

* `ProdutoID → Categoria`
* portanto, a categoria é determinada indiretamente por meio do produto

Isso indica que o atributo **Categoria** não deve estar armazenado na mesma relação que depende da chave primária de forma indireta, sob pena de redundância e inconsistência.

### Ajuste Estrutural

Para eliminar essa dependência transitiva, realiza-se a seguinte decomposição:

* criação da entidade **Categoria**, com chave primária própria
* modificação da entidade **Produto**, que passa a conter uma chave estrangeira (`CategoriaID`) referenciando a tabela Categoria

Essa reorganização garante que cada atributo não-chave dependa exclusivamente da chave primária de sua própria relação, atendendo plenamente aos requisitos da 3FN.


## 8. Estrutura Final do Banco de Dados

Após a aplicação das três formas normais, a estrutura do banco de dados passa a ser composta pelas seguintes relações:

* **Cliente**
* **Pedido**
* **ItemPedido**
* **Produto**
* **Categoria**

Essa modelagem apresenta as seguintes características:

* eliminação de redundâncias estruturais
* ausência de dependências parciais e transitivas
* separação adequada das entidades do domínio
* integridade referencial garantida por meio de chaves estrangeiras

Como resultado, o banco de dados torna-se mais consistente, escalável e adequado para consultas analíticas confiáveis.



## 9. Implementação em SQL

### DDL
```sql
CREATE TABLE cliente (
    codigo SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE email (
    codigo SERIAL PRIMARY KEY,
    codCliente INTEGER NOT NULL,
    email VARCHAR(100) NOT NULL,
    FOREIGN KEY (codCliente) REFERENCES cliente(codigo)
);

CREATE TABLE categoria (
    codigo SERIAL PRIMARY KEY,
    categoria VARCHAR(100) NOT NULL
);

CREATE TABLE produto (
    codigo SERIAL PRIMARY KEY,
    codCategoria INTEGER NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (codCategoria) REFERENCES categoria(codigo)
);

CREATE TABLE pedido (
    codigo SERIAL PRIMARY KEY,
    codCliente INTEGER NOT NULL,
    FOREIGN KEY (codCliente) REFERENCES cliente(codigo)
);

CREATE TABLE itensPedido (
    codPedido INTEGER NOT NULL,
    codProduto INTEGER NOT NULL,
    quantidade INTEGER NOT NULL,
    PRIMARY KEY (codPedido, codProduto),
    FOREIGN KEY (codPedido) REFERENCES pedido(codigo),
    FOREIGN KEY (codProduto) REFERENCES produto(codigo)
);

```


### DML
```sql

INSERT INTO cliente (nome) VALUES
    ('João Silva'),
    ('Maria Souza'),
    ('Ana Lima'),
    ('Carlos Pereira'),
    ('Fernanda Alves'),
    ('Lucas Rocha'),
    ('Bruno Costa'),
    ('Carla Mendes');

INSERT INTO email (codCliente, email) SELECT codigo, 'joao@gmail.com' FROM cliente WHERE nome = 'João Silva';
INSERT INTO email (codCliente, email) SELECT codigo, 'maria@gmail.com' FROM cliente WHERE nome = 'Maria Souza';
INSERT INTO email (codCliente, email) SELECT codigo, 'joao@outlook.com' FROM cliente WHERE nome = 'João Silva';
INSERT INTO email (codCliente, email) SELECT codigo, 'ana@gmail.com' FROM cliente WHERE nome = 'Ana Lima';
INSERT INTO email (codCliente, email) SELECT codigo, 'carlos@gmail.com' FROM cliente WHERE nome = 'Carlos Pereira';
INSERT INTO email (codCliente, email) SELECT codigo, 'fernanda@gmail.com' FROM cliente WHERE nome = 'Fernanda Alves';
INSERT INTO email (codCliente, email) SELECT codigo, 'lucas@gmail.com' FROM cliente WHERE nome = 'Lucas Rocha';
INSERT INTO email (codCliente, email) SELECT codigo, 'ana@empresa.com' FROM cliente WHERE nome = 'Ana Lima';
INSERT INTO email (codCliente, email) SELECT codigo, 'bruno@gmail.com' FROM cliente WHERE nome = 'Bruno Costa';
INSERT INTO email (codCliente, email) SELECT codigo, 'carla@gmail.com' FROM cliente WHERE nome = 'Carla Mendes';

INSERT INTO categoria (categoria) VALUES
    ('Eletrônicos'),
    ('Periféricos'),
    ('Móveis');


INSERT INTO produto (codCategoria, descricao, preco) SELECT codigo, 'Notebook', 3500 FROM categoria WHERE categoria = 'Eletrônicos';
INSERT INTO produto (codCategoria, descricao, preco) SELECT codigo, 'Celular', 2000 FROM categoria WHERE categoria = 'Eletrônicos';
INSERT INTO produto (codCategoria, descricao, preco) SELECT codigo, 'Mouse', 50 FROM categoria WHERE categoria = 'Periféricos';
INSERT INTO produto (codCategoria, descricao, preco) SELECT codigo, 'Teclado', 120 FROM categoria WHERE categoria = 'Periféricos';
INSERT INTO produto (codCategoria, descricao, preco) SELECT codigo, 'Cadeira Gamer', 900 FROM categoria WHERE categoria = 'Móveis';
INSERT INTO produto (codCategoria, descricao, preco) SELECT codigo, 'Mesa Escritório', 700 FROM categoria WHERE categoria = 'Móveis';
INSERT INTO produto (codCategoria, descricao, preco) SELECT codigo, 'Monitor', 1200 FROM categoria WHERE categoria = 'Eletrônicos';
INSERT INTO produto (codCategoria, descricao, preco) SELECT codigo, 'Impressora', 800 FROM categoria WHERE categoria = 'Eletrônicos';


INSERT INTO pedido (codigo, codCliente) SELECT 1, codigo FROM cliente WHERE nome = 'João Silva';
INSERT INTO pedido (codigo, codCliente) SELECT 2, codigo FROM cliente WHERE nome = 'Maria Souza';
INSERT INTO pedido (codigo, codCliente) SELECT 3, codigo FROM cliente WHERE nome = 'João Silva';
INSERT INTO pedido (codigo, codCliente) SELECT 4, codigo FROM cliente WHERE nome = 'Ana Lima';
INSERT INTO pedido (codigo, codCliente) SELECT 5, codigo FROM cliente WHERE nome = 'Carlos Pereira';
INSERT INTO pedido (codigo, codCliente) SELECT 6, codigo FROM cliente WHERE nome = 'Maria Souza';
INSERT INTO pedido (codigo, codCliente) SELECT 7, codigo FROM cliente WHERE nome = 'João Silva';
INSERT INTO pedido (codigo, codCliente) SELECT 8, codigo FROM cliente WHERE nome = 'Fernanda Alves';
INSERT INTO pedido (codigo, codCliente) SELECT 9, codigo FROM cliente WHERE nome = 'Lucas Rocha';
INSERT INTO pedido (codigo, codCliente) SELECT 10, codigo FROM cliente WHERE nome = 'Ana Lima';
INSERT INTO pedido (codigo, codCliente) SELECT 11, codigo FROM cliente WHERE nome = 'Bruno Costa';
INSERT INTO pedido (codigo, codCliente) SELECT 12, codigo FROM cliente WHERE nome = 'Carla Mendes';
INSERT INTO pedido (codigo, codCliente) SELECT 13, codigo FROM cliente WHERE nome = 'Carlos Pereira';
INSERT INTO pedido (codigo, codCliente) SELECT 14, codigo FROM cliente WHERE nome = 'João Silva';
INSERT INTO pedido (codigo, codCliente) SELECT 15, codigo FROM cliente WHERE nome = 'Fernanda Alves';
INSERT INTO pedido (codigo, codCliente) SELECT 16, codigo FROM cliente WHERE nome = 'Lucas Rocha';
INSERT INTO pedido (codigo, codCliente) SELECT 17, codigo FROM cliente WHERE nome = 'Bruno Costa';
INSERT INTO pedido (codigo, codCliente) SELECT 18, codigo FROM cliente WHERE nome = 'Carla Mendes';
INSERT INTO pedido (codigo, codCliente) SELECT 19, codigo FROM cliente WHERE nome = 'Ana Lima';
INSERT INTO pedido (codigo, codCliente) SELECT 20, codigo FROM cliente WHERE nome = 'João Silva';



```


## 10. Revisitando a Dor do Negócio

> “Desejamos saber quanto cada cliente gastou em cada categoria de produto.”




> “Qual o valor total vendido em cada categoria de produto.”



## 11. Por que Agora Funciona?


Diferente da situação inicial:

* cada informação existe em apenas um lugar
* não há duplicidade de dados críticos
* relacionamentos estão bem definidos
* a integridade dos dados é garantida

Isso permite que consultas analíticas sejam confiáveis.
