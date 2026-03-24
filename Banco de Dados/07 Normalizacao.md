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
```



## 5. Por que o Resultado Não é Confiável?

Mesmo com uma consulta correta, os resultados podem estar errados. Isso acontece porque a tabela possui problemas estruturais.

### 5.1 Redundância de Dados


### 5.2 Inconsistência



### 5.3 Anomalias



## 6. A Causa Raiz



## 7. Processo de Normalização

A normalização é um conjunto de regras que tem como objetivo organizar os dados para reduzir redundância e evitar inconsistências.

Vamos aplicar as três primeiras formas normais passo a passo.


## 7.1 Primeira Forma Normal (1FN)

A Primeira Forma Normal estabelece que:

* os atributos devem ser atômicos (não divisíveis)
* não devem existir grupos repetidos


## 7.2 Segunda Forma Normal (2FN)

A Segunda Forma Normal trata da dependência dos dados em relação à chave primária.

Ela determina que:

> todo atributo deve depender completamente da chave primária.


## 7.3 Terceira Forma Normal (3FN)

A Terceira Forma Normal elimina dependências transitivas.

Uma dependência transitiva ocorre quando um atributo depende de outro atributo que não é chave.



## 8. Estrutura Final do Banco

Após a normalização, o banco passa a ter as seguintes tabelas:




## 9. Implementação em SQL

```sql

```


## 10. Revisitando a Dor do Negócio


## 11. Por que Agora Funciona?
