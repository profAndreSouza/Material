# Aula 12 – Benchmarking e Boas Práticas

## O que é Benchmarking de Consultas?

**Benchmarking** é o processo de medir o desempenho das consultas SQL em um banco de dados para identificar possíveis gargalos e otimizar a execução. Ele ajuda a comparar a eficiência de diferentes consultas e técnicas de indexação, além de medir o impacto de alterações no banco de dados.

---

## Medição de Tempo de Execução de Queries

### Uso do `EXPLAIN ANALYZE`

O comando **`EXPLAIN ANALYZE`** executa uma consulta e retorna o plano de execução **real**, incluindo as estatísticas de tempo de execução. Isso ajuda a identificar partes da consulta que estão consumindo mais recursos.

### Exemplo de uso:

```sql
EXPLAIN ANALYZE
SELECT nome, valor_total
FROM pedido
WHERE cliente_id = 1;
```

A saída incluirá o tempo de execução real de cada parte do plano de execução, permitindo identificar se a consulta está usando um índice ou realizando uma varredura de tabela.

### Exemplo de Saída:

```plaintext
Seq Scan on pedido  (cost=0.00..14.60 rows=3 width=32) (actual time=0.007..0.015 rows=3 loops=1)
  Filter: (cliente_id = 1)
  Rows Removed by Filter: 1000
Planning Time: 0.112 ms
Execution Time: 0.023 ms
```

Neste exemplo, vemos que a consulta realizou uma varredura sequencial e levou 0.023 milissegundos para ser executada.

### Uso de Ferramentas de Benchmarking

Além do **`EXPLAIN ANALYZE`**, você pode utilizar ferramentas de benchmarking como:

* **pgbench**: Ferramenta de benchmarking oficial do PostgreSQL. Ideal para simular carga em uma base de dados.

  #### Exemplo de comando básico:

  ```bash
  pgbench -i -s 10 mydatabase
  pgbench -c 10 -j 2 -T 60 mydatabase
  ```

* **pg\_stat\_statements**: Extensão que coleta estatísticas sobre as consultas SQL executadas, ajudando a identificar quais são as mais lentas ou frequentes.

---

## Modularização de Código SQL

A modularização de código SQL envolve dividir consultas complexas ou rotinas de banco de dados em partes menores e reutilizáveis. Isso facilita a manutenção, legibilidade e reusabilidade do código.

### Técnicas de Modularização

1. **Views**: Utilize **`VIEW`** para criar consultas reutilizáveis que encapsulam lógicas complexas.

   #### Exemplo:

   Criar uma **view** que retorna os pedidos de um cliente:

   ```sql
   CREATE VIEW pedidos_cliente AS
   SELECT cliente_id, nome, valor_total
   FROM pedido
   WHERE cliente_id = 1;
   ```

2. **Funções**: Crie **funções** para encapsular lógicas repetitivas.

   #### Exemplo:

   Criar uma função para calcular o total de vendas de um cliente:

   ```sql
   CREATE FUNCTION total_vendas_cliente(cliente_id INT) 
   RETURNS NUMERIC AS $$
   DECLARE
     total NUMERIC;
   BEGIN
     SELECT SUM(valor_total) INTO total
     FROM pedido
     WHERE cliente_id = cliente_id;
     RETURN total;
   END;
   $$ LANGUAGE plpgsql;
   ```

   Agora, você pode reutilizar essa função em qualquer consulta.

3. **Stored Procedures**: Use **procedures** para executar blocos de código mais complexos, que podem envolver múltiplas operações de banco de dados.

   #### Exemplo:

   Criar um procedimento para atualizar o status de pedidos:

   ```sql
   CREATE PROCEDURE atualizar_status_pedido(pedido_id INT, novo_status VARCHAR)
   LANGUAGE plpgsql
   AS $$
   BEGIN
     UPDATE pedido
     SET status = novo_status
     WHERE pedido_id = pedido_id;
   END;
   $$;
   ```

---

## Pacotes e Organização de Rotinas

Organizar rotinas e funções no banco de dados é importante para manter o código limpo e fácil de manter. Embora o PostgreSQL não tenha um conceito formal de "pacotes" como o Oracle, podemos adotar práticas de organização usando esquemas e agrupando funções relacionadas.

### Uso de Esquemas

Um **esquema** no PostgreSQL pode ser usado para agrupar objetos relacionados, como tabelas, funções, e visões, facilitando a organização do banco de dados.

#### Exemplo:

Criar um esquema chamado `vendas` e adicionar uma função nele:

```sql
CREATE SCHEMA vendas;
SET search_path TO vendas;

CREATE FUNCTION vendas.total_vendas_cliente(cliente_id INT)
RETURNS NUMERIC AS $$
DECLARE
  total NUMERIC;
BEGIN
  SELECT SUM(valor_total) INTO total
  FROM pedido
  WHERE cliente_id = cliente_id;
  RETURN total;
END;
$$ LANGUAGE plpgsql;
```

Agora a função está organizada no esquema `vendas`, tornando o banco de dados mais organizado.

---

## Boas Práticas de SQL

1. **Nomes Descritivos**: Use nomes claros e descritivos para tabelas, colunas, funções e variáveis.

2. \*\*Evite Consultas com SELECT \*\*\*: Sempre que possível, evite utilizar `SELECT *`. Defina explicitamente as colunas que você precisa. Isso melhora a performance e a clareza.

   #### Exemplo:

   ```sql
   SELECT nome, valor_total FROM pedido WHERE cliente_id = 1;
   ```

3. **Evite Subconsultas Complexas**: Subconsultas podem ser úteis, mas frequentemente podem ser substituídas por joins, o que melhora a performance.

   #### Exemplo:

   Em vez de uma subconsulta:

   ```sql
   SELECT nome FROM cliente WHERE cliente_id IN (SELECT cliente_id FROM pedido WHERE valor_total > 100);
   ```

   Use um join:

   ```sql
   SELECT c.nome
   FROM cliente c
   JOIN pedido p ON c.cliente_id = p.cliente_id
   WHERE p.valor_total > 100;
   ```

4. **Use Transactions para Consistência**: Sempre que precisar realizar múltiplas operações no banco, use transações para garantir a consistência dos dados.

   #### Exemplo:

   ```sql
   BEGIN;
   UPDATE pedido SET status = 'PAGO' WHERE pedido_id = 1;
   UPDATE pagamento SET status = 'CONFIRMADO' WHERE pagamento_id = 1;
   COMMIT;
   ```

---

## Referências

* PostgreSQL Official Docs – Benchmarking: [https://www.postgresql.org/docs/current/pgbench.html](https://www.postgresql.org/docs/current/pgbench.html)
* PostgreSQL Official Docs – Functions and Procedures: [https://www.postgresql.org/docs/current/plpgsql-control-structures.html](https://www.postgresql.org/docs/current/plpgsql-control-structures.html)
* PostgreSQL Official Docs – EXPLAIN ANALYZE: [https://www.postgresql.org/docs/current/using-explain.html](https://www.postgresql.org/docs/current/using-explain.html)
* SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S. *Sistemas de Banco de Dados*. McGraw-Hill.
* HEUSER, Carlos A. *Projeto de Banco de Dados*. Bookman.
