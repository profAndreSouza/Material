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
INSERT INTO cliente DEFAULT VALUES RETURNING id;
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

> 💡 **Boas práticas de inserção:**

* Sempre utilize transações (`BEGIN ... COMMIT`) ao inserir em múltiplas tabelas.
* Valide dados previamente (ex.: CPF, CNPJ, formatos).
* Use `RETURNING` para capturar o ID gerado em `SERIAL`.

---

## Comando `INSERT` com subconsulta (`INSERT INTO ... SELECT`)

Esse formato permite inserir dados com base em resultados de outras consultas, o que é útil para migrações, duplicações ou integração entre tabelas.

### Exemplo: Inserir cliente e seus dados associados

1. Inserir um cliente com retorno do ID

```sql
-- Criação do cliente e captura do ID via CTE
WITH novo_cliente AS (
    INSERT INTO cliente
    DEFAULT VALUES
    RETURNING id
)
-- Inserir pessoa física vinculada ao cliente criado
INSERT INTO pessoa_fisica (id, nome, cpf, nascimento)
SELECT id, 'João Silva', '123.456.789-00', '1990-01-01'
FROM novo_cliente;
```

2. Inserir dados complementares com `SELECT` baseado no ID gerado

```sql
-- Endereço
INSERT INTO endereco (cliente_id, logradouro, numero, cidade, estado, cep, tipo)
SELECT id, 'Rua das Flores', '100', 'São Paulo', 'SP', '01000-000', 'Residencial'
FROM novo_cliente;

-- Telefone
INSERT INTO telefone (cliente_id, ddd, numero, tipo)
SELECT id, '11', '912345678', 'Movel'
FROM novo_cliente;

-- Email
INSERT INTO email (cliente_id, email)
SELECT id, 'joao.silva@email.com'
FROM novo_cliente;
```

### Boas práticas de inserção com subconsulta

* Use **CTE** (`WITH`) para capturar valores intermediários como `id`.
* Evite múltiplos acessos separados para obter IDs (`currval`, por exemplo).
* Utilize transações para garantir que todos os dados sejam inseridos com sucesso (`BEGIN`, `COMMIT`, `ROLLBACK`).
* Valide os dados antes da inserção (formatos, unicidade, existência de chaves estrangeiras).

---

## Comando `UPDATE`

Atualiza dados existentes com base em critérios definidos.

### Exemplo: Atualizar nome e e-mail de um cliente

```sql
-- Atualizar o nome
UPDATE pessoa_fisica
SET nome = 'João Pedro da Silva'
WHERE cpf = '123.456.789-00';

-- Atualizar o e-mail
UPDATE email
SET email = 'joao.pedro@email.com'
WHERE cliente_id = (
    SELECT id FROM pessoa_fisica WHERE cpf = '123.456.789-00'
);
```

### Boas práticas de atualização

* Sempre utilize `WHERE` com condições específicas para evitar alterações em massa.
* Teste a condição com um `SELECT` antes de aplicar um `UPDATE`.
* Utilize transações ao alterar dados críticos ou múltiplas tabelas.
* Faça backup antes de operações sensíveis.

---

## Comando `DELETE`

Remove registros de uma tabela.

### Exemplo: Remover um cliente e todos os dados relacionados

```sql
DELETE FROM cliente
WHERE id = (
    SELECT id FROM pessoa_fisica WHERE cpf = '123.456.789-00'
);
```

Como a integridade referencial está configurada com `ON DELETE CASCADE`, os dados relacionados nas tabelas `pessoa_fisica`, `endereco`, `telefone` e `email` serão automaticamente removidos.

### Boas práticas de remoção

* Sempre filtre usando identificadores únicos.
* Evite `DELETE` sem `WHERE`.
* Use `BEGIN` e `ROLLBACK` durante testes.
* Certifique-se que a regra `ON DELETE CASCADE` está definida corretamente para evitar dados órfãos.

---

## Integridade Referencial na Prática

O esquema fornecido garante integridade referencial com:

* `REFERENCES` e `ON DELETE CASCADE`, que mantêm consistência entre as tabelas.
* Restrições `UNIQUE` em CPF e CNPJ, evitando duplicações.
* Campos obrigatórios (`NOT NULL`) e `CHECK` em colunas como tipo de telefone e endereço.

### Exemplo de violação bloqueada:

```sql
-- Tentar inserir uma pessoa jurídica com cliente inexistente
INSERT INTO pessoa_juridica (id, nome_fantasia, razao_social, cnpj)
SELECT 999, 'Empresa X', 'Empresa X Ltda.', '12.345.678/0001-99';
-- ERRO: violação da chave estrangeira, pois cliente 999 não existe
```

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
