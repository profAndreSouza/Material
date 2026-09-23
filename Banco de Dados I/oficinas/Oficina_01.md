# ROTEIRO DE OFICINA PRÁTICA — OFICINA 01

**Componente Curricular:** Banco de Dados I  
**Data:** 23/10/2026  
**Modalidade:** Online (Atividade Prática Autoguiada em Ambiente Sandbox)  
**Tema:** Nivelamento Prático em SQL — Implementação Física (DDL), Carga de Dados (DML) e Consultas com Filtros Lógicos (DQL)  
**Ambiente de Software:** [DB-Fiddle](https://www.db-fiddle.com/) (PostgreSQL v15 / MySQL v8.0) ou DBeaver / pgAdmin local  
**Articulação com a Ementa:** Implementação física, restrições de integridade, linguagem SQL (DDL, DML, DQL)  

---

## 1. OBJETIVOS DE APRENDIZAGEM

Ao concluir esta oficina autoguiada, você será capaz de:
1. Escrever e validar scripts de criação de tabelas (**SQL DDL**) com definição correta de chaves primárias (`PRIMARY KEY`), chaves estrangeiras (`FOREIGN KEY`) e restrições de integridade (`NOT NULL`, `UNIQUE`, `CHECK`, `DEFAULT`).
2. Executar comandos de manipulação de dados (**SQL DML**) utilizando `INSERT INTO` (unitário e em lote) e testar a rejeição de tuplas sob violação de *constraints*.
3. Construir consultas estruturadas (**SQL DQL**) utilizando `SELECT`, `FROM`, `WHERE`, projeções de colunas com apelidos (`AS`), expressões aritméticas e ordenação (`ORDER BY`).
4. Aplicar com precisão operadores relacionais ($=, \ne, >, <, \ge, \le$) e lógicos (`AND`, `OR`, `NOT`).
5. Utilizar operadores de busca avançada: intervalos (`BETWEEN`), listas de valores (`IN`), padrões textuais com caracteres curinga (`LIKE '%...'`) e tratamento de nulos (`IS NULL`, `IS NOT NULL`).
6. Submeter o script final e o link de validação no DB-Fiddle como comprovação de entrega dos **Exercícios Práticos Contínuos**.

---

## 2. METODOLOGIA E AMBIENTE DE EXECUÇÃO

Esta atividade foi desenhada para execução remota e independente através da plataforma web **DB-Fiddle**:
1. Acesse o site gratuito [https://www.db-fiddle.com/](https://www.db-fiddle.com/).
2. No canto superior esquerdo, selecione a engine **PostgreSQL 15** (ou MySQL 8.0).
3. No painel esquerdo (**Schema SQL**), cole o script DDL e DML do minimundo fornecido abaixo e clique em **Build Schema**.
4. No painel direito (**Query SQL**), resolva cada uma das 10 consultas solicitadas na Seção 4.
5. Clique em **Run** para validar se o retorno tabular bate com o resultado esperado.
6. Ao finalizar, clique em **Save** no DB-Fiddle, copie a URL compartilhável gerada e anexe-a junto ao seu arquivo `Oficina_01_SeuNome_RA.sql` no ambiente virtual da disciplina (Teams / AVA).

---

## 3. MINIMUNDO E SCRIPT BASE (SCHEMA SQL)

O cenário trata da gestão operacional de uma distribuidora de suprimentos industriais e tecnologia, denominada **TechSupply Express**.

```
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│   CATEGORIAS    │       │    PRODUTOS     │       │    CLIENTES     │
├─────────────────┤       ├─────────────────┤       ├─────────────────┤
│ id_categoria PK │──1:N──│ id_produto  PK  │       │ id_cliente  PK  │
│ nome_categoria  │       │ nome_produto    │       │ nome_razao      │
│ descricao       │       │ preco_unitario  │       │ tipo_pessoa     │
└─────────────────┘       │ estoque_atual   │       │ limite_credito  │
                          │ id_categoria FK │       │ cidade          │
                          └────────┬────────┘       │ uf              │
                                   │                └────────┬────────┘
                                  1:N                       1:N
                                   │                         │
                                   │    ┌────────────────┐   │
                                   └───>│ PEDIDOS_ITENS  │<──┘
                                        ├────────────────┤
                                        │ id_pedido   PK │
                                        │ id_cliente  FK │
                                        │ id_produto  FK │
                                        │ quantidade     │
                                        │ valor_total    │
                                        │ status_pedido  │
                                        │ data_pedido    │
                                        └────────────────┘
```

### Script DDL e DML Inicial (Copie e cole no painel Schema SQL):

```sql
-- ====================================================================
-- BANCO DE DADOS I - OFICINA 01: TECHSUPPLY EXPRESS
-- SGBD Recomendado: PostgreSQL 15 / MySQL 8.0
-- ====================================================================

-- 1. DDL: Criação das Tabelas e Constraints
CREATE TABLE categorias (
    id_categoria SERIAL PRIMARY KEY,
    nome_categoria VARCHAR(50) NOT NULL UNIQUE,
    descricao TEXT
);

CREATE TABLE produtos (
    id_produto SERIAL PRIMARY KEY,
    nome_produto VARCHAR(100) NOT NULL,
    preco_unitario NUMERIC(10, 2) NOT NULL CHECK (preco_unitario > 0),
    estoque_atual INT NOT NULL DEFAULT 0 CHECK (estoque_atual >= 0),
    id_categoria INT NOT NULL,
    CONSTRAINT fk_produtos_categorias FOREIGN KEY (id_categoria) 
        REFERENCES categorias(id_categoria) ON DELETE RESTRICT
);

CREATE TABLE clientes (
    id_cliente SERIAL PRIMARY KEY,
    nome_razao VARCHAR(120) NOT NULL,
    tipo_pessoa CHAR(1) NOT NULL CHECK (tipo_pessoa IN ('F', 'J')),
    limite_credito NUMERIC(10, 2) DEFAULT 1000.00 CHECK (limite_credito >= 0),
    cidade VARCHAR(60) NOT NULL,
    uf CHAR(2) NOT NULL
);

CREATE TABLE pedidos_itens (
    id_pedido SERIAL PRIMARY KEY,
    id_cliente INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL CHECK (quantidade > 0),
    valor_total NUMERIC(10, 2) NOT NULL CHECK (valor_total >= 0),
    status_pedido VARCHAR(20) NOT NULL CHECK (status_pedido IN ('CONCLUIDO', 'PENDENTE', 'CANCELADO')),
    data_pedido DATE NOT NULL,
    CONSTRAINT fk_pedidos_clientes FOREIGN KEY (id_cliente) 
        REFERENCES clientes(id_cliente) ON DELETE CASCADE,
    CONSTRAINT fk_pedidos_produtos FOREIGN KEY (id_produto) 
        REFERENCES produtos(id_produto) ON DELETE RESTRICT
);

-- 2. DML: Povoamento Inicial
INSERT INTO categorias (nome_categoria, descricao) VALUES
('Sensores Industriais', 'Transdutores indutivos, ópticos e de temperatura'),
('Controladores Lógicos', 'CLPs compactos e modulares para automação'),
('Cabos e Conectores', 'Cabeamento industrial blindado e conectores M12'),
('Pneumática Industrial', 'Válvulas solenoides, atuadores e filtros reguladores');

INSERT INTO produtos (nome_produto, preco_unitario, estoque_atual, id_categoria) VALUES
('Sensor Indutivo M18 PNP', 145.50, 45, 1),
('Sensor de Temperatura PT100', 89.90, 8, 1),
('CLP Modular 24V 16 E/S', 1280.00, 12, 2),
('Módulo de Expansão Analógica', 460.00, 3, 2),
('Cabo Rede Industrial Profinet 100m', 380.00, 25, 3),
('Conector M18 4 Pinos Macho', 32.00, 150, 3),
('Válvula Direcional 5/2 Vias', 215.00, 0, 4),
('Cilindro Pneumático ISO 32mm', 340.00, 14, 4);

INSERT INTO clientes (nome_razao, tipo_pessoa, limite_credito, cidade, uf) VALUES
('Automação Sorocaba Ltda', 'J', 15000.00, 'Sorocaba', 'SP'),
('Metalúrgica Itu S.A.', 'J', 25000.00, 'Itu', 'SP'),
('Carlos Eduardo Silveira', 'F', 2500.00, 'Votorantim', 'SP'),
('Usinagem Campinas Eireli', 'J', 8000.00, 'Campinas', 'SP'),
('Marina Mendes Engenharia', 'F', 4000.00, 'Sorocaba', 'SP'),
('Plásticos Salto Indústria', 'J', 18000.00, 'Salto', 'SP');

INSERT INTO pedidos_itens (id_cliente, id_produto, quantidade, valor_total, status_pedido, data_pedido) VALUES
(1, 1, 10, 1455.00, 'CONCLUIDO', '2026-08-10'),
(2, 3, 2, 2560.00, 'CONCLUIDO', '2026-08-12'),
(3, 2, 1, 89.90, 'CONCLUIDO', '2026-08-15'),
(4, 5, 2, 760.00, 'PENDENTE', '2026-08-20'),
(1, 4, 1, 460.00, 'CONCLUIDO', '2026-08-25'),
(5, 6, 10, 320.00, 'CANCELADO', '2026-08-28'),
(2, 8, 4, 1360.00, 'CONCLUIDO', '2026-09-02'),
(6, 1, 5, 727.50, 'PENDENTE', '2026-09-05');
```

---

## 4. BATERIA DE EXERCÍCIOS PRÁTICOS (QUERY SQL)

Escreva uma consulta SQL padronizada para cada uma das solicitações abaixo:

* **Exercício 01:** Liste o nome do produto, o preço unitário e o estoque atual de todos os produtos cadastrados, ordenando do maior para o menor preço.
* **Exercício 02:** Apresente todos os produtos cujo preço unitário esteja estritamente entre R$ 100,00 e R$ 500,00 (inclusive), utilizando o operador `BETWEEN`.
* **Exercício 03:** Identifique os produtos com situação de estoque crítico, ou seja, cujo estoque atual seja menor ou igual a 5 unidades. Exiba o nome e a quantidade em estoque.
* **Exercício 04:** Encontre todos os produtos cujo nome contenha a palavra `'Sensor'` em qualquer posição do texto, utilizando o operador `LIKE`.
* **Exercício 05:** Liste a razão social, cidade e limite de crédito de todos os clientes do tipo Pessoa Jurídica (`tipo_pessoa = 'J'`) situados no estado de São Paulo (`uf = 'SP'`) e que possuam limite de crédito superior ou igual a R$ 10.000,00.
* **Exercício 06:** Exiba todos os clientes localizados nas cidades de `'Sorocaba'`, `'Itu'` ou `'Votorantim'`, utilizando obrigatoriamente o operador `IN`.
* **Exercício 07:** Selecione o código do pedido, a data e o valor total de todos os pedidos que **NÃO** estejam com status `'CANCELADO'`, ordenando por data do pedido de forma decrescente.
* **Exercício 08:** Mostre uma simulação de reajuste de 15% sobre o preço de todos os produtos. Projete as colunas: `nome_produto`, `preco_unitario` (preço atual) e `(preco_unitario * 1.15)` com o apelido `preco_reajustado`.
* **Exercício 09:** Liste os pedidos com status `'CONCLUIDO'` realizados entre as datas `'2026-08-01'` e `'2026-08-31'`, cujo valor total supere R$ 1.000,00.
* **Exercício 10:** Selecione os 3 produtos mais caros em estoque na empresa que possuam pelo menos 1 unidade disponível (`estoque_atual > 0`), limitando o resultado com `LIMIT 3`.

---

## 5. GABARITO OFICIAL COMENTADO (PADRÃO DE RESPOSTA)

```sql
-- Exercício 01
SELECT nome_produto, preco_unitario, estoque_atual
FROM produtos
ORDER BY preco_unitario DESC;

-- Exercício 02
SELECT nome_produto, preco_unitario
FROM produtos
WHERE preco_unitario BETWEEN 100.00 AND 500.00
ORDER BY preco_unitario ASC;

-- Exercício 03
SELECT nome_produto, estoque_atual
FROM produtos
WHERE estoque_atual <= 5;

-- Exercício 04
SELECT id_produto, nome_produto, preco_unitario
FROM produtos
WHERE nome_produto LIKE '%Sensor%';

-- Exercício 05
SELECT nome_razao, cidade, limite_credito
FROM clientes
WHERE tipo_pessoa = 'J' 
  AND uf = 'SP' 
  AND limite_credito >= 10000.00;

-- Exercício 06
SELECT id_cliente, nome_razao, cidade
FROM clientes
WHERE cidade IN ('Sorocaba', 'Itu', 'Votorantim')
ORDER BY cidade, nome_razao;

-- Exercício 07
SELECT id_pedido, data_pedido, valor_total, status_pedido
FROM pedidos_itens
WHERE status_pedido <> 'CANCELADO'
ORDER BY data_pedido DESC;

-- Exercício 08
SELECT nome_produto, 
       preco_unitario AS preco_atual, 
       ROUND(preco_unitario * 1.15, 2) AS preco_reajustado
FROM produtos;

-- Exercício 09
SELECT id_pedido, id_cliente, valor_total, data_pedido
FROM pedidos_itens
WHERE status_pedido = 'CONCLUIDO'
  AND data_pedido BETWEEN '2026-08-01' AND '2026-08-31'
  AND valor_total > 1000.00;

-- Exercício 10
SELECT nome_produto, preco_unitario, estoque_atual
FROM produtos
WHERE estoque_atual > 0
ORDER BY preco_unitario DESC
LIMIT 3;
```

---

## 6. CRITÉRIOS DE AVALIAÇÃO DA ATIVIDADE

| Critério Avaliado | Peso | Evidência de Desempenho |
| :--- | :---: | :--- |
| **Sintaxe DDL e Constraints** | 2,0 pts | Compreensão de tipos de dados, chaves primárias, estrangeiras e restrições de checagem. |
| **Filtros e Lógica Proposicional** | 4,0 pts | Emprego correto de operadores relacionais, lógicos (`AND`/`OR`) e tratamento de prioridades. |
| **Operadores Especiais (`BETWEEN`, `IN`, `LIKE`)** | 2,5 pts | Sintaxe correta dos operadores em intervalos, conjuntos e busca textual. |
| **Expressões, Apelidos e Ordenação** | 1,5 pts | Uso de `AS`, funções de arredondamento e cláusula `ORDER BY` com limites. |
| **TOTAL DA ATIVIDADE** | **10,0 pts** | *(Comporá a média contínua de 50% de exercícios práticos)* |

---

## 7. REFERÊNCIAS BIBLIOGRÁFICAS UTILIZADAS

1. **ELMASRI, Ramez; NAVATHE, Shamkant B.** *Sistemas de Banco de Dados: Fundamentos e Aplicações.* 7. ed. São Paulo: Pearson, 2019.  
   - **Capítulo 6:** *O Modelo Relacional e Restrições de Integridade em Banco de Dados Relacional* (p. 135–158).  
   - **Capítulo 7:** *SQL Básico: Definição de Esquemas, Restrições e Consultas Simples* (p. 165–204).
2. **NIELD, Thomas.** *Introdução à Linguagem SQL: Abordagem Prática Para Iniciantes.* 1. ed. São Paulo: Novatec Editora, 2016.  
   - **Capítulo 2:** *Filtragem de Dados com a Cláusula WHERE e Operadores Lógicos* (p. 29–52).  
   - **Capítulo 3:** *Ordenação, Operadores Especiais (LIKE, IN, BETWEEN) e Paginação* (p. 53–76).
3. **SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S.** *Sistema de Banco de Dados.* 7. ed. Rio de Janeiro: GEN LTC, 2020.  
   - **Capítulo 3:** *Introdução ao SQL: Tipos de Dados Básicos, Estrutura de Consultas e Operações sobre Tabelas* (p. 55–84).
