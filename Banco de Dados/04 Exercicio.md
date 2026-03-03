# Exercicio

Com base no modelo anterior (`categoria` e `produto`), seguem os novos requisitos reescritos de forma organizada e objetiva.


## NOVOS REQUISITOS

O sistema agora deve:

* Controlar entradas e saídas de produtos
* Registrar:

  * Tipo de movimentação (E = Entrada, S = Saída)
  * Data da movimentação
  * Quantidade movimentada
  * Produto relacionado
* Permitir o cálculo automático do estoque atual com base nas movimentações


## NOVA ENTIDADE

Tabela: movimentacao

Campos:

* id_movimentacao (PK)
* tipo (E ou S)
* quantidade
* data_movimentacao
* id_produto (FK para produto)

Exemplo de criação da tabela:

```sql
CREATE TABLE movimentacao (
    id_movimentacao SERIAL PRIMARY KEY,
    tipo CHAR(1),
    quantidade INTEGER,
    data_movimentacao TIMESTAMP,
    id_produto INTEGER,
    FOREIGN KEY (id_produto)
        REFERENCES produto(codigo)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
```


## INSERÇÕES

1. Inserção de categorias

```sql
INSERT INTO categoria (nome)
VALUES ('Eletrônicos'), ('Informática'), ('Periféricos'), ('Escritório');
```

2. Inserção de produtos

```sql
INSERT INTO produto 
(cod_categoria, cod_sku, nome, preco, quant_minima, dt_cadastro)
VALUES
(1, 1001, 'Smartphone', 1500.00, 5, NOW()),
(2, 2001, 'Notebook', 4500.00, 3, NOW());
```

3. Inserção de movimentações

```sql
INSERT INTO movimentacao
(tipo, quantidade, data_movimentacao, id_produto)
VALUES
('E', 20, NOW(), 1),
('S', 5, NOW(), 1);
```


## CONSULTAS SIMPLES

Listar todas as categorias:

```sql
SELECT * FROM categoria;
```

Listar produtos de uma categoria específica:

```sql

```

Listar movimentações de um produto:

```sql

```

Listar apenas entradas:

```sql

```

Listar apenas saídas:

```sql

```

Calcular estoque atual de um produto:

```sql

```
