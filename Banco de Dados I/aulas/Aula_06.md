# ROTEIRO DE AULA EXPANDIDO — AULA 06

**Componente Curricular:** Banco de Dados I  
**Data Calendário:** 11/09/2026 &nbsp;|&nbsp; **Data Programada:** A definir (Reposição Presencial)  
**Modalidade:** Reposição Presencial em Laboratório de Informática  
**Tema:** Implementação Física do Banco de Dados — Linguagem SQL DDL (Data Definition Language) e Restrições de Integridade  
**Ambiente de Software:** SGBD Relacional (PostgreSQL 15 / MySQL 8.0) e DBeaver Community  
**Articulação com o PPC:** Competência 1 e 2 — Implementar fisicamente esquemas relacionais no SGBD com rigor sintático e aplicação de protocolos de integridade  

---

## 1. OBJETIVOS DE APRENDIZAGEM

Ao final desta aula de implementação física em SQL, você será capaz de:
1. Compreender a divisão funcional da linguagem **SQL padrão ANSI**: **DDL** (Definição), **DML** (Manipulação), **DQL** (Consulta), **DCL** (Controle) e **TCL** (Transação).
2. Selecionar e justificar os **Tipos de Dados** adequados para cada atributo (numéricos inteiros e fracionários, caracteres fixos e variáveis, datas, timestamps e booleanos).
3. Escrever scripts executáveis de criação de tabelas utilizando o comando **`CREATE TABLE`**, implementando **Chaves Primárias simples e compostas**.
4. Definir e aplicar as 5 restrições de integridade essenciais (*Constraints*): **`PRIMARY KEY`**, **`FOREIGN KEY`**, **`NOT NULL`**, **`UNIQUE`** e **`CHECK`**.
5. Configurar as ações referenciais de manutenção de chave estrangeira: **`ON DELETE RESTRICT`**, **`ON DELETE CASCADE`** e **`ON DELETE SET NULL`**.
6. Modificar estruturas existentes em produção utilizando comandos **`ALTER TABLE`** (`ADD COLUMN`, `DROP COLUMN`, `ALTER COLUMN TYPE`, `ADD CONSTRAINT`) e remover estruturas de forma segura via **`DROP TABLE`**.

---

## 2. FUNDAMENTAÇÃO TEÓRICA

### 2.1 Os Subconjuntos da Linguagem SQL

```
┌────────────────────────────────────────────────────────────────────────┐
│                        SUBCONJUNTOS DO SQL ANSI                        │
├─────────────────┬──────────────────────────────────────────────────────┤
│ DDL (Definition)│ CREATE, ALTER, DROP, TRUNCATE, RENAME                │
│ DML (Manipulat.)│ INSERT, UPDATE, DELETE                               │
│ DQL (Query)     │ SELECT (Projeções, Seleções, Junções e Agrupamentos) │
│ TCL (Transact.) │ COMMIT, ROLLBACK, SAVEPOINT                          │
│ DCL (Control)   │ GRANT, REVOKE                                        │
└─────────────────┴──────────────────────────────────────────────────────┘
```

---

### 2.2 Guia de Tipos de Dados Padrão ANSI / PostgreSQL

| Categoria | Tipo SQL | Uso Recomendado / Justificativa |
| :--- | :--- | :--- |
| **Inteiro Pequeno** | `SMALLINT` | Valores de $-32.768$ a $+32.767$ (ex.: ano, mês, código de estado). |
| **Inteiro Padrão** | `INT` / `INTEGER` | Chaves primárias usuais e contagens (até 2,1 bilhões). |
| **Inteiro Grande** | `BIGINT` | Chaves primárias de grande porte ou telemetria em tempo real. |
| **Autoincremento** | `SERIAL` (PostgreSQL) / `AUTO_INCREMENT` (MySQL) | Gera sequências numéricas inteiras automáticas para PKs artificiais. |
| **Ponto Fixo Decimal** | `NUMERIC(p, s)` / `DECIMAL(p, s)` | **Obrigatório para valores monetários e precisão contábil**. Ex.: `NUMERIC(10, 2)` = 8 dígitos inteiros e 2 decimais. Evita erros de arredondamento de float. |
| **Texto Fixo** | `CHAR(n)` | Strings com tamanho rigorosamente fixo. Ex.: `CHAR(2)` para UF, `CHAR(11)` para CPF. |
| **Texto Variável** | `VARCHAR(n)` | Strings com tamanho variável limitado. Ex.: `VARCHAR(100)` para e-mail. |
| **Texto Longo** | `TEXT` | Descrições longas, observações e laudos técnicos sem limite rígido. |
| **Data** | `DATE` | Apenas a data civil: `'YYYY-MM-DD'` (ex.: `'2026-09-25'`). |
| **Data e Hora** | `TIMESTAMP` | Registros de log precisos com data, hora, minuto e segundo. |
| **Booleano** | `BOOLEAN` | Valores lógicos: `TRUE` ($1$) ou `FALSE` ($0$). |

---

### 2.3 Anatomia Completa de um Comando `CREATE TABLE`

```sql
CREATE TABLE nome_tabela (
    coluna_1 TIPO_DADO RESTRIÇÕES_COLUNA,
    coluna_2 TIPO_DADO RESTRIÇÕES_COLUNA,
    ...,
    CONSTRAINT nome_constraint_pk PRIMARY KEY (coluna_1),
    CONSTRAINT nome_constraint_fk FOREIGN KEY (coluna_x) 
        REFERENCES tabela_pai (coluna_pai)
        ON DELETE RESTRICT ON UPDATE CASCADE
);
```

#### As 5 Restrições de Integridade (*Constraints*):
1. **`NOT NULL`:** Impede que a coluna receba valores ausentes/desconhecidos.
2. **`UNIQUE`:** Garante que todos os valores não-nulos da coluna sejam distintos em toda a tabela (ex.: CPF, e-mail, placa de carro).
3. **`PRIMARY KEY`:** Combina implicitamente `NOT NULL` com `UNIQUE`, indexando a linha fisicamente.
4. **`FOREIGN KEY`:** Vincula a coluna à chave primária de outra tabela, garantindo que o relacionamento seja matematicamente válido.
5. **`CHECK`:** Expressão booleana que valida condições de negócio antes de aceitar o dado (ex.: `CHECK (idade >= 18)`, `CHECK (salario > 0)`).

---

### 2.4 Ações Referenciais em Chaves Estrangeiras (`ON DELETE / ON UPDATE`)

O que deve acontecer com os registros-filhos quando o registro-pai referenciado é alterado ou excluído?
* **`ON DELETE RESTRICT` (ou `NO ACTION`):** O SGBD recusa a exclusão do pai se houver filhos associados (opção padrão e mais segura).
* **`ON DELETE CASCADE`:** A exclusão do pai remove automaticamente todas as linhas filhas vinculadas.
* **`ON DELETE SET NULL`:** A exclusão do pai mantém a linha filha, mas preenche a coluna da $\text{FK}$ com `NULL` (requer que a coluna permita nulos).

---

## 3. SCRIPT PRÁTICO DE LABORATÓRIO (ESQUEMA COMPLETO)

Execute no DBeaver o script que cria o minimundo de uma empresa de manutenção aeroespacial:

```sql
-- 1. Criação da Tabela Pai
CREATE TABLE fabricantes (
    id_fabricante SERIAL PRIMARY KEY,
    nome_fabricante VARCHAR(80) NOT NULL UNIQUE,
    pais_origem VARCHAR(50) NOT NULL DEFAULT 'Brasil',
    ativo BOOLEAN NOT NULL DEFAULT TRUE
);

-- 2. Criação da Tabela Filha com Múltiplas Constraints
CREATE TABLE pecas_aeronauticas (
    id_peca SERIAL PRIMARY KEY,
    part_number VARCHAR(30) NOT NULL UNIQUE,
    descricao VARCHAR(120) NOT NULL,
    custo_unitario NUMERIC(10, 2) NOT NULL CHECK (custo_unitario > 0),
    quantidade_estoque INT NOT NULL DEFAULT 0 CHECK (quantidade_estoque >= 0),
    id_fabricante INT NOT NULL,
    data_cadastro DATE NOT NULL DEFAULT CURRENT_DATE,
    CONSTRAINT fk_pecas_fabricantes FOREIGN KEY (id_fabricante)
        REFERENCES fabricantes(id_fabricante)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);

-- 3. Exemplos de Modificação Estrutural (ALTER TABLE)
-- Adicionar nova coluna de localização no almoxarifado
ALTER TABLE pecas_aeronauticas 
ADD COLUMN prateleira VARCHAR(10) DEFAULT 'A-01';

-- Adicionar constraint de checagem posterior
ALTER TABLE pecas_aeronauticas 
ADD CONSTRAINT chk_part_number_maiusculo 
CHECK (part_number = UPPER(part_number));
```

---

## 4. EXERCÍCIOS DE FIXAÇÃO

1. Explique por que utilizar o tipo de dado `FLOAT` ou `DOUBLE PRECISION` para armazenar valores monetários de salários e saldos bancários é considerado uma **péssima prática de engenharia de software**. Qual tipo de dado deve ser utilizado e por quê?
2. Em qual situação prática de modelagem de sistemas a ação referencial `ON DELETE CASCADE` é recomendada e em qual situação ela representa um risco gravíssimo de perda inadvertida de dados?
3. Escreva um comando `ALTER TABLE` em SQL que adicione uma restrição `CHECK` na tabela `pecas_aeronauticas` garantindo que o campo `quantidade_estoque` nunca ultrapasse $10.000$ unidades.

---

## 5. REFERÊNCIAS BIBLIOGRÁFICAS UTILIZADAS

1. **ELMASRI, Ramez; NAVATHE, Shamkant B.** *Sistemas de Banco de Dados: Fundamentos e Aplicações.* 7. ed. São Paulo: Pearson, 2019.  
   - **Capítulo 7:** *SQL Básico: Tipos de Dados, Criação de Tabelas, Restrições de Integridade (PRIMARY KEY, FOREIGN KEY, CHECK, UNIQUE) e Alteração de Esquemas* (p. 165–204).
2. **NIELD, Thomas.** *Introdução à Linguagem SQL: Abordagem Prática Para Iniciantes.* 1. ed. São Paulo: Novatec Editora, 2016.  
   - **Capítulo 1:** *Fundamentos do SQL e Criação de Estruturas: CREATE, ALTER e DROP TABLE* (p. 11–28).
3. **SILBERSCHATZ, Abraham; KORTH, Henry F.; SUDARSHAN, S.** *Sistema de Banco de Dados.* 7. ed. Rio de Janeiro: GEN LTC, 2020.  
   - **Capítulo 3:** *Introdução ao SQL: Tipos de Dados Básicos, Definição de Esquemas e Restrições de Integridade* (p. 55–84).
4. **MARTELLI, Rubens; FILHO, Oswaldo V. S.; CABRAL, Almir L.** *Modelagem e banco de dados.* 2. ed. São Paulo: Senac, 2018.  
   - **Capítulo 5:** *Linguagem SQL: Definição de Dados (DDL) e Restrições de Chaves* (p. 131–144).
