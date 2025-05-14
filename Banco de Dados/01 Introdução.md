# Aula 1 – Introdução aos Bancos de Dados Relacionais

## Conceitos Iniciais de Bancos de Dados Relacionais

Um **banco de dados relacional** é uma coleção organizada de dados armazenados em tabelas que se relacionam entre si por meio de **chaves**. O modelo relacional foi proposto por **E.F. Codd** na década de 1970 e é até hoje o modelo mais utilizado em sistemas de gerenciamento de banco de dados (SGBDs).

### Características principais:

* **Tabelas (relacionamentos)**: Representam entidades e são compostas por linhas (registros) e colunas (atributos).
* **Integridade**: Garante a validade e consistência dos dados (Ex: integridade de entidade, integridade referencial).
* **Chaves primárias e estrangeiras**: Utilizadas para garantir a unicidade dos registros e os relacionamentos entre tabelas.
* **Independência de dados**: Separação entre os dados e os aplicativos que os manipulam.

### Exemplos de SGBDs relacionais:

* PostgreSQL
* MySQL
* Oracle Database
* Microsoft SQL Server
* SQLite

---

## Diferença entre Modelagem Conceitual, Lógica e Física

A modelagem de dados é um processo essencial no projeto de um banco de dados. Ela ocorre em três níveis distintos:

### 1. Modelagem Conceitual

* Foco no **que** será armazenado.
* Independente do SGBD.
* Representada normalmente por **diagramas ER (Entidade-Relacionamento)**.
* Exemplo: Entidades como `Cliente`, `Pedido`, `Produto`, e os relacionamentos entre elas.

### 2. Modelagem Lógica

* Transforma o modelo conceitual para um formato lógico.
* Ainda independente do SGBD, mas mais próximo da estrutura de banco de dados.
* Representa as entidades como **tabelas**, os atributos com **tipos de dados genéricos**, e os relacionamentos com **chaves estrangeiras**.
* Exemplo: Tabela `Clientes(id_cliente, nome, telefone)`.

### 3. Modelagem Física

* Adaptação do modelo lógico para um **SGBD específico**.
* Define **tipos de dados reais**, **índices**, **partições**, e **esquemas de armazenamento**.
* Considera aspectos como **performance**, **armazenamento** e **restrições específicas do SGBD**.

---

## Apresentação da Linguagem SQL e Suas Subdivisões

A **SQL (Structured Query Language)** é a linguagem padrão para interação com bancos de dados relacionais. Ela é composta por várias subdivisões, cada uma com uma finalidade específica.

### 1. DDL (Data Definition Language)

Usada para definir e modificar a estrutura do banco de dados.

Comandos principais:

* `CREATE` – Cria tabelas, índices, esquemas etc.
* `ALTER` – Altera a estrutura de tabelas existentes.
* `DROP` – Remove objetos do banco.

```sql
CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100)
);
```

### 2. DML (Data Manipulation Language)

Usada para manipular os dados dentro das tabelas.

Comandos principais:

* `INSERT` – Insere novos registros.
* `UPDATE` – Atualiza registros existentes.
* `DELETE` – Remove registros.

```sql
INSERT INTO clientes (nome, email) VALUES ('João Silva', 'joao@email.com');
```

### 3. DQL (Data Query Language)

Usada para consultar os dados.

Comando principal:

* `SELECT` – Recupera dados de uma ou mais tabelas.

```sql
SELECT nome, email FROM clientes;
```

### 4. DCL (Data Control Language)

Usada para definir permissões e controle de acesso.

Comandos principais:

* `GRANT` – Concede permissões.
* `REVOKE` – Revoga permissões.

```sql
GRANT SELECT ON clientes TO usuario_app;
```

### 5. TCL (Transaction Control Language)

Usada para controlar transações dentro do banco.

Comandos principais:

* `BEGIN` – Inicia uma transação.
* `COMMIT` – Confirma as alterações.
* `ROLLBACK` – Desfaz alterações não confirmadas.

```sql
BEGIN;
UPDATE contas SET saldo = saldo - 100 WHERE id = 1;
UPDATE contas SET saldo = saldo + 100 WHERE id = 2;
COMMIT;
```

---

## Referências

* DATE, C. J. *Introdução a Sistemas de Banco de Dados*. 8ª ed. Campus.
* HEUSER, Carlos A. *Projeto de Banco de Dados*. Bookman.
* CORONEL, Carlos; MORRIS, Steven; ROB, Peter. *Database Systems: Design, Implementation, & Management*. Cengage.
* PostgreSQL Official Documentation: [https://www.postgresql.org/docs/](https://www.postgresql.org/docs/)
* W3Schools SQL Tutorial: [https://www.w3schools.com/sql/](https://www.w3schools.com/sql/)
