# Aula 9 – Controle de Acesso e Transações

## O que são Controle de Acesso e Transações?

* **Controle de Acesso**: Define as permissões que usuários têm para acessar e manipular dados no banco de dados.
* **Transações**: Garantem que as operações em um banco de dados sejam executadas de forma confiável e atômica. São agrupamentos de operações que devem ser executadas com sucesso ou revertidas caso haja falha.

---

## DCL: `GRANT`, `REVOKE`

### `GRANT`

O comando **`GRANT`** é usado para conceder permissões a usuários ou roles em um banco de dados. Ele pode ser utilizado para permitir o acesso a tabelas, views, funções e outros objetos do banco.

#### Exemplo:

Conceder permissão para **SELECT** e **INSERT** em uma tabela `cliente` para o usuário `usuario1`:

```sql
GRANT SELECT, INSERT ON cliente TO usuario1;
```

Este comando permite que o usuário `usuario1` leia e insira dados na tabela `cliente`.

### `REVOKE`

O comando **`REVOKE`** é usado para revogar as permissões anteriormente concedidas.

#### Exemplo:

Revogar a permissão de **INSERT** da tabela `cliente` para o usuário `usuario1`:

```sql
REVOKE INSERT ON cliente FROM usuario1;
```

Este comando remove a permissão de inserção para o usuário `usuario1` na tabela `cliente`.


### Script Exemplo

```sql
-- 1. Criação do Banco de Dados
CREATE DATABASE empresa_db;

-- Conectar-se ao banco empresa_db para executar os próximos comandos
\c empresa_db;

-- 2. Criação de um esquema de exemplo
CREATE SCHEMA gerenciamento;

-- 3. Criação de uma tabela simples
CREATE TABLE gerenciamento.departamentos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    localizacao VARCHAR(100)
);

-- 4. Criação de usuários
-- Usuário com acesso total
CREATE USER admin_user WITH PASSWORD 'admin123';

-- Usuário com acesso restrito apenas para SELECT
CREATE USER leitura_user WITH PASSWORD 'leitura123';

-- 5. Concessão de permissões (DCL)

-- Concede todos os privilégios ao usuário administrador
GRANT ALL PRIVILEGES ON SCHEMA gerenciamento TO admin_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA gerenciamento TO admin_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA gerenciamento TO admin_user;

-- Concede apenas permissão de leitura ao usuário leitura_user
GRANT USAGE ON SCHEMA gerenciamento TO leitura_user;
GRANT SELECT ON ALL TABLES IN SCHEMA gerenciamento TO leitura_user;

-- Garante que permissões sejam propagadas para futuras tabelas
ALTER DEFAULT PRIVILEGES IN SCHEMA gerenciamento
    GRANT SELECT ON TABLES TO leitura_user;

-- 6. Exemplo de revogação
-- Revoga a permissão de leitura do usuário leitura_user
-- REVOKE SELECT ON gerenciamento.departamentos FROM leitura_user;

```

---

## DTL: `BEGIN`, `COMMIT`, `ROLLBACK`, `SAVEPOINT`

### `BEGIN`

O comando **`BEGIN`** inicia uma transação. Ele marca o início de uma sequência de operações que serão executadas de forma atômica.

#### Exemplo:

Iniciar uma transação:

```sql
BEGIN;
```

### `COMMIT`

O comando **`COMMIT`** confirma todas as operações realizadas na transação. Após a execução de **`COMMIT`**, as alterações são permanentes.

#### Exemplo:

Confirmar a transação:

```sql
COMMIT;
```

### `ROLLBACK`

O comando **`ROLLBACK`** desfaz todas as operações realizadas desde o **`BEGIN`**. Ele é usado para reverter a transação em caso de erro.

#### Exemplo:

Reverter a transação:

```sql
ROLLBACK;
```

### `SAVEPOINT`

O comando **`SAVEPOINT`** cria um ponto de salvamento dentro da transação, permitindo que você reverta para esse ponto, se necessário, sem desfazer a transação inteira.

#### Exemplo:

Criar um ponto de salvamento e reverter para ele:

```sql
BEGIN;

SAVEPOINT ponto1;

-- Operações aqui...

-- Reverter para o ponto de salvamento
ROLLBACK TO SAVEPOINT ponto1;

-- Se quiser confirmar até o ponto de salvamento:
COMMIT;
```

---

## Conceitos de ACID e Integridade Transacional

O conceito **ACID** refere-se aos princípios fundamentais para garantir a confiabilidade das transações em um banco de dados. ACID é um acrônimo para:

* **Atomicidade**: A transação é uma unidade indivisível. Ou tudo é realizado, ou nada é realizado. Se uma transação falhar, nenhuma parte dela será executada.

* **Consistência**: A transação leva o banco de dados de um estado consistente para outro estado consistente, respeitando todas as regras, restrições e invariantes definidas no banco.

* **Isolamento**: Cada transação é isolada das outras. Isso significa que as transações em andamento não interferem umas nas outras, e as mudanças feitas por uma transação não são visíveis para outras até que a transação seja concluída (com **COMMIT**).

* **Durabilidade**: Após a execução de **COMMIT**, as alterações feitas pela transação são permanentes, mesmo que o sistema falhe logo depois.

Esses princípios garantem que as transações em um banco de dados sejam confiáveis e seguras.

---

## Exemplo Completo de Controle de Acesso e Transações

Aqui está um exemplo prático combinando controle de acesso e transações em **PostgreSQL**:

1. **Criando o usuário e concedendo permissões**:

```sql
-- Criando um novo usuário
CREATE USER usuario1 WITH PASSWORD 'senha123';

-- Concedendo permissões de leitura e escrita
GRANT SELECT, INSERT, UPDATE, DELETE ON cliente TO usuario1;
```

2. **Iniciando uma transação, realizando operações e confirmando**:

```sql
BEGIN;

-- Operações dentro da transação
UPDATE cliente SET nome = 'Novo Nome' WHERE cliente_id = 1;

-- Confirmando as alterações
COMMIT;
```

3. **Criando um ponto de salvamento, realizando operações e revertendo para o ponto**:

```sql
BEGIN;

-- Salvando o ponto de recuperação
SAVEPOINT ponto1;

-- Realizando algumas operações
UPDATE cliente SET nome = 'Outro Nome' WHERE cliente_id = 2;

-- Revertendo para o ponto salvo
ROLLBACK TO SAVEPOINT ponto1;

-- Confirmando as alterações até o ponto
COMMIT;
```

---

### Script Exemplo

```sql
-- 1. Criação de um banco de dados de exemplo
CREATE DATABASE transacoes_db;

-- Conectar-se ao banco transacoes_db para executar os próximos comandos
\c transacoes_db;

-- 2. Criação de uma tabela simples para o exemplo de transações
CREATE TABLE contas (
    id SERIAL PRIMARY KEY,
    titular VARCHAR(100),
    saldo NUMERIC(10, 2) NOT NULL
);

-- Inserção de dados de exemplo
INSERT INTO contas (titular, saldo) VALUES ('João', 1000.00);
INSERT INTO contas (titular, saldo) VALUES ('Maria', 1500.00);

-- 3. Exemplo de uso de transações com DTL

-- Início de uma transação
BEGIN;

-- Tentativa de realizar transferências de dinheiro (simulando um erro)
UPDATE contas SET saldo = saldo - 200 WHERE titular = 'João';
UPDATE contas SET saldo = saldo + 200 WHERE titular = 'Maria';

-- Simulando um erro: tentativa de débito superior ao saldo de João
UPDATE contas SET saldo = saldo - 2000 WHERE titular = 'João';  -- Erro, saldo de João não é suficiente

-- Verificando os saldos antes de finalizar
SELECT * FROM contas;

-- Caso ocorra um erro, fazemos rollback da transação
ROLLBACK;  -- A transação é desfeita, e os saldos voltam ao estado original

-- 4. Novo exemplo com SAVEPOINT para controle parcial de transações

-- Início de outra transação
BEGIN;

-- Inserção de dados e uso de SAVEPOINT
INSERT INTO contas (titular, saldo) VALUES ('Pedro', 800.00);

-- SAVEPOINT marca um ponto na transação
SAVEPOINT antes_transferencia;

-- Transferência entre contas (corretamente realizada)
UPDATE contas SET saldo = saldo - 300 WHERE titular = 'João';
UPDATE contas SET saldo = saldo + 300 WHERE titular = 'Maria';

-- Verificando antes de aplicar o COMMIT
SELECT * FROM contas;

-- Caso ocorra um erro após o SAVEPOINT, podemos reverter a transação até o ponto marcado
-- Simulando um erro
UPDATE contas SET saldo = saldo - 10000 WHERE titular = 'João';  -- Erro, saldo insuficiente

-- Revertendo a transação para o ponto anterior ao erro
ROLLBACK TO SAVEPOINT antes_transferencia;

-- Verificando os saldos após o rollback
SELECT * FROM contas;

-- 5. Finalizando a transação
COMMIT;  -- Agora, as alterações feitas até o SAVEPOINT são aplicadas e confirmadas

-- 6. Resultado final
SELECT * FROM contas;
```

## Referências

* PostgreSQL Official Docs – DCL (GRANT/REVOKE): [https://www.postgresql.org/docs/current/sql-grant.html](https://www.postgresql.org/docs/current/sql-grant.html)
* PostgreSQL Official Docs – DTL (BEGIN/COMMIT/ROLLBACK): [https://www.postgresql.org/docs/current/sql-set-transaction.html](https://www.postgresql.org/docs/current/sql-set-transaction.html)
* SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S. *Sistemas de Banco de Dados*. McGraw-Hill.
* HEUSER, Carlos A. *Projeto de Banco de Dados*. Bookman.
