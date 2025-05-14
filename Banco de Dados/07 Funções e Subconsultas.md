# Aula 7 – Funções, Agrupamentos e Subconsultas

## O que são Funções, Agrupamentos e Subconsultas?

* **Funções agregadas**: Operações matemáticas que retornam um valor único com base em um conjunto de valores.
* **Agrupamento de dados**: Agrupa registros para realizar cálculos em grupos de dados, em vez de em registros individuais.
* **Subconsultas**: Consultas dentro de outra consulta para obter resultados intermediários.

---

## Funções Agregadas e de String

### Funções Agregadas

As funções agregadas realizam cálculos sobre um conjunto de valores e retornam um único valor.

#### Funções Comuns:

| Função    | Descrição                                 | Exemplo                                |
| --------- | ----------------------------------------- | -------------------------------------- |
| `COUNT()` | Conta o número de registros               | `SELECT COUNT(*) FROM cliente;`        |
| `SUM()`   | Soma os valores de uma coluna numérica    | `SELECT SUM(valor_total) FROM pedido;` |
| `AVG()`   | Calcula a média dos valores de uma coluna | `SELECT AVG(preco) FROM produto;`      |
| `MIN()`   | Retorna o valor mínimo de uma coluna      | `SELECT MIN(preco) FROM produto;`      |
| `MAX()`   | Retorna o valor máximo de uma coluna      | `SELECT MAX(estoque) FROM produto;`    |

#### Exemplo de uso de funções agregadas:

```sql
SELECT categoria_id, COUNT(*) AS total_produtos
FROM produto
GROUP BY categoria_id;
```

Este exemplo conta o número de produtos por categoria.

### Funções de String

As funções de string permitem manipular dados de texto.

| Função     | Descrição                           | Exemplo                                             |
| ---------- | ----------------------------------- | --------------------------------------------------- |
| `LENGTH()` | Retorna o comprimento de uma string | `SELECT LENGTH(nome) FROM cliente;`                 |
| `UPPER()`  | Converte o texto para maiúsculas    | `SELECT UPPER(nome) FROM cliente;`                  |
| `LOWER()`  | Converte o texto para minúsculas    | `SELECT LOWER(nome) FROM cliente;`                  |
| `CONCAT()` | Concatena duas ou mais strings      | `SELECT CONCAT(nome, ' ', sobrenome) FROM cliente;` |

#### Exemplo de uso de funções de string:

```sql
SELECT CONCAT(nome, ' ', sobrenome) AS nome_completo
FROM cliente;
```

---

## `GROUP BY`, `HAVING`

### `GROUP BY`

O **`GROUP BY`** agrupa os resultados de uma consulta com base em uma ou mais colunas. Usualmente, é utilizado com funções agregadas para calcular valores agregados por grupo.

#### Exemplo:

```sql
SELECT categoria_id, SUM(preco) AS total_vendas
FROM produto
GROUP BY categoria_id;
```

Este exemplo agrupa os produtos por categoria e soma os preços de cada grupo.

### `HAVING`

O **`HAVING`** é utilizado para filtrar os grupos formados pelo **`GROUP BY`**. Ele é similar ao **`WHERE`**, mas enquanto o **`WHERE`** filtra as linhas antes de agrupá-las, o **`HAVING`** filtra os grupos após a agregação.

#### Exemplo:

```sql
SELECT categoria_id, AVG(preco) AS preco_medio
FROM produto
GROUP BY categoria_id
HAVING AVG(preco) > 100;
```

Esse exemplo retorna apenas as categorias onde o preço médio é maior que 100.

---

## Subconsultas e Aliases

### Subconsultas

Uma **subconsulta** é uma consulta aninhada dentro de outra consulta. Pode ser usada tanto no **`SELECT`**, como nas cláusulas **`WHERE`** e **`FROM`**.

#### Exemplo no `SELECT`:

```sql
SELECT nome, 
       (SELECT COUNT(*) FROM pedido WHERE cliente_id = cliente.cliente_id) AS total_pedidos
FROM cliente;
```

Este exemplo retorna os nomes dos clientes e o número de pedidos feitos por cada um.

#### Exemplo no `WHERE`:

```sql
SELECT nome, email
FROM cliente
WHERE cliente_id IN (SELECT cliente_id FROM pedido WHERE valor_total > 500);
```

Isso retorna os clientes que têm pedidos com valor total superior a 500.

### Aliases

**Aliases** são usados para dar um nome temporário a uma tabela ou coluna durante a execução de uma consulta. É uma boa prática para melhorar a legibilidade e evitar ambiguidades.

#### Exemplo:

```sql
SELECT p.nome, c.nome AS categoria_nome
FROM produto p
JOIN categoria c ON p.categoria_id = c.categoria_id;
```

No exemplo, o alias **`p`** é atribuído à tabela `produto` e **`c`** à tabela `categoria`, tornando a consulta mais concisa.

---

## Referências

* PostgreSQL Official Docs – SQL Aggregates: [https://www.postgresql.org/docs/current/functions-aggregate.html](https://www.postgresql.org/docs/current/functions-aggregate.html)
* W3Schools PostgreSQL Aggregates Tutorial: [https://www.w3schools.com/sql/sql\_count\_avg\_sum.asp](https://www.w3schools.com/sql/sql_count_avg_sum.asp)
* SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S. *Sistemas de Banco de Dados*. McGraw-Hill.
* HEUSER, Carlos A. *Projeto de Banco de Dados*. Bookman.
* PostgreSQL Official Docs – Subqueries: [https://www.postgresql.org/docs/current/queries-subselect.html](https://www.postgresql.org/docs/current/queries-subselect.html)
