# Aula 11 – Índices e Planos de Execução

## O que são Índices e Planos de Execução?

* **Índices**: São estruturas de dados que ajudam a melhorar a velocidade das operações de consulta em tabelas grandes. Eles funcionam como um índice de um livro, permitindo acesso rápido a dados específicos sem a necessidade de varrer a tabela inteira.
* **Planos de Execução**: São representações de como o PostgreSQL planeja executar uma consulta. Eles detalham o uso de índices, joins, e outras operações durante a execução da consulta.

---

## Índices: Tipos e Impacto na Performance

### Tipos de Índices em PostgreSQL

1. **Índice B-tree (padrão)**: O índice mais comum no PostgreSQL, eficiente para a maioria das operações de comparação (como `=`, `<`, `>`, etc.).

   #### Exemplo:

   Criar um índice B-tree na coluna `cliente_id` da tabela `pedido`:

   ```sql
   CREATE INDEX idx_cliente_id ON pedido(cliente_id);
   ```

2. **Índice Hash**: Usado para operações de igualdade (ex: `=`). Pode ser mais rápido que o índice B-tree em algumas situações, mas tem limitações, como não ser tão eficiente em operações de comparação diferentes.

   #### Exemplo:

   Criar um índice Hash:

   ```sql
   CREATE INDEX idx_hash_cliente_id ON pedido USING HASH(cliente_id);
   ```

3. **Índice GiST (Generalized Search Tree)**: Usado para tipos de dados espaciais ou outros tipos de dados complexos (como arrays ou dados geográficos).

   #### Exemplo:

   Criar um índice GiST em uma coluna de dados espaciais:

   ```sql
   CREATE INDEX idx_location ON lugares USING GiST (localizacao);
   ```

4. **Índice GIN (Generalized Inverted Index)**: Usado para dados que podem ter múltiplos valores por linha, como arrays ou documentos JSON.

   #### Exemplo:

   Criar um índice GIN para uma coluna de tipo `jsonb`:

   ```sql
   CREATE INDEX idx_jsonb ON documentos USING GIN (dados_jsonb);
   ```

5. **Índice BRIN (Block Range INdexes)**: Usado para grandes tabelas com dados ordenados, como logs ou séries temporais. Ele armazena resumos de blocos de dados e pode ser muito mais eficiente em termos de espaço.

   #### Exemplo:

   Criar um índice BRIN:

   ```sql
   CREATE INDEX idx_brin_data ON logs USING BRIN (data);
   ```

### Impacto na Performance

* **Vantagens**: Os índices melhoram o desempenho de leitura das consultas, especialmente quando há grandes volumes de dados e são feitas buscas frequentes.
* **Desvantagens**: Cada índice consome espaço de armazenamento e pode diminuir a performance das operações de **inserção**, **atualização** e **deleção**, pois o índice precisa ser mantido atualizado.
* **Escolha do índice**: A escolha do tipo de índice depende do tipo de dados e das consultas mais frequentes.

---

## Uso do `EXPLAIN` para Análise de Queries

O comando **`EXPLAIN`** é usado para mostrar o plano de execução de uma consulta SQL. Ele fornece informações sobre como o PostgreSQL executará a consulta, como os índices que serão usados, e a ordem das operações.

### Exemplo Básico de `EXPLAIN`

```sql
EXPLAIN SELECT nome, valor_total FROM pedido WHERE cliente_id = 1;
```

Isso exibirá um plano de execução que pode incluir o uso de índices, joins e operações de varredura na tabela.

### Analisando o Plano de Execução

Um plano de execução típico pode ter várias operações, como:

* **Seq Scan (Varredura Sequencial)**: Indica que o PostgreSQL fez uma varredura de toda a tabela, sem usar um índice.
* **Index Scan (Varredura de Índice)**: Indica que o PostgreSQL usou um índice para acessar os dados.
* **Join**: Mostra como o PostgreSQL fez o join entre tabelas (como Nested Loop ou Hash Join).
* **Sort**: Mostra se há alguma operação de ordenação envolvida.

#### Exemplo de Saída do `EXPLAIN`:

```plaintext
Seq Scan on pedido  (cost=0.00..14.60 rows=3 width=32)
  Filter: (cliente_id = 1)
```

Neste caso, o PostgreSQL fez uma varredura sequencial na tabela `pedido` porque não encontrou um índice adequado para a consulta.

---

## Otimização de Consultas

A otimização de consultas envolve escrever consultas de maneira eficiente para reduzir o tempo de resposta e melhorar a performance.

### Estratégias de Otimização

1. **Utilize Índices Apropriados**: Certifique-se de que as colunas mais frequentemente usadas em filtros (`WHERE`), ordenações (`ORDER BY`), e junções (`JOIN`) estejam indexadas.

2. **Evite SELECT \* (Corpo Completo)**: Ao invés de selecionar todas as colunas, selecione apenas as colunas necessárias.

   #### Exemplo:

   ```sql
   SELECT nome, valor_total FROM pedido WHERE cliente_id = 1;
   ```

3. **Utilize LIMIT**: Quando possível, use `LIMIT` para restringir o número de linhas retornadas, especialmente em consultas de grandes volumes de dados.

4. **Evite Subconsultas Desnecessárias**: Em algumas situações, subconsultas podem ser substituídas por joins, o que pode melhorar a performance.

   #### Exemplo:

   Em vez de uma subconsulta:

   ```sql
   SELECT nome FROM cliente WHERE cliente_id IN (SELECT cliente_id FROM pedido WHERE valor_total > 100);
   ```

   Use um `JOIN`:

   ```sql
   SELECT c.nome
   FROM cliente c
   JOIN pedido p ON c.cliente_id = p.cliente_id
   WHERE p.valor_total > 100;
   ```

5. **Analisar Planos de Execução**: Sempre use `EXPLAIN` para entender como sua consulta está sendo executada e identificar gargalos de performance.

---

## Referências

* PostgreSQL Official Docs – Índices: [https://www.postgresql.org/docs/current/indexes.html](https://www.postgresql.org/docs/current/indexes.html)
* PostgreSQL Official Docs – EXPLAIN: [https://www.postgresql.org/docs/current/sql-explain.html](https://www.postgresql.org/docs/current/sql-explain.html)
* SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S. *Sistemas de Banco de Dados*. McGraw-Hill.
* HEUSER, Carlos A. *Projeto de Banco de Dados*. Bookman.
