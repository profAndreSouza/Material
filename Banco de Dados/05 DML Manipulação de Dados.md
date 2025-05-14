# Manipulação de Dados com SQL (DML)

A DML (Data Manipulation Language) é o conjunto de comandos SQL usados para manipular os dados armazenados nas tabelas. Os principais comandos são:

* `INSERT`: insere novos registros.
* `UPDATE`: modifica registros existentes.
* `DELETE`: remove registros.

---

## Comando `INSERT`

Para inserir dados no banco, a ordem de inserção precisa respeitar a integridade referencial.

### Exemplo prático: Inserir um cliente do tipo pessoa física

```sql
-- 1. Inserir na tabela cliente (gera o ID)
INSERT INTO cliente DEFAULT VALUES;
-- Suponha que retornou id = 1

-- 2. Inserir na tabela pessoa_fisica
INSERT INTO pessoa_fisica (id, nome, cpf, nascimento)
VALUES (1, 'João Silva', '123.456.789-00', '1990-01-01');

-- 3. Inserir endereço
INSERT INTO endereco (cliente_id, logradouro, numero, cidade, estado, cep, tipo)
VALUES (1, 'Rua das Flores', '100', 'São Paulo', 'SP', '01000-000', 'Residencial');

-- 4. Inserir telefone
INSERT INTO telefone (cliente_id, ddd, numero, tipo)
VALUES (1, '11', '912345678', 'Movel');

-- 5. Inserir e-mail
INSERT INTO email (cliente_id, email)
VALUES (1, 'joao.silva@email.com');
```

> **Boas práticas de inserção:**

* Sempre utilize transações (`BEGIN ... COMMIT`) ao inserir em múltiplas tabelas.
* Valide dados previamente (ex.: CPF, CNPJ, formatos).
* Use `RETURNING` para capturar o ID gerado em `SERIAL`.

---

## Inserção com Subconsulta: `INSERT INTO ... SELECT`

O comando `INSERT INTO ... SELECT` permite inserir dados com base no resultado de outras consultas. Esse formato é especialmente útil quando você precisa copiar dados de uma tabela para outra, migrar registros, ou inserir dados vinculados, como em casos com chaves estrangeiras.

### Exemplo prático

Imagine que queremos copiar os dados de clientes ativos de uma tabela de backup para a tabela principal:

```sql
INSERT INTO cliente (nome, cpf, nascimento, ativo)
SELECT nome, cpf, nascimento, true
FROM cliente_backup
WHERE ativo = true;
```

Neste exemplo:

* Os dados são extraídos da tabela `cliente_backup`;
* Apenas os clientes ativos (`WHERE ativo = true`) são inseridos na tabela `cliente`;
* A consulta dispensa variáveis ou estruturas temporárias como CTEs.

> **Vantagem:** Simples e direto, ideal para situações em que não é necessário encadear várias etapas ou capturar valores intermediários.

---

## Inserção em Múltiplas Tabelas com CTE

### O que é uma CTE?

CTE (*Common Table Expression*) é uma expressão temporária nomeada, definida com a cláusula `WITH`, que pode ser usada para organizar e encadear consultas de forma mais clara e eficiente. Ela é muito útil quando:

* Você precisa reutilizar o resultado de uma subconsulta;
* Quer melhorar a legibilidade de comandos complexos;
* Deseja inserir dados em várias tabelas que compartilham um valor comum (como um ID gerado automaticamente).

A CTE permite que você "capture" resultados intermediários, como o `id` gerado ao inserir um novo cliente, e utilize esse valor imediatamente nas próximas inserções.


A sintaxe geral é:

```sql
WITH nome_cte AS (
    instrução SQL
)
SELECT ...
FROM nome_cte;
```

Quando usamos `INSERT INTO ... RETURNING` dentro de uma CTE, podemos capturar chaves primárias recém-geradas para utilizá-las em outras inserções, sem precisar usar variáveis ou múltiplos blocos `BEGIN/END`.

---

### Exemplo 1: Inserção com `DO $$ ... BEGIN ... END $$`

Este é um bloco anônimo em PL/pgSQL (PostgreSQL), onde usamos uma variável para armazenar o `id` retornado ao inserir um novo cliente. Esse valor é reutilizado nas inserções seguintes.

```sql
DO $$
DECLARE
    novo_id INT;
BEGIN
    INSERT INTO cliente (ativo) VALUES (true) RETURNING id INTO novo_id;

    INSERT INTO pessoa_fisica (id, nome, cpf, nascimento)
    VALUES (novo_id, 'João Machado', '123.321.123-21', '1970-04-23');

    INSERT INTO endereco (cliente_id, logradouro, numero, cidade, estado, cep, tipo)
    VALUES (novo_id, 'Rua das Flores', '100', 'São Paulo', 'SP', '01000-000', 'Residencial');

    INSERT INTO telefone (cliente_id, ddd, numero, tipo)
    VALUES (novo_id, '11', '912345678', 'Movel');

    INSERT INTO email (cliente_id, email)
    VALUES (novo_id, 'joao.silva@email.com');
END $$;
```

* **Vantagens:** Utilização direta de variáveis, controle transacional.
* **Desvantagens:** Mais verboso; exige PL/pgSQL; não pode ser usado diretamente em ferramentas que só aceitam SQL puro.

---

### Exemplo 2: Inserção com `CTE encadeada (WITH ...)`

Neste exemplo, utilizamos CTEs para capturar o `id` do cliente gerado e reutilizá-lo em todas as inserções relacionadas, sem a necessidade de blocos `DO`.

```sql
WITH 
novo_cliente AS (
	INSERT INTO cliente (ativo) VALUES (true) RETURNING id
),
pf AS (
	INSERT INTO pessoa_fisica (id, nome, cpf, nascimento)
	SELECT id, 'João Machado', '123.321.123-21', '1970-04-23'
	FROM novo_cliente
),
endereco AS (
	INSERT INTO endereco (cliente_id, logradouro, numero, cidade, estado, cep, tipo)
	SELECT id, 'Rua das Flores', '100', 'São Paulo', 'SP', '01000-000', 'Residencial'
	FROM novo_cliente
),
telefone AS (
	INSERT INTO telefone (cliente_id, ddd, numero, tipo)
	SELECT id, '11', '912345678', 'Movel'
	FROM novo_cliente
)
INSERT INTO email (cliente_id, email)
SELECT id, 'joao.silva@email.com'
FROM novo_cliente;
```

* **Vantagens:** Inteiramente em SQL; fácil de integrar com scripts de migração e ferramentas como pgAdmin, DBeaver, etc.
* **Desvantagens:** Requer compatibilidade com `INSERT INTO ... RETURNING` e o suporte a CTEs (disponível a partir do PostgreSQL 8.4).

---

### Quando usar CTEs para inserção?

Use CTEs quando:

* Precisa capturar um valor gerado (como o `id`) para uso em outras tabelas.
* Está lidando com scripts SQL puros (sem PL/pgSQL).
* Quer manter o código enxuto e funcional, evitando múltiplas etapas manuais.


### Boas práticas de inserção com subconsulta

* Use **CTE** (`WITH`) para capturar valores intermediários como `id`.
* Evite múltiplos acessos separados para obter IDs (`currval`, por exemplo).
* Utilize transações para garantir que todos os dados sejam inseridos com sucesso (`BEGIN`, `COMMIT`, `ROLLBACK`).
* Valide os dados antes da inserção (formatos, unicidade, existência de chaves estrangeiras).

---

## Manipulação de Dados com SQL – `UPDATE`

O comando `UPDATE` é usado para modificar dados existentes em uma tabela. Ele permite alterar valores de uma ou mais colunas, com base em uma condição especificada no `WHERE`.

### Sintaxe geral

```sql
UPDATE nome_da_tabela
SET coluna1 = valor1,
    coluna2 = valor2,
    ...
WHERE condição;
```

* `nome_da_tabela`: tabela que terá os dados atualizados.
* `SET`: define as colunas que receberão os novos valores.
* `WHERE`: define quais registros devem ser alterados. **Se omitido, todos os registros serão atualizados.**

---

### Exemplo prático com `pessoa_fisica` e `email`

#### Atualizar o nome de um cliente (pessoa física)

```sql
UPDATE pessoa_fisica
SET nome = 'João Pedro da Silva'
WHERE cpf = '123.456.789-00';
```

#### Atualizar o e-mail desse cliente (em outra tabela)

```sql
UPDATE email
SET email = 'joao.pedro@email.com'
WHERE cliente_id = (
    SELECT id FROM pessoa_fisica
    WHERE cpf = '123.456.789-00'
);
```

---

### Exemplos adicionais

#### Atualizar o tipo de telefone de um cliente específico

```sql
UPDATE telefone
SET tipo = 'Movel'
WHERE cliente_id = (
    SELECT id FROM pessoa_fisica
    WHERE cpf = '123.456.789-00'
)
AND tipo = 'Fixo';
```

#### Marcar um cliente como inativo

```sql
UPDATE cliente
SET ativo = FALSE
WHERE id = (
    SELECT id FROM pessoa_juridica
    WHERE cnpj = '12.345.678/0001-90'
);
```

#### Atualizar múltiplos campos de endereço de uma vez

```sql
UPDATE endereco
SET logradouro = 'Av. Brasil',
    numero = '200',
    tipo = 'Comercial'
WHERE cliente_id = (
    SELECT id FROM pessoa_fisica
    WHERE cpf = '123.456.789-00'
);
```

---

### Boas práticas de atualização

1. **Sempre use `WHERE`**
   Evite atualizações em massa acidentais. Um `UPDATE` sem condição pode alterar todos os registros da tabela.

2. **Teste com `SELECT` antes**

   ```sql
   SELECT * FROM pessoa_fisica WHERE cpf = '123.456.789-00';
   ```

3. **Use transações para segurança**

   ```sql
   BEGIN;

   UPDATE cliente SET ativo = FALSE WHERE id = 101;
   UPDATE email SET email = 'novo@email.com' WHERE cliente_id = 101;

   COMMIT; -- ou ROLLBACK em caso de erro
   ```

4. **Verifique a integridade dos dados**
   Confirme que os dados não violarão restrições como `UNIQUE`, `NOT NULL` ou `CHECK`.

5. **Faça backup antes de alterações em produção**
   Especialmente se o `UPDATE` afetar várias tabelas ou registros críticos.

---

## Comando `DELETE`

O comando `DELETE` é utilizado para **remover registros** de uma tabela em um banco de dados relacional. Seu uso deve ser sempre acompanhado de **critérios bem definidos** para evitar exclusões acidentais.

### Sintaxe geral

```sql
DELETE FROM nome_da_tabela
WHERE condição;
```

* `nome_da_tabela`: tabela da qual os registros serão excluídos.
* `condição`: define quais linhas devem ser removidas. A ausência de `WHERE` remove **todos os registros** da tabela.

### Exemplo: Remover um cliente e todos os seus dados associados

Suponha que o cliente é do tipo **pessoa física** com CPF `123.456.789-00`. Para removê-lo:

```sql
DELETE FROM cliente
WHERE id = (
    SELECT id FROM pessoa_fisica WHERE cpf = '123.456.789-00'
);
```

Neste banco de dados, como as tabelas `pessoa_fisica`, `endereco`, `telefone` e `email` possuem chave estrangeira com a cláusula `ON DELETE CASCADE`, ao remover o cliente, **todos os dados vinculados a ele serão removidos automaticamente**.

---

### Boas práticas de remoção

1. **Sempre utilize `WHERE` com filtros específicos**

   * Utilize chaves primárias ou outros campos únicos para evitar remoções em massa.
   * Exemplo de cuidado:

     ```sql
     DELETE FROM cliente WHERE id = 105;  -- seguro  
     DELETE FROM cliente;                 -- perigoso!
     ```

2. **Valide a condição com um `SELECT` antes de deletar**

   ```sql
   SELECT * FROM cliente WHERE id = 105;
   ```

3. **Utilize transações para testes e segurança**

   ```sql
   BEGIN;

   DELETE FROM cliente WHERE id = 105;

   ROLLBACK;  -- desfaz a remoção, útil durante testes
   ```

4. **Garanta que a integridade referencial está bem configurada**

   * A cláusula `ON DELETE CASCADE` evita que dados fiquem órfãos (sem vínculo com o cliente).
   * Certifique-se de que todas as chaves estrangeiras relevantes estão protegidas por essa regra, quando apropriado.

---

## Integridade Referencial na Prática

A **integridade referencial** é o mecanismo que garante que os relacionamentos entre as tabelas sejam **coerentes e seguros**. No banco, isso está implementado por meio de:

### 1. Relacionamentos com `REFERENCES` e `ON DELETE CASCADE`

Exemplo da tabela `pessoa_fisica`:

```sql
id INTEGER PRIMARY KEY REFERENCES cliente(id) ON DELETE CASCADE
```

Significa que:

* `pessoa_fisica.id` deve corresponder a um `cliente.id` existente.
* Se esse cliente for excluído, o registro na `pessoa_fisica` será excluído automaticamente.

### 2. Restrições de unicidade e validação de dados

* CPF e CNPJ possuem restrição `UNIQUE`:

  ```sql
  cpf VARCHAR(14) UNIQUE NOT NULL,
  cnpj VARCHAR(18) UNIQUE NOT NULL,
  ```

  Isso impede o cadastro duplicado.

* Campos com `NOT NULL` obrigam a presença de valores essenciais.

* `CHECK` nas colunas `tipo` (em `telefone` e `endereco`) limitam os valores a um conjunto definido.

### Exemplo de tentativa de inserção inválida

```sql
-- Tentar adicionar uma pessoa jurídica com ID de cliente inexistente
INSERT INTO pessoa_juridica (id, nome_fantasia, razao_social, cnpj)
VALUES (999, 'Empresa X', 'Empresa X Ltda.', '12.345.678/0001-99');
```

**Resultado:**

> ERRO: violação de chave estrangeira — não existe cliente com ID 999.

---

## Exercícios Básicos

1. **Inserir um novo cliente (ativo por padrão) e associá-lo a uma pessoa física chamada "Ana Lima", CPF `123.456.789-01`, nascida em `1992-04-15`.**
2. **Insira um endereço residencial para o cliente da questão anterior: Rua Central, número 150, cidade Campinas, estado SP, CEP `13000-000`.**
3. **Insira um telefone do tipo "Móvel", DDD `19`, número `99887766`, para o mesmo cliente.**
4. **Atualize o nome da pessoa física com CPF `123.456.789-01` para "Ana Maria Lima".**
5. **Remova o telefone do cliente com CPF `123.456.789-01`.**

---

## Exercícios Intermediários

6. **Insira um cliente do tipo pessoa jurídica chamado "Tech Mais", razão social "Tech Mais Soluções LTDA", CNPJ `12.345.678/0001-90`, utilizando `INSERT INTO ... SELECT` com CTE para capturar o ID.**

7. **Insira um endereço comercial para o cliente da questão anterior: Av. das Indústrias, 500, cidade São Paulo, estado SP, CEP `01100-000`.**

8. **Adicione dois e-mails para esse cliente (mesmo ID): `contato@techmais.com.br` e `suporte@techmais.com.br`, usando subconsultas.**

9. **Atualize o nome fantasia da empresa com CNPJ `12.345.678/0001-90` para "Tech Mais Soluções".**

10. **Remova o cliente com CNPJ `12.345.678/0001-90` e todos os dados relacionados.**

---

## Exercícios Avançados

11. **Crie um script que insira 3 novos clientes pessoa física, com dados completos (nome, CPF, nascimento, endereço, telefone e e-mail) utilizando apenas `INSERT INTO ... SELECT` com CTEs encadeadas.**

12. **Atualize todos os clientes com nome iniciado por "João" (tabela pessoa\_fisica), adicionando " - Cliente Premium" ao final do nome.**

13. **Remova todos os clientes inativos (`cliente.ativo = FALSE`) e todos os seus dados associados.**

14. **Mova todos os telefones do tipo "Recado" para o tipo "Fixo", apenas se o cliente tiver mais de um número cadastrado.**

15. **Crie um backup temporário da tabela `email` em uma nova tabela chamada `email_backup`, inserindo os dados usando `INSERT INTO email_backup SELECT ...`. Em seguida, apague todos os e-mails de clientes cujo nome contenha "Maria".**




### Resolução dos Exercícios

```sql
-- 1. Inserir novo cliente pessoa física
WITH novo_cliente AS (
  INSERT INTO cliente (ativo) VALUES (true) RETURNING id
)
INSERT INTO pessoa_fisica (id, nome, cpf, nascimento)
SELECT id, 'Ana Lima', '123.456.789-01', DATE '1992-04-15'
FROM novo_cliente;

-- 2. Inserir endereço residencial
WITH cliente_id AS (
  SELECT id FROM pessoa_fisica WHERE cpf = '123.456.789-01'
)
INSERT INTO endereco (cliente_id, logradouro, numero, cidade, estado, cep, tipo)
SELECT id, 'Rua Central', '150', 'Campinas', 'SP', '13000-000', 'Residencial'
FROM cliente_id;

-- 3. Inserir telefone móvel
WITH cliente_id AS (
  SELECT id FROM pessoa_fisica WHERE cpf = '123.456.789-01'
)
INSERT INTO telefone (cliente_id, ddd, numero, tipo)
SELECT id, '19', '99887766', 'Movel'
FROM cliente_id;

-- 4. Atualizar nome
UPDATE pessoa_fisica
SET nome = 'Ana Maria Lima'
WHERE cpf = '123.456.789-01';

-- 5. Remover telefone do cliente
DELETE FROM telefone
WHERE cliente_id = (SELECT id FROM pessoa_fisica WHERE cpf = '123.456.789-01');

-- 6. Inserir cliente PJ
WITH novo_cliente AS (
  INSERT INTO cliente (ativo) VALUES (true) RETURNING id
)
INSERT INTO pessoa_juridica (id, nome_fantasia, razao_social, cnpj)
SELECT id, 'Tech Mais', 'Tech Mais Soluções LTDA', '12.345.678/0001-90'
FROM novo_cliente;

-- 7. Endereço comercial
WITH cliente_id AS (
  SELECT id FROM pessoa_juridica WHERE cnpj = '12.345.678/0001-90'
)
INSERT INTO endereco (cliente_id, logradouro, numero, cidade, estado, cep, tipo)
SELECT id, 'Av. das Indústrias', '500', 'São Paulo', 'SP', '01100-000', 'Comercial'
FROM cliente_id;

-- 8. Dois e-mails via subconsultas
INSERT INTO email (cliente_id, email)
SELECT id, 'contato@techmais.com.br'
FROM pessoa_juridica
WHERE cnpj = '12.345.678/0001-90';

INSERT INTO email (cliente_id, email)
SELECT id, 'suporte@techmais.com.br'
FROM pessoa_juridica
WHERE cnpj = '12.345.678/0001-90';

-- 9. Atualizar nome fantasia
UPDATE pessoa_juridica
SET nome_fantasia = 'Tech Mais Soluções'
WHERE cnpj = '12.345.678/0001-90';

-- 10. Remover cliente PJ e dados relacionados
DO $$
DECLARE
  cid INT;
BEGIN
  SELECT id INTO cid FROM pessoa_juridica WHERE cnpj = '12.345.678/0001-90';

  DELETE FROM email WHERE cliente_id = cid;
  DELETE FROM telefone WHERE cliente_id = cid;
  DELETE FROM endereco WHERE cliente_id = cid;
  DELETE FROM pessoa_juridica WHERE id = cid;
  DELETE FROM cliente WHERE id = cid;
END $$;

-- 11. Inserir 3 novos clientes pessoa física com dados completos
WITH c1 AS (
  INSERT INTO cliente (ativo) VALUES (true) RETURNING id
),
pf1 AS (
  INSERT INTO pessoa_fisica (id, nome, cpf, nascimento)
  SELECT id, 'Carlos Mendes', '111.222.333-44', DATE '1985-01-10' FROM c1
),
e1 AS (
  INSERT INTO endereco (cliente_id, logradouro, numero, cidade, estado, cep, tipo)
  SELECT id, 'Rua A', '10', 'Curitiba', 'PR', '80000-000', 'Residencial' FROM c1
),
t1 AS (
  INSERT INTO telefone (cliente_id, ddd, numero, tipo)
  SELECT id, '41', '999998888', 'Movel' FROM c1
),
c2 AS (
  INSERT INTO cliente (ativo) VALUES (true) RETURNING id
),
pf2 AS (
  INSERT INTO pessoa_fisica (id, nome, cpf, nascimento)
  SELECT id, 'João Pedro', '555.666.777-88', DATE '1990-06-21' FROM c2
),
e2 AS (
  INSERT INTO endereco (cliente_id, logradouro, numero, cidade, estado, cep, tipo)
  SELECT id, 'Rua B', '20', 'Belo Horizonte', 'MG', '30000-000', 'Residencial' FROM c2
),
t2 AS (
  INSERT INTO telefone (cliente_id, ddd, numero, tipo)
  SELECT id, '31', '988887777', 'Movel' FROM c2
),
c3 AS (
  INSERT INTO cliente (ativo) VALUES (true) RETURNING id
),
pf3 AS (
  INSERT INTO pessoa_fisica (id, nome, cpf, nascimento)
  SELECT id, 'Luciana Costa', '999.888.777-66', DATE '1995-09-05' FROM c3
),
e3 AS (
  INSERT INTO endereco (cliente_id, logradouro, numero, cidade, estado, cep, tipo)
  SELECT id, 'Rua C', '30', 'Recife', 'PE', '50000-000', 'Residencial' FROM c3
),
t3 AS (
  INSERT INTO telefone (cliente_id, ddd, numero, tipo)
  SELECT id, '81', '977776666', 'Movel' FROM c3
)
INSERT INTO email (cliente_id, email)
SELECT id, unnest(ARRAY[
  'carlos@email.com',
  'joao@email.com',
  'luciana@email.com'
]) FROM cliente WHERE id IN ((SELECT id FROM c1), (SELECT id FROM c2), (SELECT id FROM c3));
```

```sql
-- 12. Atualizar nome de João para "Cliente Premium"
UPDATE pessoa_fisica
SET nome = nome || ' - Cliente Premium'
WHERE nome ILIKE 'João%';

-- 13. Remover clientes inativos e dados relacionados
DO $$
DECLARE
  cid INT;
BEGIN
  FOR cid IN SELECT id FROM cliente WHERE ativo = FALSE LOOP
    DELETE FROM email WHERE cliente_id = cid;
    DELETE FROM telefone WHERE cliente_id = cid;
    DELETE FROM endereco WHERE cliente_id = cid;
    DELETE FROM pessoa_fisica WHERE id = cid;
    DELETE FROM pessoa_juridica WHERE id = cid;
    DELETE FROM cliente WHERE id = cid;
  END LOOP;
END $$;

-- 14. Mover telefones do tipo "Recado" para "Fixo" se cliente tem mais de um telefone
UPDATE telefone
SET tipo = 'Fixo'
WHERE tipo = 'Recado'
  AND cliente_id IN (
    SELECT cliente_id
    FROM telefone
    GROUP BY cliente_id
    HAVING COUNT(*) > 1
  );

-- 15. Backup da tabela `email` e remoção de "Maria"
CREATE TABLE email_backup AS
SELECT * FROM email;

DELETE FROM email
WHERE cliente_id IN (
  SELECT pf.id
  FROM pessoa_fisica pf
  WHERE pf.nome ILIKE '%Maria%'
);
```

